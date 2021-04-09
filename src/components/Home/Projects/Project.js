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
      id: "1",
      name: "Sportsadda",    
      image: SportsAdda,
      description: "Get access to match previews, reports, exclusive videos, special features, engaging podcasts for Cricket, Football and Kabaddi, in addition to real-time match updates and a whole lot more!",
      type: "Android-Kotlin",
      role: "Frontend Devlopement",
      logocredit: "©Sportz Interactive",
      detail:"Live Scores: Get LIVE match updates for all major international and domestic Cricket tournaments, top Football leagues and major Kabaddi events globally.",
      link: "https://play.google.com/store/apps/details?id=com.stumped.app"
    },
    {
      id: "2",
      name: "Fantasy",
      image: Fantacy,
      description: "Fantasy gaming is all about using your skills and sports knowledge to create your own virtual teams. Fantasy sports are strategy-based games, i.e. you need to select your players before the match begins",
      type: "Android-Kotlin",
      role: "Frontend Devlopement",
      logocredit: "©Sportz Interactive",
      detail:"It aims to educate the user about all their available options and helps maximise their profits. Users can filter their search based on the parameters such as entry value, prize pool,spots in a room and platforms to be able to choose the perfect gaming rooms for them based on their confidence level.",
      link: ""
    },
    {
      id: "3",
      name: "JFC",
      image: Jfc,
      description: "With the Jamshedpur FC app, fans can access a plethora of features including Scores, fixtures, match centre to keep track of every game",
      type: "Android-Kotlin",
      role: "Frontend Devlopement",
      logocredit: "©Sportz Interactive",
      detail:"With the Jamshedpur FC app, fans can access a plethora of features including Scores, fixtures, match centre to keep track of every game.News from the team and around the league with exclusive articles and videos.",
      link: "https://play.google.com/store/apps/details?id=com.sportz.jfc"
    },
    {
        id: "4",
        name: "Bodog",
        image: BodDog,
        description: "Bodog is an intuitive prediction app, created by an experienced sports team to help you get the most out of your Cricket bets. ",
        type: "Android-Kotlin",
        role: "Frontend Devlopement",
        logocredit: "©Sportz Interactive",
        detail:"Bodog Cricket Pick and Win is the easiest way to follow along your favourite cricket stars,teams and match action.",
        link: ""
      },
      {
        id: "5",
        name: "ISL",
        image: Isl,
        description: "The official App of the Hero Indian Super League which provides you direct access to the latest news, videos and photo galleries and ISL fixtures",
        type: "Android-Kotlin",
        role: "Frontend Devlopement",
        logocredit: "©Sportz Interactive",
        detail:"App provides you direct access to the latest news, videos and photo galleries, ISL fixtures, real-time match scores, standings information as well as in-depth game stats in the all new Match Centre.",
        link: "https://play.google.com/store/apps/details?id=com.isl.sifootball"
      },
      {
        id: "6",
        name: "Yahoo",
        image: Yahoo,
        description: "With the all new Yahoo Cricket App, stay up to date with all the latest happenings from the world of cricket",
        type: "Android-Kotlin",
        role: "Frontend Devlopement",
        logocredit: "©Sportz Interactive",
        detail:"From real-time news updates, intensive ball by ball commentary, personalised team section, archival game statistics to all things from the realm of cricket fantasy, the all new Yahoo Cricket App has you covered!",
        link: "https://play.google.com/store/apps/details?id=com.si.yahoocricket"
      },
  ];

  return <div className="list-container">
    <ProjectList items={PROJECTS} />
  </div>;
};

export default Project;
