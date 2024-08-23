import React, { useEffect, useState } from 'react';
import AvatarCanvas from './AvatarCanvas';
import Tars from '../canvas/Tars';
import to1 from "./../../images/todo1.jpeg";
import to2 from "./../../images/todo2.jpeg";
import to3 from "./../../images/todo3.jpeg";

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [scrollY, setScrollY] = useState(0);
  const [expandedCardId, setExpandedCardId] = useState(null);

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

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
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
    for (let i = 0; i < filteredProjects.length; i += 2) {
      rows.push(filteredProjects.slice(i, i + 2));
    }
    return rows;
  };

  return (
    <div style={styles.container}>
      <Tars />
      <div style={styles.avatarContainer}>
        <AvatarCanvas scrollY={scrollY} />
      </div>
      <div style={styles.projectsSection}>
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

  React.useEffect(() => {
    const imageInterval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(imageInterval);
  }, [images.length]);

  return (
    <div
      onClick={onClick}
      style={{
        ...styles.projectCard,
        width: isExpanded ? '80vw' : 'calc(48% - 20px)',
        height: isExpanded ? '90vh' : '300px',
        position: isExpanded ? 'fixed' : 'relative',
        top: isExpanded ? '50%' : 'auto',
        left: isExpanded ? '50%' : 'auto',
        transform: isExpanded ? 'translate(-50%, -50%)' : 'scale(1.05)',
        zIndex: isExpanded ? 1000 : 1,
        overflow: 'hidden',
        margin: isExpanded ? '0' : '20px',
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
  },
  filterBar: {
    position: 'sticky',
    top: 0,
    zIndex: 1000,
    padding: '10px 20px',
    display: 'flex',
    justifyContent: 'center',
    width: '100%',
  },
  filterButton: {
    margin: '0 10px',
    padding: '10px 20px',
    border: 'none',
    borderRadius: '5px',
    backgroundColor: '#333',
    color: '#fff',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
  },
  avatarContainer: {
    width: '40%',
    height: '100%',
    position: 'fixed',
    left: 0,
    top: 0,
    zIndex: 0,
    overflow: 'hidden',
  },
  projectsSection: {
    width: '70%',
    height: '100%',
    marginLeft: '30%',
    overflowY: 'scroll',
    padding: '60px 20px 20px',
  },
  projectsContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
    borderRadius: '15px',
  },
  projectRow: {
    display: 'flex',
    justifyContent: 'space-between',
    gap: '20px',
  },
  projectCard: {
    height: '200px',
    display: 'flex',
    flexDirection: 'column',
    borderRadius: '25px',
    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.5)',
    overflow: 'hidden',
    transition: 'transform 0.3s ease, width 0.3s ease, height 0.3s ease',
    cursor: 'pointer',
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
  },
  contentSection: {
    padding: '10px',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
  },
  leftSection: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  projectTitle: {
    margin: 0,
    color: 'black',
    fontWeight: 'bold',
    backgroundColor: 'white',
    borderRadius: '50px',
    padding: '5px 10px',
    margin: '0 130px',
  },
  links: {
    display: 'flex',
    margin: '0 80px',
  },
  link: {
    color: '#fff',
    fontWeight: 'bold',
    textDecoration: 'none',
    margin: '0 20px',
    padding: '5px 10px',
    borderRadius: '50px',
    transition: 'background-color 0.3s ease',
  },
  toolsSection: {
    margin: '0 50px',
    textAlign: 'right',
    color: '#fff',
    fontStyle: 'italic',
  },
};

export default Projects;
