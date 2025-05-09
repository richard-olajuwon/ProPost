import React from "react";
import {} from "react-ionicons";
import { Link } from "react-router-dom";
const Hero = () => {
  return (
    <>
      <section className="hero" id="home" aria-label="home">
        <div className="container">
          <div className="hero-content">
            <h1 className="headline headline-1 section-title">
              Discover Stories, <span className="span">Unfold Experiences</span>
            </h1>

            <p className="hero-text">
              Explore a diverse collection of blogs, from travel adventures to
              lifestyle tips, personal growth stories, and culinary delights.
              Start your journey with us and find inspiration in every post.
              Whether you're seeking new experiences, insightful advice, or
              simply a good read, our platform is designed to ignite your
              passion and expand your horizons. Join our community today and
              discover the stories that resonate with you.
            </p>
            <div className="input-wrapper">
              <Link to="/startwriting">
                <button className="btn btn-primary">
                  <span className="span">Start Writing</span>

                  <ion-icon
                    name="arrow-forward-outline"
                    aria-hidden="true"
                  ></ion-icon>
                </button>
              </Link>
            </div>
          </div>

        </div>
      </section>
    </>
  );
};

export default Hero;
