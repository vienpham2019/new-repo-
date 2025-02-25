// =========== project 1 ================
import projectBannerImage_1 from "../../images/portfolio/portfolio-1/portfolioBanner.png";
import portfolioDetail1_1 from "../../images/portfolio/portfolio-1/portfolioDetail1.png";
import portfolioDetail1_2 from "../../images/portfolio/portfolio-1/portfolioDetail2.png";
import portfolioDetail1_3 from "../../images/portfolio/portfolio-1/portfolioDetail3.png";
import portfolioDetail1_4 from "../../images/portfolio/portfolio-1/portfolioDetail4.png";
import portfolioDetail1_5 from "../../images/portfolio/portfolio-1/portfolioDetail5.png";
// =========== project 2 ================
import projectBannerImage_2 from "../../images/portfolio/portfolio-2/portfolioBanner.png";
import portfolioDetail2_1 from "../../images/portfolio/portfolio-2/portfolioDetail1.png";
import portfolioDetail2_2 from "../../images/portfolio/portfolio-2/portfolioDetail2.png";
import portfolioDetail2_3 from "../../images/portfolio/portfolio-2/portfolioDetail3.png";
import portfolioDetail2_4 from "../../images/portfolio/portfolio-2/portfolioDetail4.png";
import portfolioDetail2_5 from "../../images/portfolio/portfolio-2/portfolioDetail5.png";

// =========== project 3 ================
import projectBannerImage_3 from "../../images/portfolio/portfolio-3/portfolioBanner.png";
import portfolioDetail3_1 from "../../images/portfolio/portfolio-3/portfolioDetail1.png";
import portfolioDetail3_2 from "../../images/portfolio/portfolio-3/portfolioDetail2.png";
import portfolioDetail3_3 from "../../images/portfolio/portfolio-3/portfolioDetail3.png";
import portfolioDetail3_4 from "../../images/portfolio/portfolio-3/portfolioDetail4.png";

const portfolioInitState = {
  name: "Vien Pham",
  aboutMe:
    "I am a Web Developer with a passion for learning new languages and technologies. My experience includes building strong relationships and resolving critical work challenges. Throughout my career, I have earned a reputation as a dependable colleague among my managers and peers. I am known for my strong work ethic and trustworthiness. Additionally, I excel at identifying customer needs, implementing effective business solutions, and delivering outstanding customer service.",
  email: "vienpham2019@gmail.com",
  phone: "(502) 296 0606",
  location: "Houston, TX",
  links: [
    [
      "fab fa-linkedin",
      "LinkedIn",
      "https://www.linkedin.com/in/vien-pham-7529931a5/",
    ],
    ["fab fa-blogger-b", "Blog", "https://medium.com/@vienpham2019"],
    ["fab fa-github", "GitHub", "https://github.com/vienpham2019"],
  ],
  skills: [
    "JavaScript",
    "TypeScript",
    "ReactJS",
    "React Hooks",
    "Redux",
    "NodeJS",
    "Express",
    "HTML",
    "CSS3+",
    "RESTful API",
    "JSON",
    "Bootstrap",
    "MySQL",
    "Semantic UI",
    "MongoDB",
    "GitHub",
  ],
  experienceLists: [
    {
      title: "Production Support Associate",
      date: "June 2021 - Present",
      location: "Phoenix, AZ",
      company: "Infosys",
      jobDetails: [
        "Installed and repaired critical software applications, reducing system downtime by ~50% and boosting overall productivity by 15%.",
        "Conducted regular software tests and maintenance with JUnit and Jest, enhancing system stability by 20% and preventing 10 potential failures per month, according to system stability metrics and failure logs.",
        "Worked with coding languages (Node.js, Java, Python) and the ReactJS framework to develop new features, and applied Agile development methodology to accelerate delivery time, which contributed to an increase in 15% client satisfaction.",
      ],
    },
  ],
  educations: [
    {
      title: "Flatiron School",
      location: "Houston, TX",
      date: "January 2020 - May 2020",
      description:
        "Full Stack Web Development, Ruby on Rails and JavaScript immersive program",
    },
    {
      title: "Lone Star Community College",
      location: "Woodland, TX",
      date: "January 2016 - May 2019",
      description:
        "Completed coursework towards an Associate’s Degree in Software Engineering",
    },
  ],
  projects: [
    {
      title: "Vmovie",
      about:
        "Developed a booking system allowing users to reserve movie tickets, order food and drinks, and manage various system aspects through admin access, enhancing user convenience and operational efficiency.",
      projectDate: "06 August, 2024",
      tools: {
        "Front-end": "ReactJS - Redux - HTML - CSS - Tailwind",
        "Back-end": "NodeJS - Express - MongoDB",
      },
      projectDetails: [
        "Developed a booking system allowing users to reserve movie tickets, order food and drinks, and manage various system aspects through admin access, enhancing user convenience and operational efficiency.",
        "Built the frontend with React/Redux and designed it using TailwindCSS, creating a responsive and visually appealing user interface",
        "Implemented the backend with Node.js and Express using MVC pattern, optimizing API response times by 20% through caching and asynchronous processing.",
      ],
      projectLinks: [
        {
          icon: "fas fa-globe-americas",
          title: "Project_Demo",
          link: "https://vmovie-client.onrender.com",
        },
        {
          icon: "fab fa-github",
          title: "Front-end",
          link: "https://github.com/vienpham2019/Vmovie_client",
        },
        {
          icon: "fab fa-github",
          title: "Back-end",
          link: "https://github.com/vienpham2019/Vmovie_api",
        },
      ],
      projectImages: [
        portfolioDetail1_1,
        portfolioDetail1_2,
        portfolioDetail1_3,
        portfolioDetail1_4,
        portfolioDetail1_5,
      ],
      projectBannerImage: projectBannerImage_1,
    },
    {
      title: "The Movies",
      about:
        "allows users to create a favorite movie list, write reviews, and share their movie collections.",
      projectDate: "01 March, 2020",
      tools: {
        "Front-end": "ReactJS - Redux - HTML - CSS - Bootstrap",
        "Back-end": "NodeJS - Express - MongoDB",
      },
      projectDetails: [
        "Built a real-time chat feature using Socket.io, enhancing user interaction by allowing friends to chat directly within the application.",
        "Developed the frontend with React/Redux and Bootstrap, Creating a responsive UI that enabled users to manage favorite movie lists, write reviews, and share collections, boosting engagement and content sharing.",
        "Designed the backend with Node.js and Express following the MVC pattern, streamlining API responses for fetch requests and improving application architecture.",
      ],
      projectLinks: [
        {
          icon: "fas fa-globe-americas",
          title: "Project_Demo",
          link: "https://the-movies-client.onrender.com",
        },
        {
          icon: "fab fa-github",
          title: "Front-end",
          link: "https://github.com/vienpham2019/The_movies_client",
        },
        {
          icon: "fab fa-github",
          title: "Back-end",
          link: "https://github.com/vienpham2019/The_movies_api",
        },
      ],
      projectImages: [
        portfolioDetail2_1,
        portfolioDetail2_2,
        portfolioDetail2_3,
        portfolioDetail2_4,
        portfolioDetail2_5,
      ],
      projectBannerImage: projectBannerImage_2,
    },
    {
      title: "Maze Generator",
      about:
        "Maze generation algorithms are automated methods for the creation of mazes.",
      projectDate: "01 March, 2020",
      tools: {
        "Front-end": "ReactJS - Redux - HTML - CSS - Bootstrap - Firebase",
        "Back-end": "",
      },
      projectDetails: [
        "Utilized Developed a maze generator web app with selectable algorithms (e.g., DFS, Prims’s), enhancing user engagement through customizable experiences.",
        "Implemented controls for maze size, speed, and search algorithms (A*, BFS, DFS, etc.), enhancing flexibility and educational value.",
        "Optimized maze generation and pathfinding, reducing computational time by 13% through efficient algorithms",
      ],
      projectLinks: [
        {
          icon: "fas fa-globe-americas",
          title: "Project_Demo",
          link: "https://mazegenerator-a4b1a.firebaseapp.com/",
        },
        {
          icon: "fab fa-github",
          title: "GitHub",
          link: "https://github.com/vienpham2019/Maze_generator",
        },
      ],
      projectImages: [
        portfolioDetail3_1,
        portfolioDetail3_2,
        portfolioDetail3_3,
        portfolioDetail3_4,
      ],
      projectBannerImage: projectBannerImage_3,
    },
  ],
};

export default portfolioInitState;
