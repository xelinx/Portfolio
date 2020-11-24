import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import Project from "../Project";
import Data from "../../utils/data";

export default function Portfolio(props) {

  return (
    <div>
      <h1 style={{ textAlign: "center", padding: 10, marginTop: 10 }}>My Projects</h1>
      <Container spacing={3}>
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
        <Row>
          <Col sm>
            <div>
              <Project
                title={Data.projects[6].title}
                url={Data.projects[6].url}
                image={Data.projects[6].imageSrc}
                git={Data.projects[6].github}>
              </Project>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}