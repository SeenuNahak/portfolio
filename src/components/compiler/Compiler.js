import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "../Projects/ProjectCards";
import Particle from "../Particle";
import report from "../../Assets/Projects/report.png";
import labexp from "../../Assets/Projects/labexp.png";
import compile from "../../Assets/Projects/compiler.png";
function Compiler() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          <strong className="purple">Compiler Design </strong>
        </h1>
        <p style={{ color: "white" }}>
          Project and Experiments during 6th semester Compiler Design Course
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
        <Col md={4} className="project-card">
            <ProjectCard
              imgPath={compile}
              isBlog={false}
              title="Bash-C Compiler"
              description="This is my 6th semester project for Compiler Design Subject. A Bash to C compiler is a program that takes a Bash script as input and converts it into an equivalent C program. The resulting C program can then be compiled and executed on a variety of platforms, making it a more portable and efficient solution for shell scripting."
              ghLink="https://github.com/SeenuNahak/Bash-C-Compiler"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={report}
              isBlog={false}
              title="Project Report"
              description="This the project report for the Bash-C Compiler Project. It contains all the details about the project and the steps involved in the project."
              ghLink="https://github.com/SeenuNahak/portfolio/blob/ca54356761fdf0b8bf30bc7feb7ee33219d57db1/src/Assets/CDREPORT.pdf"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={labexp}
              isBlog={false}
              title="Lab Experiments"
              description="This file contains all the lab experiments performed during the course of the subject compiler design. It contains all the programs and their outputs."
              ghLink="https://github.com/SeenuNahak/portfolio/blob/ca54356761fdf0b8bf30bc7feb7ee33219d57db1/src/Assets/AllExperiments.pdf"
            />
          </Col>
          
        </Row>
      </Container>
    </Container>
  );
}

export default Compiler;
