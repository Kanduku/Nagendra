import React, { useState } from 'react';
import './Education.css';  // Import the CSS file
import Boy from '../canvas/Boy';
import Tars from '../canvas/Tars';
import mainLogo from "./../../images/6728572_1718269862_page-0001.jpg";
import mainLogo1 from "./../../images/css certificate_page-0001.jpg";
import mainLogo2 from "./../../images/edx_page-0001.jpg";
import mainLogo3 from "./../../images/javascript_basic certificate_page-0001.jpg";

const Education = () => {
  const [expanded, setExpanded] = useState(null);

  const toggleSize = (src) => {
    setExpanded(expanded === src ? null : src);
  };

  return (
    <div className="container">
      <Tars />

      <div className="profile-section">
        <Boy />
        <h1 className="dob">KANDUKURU NAGENDRA KUMAR</h1>
        <p className="dob">Date of Birth: NOVEMBER 1, 2003</p>

        <p className="linkedin">
          <a href="https://linkedin.com/in/johndoe" target="_blank" rel="noopener noreferrer" className="link">LinkedIn</a>
        </p>
        <p className="github">
          <a href="https://github.com/johndoe" target="_blank" rel="noopener noreferrer" className="link">GitHub</a>
        </p>
      </div>

      <div>
        <div className="certification-section">
          {expanded && (
            <div className="expanded-container" onClick={() => setExpanded(null)}>
              <img src={expanded} alt="Expanded Certificate" className="expanded" />
            </div>
          )}

          <div className="certificate" onClick={() => toggleSize(mainLogo)}>
            <img src={mainLogo} alt="Certificate 3" className="certificate-img" />
          </div>
          <div className="certificate" onClick={() => toggleSize(mainLogo1)}>
            <img src={mainLogo1} alt="Certificate 3" className="certificate-img" />
          </div>
          <div className="certificate" onClick={() => toggleSize(mainLogo2)}>
            <img src={mainLogo2} alt="Certificate 3" className="certificate-img" />
          </div>
          <div className="certificate" onClick={() => toggleSize(mainLogo3)}>
            <img src={mainLogo3} alt="Certificate 1" className="certificate-img" />
          </div>
         
          
        </div>
      </div>
    </div>
  );
};

export default Education;
