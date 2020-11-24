import React, { Component } from "react";
import { Row, Col, Container } from "react-bootstrap";
import Data from "../../utils/data";

export default class Home extends Component {
    render() {

        return (
            <Container>
                <Row>
                    <Col sm>
                        <div align="center">
                            <h1 style={{ textAlign: "center", color: "#575D51", padding: 10, marginTop: 10 }}>Emay Lin</h1>
                            <img src={Data.aboutImage} alt="profile" width="70%" height="40%" align="center"></img>
                            <h3 style={{ textAlign: "center", color: "#575D51", padding: 10, marginTop: 10 }}>{Data.headerTagline[0]}</h3>
                        </div>
                    </Col>
                    <Col sm>
                        <div align="left">
                            <h3 style={{ textAlign: "center", color: "#575D51", padding: 10, marginTop: 100 }}>{Data.abouttext[0]}</h3>
                            <h3 style={{ textAlign: "center", color: "#575D51", padding: 10, marginTop: 10 }}>{Data.abouttext[1]}</h3>
                            <h3 style={{ textAlign: "center", color: "#575D51", padding: 10, marginTop: 10 }}>{Data.abouttext[2]}</h3>
                        </div>
                    </Col>
                </Row>
            </Container>
        );
    }
}