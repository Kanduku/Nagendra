import React, { useEffect, useState } from 'react';
import AvatarCanvas from './AvatarCanvas';
import Tars from '../canvas/Tars';

const ProjectCard = ({ title, images, githubLink, liveLink }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    const imageInterval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(imageInterval);
  }, [images.length]);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div
      onClick={toggleExpand}
      style={{
        ...styles.projectCard,
        width: isExpanded ? '70%' : 'calc(50% - 20px)', // Adjust width on click
        transform: isExpanded ? 'scale(1.05)' : 'scale(1)', // Slight scale effect when expanded
      }}
    >
      <div
        style={{
          ...styles.imageSection,
          backgroundImage: `url(${images[currentImageIndex]})`,
        }}
      ></div>
      <div style={styles.contentSection}>
        <h3 style={styles.projectTitle}>{title}</h3> {/* Title added */}
        <div style={styles.links}>
          <a href={githubLink} target="_blank" rel="noopener noreferrer" style={styles.link}>
            GitHub
          </a>
          <a href={liveLink} target="_blank" rel="noopener noreferrer" style={styles.link}>
            Live
          </a>
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [scrollY, setScrollY] = useState(0);

  const handleFilterChange = (category) => {
    setSelectedCategory(category);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const projects = [
    { id: 1, title: 'Project 1', category: 'web', images: ['/path/to/image1.jpg', '/path/to/image2.jpg', '/path/to/image3.jpg'], githubLink: 'https://github.com/your-repo-1', liveLink: 'https://your-live-link-1.com' },
    { id: 2, title: 'Project 2', category: 'backend', images: ['/path/to/image4.jpg', '/path/to/image5.jpg', '/path/to/image6.jpg'], githubLink: 'https://github.com/your-repo-2', liveLink: 'https://your-live-link-2.com' },
    { id: 3, title: 'Project 3', category: 'web', images: ['/path/to/image7.jpg', '/path/to/image8.jpg', '/path/to/image9.jpg'], githubLink: 'https://github.com/your-repo-3', liveLink: 'https://your-live-link-3.com' },
    { id: 4, title: 'Project 4', category: 'web', images: ['/path/to/image1.jpg', '/path/to/image2.jpg', '/path/to/image3.jpg'], githubLink: 'https://github.com/your-repo-1', liveLink: 'https://your-live-link-1.com' },
    { id: 5, title: 'Project 5', category: 'backend', images: ['/path/to/image4.jpg', '/path/to/image5.jpg', '/path/to/image6.jpg'], githubLink: 'https://github.com/your-repo-2', liveLink: 'https://your-live-link-2.com' },
    { id: 6, title: 'Project 6', category: 'frontend', images: ['/path/to/image7.jpg', '/path/to/image8.jpg', '/path/to/image9.jpg'], githubLink: 'https://github.com/your-repo-3', liveLink: 'https://your-live-link-3.com' },
    // Add more projects here
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
          <button onClick={() => handleFilterChange('web')} style={styles.filterButton}>Web</button>
          <button onClick={() => handleFilterChange('backend')} style={styles.filterButton}>Backend</button>
          <button onClick={() => handleFilterChange('frontend')} style={styles.filterButton}>Frontend</button>
        </div>
        <div style={styles.projectsContainer}>
          {getProjectRows().map((row, rowIndex) => (
            <div key={rowIndex} style={styles.projectRow}>
              {row.map((project) => (
                <ProjectCard
                  key={project.id}
                  title={project.title} // Pass the title to ProjectCard
                  images={project.images}
                  githubLink={project.githubLink}
                  liveLink={project.liveLink}
                />
              ))}
            </div>
          ))}
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
     // Dark background for filter bar
  },
  filterButton: {
    margin: '0 10px',
    padding: '10px 20px',
    border: 'none',
    borderRadius: '5px',
    backgroundColor: '#333', // Dark button background
    color: '#fff', // Light button text
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
    backgroundColor: '#0a0a0a', // Darker background for AvatarCanvas
  },
  projectsSection: {
    width: '70%',
    height: '100%',
    marginLeft: '30%',
    overflowY: 'scroll',
    padding: '60px 20px 20px', // Space for filter bar and padding
    backgroundColor: '#121212', // Dark background for projects section
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
    height: '300px',
    display: 'flex',
    flexDirection: 'column',
    borderRadius: '25px',
    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.5)',
    overflow: 'hidden',
    backgroundColor: '#222', // Dark card background
    transition: 'transform 0.3s ease, width 0.3s ease',
    cursor: 'pointer', // Indicate clickable area
  },
  imageSection: {
    height: '200px',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    transition: 'background-image 1s ease',
  },
  contentSection: {
    padding: '10px',
    background: 'linear-gradient(45deg, #ff8a00, #e52e71)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  projectTitle: {
    margin: 0,
    color: '#fff',
    fontWeight: 'bold',
  },
  links: {
    display: 'flex',
  },
  link: {
    color: '#fff',
    fontWeight: 'bold',
    textDecoration: 'none',
    marginRight: '10px',
    padding: '5px 10px',
    borderRadius: '50px',
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    transition: 'background-color 0.3s ease',
  },
};

export default Projects;
