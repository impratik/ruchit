import React from "react";
import ProjectList from "./ProjectList";
import SportsAdda from '../../../assets/sportsadda.jpg';
import Fantacy from '../../../assets/fantasygully.jpg'; 
import AndroidLogo from '../../../assets/androidLogo.jpg';
import BodDog from '../../../assets/bodog.jpg';
import Fifa from '../../../assets/fifa.jpg';
import Isl from '../../../assets/isl.jpg';
import Jfc from '../../../assets/jfc.jpg';
import Pkl from '../../../assets/pkl.jpg';
import Super from '../../../assets/super.jpg';
import Yahoo from '../../../assets/yahoo.jpg';
const Project = () => {
  const PROJECTS = [
    {
      id: "u1",
      name: "Sportsadda",    
      image: SportsAdda,
      description: "Get access to match previews, reports, exclusive videos, special features, engaging podcasts for Cricket, Football and Kabaddi, in addition to real-time match updates and a whole lot more!",
    },
    {
      id: "u2",
      name: "fantacy",
      image: Fantacy,
      description: "Fantacy",
    },
    {
      id: "u3",
      name: "JFC",
      image: Jfc,
      description: "JFC",
    },
    {
        id: "u4",
        name: "Bodog",
        image: BodDog,
        description: "Bodog",
      },
      {
        id: "u5",
        name: "ISL",
        image: Isl,
        description: "ISL",
      },
      {
        id: "u6",
        name: "Yahoo",
        image: Yahoo,
        description: "Yahoo",
      },
  ];

  return <ProjectList items={PROJECTS} />;
};

export default Project;
