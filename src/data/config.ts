const config = {
  title: "Akshay Kumar KN | Web Developer, Android APP Developer",
  description: {
    long: "Explore the portfolio of Akshay, a Web developer and creative technologist specializing in interactive web experiences, 3D animations, and innovative projects. Let's build something amazing together!",
    short:
      "Discover the portfolio of Akshay, a Web developer creating interactive web experiences and innovative projects.",
  },
  keywords: [
    "Akshay",
    "portfolio",
    "a Web developer",
    "creative technologist",
    "3D animations",
    "interactive websites",
    "web design",
    ],
  author: "Akshay Kumar KN",
  email: "metaoffical4@gmail.com",
  site: "#",

  // for github stars button
  githubUsername: "Akshay-appu",
  githubRepo: "3d-portfolio",

  get ogImg() {
    return this.site + "/assets/seo/og-image.png";
  },
  social: {
    twitter: "https://x.com/nothotchaddi",
    linkedin: "www.linkedin.com/in/akshay-kumar-kn-a35733236",
    instagram: "https://www.instagram.com/Unique_historiographer",
    facebook: "#",
    github: "#",
  },
};
export { config };
