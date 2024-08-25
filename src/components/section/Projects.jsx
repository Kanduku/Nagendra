import React, { useEffect, useState } from 'react';
import AvatarCanvas from './AvatarCanvas';
import Tars from '../canvas/Tars';
import to1 from "./../../images/todo1.jpeg";
import to2 from "./../../images/todo2.jpeg";
import to3 from "./../../images/todo3.jpeg";
import { transform } from 'framer-motion';

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [scrollY, setScrollY] = useState(0);
  const [expandedCardId, setExpandedCardId] = useState(null);
  const [isMobileOrTablet, setIsMobileOrTablet] = useState(window.innerWidth <= 960);

  const handleFilterChange = (category) => {
    setSelectedCategory(category);
  };

  const handleCardClick = (id) => {
    if (expandedCardId === id) {
      setExpandedCardId(null); // Collapse if the same card is clicked again
    } else {
      setExpandedCardId(id); // Expand the clicked card
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    const handleResize = () => {
      setIsMobileOrTablet(window.innerWidth <= 960);
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const projects = [
    { id: 1, title: 'to-do list', category: 'fullstack', images: [to1, to2, to3], githubLink: 'https://github.com/Kanduku/to-do-list', liveLink: 'https://to-do-list-34xx.vercel.app/', tools: ['React', 'Node.js', 'Express'] },
    { id: 2, title: 'Project 2', category: 'backend', images: [to1, to2, to3], githubLink: 'https://github.com/Kanduku/to-do-list', liveLink: 'https://to-do-list-34xx.vercel.app/', tools: ['Django', 'PostgreSQL'] },
    { id: 3, title: 'Project 1', category: 'fullstack', images: [to1, to2, to3], githubLink: 'https://github.com/Kanduku/to-do-list', liveLink: 'https://to-do-list-34xx.vercel.app/', tools: ['Flask', 'MySQL'] },
    { id: 4, title: 'Project 2', category: 'fullstack', images: [to1, to2, to3], githubLink: 'https://github.com/Kanduku/to-do-list', liveLink: 'https://to-do-list-34xx.vercel.app/', tools: ['Vue.js', 'Firebase'] },
    { id: 5, title: 'to-do', category: 'fullstack', images: [to1, to2, to3], githubLink: 'https://github.com/Kanduku/to-do-list', liveLink: 'https://to-do-list-34xx.vercel.app/', tools: ['Angular', 'MongoDB'] },
    { id: 6, title: 'Project 2', category: 'backend', images: [to1, to2, to3], githubLink: 'https://github.com/Kanduku/to-do-list', liveLink: 'https://to-do-list-34xx.vercel.app/', tools: ['Spring Boot', 'OracleDB'] },
    { id: 7, title: 'Project 1', category: 'frontend', images: [to1, to2, to3], githubLink: 'https://github.com/Kanduku/to-do-list', liveLink: 'https://to-do-list-34xx.vercel.app/', tools: ['Svelte', 'GraphQL'] },
    { id: 8, title: 'Project 2', category: 'fullstack', images: [to1, to2, to3], githubLink: 'https://github.com/Kanduku/to-do-list', liveLink: 'https://to-do-list-34xx.vercel.app/', tools: ['Next.js', 'MySQL'] },
  ];

  const filteredProjects = selectedCategory === 'all' ? projects : projects.filter(project => project.category === selectedCategory);

  const getProjectRows = () => {
    const rows = [];
    for (let i = 0; i < filteredProjects.length; i += isMobileOrTablet ? 1 : 2) {
      rows.push(filteredProjects.slice(i, i + (isMobileOrTablet ? 1 : 2)));
    }
    return rows;
  };

  return (
    <div style={isMobileOrTablet ? styles.containerMobile : styles.container}>
      <Tars />
      <div style={isMobileOrTablet ? styles.avatarContainerHidden : styles.avatarContainer}>
        <AvatarCanvas scrollY={scrollY} />
      </div>
      <div style={isMobileOrTablet ? styles.projectsSectionMobile : styles.projectsSection}>
        <div style={styles.filterBar}>
          <button onClick={() => handleFilterChange('all')} style={styles.filterButton}>All</button>
          <button onClick={() => handleFilterChange('backend')} style={styles.filterButton}>Backend</button>
          <button onClick={() => handleFilterChange('frontend')} style={styles.filterButton}>Frontend</button>
          <button onClick={() => handleFilterChange('fullstack')} style={styles.filterButton}>Fullstack</button>
        </div>
        <div style={styles.projectsContainer}>
          {getProjectRows().map((row, rowIndex) => (
            <div key={rowIndex} style={styles.projectRow}>
              {row.map((project) => (
                <ProjectCard
                  key={project.id}
                  id={project.id}
                  title={project.title}
                  images={project.images}
                  githubLink={project.githubLink}
                  liveLink={project.liveLink}
                  tools={project.tools}
                  isExpanded={expandedCardId === project.id}
                  onClick={() => handleCardClick(project.id)}
                />
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const ProjectCard = ({ id, title, images, githubLink, liveLink, tools, isExpanded, onClick }) => {
  const [currentImageIndex, setCurrentImageIndex] = React.useState(0);
  const [isMobile, setIsMobile] = React.useState(window.innerWidth <= 600);
  
  React.useEffect(() => {
    const imageInterval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(imageInterval);
  }, [images.length]);

  return (
    <div
      onClick={onClick}
      style={{
        ...styles.projectCard,
        width: isExpanded ? '80vw' : isMobile ? '90%' : 'calc(48% - 20px)',
        height: isExpanded ? '90vh' : '300px',
        position: isExpanded ? 'fixed' : 'relative',
        top: isExpanded ? '50%' : 'auto',
        left: isExpanded ? '50%' : 'auto',
        transform: isExpanded ? 'translate(-50%, -50%)' : 'scaleX(1.05)',
        zIndex: isExpanded ? 1000 : 1,
        overflow: 'hidden',
        margin: isExpanded ? '0' : isMobile ? '0 auto 10px' : '10px',
     }}
    >
      <div
        style={{
          ...styles.imageSection,
          backgroundImage: `url(${images[currentImageIndex]})`,
        }}
      ></div>
      <div
        style={{
          ...styles.contentSection,
          background: isExpanded ? 'linear-gradient(45deg, #ff8a00, #e52e71)' : 'transparent',
          position: isExpanded ? 'absolute' : 'relative',
          bottom: isExpanded ? 0 : 'auto',
          width: '100%',
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '20px',
        }}
      >
        <div style={styles.leftSection}>
          <h3 style={styles.projectTitle}>{title}</h3>
          <div style={styles.links}>
            <a href={githubLink} target="_blank" rel="noopener noreferrer" style={styles.link}>
              GitHub
            </a>
            <a href={liveLink} target="_blank" rel="noopener noreferrer" style={styles.link}>
              Live
            </a>
          </div>
        </div>
        <div style={styles.toolsSection}>
          {tools.join(', ')}
        </div>
      </div>
    </div>
  );
};


const styles = {
  container: {
    display: 'flex',
    height: '100vh',
    overflow: 'hidden',
    '@media (max-width: 600px)': { // Mobile
      flexDirection: 'column',
      width: '100vw',
    },
    '@media (min-width: 601px) and (max-width: 960px)': { // Tablet
      flexDirection: 'column',
      width: '100vw',
    },
  },
  containerMobile: {
    display: 'flex',
    flexDirection: 'column',
    height: '100vh',
    overflow: 'hidden',
    width: '100vw',
  },
  avatarContainer: {
    width: '40%',
    height: '100%',
    position: 'fixed',
    left: 0,
    top: 0,
    zIndex: 0,
    overflow: 'hidden',
    '@media (max-width: 960px)': { // Tablet and below
      display: 'none',
      width: '0%',
    },
  },
  avatarContainerHidden: {
    display: 'none',
  },
  projectsSection: {
    width: '70%',
    height: '100%',
    overflowY: 'scroll',
    marginLeft: '30%',
    zIndex: 1,
    '@media (max-width: 600px)': { // Mobile
      width: '100vw',
      marginLeft: '0',
    },
    '@media (min-width: 601px) and (max-width: 960px)': { // Tablet
      width: '100vw',
      marginLeft: '0',
    },
  },
  projectsSectionMobile: {
    width: '100vw',
        height: '100%',
    overflowY: 'scroll',
    zIndex: 1,
   
  },
  filterBar: {
    display: 'flex',
    justifyContent: 'space-evenly',
    marginBottom: '20px',
    '@media (max-width: 600px)': { // Mobile
      flexDirection: 'column',
      alignItems: 'center',
    },
    '@media (min-width: 601px) and (max-width: 960px)': { // Tablet
      justifyContent: 'space-between',
    },
  },
  filterButton: {
    padding: '10px 20px',
    border: 'none',
    backgroundColor: '#333',
    color: '#fff',
    borderRadius: '40px',
    cursor: 'pointer',
    '@media (max-width: 600px)': { // Mobile
      marginBottom: '10px',
     
    },
  },
  projectsContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '0 20px',
    justifyContent: 'center',
    '@media (max-width: 600px)': { // Mobile
      padding: '0 10px',
      width: '100vw',
    },
    '@media (min-width: 601px) and (max-width: 960px)': { // Tablet
      padding: '0 15px',
      width: '100vw',
    },
  },
  projectRow: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: '20px',
    '@media (max-width: 600px)': { // Mobile
      flexDirection: 'column',
      width: '100vw',
    },
    '@media (min-width: 601px) and (max-width: 960px)': { // Tablet
      flexDirection: 'column',
      width: '100vw',
    },
  },
  
  projectCard: {
    borderRadius: '10px',
    overflow: 'hidden',
    cursor: 'pointer',
    transition: 'transform 0.3s ease, width 0.3s ease, height 0.3s ease',
    '@media (max-width: 600px)': { // Mobile
      width: '90%', // Occupy 90% of the screen width
      margin: '0 auto 10px', // Center the card and add bottom margin
    },
    '@media (min-width: 601px) and (max-width: 960px)': { // Tablet
      width: '100vw',
      marginLeft: '-10px', // Adjust the margin to offset any container padding
      marginRight: '-10px', // Adjust the margin to offset any container padding
    },
    '@media (min-width: 961px)': { // Desktop and above
      width: 'calc(48% - 20px)',
    },
  },
  
  
  
  imageSection: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    transition: 'background-image 1s ease',
    '@media (max-width: 600px)': { // Mobile
      height: '150px',
     
    },
    '@media (min-width: 601px) and (max-width: 960px)': { // Tablet
      height: '200px',
      
    },
  },
  contentSection: {
    padding: '20px',
    background: 'rgba(0,0,0,0.7)',
    color: '#fff',
    '@media (max-width: 600px)': { // Mobile
      padding: '10px',
    },
    '@media (min-width: 601px) and (max-width: 960px)': { // Tablet
      padding: '15px',
    },
  },
  projectTitle: {
    margin: 0,
    fontSize: '1.1em',
    backgroundColor: 'black',
    borderRadius: '50px',
    padding: '0 10px',
    '@media (max-width: 600px)': { // Mobile
      fontSize: '0.2em',
    },
    '@media (min-width: 601px) and (max-width: 960px)': { // Tablet
      fontSize: '0.3em',
    },
  },
  links: {
    marginTop: '10px',
    '@media (max-width: 600px)': { // Mobile
      marginTop: '5px',
    },
  },
  link: {
    color: '#fff',
    textDecoration: 'none',
    marginRight: '10px',
    '@media (max-width: 600px)': { // Mobile
      marginRight: '5px',
    },
  },
  toolsSection: {
    display: 'flex',
    alignItems: 'center',
    fontSize: '0.9em',
    color: '#ccc',
    '@media (max-width: 600px)': { // Mobile
      fontSize: '0.2em',
    },
    '@media (min-width: 601px) and (max-width: 960px)': { // Tablet
      fontSize: '0.25em',
    },
  },
};


export default Projects;
