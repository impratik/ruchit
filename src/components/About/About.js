import React from "react";
import Profile from "../../assets/social/about.jpg";
import "./About.css";

const About = () => {
  return (
    <div className="about-main">
      <div className="about-container">
        <div className="profile">
          <img src={Profile} />
        </div>
        <div className="about">
          <h2> About</h2>
          <h4>
            I'm a 25 year old Android Developer from Mumbai, India. Work with
            other developers, designers and product/business managers to develop
            new features consistent with product roadmap.
          </h4>
          <h2> How I got here?</h2>
          <h4>
            I have an (B.Sc)Bachelor of Science degree in Information Technology
            from the University of Mumbai in India, a program that gave me a
            thorough understanding of the software development process.
            Initially I joined Superwise organization as a front-end Android
            developer. Over there we worked on multiple projects and gained a
            lot of information on Android Development including different
            Architecture. I realized I wanted to get more Education on
            Information Tehnology so I joined the Sathaye College for Masters of
            Science in Information Technology(M.Sc.IT). After couple of years I
            moved to different organization which is Sports Interactive. Over
            there I got a chance to explore the sports domain which I always
            want to and I loved It. Over there I understand working with
            Designers, Product Managers, as well as front-end development and
            have the skills and experience to connect them all. I'm looking
            forward to working in a fast-paced, collaborative environment to
            build beautiful and enjoyable applications. In my spare time you can
            find me playing Cricket and Chess.
          </h4>
        </div>
      </div>
      <div className="tech">
        <table className="styled-table">
          <tr>
            <td> Tech</td>
            <td> Java </td>
            <td className="left"> Kotlin </td>
            <td> React-Native</td>
          </tr>
          {/* <tr>
                <td  className="left"> Tools</td>
              
              </tr> */}
        </table>
      </div>
    </div>
  );
};

export default About;
