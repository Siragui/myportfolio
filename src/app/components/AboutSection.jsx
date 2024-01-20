"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>JavaScript, Typescript</li>
        <li>Node.js</li>
        <li>Python</li>
        <li>PHP</li>
        <li>Node.js </li>
        <li>React.js, Next.js & Vue.js </li>
        <li>CSS, Tailwind css, Bootstrap</li>
        <li>Laravel</li>
        <li>Django</li>
        <li>Docker, Git & Github</li>
        <li>MySql, PostgreSQL, MongoDB etc..</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>BEP en Électronique</li>
        <li>BAC-PRO en Informatique et Réseau </li>
        <li>Licence en Genie Informatique</li>
      </ul>
    ),
  },
  {
    title: "Outils",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>Adobe Photoshop</li>
        <li>Adobe Illustrator</li>
        <li>Figma</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/images/about-image.jpg" width={500} height={500} />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">À propos de moi</h2>
          <p className="text-base lg:text-lg text-justify">
            Je suis Siragui Mohamed, Graphiste et Développeur web Full Stack
            passionné. Mon expertise réside dans la fusion de l'esthétique
            visuelle et de la fonctionnalité web, créant ainsi des expériences
            en ligne mémorables. Avec une solide formation en développement web,
            je m'efforce de repousser les limites de l'innovation digitale pour
            donner vie à des projets uniques et percutants.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Compétence{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Éducation{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              {" "}
              Outils{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
