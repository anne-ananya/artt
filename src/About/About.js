import "./About.css";

import ProfilePicture from "./profile.jpg";

const About = () => {
  return (
    <div className="about">
      <div className="columns">
        <div className="heading">
          <h1>Hi, I’m Arkamito.</h1>
        </div>
        <div className="info">
          <p>
            I am an engineer. I try to draw in my leisure time and bring out the artist in me.
          </p>
          <p> I
            love to observe the world of artists, which easily keeps me humble
            and ever curious.
          </p>
        </div>
        <div className="profile">
          <img
            className="profilePicture"
            src={ProfilePicture}
            alt="Arkamito Sen"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
