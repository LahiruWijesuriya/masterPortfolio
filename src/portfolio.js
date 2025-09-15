/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: true, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Lahiru Wijesuriya's Portfolio",
  description:
    "Senior Platform & DevOps Engineer with 5+ years of experience architecting and implementing scalable cloud infrastructure and DevOps solutions. Specializing in AWS, Kubernetes, and platform engineering.",
  og: {
    title: "Lahiru Wijesuriya Portfolio",
    type: "website",
    url: "https://lahiruwijesuriya.github.io/",
  },
};

//Home Page
const greeting = {
  title: "Lahiru Wijesuriya",
  logo_name: "LahiruWijesuriya",
  nickname: "lahiru_w",
  subTitle:
    "Senior Platform & DevOps Engineer with 5+ years of experience architecting and implementing scalable cloud infrastructure solutions. Passionate about building robust, automated systems that drive innovation and operational excellence.",
  resumeLink:
    "https://drive.google.com/file/d/1nTn0THckgN7um6whjlDAer9RnOAxkwnC/view?usp=sharing",
  portfolio_repository: "https://github.com/LahiruWijesuriya/masterPortfolio",
  githubProfile: "https://github.com/LahiruWijesuriya",
};

const socialMediaLinks = [
  /* Your Social Media Link */
  // github: "https://github.com/LahiruWijesuriya",
  // linkedin: "https://www.linkedin.com/in/lahiru-w/",
  // gmail: "lwijesuriya97@gmail.com",
  // gitlab: "https://gitlab.com/ashutoshhathidara98",
  // facebook: "https://www.facebook.com/laymanbrother.19/",
  // twitter: "https://twitter.com/ashutosh_1919",
  // instagram: "https://www.instagram.com/layman_brother/"

  {
    name: "Github",
    link: "https://github.com/LahiruWijesuriya",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/lahiru-w/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "Gmail",
    link: "mailto:lwijesuriya97@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
];

const skills = {
  data: [
    {
      title: "DevOps & Platform Engineering",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Architecting and implementing scalable cloud infrastructure on AWS with 5+ years of experience",
        "⚡ Building and managing CI/CD pipelines for automated deployment and continuous integration",
        "⚡ Container orchestration with Kubernetes and Docker for microservices architecture",
        "⚡ Infrastructure as Code using Terraform, CloudFormation, and automated provisioning",
      ],
      softwareSkills: [
        {
          skillName: "AWS",
          fontAwesomeClassname: "simple-icons:amazonaws",
          style: {
            color: "#FF9900",
          },
        },
        {
          skillName: "Kubernetes",
          fontAwesomeClassname: "simple-icons:kubernetes",
          style: {
            color: "#326CE5",
          },
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: {
            color: "#1488C6",
          },
        },
        {
          skillName: "Terraform",
          fontAwesomeClassname: "simple-icons:terraform",
          style: {
            color: "#623CE4",
          },
        },
        {
          skillName: "Jenkins",
          fontAwesomeClassname: "simple-icons:jenkins",
          style: {
            color: "#D24939",
          },
        },
      ],
    },
    {
      title: "Business Automation & AI Solutions",
      fileName: "DesignImg",
      skills: [
        "⚡ Developing highly valuable AI agents for small to medium businesses",
        "⚡ Enterprise AI integerations within the cloud ecosystems",
        "⚡ Workflow automation consulting and implementation",
      ],
      softwareSkills: [
        {
          skillName: "n8n",
          fontAwesomeClassname: "simple-icons:n8n",
          style: {
            color: "#FF2BC2",
          },
        },
        {
          skillName: "Anthropic Claude ",
          fontAwesomeClassname: "simple-icons:claude",
          style: {
            color: "#F24E1E",
          },
        },
        {
          skillName: "Supabase",
          fontAwesomeClassname: "simple-icons:supabase",
          style: {
            color: "#FF7C00",
          },
        },
        {
          skillName: "Vercel",
          fontAwesomeClassname: "simple-icons:vercel",
          style: {
            color: "#000000",
          },
        },
      ],
    },
    {
      title: "Programming & Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Proficient in Python, Bash scripting, and Infrastructure as Code languages",
        "⚡ Experience with web development technologies and modern frameworks",
        "⚡ Database management and integration with cloud-native solutions",
        "⚡ API development and microservices architecture design",
      ],
      softwareSkills: [
        {
          skillName: "Python",
          fontAwesomeClassname: "simple-icons:python",
          style: {
            color: "#3776AB",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "devicon-plain:nodejs-wordmark",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "PostgreSQL",
          fontAwesomeClassname: "simple-icons:postgresql",
          style: {
            color: "#336791",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#47A248",
          },
        },
        {
          skillName: "Git",
          fontAwesomeClassname: "simple-icons:git",
          style: {
            color: "#F05032",
          },
        },
      ],
    },
    {
      title: "Cloud Architecture & Data",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Designing and implementing cloud-native data pipelines and analytics solutions",
        "⚡ Experience with Snowflake data warehousing and cloud data architecture",
        "⚡ Building scalable data processing systems on AWS with serverless technologies",
        "⚡ Implementing monitoring, logging, and observability solutions for distributed systems",
      ],
      softwareSkills: [
        {
          skillName: "Snowflake",
          fontAwesomeClassname: "simple-icons:snowflake",
          style: {
            color: "#29B5E8",
          },
        },
        {
          skillName: "Prometheus",
          fontAwesomeClassname: "simple-icons:prometheus",
          style: {
            color: "#E6522C",
          },
        },
        {
          skillName: "Grafana",
          fontAwesomeClassname: "simple-icons:grafana",
          style: {
            color: "#F46800",
          },
        },
        {
          skillName: "ElasticSearch",
          fontAwesomeClassname: "simple-icons:elasticsearch",
          style: {
            color: "#005571",
          },
        },
        {
          skillName: "Redis",
          fontAwesomeClassname: "simple-icons:redis",
          style: {
            color: "#DC382D",
          },
        },
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "AWS",
      iconifyClassname: "simple-icons:amazonaws",
      style: {
        color: "#F79F1B",
      },
      // profileLink: "https://leetcode.com/layman_brother/",
    },
    {
      siteName: "Python",
      iconifyClassname: "simple-icons:python",
      style: {
        color: "#2EC866",
      },
      // profileLink: "https://www.hackerrank.com/layman_brother",
    },
    {
      siteName: "Snowflake",
      iconifyClassname: "simple-icons:snowflake",
      style: {
        color: "#5B4638",
      },
      // profileLink: "https://www.codechef.com/users/ashutosh_1919",
    },
    {
      siteName: "Terraform",
      iconifyClassname: "simple-icons:terraform",
      style: {
        color: "#1F8ACB",
      },
      // profileLink: "http://codeforces.com/profile/layman_brother",
    },
    {
      siteName: "n8n",
      iconifyClassname: "simple-icons:n8n",
      style: {
        color: "#323754",
      },
      // profileLink: "https://www.hackerearth.com/@ashutosh391",
    },
    {
      siteName: "JavaScript",
      iconifyClassname: "simple-icons:javascript",
      style: {
        color: "#20BEFF",
      },
      // profileLink: "https://www.kaggle.com/laymanbrother",
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "Queensland University of Technology (QUT)",
      subtitle: "Bachelor's Degree",
      logo_path: "iu_logo.png",
      alt_name: "QUT",
      duration: "2015 - 2020",
      descriptions: [
        "⚡ Studied comprehensive software engineering, computer science fundamentals, and system architecture.",
        "⚡ Specialized in cloud computing, distributed systems, and platform engineering technologies.",
        "⚡ Received QUT Dean's Executive Commendation for Academic Excellence, recognizing outstanding academic performance.",
        "⚡ Gained practical experience in DevOps practices, CI/CD pipelines, and infrastructure automation.",
      ],
      website_link: "https://www.qut.edu.au/",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "AWS Certified Solutions Architect",
      subtitle: "- Associate Level",
      logo_path: "aws.png",
      certificate_link: "#",
      alt_name: "Amazon Web Services",
      color_code: "#ffffff",
    },
    {
      title: "Kubernetes Learning Certificate",
      subtitle: "- Container Orchestration",
      logo_path: "kubernetes.png",
      certificate_link: "#",
      alt_name: "Kubernetes",
      color_code: "#ffffff",
    },
    {
      title: "Snowflake Academy Certification",
      subtitle: "- Associate Architect",
      logo_path: "snowflake.png",
      certificate_link: "#",
      alt_name: "Snowflake",
      color_code: "#ffffff",
    },
    {
      title: "AWS Knowledge: Networking Core",
      subtitle: "- Networking Fundamentals",
      logo_path: "aws.png",
      certificate_link: "#",
      alt_name: "Amazon Web Services",
      color_code: "#ffffff",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work, Volunteership and Professional Development",
  description:
    "I have 5+ years of experience as a Platform & DevOps Engineer, specializing in cloud infrastructure architecture on AWS. I focus on building scalable, automated systems that drive operational excellence and innovation in enterprise environments.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      work: true,
      experiences: [
        {
          title: "Cloud, Platform & DevOps Lead",
          company: "Hitachi Construction Machinery",
          company_url: "https://www.hitachicm.com/",
          logo_path: "hitachi.png",
          duration: "Present",
          location: "Greater Brisbane Area, Australia",
          description:
            "Leading platform engineering initiatives and DevOps transformation at a global construction machinery company. Architecting and implementing scalable cloud infrastructure solutions on AWS, managing CI/CD pipelines, and driving automation across development and operations teams. Specializing in orchestration, infrastructure as code, and building robust, automated systems that ensure operational excellence.",
          color: "#E60012",
        },
        {
          title: "Professional AWS Systems Engineer",
          company: "DXC Technology",
          company_url: "https://dxc.com/au/en",
          logo_path: "dxc.png",
          duration: "May 2022 - Aug 2024",
          location: "Greater Melbourne Area, Australia",
          description:
            "Designed and deployed secure, scalable AWS environments using Infrastructure as Code (CloudFormation, CDK, Terraform). Maintained 24/7 high-availability systems across multiple environments, led incident response operations, and implemented CI/CD pipelines. Specialized in core AWS services, advanced networking (Transit Gateway, Route53, Direct Connect), and container orchestration with Docker/ECS.",
          color: "#E60012",
        },
        {
          title: "Software Engineer & Finance Graduate",
          company: "Aurecon",
          company_url: "https://www.aurecongroup.com/",
          logo_path: "aurecon.png",
          duration: "Jan 2021 - Apr 2021",
          location: "Brisbane, Australia",
          description:
            "Combined software engineering and finance expertise to deliver workflow automation using Python and VBA. Developed data pipelines and visualizations with SQL, MS Access, Tableau, and PowerBI. Built applications using .NET and C# frameworks while creating integrated Microsoft solutions (Forms, SharePoint, Teams) to enhance operational efficiency.",
          color: "#E60012",
        },
        {
          title: "Data Engineer Intern",
          company: "Origin Energy",
          company_url: "https://www.originenergy.com.au/",
          logo_path: "originEnergy.png",
          duration: "Nov 2018 - Feb 2019",
          location: "Brisbane, Australia",
          description:
            "Gained hands-on experience with cloud technologies and ML practices in Origin Energy's Data Science team. Wrote SQL queries in Snowflake to calculate key machine learning metrics, developed performance tracking dashboards for multiple ML models, and contributed to model evaluation frameworks as a Summer intern.",
          color: "#E60012",
        },
      ],
    },
    {
      title: "Volunteerships",
      experiences: [
        {
          title: "Event Concierge",
          company: "Myriad - Science and Technology Event",
          company_url: "#",
          logo_path: "myriadlogo.jpg",
          duration: "May - June 2018",
          location: "Brisbane, Australia",
          description:
            "Volunteered as a concierge at Myriad, a prominent science and technology event in Brisbane. Assisted attendees with navigation, information, and event coordination. Contributed to creating a welcoming environment for technology professionals, researchers, and students to connect and share knowledge.",
          color: "#FF6B35",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects makes use of vast variety of latest technology tools. My best experience is to create Data Science projects and deploy them to web applications using cloud infrastructure.",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "Publications",
  description: "Some of my published Articles, Blogs and Research.",
  avatar_image_path: "projects_image.svg",
};

const publications = {
  data: [
    {
      id: "neuro-symbolic-sudoku-solver",
      name: "Neuro-Symbolic Sudoku Solver",
      createdAt: "2023-07-02T00:00:00Z",
      description: "Paper published in KDD KiML 2023",
      url: "https://arxiv.org/abs/2307.00653",
    },
    {
      id: "mdp-diffusion",
      name: "MDP-Diffusion",
      createdAt: "2023-09-19T00:00:00Z",
      description: "Blog published in Paperspace",
      url: "https://blog.paperspace.com/mdp-diffusion/",
    },
    {
      id: "consistency-models",
      name: "Consistency Models",
      createdAt: "2023-10-12T00:00:00Z",
      description: "Blog published in Paperspace",
      url: "https://blog.paperspace.com/consistency-models/",
    },
  ],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "animated_ashutosh.png",
    description:
      "I'm available on LinkedIn and email for professional discussions. Feel free to reach out for opportunities in DevOps, Platform Engineering, Cloud Architecture, or collaboration on interesting projects. I typically respond within 24 hours.",
  },
  blogSection: {
    title: "Technical Insights",
    subtitle:
      "I share insights about DevOps practices, cloud architecture patterns, and platform engineering solutions that drive operational excellence.",
    link: "#",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Location",
    subtitle: "Greater Brisbane Area, Australia",
    locality: "Brisbane",
    country: "Australia",
    region: "Queensland",
    postalCode: "",
    streetAddress: "Greater Brisbane Area",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://maps.app.goo.gl/brisbane",
  },
  phoneSection: {
    title: "",
    subtitle: "",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  publications,
  contactPageData,
};
