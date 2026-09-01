import React from "react";
import "./SoftwareSkill.css";
import { OverlayTrigger, Tooltip } from "react-bootstrap";

const skillImages = {
  "Jetpack_Compose_logo.png": require("../../assets/images/Jetpack_Compose_logo.png"),
  "roomdb.jpg": require("../../assets/images/roomdb.jpg"),
  "cameraX.png": require("../../assets/images/cameraX.png"),
  "faiss.jpg": require("../../assets/images/faiss.jpg"),
  "mediapipe.jpg": require("../../assets/images/mediapipe.jpg"),
};

class SoftwareSkill extends React.Component {
  render() {
    return (
      <div>
        <div className="software-skills-main-div">
          <ul className="dev-icons">
            {this.props.logos.map((logo) => {
              return (
                <OverlayTrigger
                  key={logo.skillName}
                  placement="top"
                  overlay={
                    <Tooltip id={`tooltip-${logo.skillName}`}>
                      <strong>{logo.skillName}</strong>
                    </Tooltip>
                  }
                >
                  <li
                    className="software-skill-inline"
                    name={logo.skillName}
                  >
                    {logo.fontAwesomeClassname && (
                      <span
                        className="iconify"
                        data-icon={logo.fontAwesomeClassname}
                        style={logo.style}
                        data-inline="false"
                      ></span>
                    )}

                    {!logo.fontAwesomeClassname && logo.imageSrc && (
                      <img
                        className="skill-image"
                        src={skillImages[logo.imageSrc]}
                        alt={logo.skillName}
                      />
                    )}
                  </li>
                </OverlayTrigger>
              );
            })}
          </ul>
        </div>
      </div>
    );
  }
}

export default SoftwareSkill;