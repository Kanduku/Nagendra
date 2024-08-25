import React, { useState } from 'react';
import './Education.css';  // Import the CSS file
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

          <div className="certificate" onClick={() => toggleSize(mainLogo12)}>
            <img src={mainLogo12} alt="Certificate 3" className="certificate-img" />
          </div>
          <div className="certificate" onClick={() => toggleSize(mainLogo8)}>
            <img src={mainLogo8} alt="Certificate 3" className="certificate-img" />
          </div>
          <div className="certificate" onClick={() => toggleSize(mainLogo13)}>
            <img src={mainLogo13} alt="Certificate 3" className="certificate-img" />
          </div>
          <div className="certificate" onClick={() => toggleSize(mainLogo)}>
            <img src={mainLogo} alt="Certificate 1" className="certificate-img" />
          </div>
          <div className="certificate" onClick={() => toggleSize(mainLogo1)}>
            <img src={mainLogo1} alt="Certificate 2" className="certificate-img" />
          </div>
          <div className="certificate" onClick={() => toggleSize(mainLogo2)}>
            <img src={mainLogo2} alt="Certificate 3" className="certificate-img" />
          </div>
          <div className="certificate" onClick={() => toggleSize(mainLogo3)}>
            <img src={mainLogo3} alt="Certificate 3" className="certificate-img" />
          </div>
          <div className="certificate" onClick={() => toggleSize(mainLogo4)}>
            <img src={mainLogo4} alt="Certificate 3" className="certificate-img" />
          </div>
          <div className="certificate" onClick={() => toggleSize(mainLogo5)}>
            <img src={mainLogo5} alt="Certificate 3" className="certificate-img" />
          </div>
          <div className="certificate" onClick={() => toggleSize(mainLogo6)}>
            <img src={mainLogo6} alt="Certificate 3" className="certificate-img" />
          </div>
          <div className="certificate" onClick={() => toggleSize(mainLogo7)}>
            <img src={mainLogo7} alt="Certificate 3" className="certificate-img" />
          </div>
          <div className="certificate" onClick={() => toggleSize(mainLogo9)}>
            <img src={mainLogo9} alt="Certificate 3" className="certificate-img" />
          </div>
          <div className="certificate" onClick={() => toggleSize(mainLogo10)}>
            <img src={mainLogo10} alt="Certificate 3" className="certificate-img" />
          </div>
          <div className="certificate" onClick={() => toggleSize(mainLogo11)}>
            <img src={mainLogo11} alt="Certificate 3" className="certificate-img" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
