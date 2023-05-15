import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import chatify from "../../Assets/Projects/chatify.png";
import bitsOfCode from "../../Assets/Projects/blog.png";
import compiler from "../../Assets/Projects/compiler.png";
function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Predicting Diabetes"
              description="Predicting that whether the patient has diabetes or not on the basis of the features we will provide to our machine learning model, and for that, we will be using the famous Pima Indians Diabetes Database."
              ghLink="https://github.com/SeenuNahak/Project-Early-Diabetes-Detection.git"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Web Dev with Node.js"
              description="Hi I made this project during the 7 Days Free Bootcamp, conducted by SHAPEAI . The instructor during the session was Mr. Shaurya Sinha (Data Analyst Intern at Jio). I got to learn a lot during these 7 days and it was an amazing experience learning with SHAPEAI"
              ghLink="https://github.com/SeenuNahak/ShapeAI_Seenu_Nahak_1.git"
            />
          </Col>
      
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={compiler}
              isBlog={false}
              title="Bash-C Compiler"
              description="This is my 6th semester project for Compiler Design Subject. A Bash to C compiler is a program that takes a Bash script as input and converts it into an equivalent C program. The resulting C program can then be compiled and executed on a variety of platforms, making it a more portable and efficient solution for shell scripting."
              ghLink="https://github.com/SeenuNahak/Bash-C-Compiler"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
