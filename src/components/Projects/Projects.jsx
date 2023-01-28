import React from "react";
import './projects.css'
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import movies from "../../Assets/Projects/MOVIES.png";
import AdminDB from "../../Assets/Projects/bashboard.png";
import crudReact from "../../Assets/Projects/crud-react.png";
import crudsjs from "../../Assets/Projects/cruds-js.png";


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
              imgPath={movies}
              isBlog={false}
              title="movies"
              description="This site is a showcasing of movies, TV and actors the trind in the current period ,Using  Dynamic API , react js and bootstrap 

              "
              ghLink="https://github.com/essam1212/trending"
              demoLink="https://essam1212.github.io/trending/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={AdminDB}
              isBlog={false}
              title="AdminDB"
              description=" This Site Was Created by html , sass , react.js  , reactstrap , Mui and fontawesome "
              ghLink="https://github.com/essam1212/dagbord"
              demoLink="https://essam1212.github.io/dagbord/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={crudReact}
              isBlog={false}
              title="crudReact"
              description=" This Site Was Created by html , css , react.js , bootstrap , reactstrap and fontawesome"
              ghLink="https://github.com/essam1212/crud"
              demoLink="https://essam1212.github.io/crud/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={crudsjs}
              isBlog={false}
              title="cruds-js"
              description=" this project is cruds about add new products and get all products from local storeg and update or delete or delete all products and search by use html + css + js"
              ghLink="https://github.com/essam1212/cruds-js"
              demoLink="https://essam1212.github.io/cruds-js/"
            />
          </Col>

        
         

          

          

        
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
