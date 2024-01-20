"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Mon Portfolio V2 Next.js",
    description: "C'est projet réalisée avec next js, tailwind css et framer motion",
    image: "/images/projects/1.png",
    tag: ["All","Front-End"],
    previewUrl: "/../images/projects/1.png",
    gitUrl: "https://github.com/Siragui/Siragui-portfolio.git",
  },
  {
    id: 2,
    title: "Unipro Cloud Learning",
    description: "Project de Platforme E-learning pour mon université céer avec Laravel 10 et Bootstrap 5",
    image: "/images/projects/2.png",
    tag: ["All", "Full-Stack"],
    gitUrl: "https://github.com/Siragui/uniprocloudv2.git",
    previewUrl: "/../images/projects/2.png",
  },
  {
    id: 3,
    title: "Site E-commerce ",
    description: "Un site e commerce avec react js et MUI",
    image: "/images/projects/3.png",
    tag: ["All", "Front-End"],
    gitUrl: "/",
    previewUrl: "/images/projects/3.png",
  },
  {
    id: 4,
    title: "API TMDB Films et Series",
    description: "Un site pour suivre les actu du cinema, JavaScript Html et Css avec l'api de TMDB pour les donnees ",
    image: "/images/projects/4.png",
    tag: ["All", "Front-End"],
    gitUrl: "/",
    previewUrl: "/images/projects/4.png",
  },
 
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        Mes Projets et Réalisation
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Front-End"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Full-Stack"
          isSelected={tag === "Mobile"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
