import project1 from "../assets/projects/project-1.webp";
import project2 from "../assets/projects/project-2.webp";
import project3 from "../assets/projects/project-3.webp";

export const HERO_CONTENT =
  "I am a 2nd year B-tech student with a strong passion for web development, proficient in HTML, CSS, JavaScript, and React. An avid reader, I constantly seek to expand my knowledge and skills in technology. I am also fluent in English, Hindi, Korean, with a solid grasp of programming languages such as Python, C, C++, and Java. My goal is to deepen my expertise in software engineering and contribute to innovative projects that leverage technology to solve real-world problems.";

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. With 5 years of professional experience, I have worked with a variety of technologies, including React, Next.js, Node.js, MySQL, PostgreSQL, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const PROJECTS = [
  {
    title: "Weather-Dashboard",
    image: project1,
    description:
      "a web app that displays real-time weather info like temperature, humidity, and a 5-day forecast using APIs.",
      link:"https://github.com/nika7031/Weather-board" ,
    technologies: ["HTML", "CSS", "React", "Java"],
  },
  {
    title: "Spotify-clone",
    image: project2,
    description:
      "A Spotify Clone is a music streaming web app that mimics Spotify's core features, including browsing songs, playing music, and creating playlists. Built using React, it integrates with the Spotify API for real-time music data and user authentication.",
      link:"https://github.com/nika7031/spotify-clone", 
    technologies: ["HTML", "CSS", "JavaScript", "React"],
  },
  {
    title: "Portfolio Website",
    image: project3,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "CSS", "React", "Bootstrap"],
  },
];

export const CONTACT = {
  phoneNo: "+91 9910508386 ",
  email: "sparnika1011@gmail.com",
};
