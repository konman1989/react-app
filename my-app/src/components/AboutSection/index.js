import React from "react";

import ContentWidthLimiter from "../ContentWidthLimiter";
import ImageWrapper from "../ImageWrapper";
import aboutIcon from "./../../assets/images/about-icon.svg"

import './styles.scss';

function AboutSection() {
    return <section className="about">
        <ContentWidthLimiter>
            <div className="about__content-container">
                <ImageWrapper imageStyle='image-wrapper--icon'
                              imageSrc={aboutIcon}
                              imageName='about-icon'/>
                <div className="about__text">
                    <h2>our work is the presentation</h2>
                    <h2>of our capabilities.</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua. Ut enim ad minim veniam, quis
                        nostrud exercitation</p>
                    <p>Ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        Duis aute irure dolor in reprehenderit in voluptate
                        velit
                        esse cillum dolore eu fugiat nulla pariatur.</p>
                </div>

            </div>

        </ContentWidthLimiter>
    </section>
}

export default AboutSection;