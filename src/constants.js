import {monkey, assistant, knight, doggies, vsss, sdmb, sdmw, cat } from "./assets";


  
const experiences = [
{
  title: "Software Engineering Intern",
  company_name: "Caterpillar MineStar Consortium, SDSMT", 
  icon: cat, 
  iconBg: "#1a1a1a",
  date: "Nov 2023 - Present",
  point1: "Crafted and Deployed Dynamic Apps and Dashboards, leveraging API integration for Enhanced Functionality.",
  point2: "Collaborated with Executives worldwide, ensuring tailored Software Solutions aligned with Customer Requirements."
},
{
  title: "Front-end Web Developer",
  company_name: "South Dakota School of Mines and Technology", 
  icon: sdmw, 
  iconBg: "#ffffff",
  date: "May 2023 - Present",
  point1: "Edited and Maintained University Web Pages, ensuring Accuracy, Clarity, and User-Friendliness.",
  point2: "Elevated the Collective Online Experience for a User Base exceeding 10,000+ Students, Parents, and Staff Members.",
},
{
  title: "University Front-desk Representative",
  company_name: "South Dakota School of Mines and Technology",
  icon: sdmb, 
  iconBg: "#001e4d",
  date: "Jan 2023 - Dec 2023",
  point1: "Efficiently Managed front-desk operations of a school with 2,500+ Students, ensuring Smooth & Organized Operations.",
  point2: "Effectively Communicated with Students, Parents, and Staff, fostering a Welcoming Environment.",
},  
{
  title: "Brand Ambassador - Robotics",
  company_name: "Vibrant Skill Set Solutions",
  icon: vsss, 
  iconBg: "#ffffff",
  date: "June 2016 - May 2017",
  point1: "Inspired and Motivated Enthusiasts to pursue STEM and build Robotic Projects using Embedded Systems.",
  point2: "Improved Robotics and Programming Workshop Curriculum to Optimize Learning and Problem-Solving Outcomes.",
},
];

  const projects = [
    {
      name: "GAME OF WAR",
      description: "Simulates the Classic Card Game of War by allocating 52 random, non-recurring cards to each player. Determines the winner based on the player with the highest card count after playing through the entire deck.",
      image: doggies, 
      source_code_link: "https://github.com/stevedesa/Game-of-War",
    },
    {
      name: "IMAGE EDITOR",
      description: "Edits PPM and PGM images by utilizing pixel manipulation and color transformation algorithms. Features include clockwise/counterclockwise rotation, horizontal/vertical flipping & conversion to sepia or grayscale.",
      image: monkey,
      source_code_link: "https://github.com/stevedesa/Image-Editor",
    },
    {
      name: "KNIGHT'S ODYSSEY",
      description: "C++ Simulation to efficiently find the tour of a Knight on any size Chessboard from any Square. This is achieved by a recursive algorithm, aided by backtracking, using a brute-force, depth first search approach.",
      image: knight, 
      source_code_link: "https://github.com/stevedesa/Knights-Odyssey",
    },
    {
      name: "AUTOMATED HOME ASSISTANT",
      description: "Features Home Automation: Control Appliances remotely using the Assistant app or by using Voice Commands. Integrates a Voice Assistant with the ability to leverage the internet to answer a diverse range of questions.",
      image: assistant, 
      source_code_link: "https://github.com/stevedesa/Automated-Home-Assistant",
    },
  ];
  
  export { experiences, projects };