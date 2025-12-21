import {
  monkey,
  assistant,
  knight,
  doggies,
  vsss,
  sdmb,
  sdmw,
  cat,
  cnh,
  a2z,
} from './assets'

const about = [
  {
    text: "I'm a Computer Science Senior studying at the South Dakota School of Mines and Technology.",
  },
  {
    text: "I'm Proficient in Python, Kotlin, Java, C, C#, C++, Rust, HTML, CSS, JavaScript, TypeScript, SQL, R",
  },
  {
    text: 'I have experience working with a variety of Frameworks and Technologies, namely: ASP.NET, Flutter, Android Jetpack, Qt, Node.JS, Next.JS, React, Angular, Django, Kafka, Flink',
  },
  {
    text: "I'm proficient with a range of Developer Tools, including: Git, AWS, Azure, Google Cloud, Docker, Kubernetes, Figma, Linux, Power BI, Excel, Jira",
  },
  {
    text: 'I hold Certifications in the following: Advanced Technical Interview Prep (CodePath) | Android App and Game Development | Full-Stack Web Development Design and Development of IOT | Advanced MQTT Automation and IOT | Deep Learning, Neural Networks and AI Advanced Robotics based on AVR and Raspberry Pi | Design and Development of Embedded Systems and Robotics',
  },
  {
    text: 'Here are some of my Extracurriculars: First Year Student Peer Mentor, International Student Ambassador, Winner of numerous Robotics Competitions, Awarded Outstanding Junior at SDSMT, Co-authored a research paper leveraging data analytics to investigate COVID-19.',
  },
]

const experiences = [
  {
    title: 'Software Development Engineer Intern',
    company_name: 'Amazon',
    icon: a2z,
    iconBg: '#ffffff',
    date: 'May 2025 - August 2025',
    point1:
      'Developed new high-visibility, live-game features for the 2025 NBA season on Prime Video Sports',
  },
  {
    title: 'Software Engineer Intern',
    company_name: 'CNH Industrial',
    icon: cnh,
    iconBg: '#ffffff',
    date: 'August 2024 - May 2025',
    point1:
      'Integrated a new navigational system into the Operating System of the Viper Field Computer',
  },
  {
    title: 'Software Engineer Intern',
    company_name: 'CNH Industrial',
    icon: cnh,
    iconBg: '#ffffff',
    date: 'May 2024 - August 2024',
    point1:
      'Developed internal software tools that improved the workflow for the Autonomous Tractor development team',
  },
  {
    title: 'Software Research Intern',
    company_name: 'Caterpillar MineStar Consortium, SDSMT',
    icon: cat,
    iconBg: '#1a1a1a',
    date: 'Nov 2023 - May 2024',
    point1:
      'Built a full-stack dashboard to track performance of Cat® MineStar™ Detect system during its beta pilot',
  },
  {
    title: 'Front-end Web Developer',
    company_name: 'South Dakota School of Mines and Technology',
    icon: sdmw,
    iconBg: '#ffffff',
    date: 'May 2023 - May 2024',
    point1:
      'Volunteered as a developer and editor for the Ivanhoe International Center web pages.',
  },
  {
    title: 'University Front-desk Representative',
    company_name: 'South Dakota School of Mines and Technology',
    icon: sdmb,
    iconBg: '#001e4d',
    date: 'Jan 2023 - Dec 2023',
    point1: 'Managed and ensured smooth & organized front-desk operations.',
  },
  {
    title: 'Brand Ambassador - Robotics',
    company_name: 'Vibrant Skill Set Solutions',
    icon: vsss,
    iconBg: '#ffffff',
    date: 'June 2016 - May 2017',
    point1:
      'Inspired and motivated enthusiasts to pursue STEM and build robotic projects using embedded systems.',
  },
]

const projects = [
  {
    name: 'GAME OF WAR',
    description:
      'Simulates the Classic Card Game of War by allocating 52 random, non-recurring cards to each player. Determines the winner based on the player with the highest card count after playing through the entire deck.',
    image: doggies,
    source_code_link: 'https://github.com/stevedesa/Game-of-War',
  },
  {
    name: 'IMAGE EDITOR',
    description:
      'Edits PPM and PGM images by utilizing pixel manipulation and color transformation algorithms. Features include clockwise/counterclockwise rotation, horizontal/vertical flipping & conversion to sepia or grayscale.',
    image: monkey,
    source_code_link: 'https://github.com/stevedesa/Image-Editor',
  },
  {
    name: "KNIGHT'S ODYSSEY",
    description:
      'C++ Simulation to efficiently find the tour of a Knight on any size Chessboard from any Square. This is achieved by a recursive algorithm, aided by backtracking, using a brute-force, depth first search approach.',
    image: knight,
    source_code_link: 'https://github.com/stevedesa/Knights-Odyssey',
  },
  {
    name: 'AUTOMATED HOME ASSISTANT',
    description:
      'Features Home Automation: Control Appliances remotely using the Assistant app or by using Voice Commands. Integrates a Voice Assistant with the ability to leverage the internet to answer a diverse range of questions.',
    image: assistant,
    source_code_link: 'https://github.com/stevedesa/Automated-Home-Assistant',
  },
]

export { about, experiences, projects }
