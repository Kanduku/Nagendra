import React, { useState } from 'react';
import Boy from '../canvas/Boy';
import Tars from '../canvas/Tars';
import mainLogo from "./../../images/6728572_1718269862_page-0001.jpg";
import mainLogo1 from "./../../images/1-0fb2032b-bb30-4659-8922-b342a27e4a07_page-0001.jpg";
import mainLogo2 from "./../../images/1-1ce8e7e9-4513-4687-89be-e4fb9530f2c7_page-0001.jpg";
import mainLogo3 from "./../../images/1-09e1bc03-9b62-4ecb-8fb2-2dc5f462e18c_page-0001.jpg";
import mainLogo4 from "./../../images/1-9df526ef-960d-4b6d-80dc-4978b67a2172_page-0001.jpg";
import mainLogo5 from "./../../images/1-031a1708-87e4-42e7-afd1-6a1f931ff8fa_page-0001.jpg";
import mainLogo6 from "./../../images/1-085a5f05-29de-43a0-aebf-7224c316c893_page-0001.jpg";
import mainLogo7 from "./../../images/1-3359e7bb-dc68-47ea-97bc-553e363230d3_page-0001.jpg";

import mainLogo8 from "./../../images/css certificate_page-0001.jpg";
import mainLogo9 from "./../../images/1-eaf870eb-e78d-4e77-a218-10777b0b9f66_page-0001.jpg";


import mainLogo10 from "./../../images/1-e2ad2821-18e2-42be-998f-1a77d552354f_page-0001.jpg";
import mainLogo11 from "./../../images/1-eaf870eb-e78d-4e77-a218-10777b0b9f66_page-0001.jpg";



import mainLogo12 from "./../../images/edx_page-0001.jpg";
import mainLogo13 from "./../../images/javascript_basic certificate_page-0001.jpg";


// Inline CSS styles
const styles = {
  container: {
    display: 'grid',
    gridTemplateColumns: '1fr 3fr',
    gap: '20px',
    padding: '20px',
    minHeight: '100vh',
    color: '#fff',
    position: 'relative',
  },
  profileSection: {
    display: 'flex',
    flexDirection: 'column',
    margin: '-70px 0px',
    backgroundColor: '#222',
    justifyContent: 'center',
    height:'90vh',
    padding: ' 0 20px',
    width: '100%',
  },
  dob: {
    fontSize: '1.2rem',
    color: '#ccc',
    margin: '5px 0',
    justifyContent: 'center',
    alignItems: 'center'
  },
  linkedin: {
    fontSize: '1.2rem',
    color: '#ccc',
    margin: '0 33%',
  },
  github: {
    fontSize: '1.2rem',
    color: '#ccc',
    margin: '0 33%',
  },
  link: {
    color: '#0a66c2',
    textDecoration: 'none',
  },
  certificationSection: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '20px',
    justifyContent: 'center',
    maxWidth: '1200px',
    margin: '70px auto',
    paddingTop: '20px',
  },
  certificate: {
    cursor: 'pointer',
    overflow: 'hidden',
    border: '2px solid #333',
    borderRadius: '8px',
    width: 'calc(33.333% - 20px)',
    boxSizing: 'border-box',
    position: 'relative',
  },
  certificateImg: {
    width: '100%',
    height: 'auto',
    display: 'block',
    transition: 'transform 0.3s ease',
  },
  expandedContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'fixed',
    top: '0',
    left: '0',
    width: '100vw',
    height: '100vh',
    zIndex: '9',
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    visibility: 'visible',
  },
  expanded: {
    height: '70vh', // 70% of the viewport height
    maxWidth: '70vw', // Maintain aspect ratio and prevent overflow
    objectFit: 'contain', // Preserve aspect ratio
    cursor: 'zoom-out',
    transition: 'transform 0.3s ease',
  },
  hidden: {
    display: 'none',
  },
  // Media queries for responsiveness

  '@media (min-width: 600px) and (max-width: 899px)': { // Tablet
    container: {
      display: 'flex',
      flexDirection: 'column',
      gap: '20px',
    },
    profileSection: {
      flexDirection: 'column',
    },
    certificationSection: {
      flexDirection: 'column',
      gap: '20px',
      alignItems: 'center',
    },
    certificate: {
      width: '100%', // Full width on tablet
    },
  },
  '@media (min-width: 900px) and (max-width: 1199px)': { // Laptop
    container: {
      display: 'grid',
      gridTemplateColumns: '1fr 3fr',
    },
    profileSection: {
      margin: '-70px 0px',
    },
    certificationSection: {
      flexDirection: 'row',
      gap: '20px',
      justifyContent: 'center',
    },
    certificate: {
      width: 'calc(33.333% - 20px)',
    },
  },
  '@media (min-width: 1200px)': { // Large computer screen
    container: {
      display: 'grid',
      gridTemplateColumns: '1fr 3fr',
      
    },
    profileSection: {
      margin: '-70px 0px',
      flexDirection: 'row',
    },
    certificationSection: {
      flexDirection: 'row',
      gap: '20px',
      justifyContent: 'center',
    },
    certificate: {
      width: 'calc(33.333% - 20px)',
    },
  },
};

const Education = () => {
  // State to track expanded certificate
  const [expanded, setExpanded] = useState(null);

  // Toggle the size of the clicked certificate
  const toggleSize = (src) => {
    setExpanded(expanded === src ? null : src);
  };

  return (
    <div style={styles.container}>
      <Tars />

      <div style={styles.profileSection} className="profile-section">
        <Boy />
        <h1 style={styles.dob}>KANDUKURU NAGENDRA KUMAR</h1>
        <p style={styles.dob}>Date of Birth: NOVEMBER 1, 2003</p>

        <p style={styles.linkedin}>
          <a href="https://linkedin.com/in/johndoe" target="_blank" rel="noopener noreferrer" style={styles.link}>LinkedIn</a>
        </p>
        <p style={styles.github}>
          <a href="https://github.com/johndoe" target="_blank" rel="noopener noreferrer" style={styles.link}>GitHub</a>
        </p>
      </div>

      <div>
        <div style={styles.certificationSection} className="certification-section">
          {/* Full-screen image container */}
          {expanded && (
            <div
              style={styles.expandedContainer}
              onClick={() => setExpanded(null)}
            >
              <img
                src={expanded}
                alt="Expanded Certificate"
                style={styles.expanded}
              />
            </div>
          )}
          
          <div
            style={styles.certificate}
            onClick={() => toggleSize(mainLogo12)}
          >
            <img src={mainLogo12} alt="Certificate 3" style={styles.certificateImg} />
          </div> 
          <div
            style={styles.certificate}
            onClick={() => toggleSize(mainLogo8)}
          >
            <img src={mainLogo8} alt="Certificate 3" style={styles.certificateImg} />
          </div>
          
          
          <div
            style={styles.certificate}
            onClick={() => toggleSize(mainLogo13)}
          >
            <img src={mainLogo13} alt="Certificate 3" style={styles.certificateImg} />
          </div>
      

          <div
            style={styles.certificate}
            onClick={() => toggleSize(mainLogo)}
          >
            <img src={mainLogo} alt="Certificate 1" style={styles.certificateImg} />
          </div>
          <div
            style={styles.certificate}
            onClick={() => toggleSize(mainLogo1)}
          >
            <img src={mainLogo1} alt="Certificate 2" style={styles.certificateImg} />
          </div>
          <div
            style={styles.certificate}
            onClick={() => toggleSize(mainLogo2)}
          >
            <img src={mainLogo2} alt="Certificate 3" style={styles.certificateImg} />
          </div>
          <div
            style={styles.certificate}
            onClick={() => toggleSize(mainLogo3)}
          >
            <img src={mainLogo3} alt="Certificate 3" style={styles.certificateImg} />
          </div>
          <div
            style={styles.certificate}
            onClick={() => toggleSize(mainLogo4)}
          >
            <img src={mainLogo4} alt="Certificate 3" style={styles.certificateImg} />
          </div>
         
          <div
            style={styles.certificate}
            onClick={() => toggleSize(mainLogo5)}
          >
            <img src={mainLogo5} alt="Certificate 3" style={styles.certificateImg} />
          </div>
          <div
            style={styles.certificate}
            onClick={() => toggleSize(mainLogo6)}
          >
            <img src={mainLogo6} alt="Certificate 3" style={styles.certificateImg} />
          </div>
          <div
            style={styles.certificate}
            onClick={() => toggleSize(mainLogo7)}
          >
            <img src={mainLogo7} alt="Certificate 3" style={styles.certificateImg} />
          </div>
      
           <div
            style={styles.certificate}
            onClick={() => toggleSize(mainLogo9)}
          >
            <img src={mainLogo9} alt="Certificate 3" style={styles.certificateImg} />
          </div>
          <div
            style={styles.certificate}
            onClick={() => toggleSize(mainLogo10)}
          >
            <img src={mainLogo10} alt="Certificate 3" style={styles.certificateImg} />
          </div>
          <div
            style={styles.certificate}
            onClick={() => toggleSize(mainLogo11)}
          >
            <img src={mainLogo11} alt="Certificate 3" style={styles.certificateImg} />
          </div>
          
          
          
          
        </div>
      </div>
    </div>
  );
};

export default Education;
