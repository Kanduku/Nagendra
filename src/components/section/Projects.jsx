import React, { useEffect, useState } from 'react';
import AvatarCanvas from './AvatarCanvas';
import Tars from '../canvas/Tars';
import to1 from "./../../images/todo1.jpeg";
import to2 from "./../../images/todo2.jpeg";
import to3 from "./../../images/todo3.jpeg";
import calender from "./../../images/calender.png";
import blog from "./../../images/blog.png";
import form from "./../../images/form.png";
import moneytracker from "./../../images/money-tracker.png";




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
    { id: 1, title: 'To-do list', category: 'fullstack', images: [to1, to2, to3], githubLink: 'https://github.com/Kanduku/to-do-list', liveLink: 'https://to-do-list-34xx.vercel.app/', tools: ['React', 'Node.js', 'Express'] },
    { id: 2, title: 'Calander', category: 'frontend', images: [calender], githubLink: 'https://github.com/Kanduku/calander', liveLink: 'https://calander-two.vercel.app/', tools: ['HTML','CSS', 'Javascript'] },
    { id: 3, title: 'Blog', category: 'fullstack', images: [blog], githubLink: 'https://github.com/Kanduku/blog/tree/main', liveLink: 'https://blog-zeta-six-65.vercel.app/', tools: ['Next.js'] },
    { id: 4, title: 'Money tracker', category: 'backend', images: [moneytracker], githubLink: 'https://github.com/Kanduku/money-tracker', liveLink: 'https://money-tracker-blue-two.vercel.app/', tools: ['HTML','CSS', 'Javascript'] },
    { id: 5, title: 'Form', category: 'fullstack', images: [form], githubLink: 'https://github.com/Kanduku/registration/', liveLink: 'https://registration-henna-zeta.vercel.app/', tools: ['HTML','CSS', 'Javascript', 'MongoDB'] },
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
  const [isMobile, setIsMobile] = React.useState(window.innerWidth <= 900);
  
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
        width: isExpanded ? '80%' : isMobile ? 'calc(88% - 20px)' : 'calc(98% - 20px)',
        height: isMobile ? '40vh' : isExpanded ? '80vh' : '300px',
        position: isExpanded ? 'fixed' : 'relative',
        top: isExpanded ? '50%' : 'auto',
        left: isExpanded ? '50%' : 'auto',
        transform: isExpanded ? 'translate(-50%, -50%)' : 'scaleX(1.05)',
        zIndex: isExpanded ? 1000 : 1,
        overflow: 'hidden',
        margin: isExpanded ? '0' : isMobile ? '0 auto 10px' : '20px 20px',
        
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





// import React from "react";
// import styled, { keyframes } from "styled-components";
// import { skills } from "../../data/constants";
// import { Tilt } from "react-tilt";
// import { DotLottieReact } from '@lottiefiles/dotlottie-react';
// import Tars from "../canvas/Tars";

// // Container for the entire layout
// const Container = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   position: relative;
//   height: 600px; // Adjust height as needed
//   width: 100%;
  
// `;

// // Title at the center
// const CenterTitle = styled.div`
//   font-size: 52px;
//   font-weight: 600;
//   color: ${({ theme }) => theme.text_primary};
//   text-align: center;
//   position: absolute;
//   z-index: 2;

//   @media (max-width: 768px) {
//     font-size: 32px;
//   }
// `;

// // Define the circular path animation
// const moveInCircle = keyframes`

//   0%   { transform: rotate(0deg) translateX(200px) translateY(100px) rotate(0deg);  opacity: 0.1;}
//   10%  { transform: rotate(36deg) translateX(120px) translateY(120px) rotate(-36deg); opacity: 0.9;}
//   20%  { transform: rotate(72deg) translateX(120px) translateY(140px) rotate(-72deg); opacity: 1;}
//   30%  { transform: rotate(108deg) translateX(250px) translateY(160px) rotate(-108deg); opacity: 1; }
//   40%  { transform: rotate(144deg) translateX(350px) translateY(180px) rotate(-144deg); opacity: 1;}
//   50%  { transform: rotate(180deg) translateX(300px) translateY(200px) rotate(-180deg); opacity: 1;}
//   60%  { transform: rotate(216deg) translateX(300px) translateY(180px) rotate(-216deg); opacity: 1;}
//   70%  { transform: rotate(252deg) translateX(220px) translateY(160px) rotate(-252deg); opacity: 1;}
//   80%  { transform: rotate(288deg) translateX(220px) translateY(140px) rotate(-288deg); opacity: 1;}
//   90%  { transform: rotate(324deg) translateX(280px) translateY(120px) rotate(-324deg); opacity: 1;}
//   100% { transform: rotate(360deg) translateX(300px) translateY(100px) rotate(-360deg); opacity: 1;}
// `;

// const SkillCardWrapper = styled.div`
//   position: absolute;
//   top: 50%;
//   left: 50%;
//   width: 150px;
//   height: 150px;
//   animation: ${moveInCircle} 30s linear infinite;
//   animation-delay: ${(props) => props.delay}s;
//   opacity: 0;
// `;


// // Styling for individual skill cards
// const Skill = styled.div`
//   max-height: 350px;
//   width: 200px;
//   background-color: rgba(17, 25, 40, 0.83);
//   border: 1px solid rgba(255, 255, 255, 0.125);
//   box-shadow: rgba(23, 92, 230, 0.15) 0px 4px 24px;
//   border-radius: 16px;
//   padding: 18px 36px;
 
// `;

// const SkillTitle = styled.div`
//   font-size: 28px;
//   font-weight: 600;
//   margin-bottom: 20px;
//   text-align: center;
//   color: ${({ theme }) => theme.text_secondary};
// `

// const SkillList = styled.div`
//   display: flex;
//   justify-content: center;
//   flex-wrap: wrap;
//   gap: 12px;
//   margin-bottom: 20px;
// `;

// const SkillItem = styled.div`
//   font-size: 14px;
//   color: ${({ theme }) => theme.text_primary + 80};
//   display: flex;
//   align-items: center;
// `;

// const SkillImage = styled.img`
//   width: 20px;
//   height: 20px;
//   margin-right: 5px;
// `;

// const Skills = () => {
//   const totalCards = skills.length; // Total number of skill cards
//   const delayIncrement = 6; // Fixed delay of 0.3 seconds between cards

//   return (
//     <Container>
//       <Tars />
//       <CenterTitle> <DotLottieReact
//       src="https://lottie.host/c2b4f2e7-ab33-4982-9e89-aa12ecb40739/DuIgEXEHP4.lottie"
//       loop
//       autoplay
//     /></CenterTitle>
//       {skills.map((skill, index) => (
//         <SkillCardWrapper
//           key={`skill-${index}`}
//           delay={index * delayIncrement}
//         >
//           <Tilt>
//             <Skill>
//               <SkillTitle>{skill.title}</SkillTitle>
//               <SkillList>
//                 {skill.skills.map((item, index_x) => (
//                   <SkillItem key={`skill-item-${index_x}`}>
//                     <SkillImage src={item.image} alt={item.name} />
//                     {item.name}
//                   </SkillItem>
//                 ))}
//               </SkillList>
//             </Skill>
//           </Tilt>
//         </SkillCardWrapper>
//       ))}
//     </Container>
//   );
// };
// export default Skills;

