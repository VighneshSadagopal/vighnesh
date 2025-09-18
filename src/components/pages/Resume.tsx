"use client";

import TimelineList from "../molecules/TimelineList";
import { BookOutline } from 'react-ionicons'
import { MedalOutline } from 'react-ionicons'
import { GlobeOutline } from 'react-ionicons'


const education = [
    {
      title: "Dr. D.Y. Patil Institute of Technology, Pune",
      period: "2018 — 2021",
      description:
        "Bachelor in Computer Science",
    },
  ];

  const experience = [
    {
      title: "Full Stack Engineer - Drupal",
      period: "2023 — Present",
      description:
        "Worked on enterprise eCommerce sites in Drupal, with strong focus on SEO enhancements. Enhanced AI capabilities within Drupal and gained experience collaborating with pharma and medical clients, understanding their projects and resolving complex issues. Hands-on experience with Acquia Cloud platform, including internal workflows through the terminal. Strong expertise in debugging with PHP and JavaScript.",
    },
    {
      title: "Associate Full Stack Engineer",
      period: "2022 — 2023",
      description:
        "Developed Drupal sites and core feature integrations, building highly integrated analytics platforms across multiple sites to track user traction (both server-side and client-side). Designed and implemented complex SOLR searches. Built frontend components with a component-based architecture using Storybook, Tailwind, Drupal, and React.",
    },
    {
      title: "Drupal Intern",
      period: "2021 — 2022",
      description:
        "Acquired foundational knowledge of Drupal plugins and modules. Contributed actively to open-source initiatives, including Drupal core contributions.",
    },
  ];

  const opensource = [
    {
        title: "Steering Committee Member – Drupalers Association Pune",
        period: "2025 — Present",
        description:
            "Contributed to planning and decision-making for Drupal Camp Pune and regular community meetups throughout the year.",
    },
    {
        title: "Organizer & Lead – Drupal Pune Camp",
        period: "2025 — Present",
        description:
            "Led the design team, creating graphics and visual assets for the event. Took charge of Instagram marketing, posting engaging content to boost participation and community engagement.",
    },
    {
        title: "Volunteer - Drupal Pune Community",
        period: "2023 — Present",
        description:
            "Supported the team with website updates, on-site registration assistance, and marketing content creation to ensure smooth event execution.",
    },
    {
      title: "Drupal Contributor",
      period: "2021 — Present",
      description:
        "Active contributor and maintainer to Drupal core and various modules, focusing on bug fixes, feature enhancements, and documentation improvements. Regularly participate in Contribution Sprints.",
    },
  ]

  const skills = [
    { skillName: "Drupal", proficiency: "Expert", percentage: 90 },
    { skillName: "AI", proficiency: "Intermediate", percentage: 60 },
    { skillName: "Acquia Cloud", proficiency: "Advanced", percentage: 80 },
    { skillName: "JS (React + Next)", proficiency: "Intermediate", percentage: 60 },
    { skillName: "Problem Solving & Debugging", proficiency: "Advanced", percentage: 85 },
  ];

export default function Resume() {
  return (
    <article className="resume active" data-page="resume">
      <header>
        <h2 className="h2 article-title">Resume</h2>
      </header>

      {/* Education */}
      <section className="timeline">
        <div className="title-wrapper">
          <div className="icon-box">
            <BookOutline
                color={'#ffda6b'} 
                title={'book outline'}
                height="20px"
                width="20px"
                />
          </div>
          <h3 className="h3">Education</h3>
        </div>
        <TimelineList items={education} />
      </section>

      {/* Experience */}
      <section className="timeline">
        <div className="title-wrapper">
          <div className="icon-box">
          <MedalOutline
            color={'#ffda6b'} 
            title={'ecperienceicon'}
            height="20px"
            width="20px"
            />
            </div>
          <h3 className="h3">Experience</h3>
        </div>
        <TimelineList items={experience} />
      </section>

        {/* Open Source Contributions */}
        <section className="timeline">
        <div className="title-wrapper">
          <div className="icon-box">
          <GlobeOutline
            color={'#ffda6b'} 
            title={'opensource'}
            height="20px"
            width="20px"
            />
          </div>
          <h3 className="h3">Open Source Contributions</h3>
        </div>
        <TimelineList items={opensource} />
        </section>

      {/* Skills (kept inline for now) */}
      <section className="skill">
        <h3 className="h3 skills-title">My skills</h3>
        <ul className="skills-list content-card">
            {skills.map((skill, index) => (
                <li className="skills-item" key={index}>
                <div className="title-wrapper">
                    <h5 className="h5">{skill.skillName} - {skill.proficiency}</h5>
                    <data value={skill.percentage}>{skill.percentage}%</data>
                </div>
                <div className="skill-progress-bg">
                    <div className="skill-progress-fill" style={{ width: `${skill.percentage}%` }} />
                </div>
                </li>
            ))}
        </ul>
      </section>
    </article>
  );
}
