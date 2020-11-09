import React from "react";
import "./Projects.css";
import FolderIcon from "@material-ui/icons/Folder";
import GitHubIcon from "@material-ui/icons/GitHub";
import CallMadeIcon from "@material-ui/icons/CallMade";
import { Helmet } from "react-helmet";
function Projects() {
  const projects = [
    {
      id: 0,
      title: "Messenger Clone",
      githubLink: "https://github.com/NajiZakaria/messenger-clone",
      websiteLink: "",
      functions: ["Responsive UI", "Sending & Receiving Message"],
      technologies: "React - Firebase",
    },
    {
      id: 1,
      title: "Hulu Clone",
      githubLink: "https://github.com/NajiZakaria/hulu-clone",
      websiteLink: "https://hulu-clone-4716e.web.app/",
      functions: ["Responsive UI", "Search films by Categuories"],
      technologies: "React - TMDB Api",
    },
    {
      id: 3,
      title: "Instagram Clone",
      githubLink: "https://github.com/NajiZakaria/Instagram-clone",
      websiteLink: "",
      functions: [
        "Authentication with Firebase",
        "Posting Images with caption",
      ],
      technologies: "React - Firebase",
    },
    {
      id: 4,
      title: "Slack Clone",
      githubLink: "https://github.com/NajiZakaria/slack-clone",
      websiteLink: "",
      functions: [
        "Beautiful UI",
        "Create Channels",
        "Chat function in each channel",
      ],
      technologies: "React - React Router - Firebase",
    },
    {
      id: 5,
      title: "Amazon Clone",
      githubLink: "https://github.com/NajiZakaria/amazon-clone",
      websiteLink: "",
      functions: [
        "Responsive UI",
        "Authentication with Firebase",
        "Add / Remove products from basket",
        "Checkout Page & Orders Page",
      ],
      technologies: "React - React Router - Firebase - Stripe - React Context API",
    },
  ];
  return (
    <div className="projects">
      <Helmet>
        <title>Naji Zakaria</title>
        <meta
          name="description"
          content="My name is Zakaria Naji and I am a Web/Mobile developer"
        />
      </Helmet>
      <h1>Projects</h1>
      <div className="projects__box">
        {projects.map((p) => (
          <div key={p.id} className="project">
            <div className="project__header">
              <FolderIcon />
              <div>
                {p.githubLink !== "" && (
                  <a
                    href={p.githubLink}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <GitHubIcon />
                  </a>
                )}
                {p.websiteLink !== "" && (
                  <a
                    href={p.websiteLink}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <CallMadeIcon />
                  </a>
                )}
              </div>
            </div>
            <div className="project__content">
              <h2>{p.title}</h2>
              {p.functions.map((func) => (
                <p>- {func}</p>
              ))}
            </div>
            <div className="project__bottom">
              <h3>{p.technologies}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
