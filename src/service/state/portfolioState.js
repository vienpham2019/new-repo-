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

// =========== project 4 ================
import projectBannerImage_4 from "../../images/portfolio/portfolio-4/portfolioBanner.png";
import portfolioDetail4_1 from "../../images/portfolio/portfolio-4/portfolioDetail1.png";
import portfolioDetail4_2 from "../../images/portfolio/portfolio-4/portfolioDetail2.png";
import portfolioDetail4_3 from "../../images/portfolio/portfolio-4/portfolioDetail3.png";

const portfolioInitState = {
  name: "Vien Pham",
  aboutMe:
    "Web Developer with a passion for learning new languages and technologies. My experience lies in building strong relationships and resolving critical work challenges. Throughout my career, I’ve earned a reputation as someone my manager and peers can depend on. I have a strong work ethic and am a trustworthy employee. Beyond this, I excel at pinpointing customer needs, implementing effective business solutions, and ensuring outstanding customer service.",
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
    "Ruby on Rails",
    "Java",
    "Python",
    "JavaScript",
    "AngularJS",
    "RxJS",
    "TypeScript",
    "ReactJS",
    "React Hooks",
    "Redux",
    "NodeJS",
    "Spring",
    "HTML",
    "CSS3+",
    "RESTful API",
    "JSON",
    "Bootstrap",
    "MySQL",
    "Semantic UI",
    "Express",
    "MongoDB",
    "GitHub",
  ],
  experienceLists: [
    {
      title: "Tech Support Associate",
      date: "June 2021 - Present",
      location: "Phoenix, AZ",
      company: "Infosys",
      jobDetails: [
        "Familiarity with Agile development methodologies.",
        "Experience with software design and development in a test-driven environment.",
        "Knowledge of coding languages (e.g. C++, Java, Python) and frameworks/systems(e.g. AngularJS, Git).",
        "Revolve around installing and repairing software and applications, troubleshooting and conducting regular tests and maintenance to ensure smooth workflow.",
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
      title: "vShop.",
      about: "An activewear/accessories e-commerce site for men and women.",
      projectDate: "01 March, 2020",
      tools: {
        "Front-end": "Angular - NgRx - HTML - CSS - Bootstrap",
        "Back-end": "NodeJS - Express - MongoDB - Heroku",
      },
      projectDetails: [
        "Built client-side with Angular/NgRx.",
        "Utilized NodeJS with API endpoints for Fetch requests and MongoDB for data persistence.",
        "Styled frontend with Bootstrap and custom CSS.",
        "Deployed application on Heroku.",
      ],
      projectLinks: [
        {
          icon: "fas fa-globe-americas",
          title: "Project_Demo",
          link: "https://v--shop.herokuapp.com/",
        },
        {
          icon: "fab fa-github",
          title: "GitHub",
          link: "https://v--shop.herokuapp.com/",
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
        "Create a favorite movie list, write reviews and share movie collections.",
      projectDate: "01 March, 2020",
      tools: {
        "Front-end": "ReactJS - Redux - HTML - CSS - Bootstrap",
        "Back-end": "Ruby on rails - Socket.io",
      },
      projectDetails: [
        "Utilized React/Redux for frontend.",
        "Used Ruby-on-Rails to design the backend with the MVC pattern and API for responding to fetch requests.",
        "Designed the frontend with Bootstrap and custom CSS.",
      ],
      projectLinks: [
        {
          icon: "fas fa-globe-americas",
          title: "Project_Demo",
          link: "https://the-movies-f6ace.web.app/",
        },
        {
          icon: "fab fa-github",
          title: "GitHub",
          link: "https://github.com/vienpham2019/The_Movies",
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
        "Utilized React and designed with custom Css for front-end.",
        "Deploy application to Firebase.",
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
    {
      title: "Vintage Village",
      about:
        "Vintage Village will exceed your expectations in every way. A serene setting where you can enjoy nature and relish luxury and comfort. And where there’s always something new to enjoy. A place where we’ll indulge your every wish and help you rediscover the simple things in life.",
      projectDate: "01 March, 2020",
      tools: {
        "Front-end": "ReactJS - Redux - HTML - CSS - Bootstrap",
        "Back-end": "NodeJS - Express - MongoDB - Heroku",
      },
      projectDetails: [
        "Utilized React/Redux for front-end.",
        "Deploy application on Heroku.",
        "Designed the frontend with Bootstrap and custom CSS.",
        "Used NodeJS for back-end and MongoDB for database.",
      ],
      projectLinks: [
        {
          icon: "fas fa-globe-americas",
          title: "Project_Demo",
          link: "https://beackresortsdemo.herokuapp.com/",
        },
        {
          icon: "fab fa-github",
          title: "GitHub",
          link: "https://github.com/vienpham2019/beachResort",
        },
      ],
      projectImages: [
        portfolioDetail4_1,
        portfolioDetail4_2,
        portfolioDetail4_3,
      ],
      projectBannerImage: projectBannerImage_4,
    },
  ],
};

export default portfolioInitState;
