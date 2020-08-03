import React from "react";

import ContentWidthLimiter from "../ContentWidthLimiter";
import Button from "../Button";
import CardsList from "./CardsList";

import "./styles.scss";

function Projects() {
  return (
    <section className="projects" id="discover">
      <ContentWidthLimiter>
        <div className="projects__title-block">
          <div className="projects__text-block">
            <h2>featured projects</h2>
            <p>
              Brief details of new and popular projects. To view full listings,
              you will be required to sign up and become a member.
            </p>
          </div>
          <div className="projects__button-block">
            <Button
              className="button__projects-member"
              name="Become a Member"
            />
          </div>
        </div>

        <CardsList />
      </ContentWidthLimiter>
    </section>
  );
}

export default Projects;
