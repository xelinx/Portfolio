import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import Project from "../Project";
import Data from "../../utils/data";

const style = { 
  textAlign: "center", 
  padding: 10, 
  marginTop: 10
};

function Portfolio() {

  return (
    <div>
      <Container fluid>
        <h1 style={style}>My Projects</h1>
        <Row>
          <Col sm>
            <div>
              <Project
                title={Data.projects[0].title}
                url={Data.projects[0].url}
                image={Data.projects[0].imageSrc}
                git={Data.projects[0].github}>
              </Project>
            </div>
          </Col>
        </Row>
        <Row>
          <Col sm>
            <div>
              <Project
                title={Data.projects[1].title}
                url={Data.projects[1].url}
                image={Data.projects[1].imageSrc}
                git={Data.projects[1].github}>
              </Project>
            </div>
          </Col>
        </Row>
        <Row>
          <Col sm>
            <div>
              <Project
                title={Data.projects[2].title}
                url={Data.projects[2].url}
                image={Data.projects[2].imageSrc}
                git={Data.projects[2].github}>
              </Project>
            </div>
          </Col>
        </Row>
        <Row>
          <Col sm>
            <div>
              <Project
                title={Data.projects[3].title}
                url={Data.projects[3].url}
                image={Data.projects[3].imageSrc}
                git={Data.projects[3].github}>
              </Project>
            </div>
          </Col>
        </Row>
        <Row>
          <Col sm>
            <div>
              <Project
                title={Data.projects[4].title}
                url={Data.projects[4].url}
                image={Data.projects[4].imageSrc}
                git={Data.projects[4].github}>
              </Project>
            </div>
          </Col>
        </Row>
        <Row>
          <Col sm>
            <div>
              <Project
                title={Data.projects[5].title}
                url={Data.projects[5].url}
                image={Data.projects[5].imageSrc}
                git={Data.projects[5].github}>
              </Project>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Portfolio;