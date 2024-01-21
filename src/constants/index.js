import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Development",
      icon: web,
    },
    {
      title: "Next Js",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Big Data Analytics",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "SQL Database Internship",
      company_name: "Kalash Industry",
      icon: starbucks,
      iconBg: "#383E56",
      date: "March 2020 - April 2021",
      points: [
        "Creating link for React and database interaction, allowing data retrieval and updates.",
        "Structuring SQL tables to match React app's data model, minimizing redundancy.",
        "Safeguarding sensitive data through encryption, ensuring unauthorized access prevention.",
        "Improving SQL query efficiency, utilizing indexing and caching for faster data retrieval.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Web Development Course Experience",
      company_name: "Sylani Welfare",
      icon: tesla,
      iconBg: "#E6DEDD",
      date: "Jan 2023 - December 2023",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Big Data Anaytics",
      university_name: "UAF Faisalabad",
      icon: shopify,
      iconBg: "#383E56",
      date: "Sep 2022 - Jan 2023",
      points: [
        "Developing and maintaining languages using Pandas,Numpy and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Next Js",
      work_with: "Youtube",
      icon: meta,
      iconBg: "#E6DEDD",
      date: "Jan 2024 - Present",
      points: [
        "Developing and maintaining web applications using Next.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
       "I didn't think we could make a website that matches our product's beauty, but Ifza proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Ifza does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Ifza optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Student Management System",
      description:
      "The Student Management Dashboard is a React application designed for staff to organize, add, and edit student data, offering a user-friendly interface. It utilizes React, Redux, and routing, making it a robust solution for educational institutions.",  
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "firebase",
          color: "green-text-gradient",
        },
        {
          name: "bootstrap",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/Ifza-Yousaf-9/Hackathon",
    },
    {
      name: "social user",
      description:
      "A sleek HTML and CSS webpage for showcasing a user's profile, emphasizing a clean design, profile picture, bio, and links to social media profiles. Responsive and visually appealing, it's perfect for creating a concise online presence.",
      tags: [
        {
          name: "Html",
          color: "blue-text-gradient",
        },
        {
          name: "css",
          color: "green-text-gradient",
        },
        {
          name: "Bootstrap",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/",
    },
    {
      name: "Portfolio",
      description:
      "The Animated Portfolio, crafted with HTML and CSS, incorporates captivating animations to showcase skills, projects, and contact details. While Bootstrap was attempted, adjustments were made at specific points for improved alignment and aesthetics, ensuring a harmonious and visually striking presentation.",  
      tags: [
        {
          name: "Animation html",
          color: "blue-text-gradient",
        },
        {
          name: "css",
          color: "green-text-gradient",
        },
        {
          name: "Bootstrap",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };
  