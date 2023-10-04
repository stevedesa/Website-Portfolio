import {monkey, assistant, knight, doggies, vsss, sdmb, sdmw } from "./assets";


  
const experiences = [
{
  title: "Brand Ambassador - Robotics",
  company_name: "Vibrant Skill Set Solutions",
  icon: vsss, 
  iconBg: "#ffffff",
  date: "June 2016 - May 2017",
  point1: "Inspired and motivated students to pursue STEM research and build Robotic Projects using Embedded Systems.",
  point2: "Enhanced the Robotics and Programming Workshop curriculum to optimize learning and problem-solving outcomes.",
  point3: "Responsible for significantly boosting workshop attendance by attracting 1,000+ enthusiastic young students.",
},
{
  title: "University Front-desk Representative",
  company_name: "South Dakota School of Mines and Technology",
  icon: sdmb, 
  iconBg: "#001e4d",
  date: "Jan 2023 - Present",
  point1: "Efficiently managed front-desk operations of a school with 2,500+ students, ensuring smooth & organized operations.",
  point2: "Handled package delivery logistics, making sure all delivered packages were accurately distributed to students.",
  point3: "Effectively communicated with students, parents, and staff, fostering a welcoming environment.",
},
{
  title: "Front-end Web Developer",
  company_name: "South Dakota School of Mines and Technology", 
  icon: sdmw, 
  iconBg: "#ffffff",
  date: "May 2023 - Present",
  point1: "Edited and maintained University web pages, ensuring accuracy, clarity, and user-friendliness.",
  point2: "Collaborated with content creators and utilized HTML/CSS/JS to update information promptly and responsibly",
  point3: "Elevated the collective online experience for a user base exceeding 10,000+ students, parents, and staff members.",
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
      description: "Features Home Automation: control appliances remotely using the Assistant app or by using Voice Commands. Integrates a Voice Assistant with the ability to leverage the internet to answer a diverse range of questions.",
      image: assistant, 
      source_code_link: "https://github.com/stevedesa/Automated-Home-Assistant",
    },
  ];
  
  export { experiences, projects };