/* Change this file to get your personal Portfolio */

// Website related settings
const settings = {
  isSplash: false,
};

// SEO Related settings
const seo = {
  title: "Pooja Singh | Software Engineer",
  description:
    "Pooja Singh - Computer Science student and software developer focused on Android, AI, backend development, and problem solving.",
  og: {
    title: "Pooja Singh | Software Engineer",
    type: "website",
    url: "https://github.com/pooja030406",
  },
};

// Home Page
const greeting = {
  title: "Pooja Singh",
  logo_name: "PoojaSingh",
  nickname: "pooja_singh",
  subTitle:
    "Computer Science student building Android applications, AI-powered products, and scalable software systems.",
  resumeLink: "",
  portfolio_repository: "",
  githubProfile: "https://github.com/pooja030406",
};

const socialMediaLinks = [
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/pooja-singh-a44b42290/",
    fontAwesomeIcon: "fa-linkedin-in",
    backgroundColor: "#0077B5",
  },
  {
    name: "Github",
    link: "https://github.com/pooja030406",
    fontAwesomeIcon: "fa-github",
    backgroundColor: "#181717",
  },
{
  name: "Gmail",
  link: "mailto:ps2137800@gmail.com",
  fontAwesomeIcon: "fa-envelope",
  iconType: "fas",
  backgroundColor: "#EA4335",
},
];


// Skills Page
const skills = {
  data: [
    {
      title: "Android Development",
      fileName: "AndroidImg",
      skills: [
        "⚡ Building native Android applications using Kotlin and Jetpack Compose",
        "⚡ Designing modern and responsive Android interfaces with reusable Compose components",
        "⚡ Architecting applications using MVVM and modern Android development practices",
        "⚡ Working with RoomDB, Firebase Firestore and Retrofit for application data and APIs",
        "⚡ Building AI-powered Android features using CameraX, ML Kit and voice-based interaction",
        "⚡ Developing practical mobile applications with Kotlin, Firebase and REST APIs",
      ],
      softwareSkills: [
        {
          skillName: "Android",
          fontAwesomeClassname: "simple-icons:android",
          style: {
            color: "#3DDC84",
          },
        },
        {
          skillName: "Kotlin",
          fontAwesomeClassname: "simple-icons:kotlin",
          style: {
            color: "#7F52FF",
          },
        },
        {
          skillName: "Jetpack Compose",
          imageSrc: "Jetpack_Compose_logo.png",
        },
        {
          skillName: "Firebase",
          fontAwesomeClassname: "simple-icons:firebase",
          style: {
            color: "#FFCA28",
          },
        },
        {
          skillName: "RoomDB",
          imageSrc: "roomdb.jpg",
        },
        {
          skillName: "CameraX",
          imageSrc: "cameraX.png",
        },
      ],
    },

    {
      title: "Backend Development",
      fileName: "BackendImg",
      skills: [
        "⚡ Building REST APIs and backend services using Python and FastAPI",
        "⚡ Designing backend systems using microservices and system design principles",
        "⚡ Implementing JWT-based authentication for secure application access",
        "⚡ Working with relational and NoSQL databases including MySQL, PostgreSQL and MongoDB",
        "⚡ Integrating external APIs and AI services into backend applications",
        "⚡ Using Redis for caching and improving application performance",
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
          skillName: "FastAPI",
          fontAwesomeClassname: "simple-icons:fastapi",
          style: {
            color: "#009688",
          },
        },
        {
          skillName: "Java",
          fontAwesomeClassname: "simple-icons:java",
          style: {
            color: "#007396",
          },
        },
        {
          skillName: "MySQL",
          fontAwesomeClassname: "simple-icons:mysql",
          style: {
            color: "#4479A1",
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
          skillName: "Redis",
          fontAwesomeClassname: "simple-icons:redis",
          style: {
            color: "#DC382D",
          },
        },
      ],
    },

    {
      title: "Machine Learning & GenAI",
      fileName: "AIImg",
      skills: [
        "⚡ Building AI-powered applications using Large Language Models and Generative AI",
        "⚡ Integrating OpenAI APIs for intelligent application features and workflows",
        "⚡ Implementing semantic search using embeddings and FAISS vector search",
        "⚡ Working with vector search and retrieval-based AI application patterns",
        "⚡ Applying computer vision techniques using OpenCV and MediaPipe",
        "⚡ Building practical AI features for personalized recommendations and interview preparation",
      ],
      softwareSkills: [
        {
          skillName: "OpenAI",
          fontAwesomeClassname: "simple-icons:openai",
          style: {
            color: "#412991",
          },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "simple-icons:python",
          style: {
            color: "#3776AB",
          },
        },
        {
          skillName: "OpenCV",
          fontAwesomeClassname: "simple-icons:opencv",
          style: {
            color: "#5C3EE8",
          },
        },
        {
          skillName: "FAISS",
          imageSrc: "faiss.jpg",
        },
        {
          skillName: "MediaPipe",
          imageSrc: "mediapipe.jpg",
        },
      ],
    },

    {
      title: "Programming & Development Tools",
      fileName: "ProgrammingImg",
      skills: [
        "⚡ Solving algorithmic problems using Data Structures and Algorithms",
        "⚡ Developing software using Java, Kotlin, C++, Python and SQL",
        "⚡ Building frontend applications using ReactJS, HTML and CSS",
        "⚡ Working with Git, GitHub Actions and CI/CD workflows",
        "⚡ Testing and debugging applications using JUnit, Postman and Android Studio",
        "⚡ Managing Android builds and dependencies using Gradle",
      ],
      softwareSkills: [
        {
          skillName: "C++",
          fontAwesomeClassname: "simple-icons:cplusplus",
          style: {
            color: "#00599C",
          },
        },
        {
          skillName: "Java",
          fontAwesomeClassname: "simple-icons:java",
          style: {
            color: "#007396",
          },
        },
        {
          skillName: "Kotlin",
          fontAwesomeClassname: "simple-icons:kotlin",
          style: {
            color: "#7F52FF",
          },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "simple-icons:python",
          style: {
            color: "#3776AB",
          },
        },
        {
          skillName: "React",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "Git",
          fontAwesomeClassname: "simple-icons:git",
          style: {
            color: "#F05032",
          },
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: {
            color: "#1488C6",
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
      siteName: "LeetCode",
      iconifyClassname: "simple-icons:leetcode",
      style: {
        color: "#F79F1B",
      },
      profileLink: "https://leetcode.com/u/bore_bore_zaimon/",
    },
    {
      siteName: "CodeForces",
      iconifyClassname: "simple-icons:codeforces",
      style: {
        color: "#1F8ACB",
      },
      profileLink: "https://codeforces.com/profile/pooja_03",
    },
    {
      siteName: "CodeChef",
      iconifyClassname: "simple-icons:codechef",
      style: {
        color: "#5B4638",
      },
      profileLink: "https://www.codechef.com/users/pooja6545",
    },
    {
      siteName: "GeeksforGeeks",
      imageSrc: "gfg.png",
      style: {
        color: "#298D46",
      },
      profileLink: "https://www.geeksforgeeks.org/profile/ps213mkx1",
    },
    {
      siteName: "Coding Ninjas",
      imageSrc: "codingninja.png",
      style: {
        color: "#F27833",
      },
      profileLink:
        "https://www.naukri.com/code360/profile/22897d8c-53ff-4aa2-94eb-a30d4ae509ae",
    },
  ],
};


// Education
const degrees = {
  degrees: [
    {
  title: "Indian Institute of Information Technology, Bhagalpur",
  subtitle: "B.Tech. in Computer Science and Engineering",
  logo_path:
    "Indian_Institute_of_Information_Technology,_Bhagalpur_logo.png",
  alt_name: "IIIT Bhagalpur",
  duration: "2023 - 2027",
  descriptions: [
    "⚡ CGPA: 7.52/10",
    "⚡ Relevant Coursework: Data Structures and Algorithms, Object-Oriented Programming, DBMS, Operating Systems, Computer Networks, System Design",
    "⚡ Competitive Programming: Solved 1100+ problems across LeetCode, CodeChef and Codeforces",
    "⚡ Coding Profiles: LeetCode 1724 rating, CodeChef (1542 max), Codeforces 1327 max rating",
    "⚡ Academic & Coding Mentor: Mentored 25+ juniors in DSA and Android development",
    "⚡ Core Member, Android Development Club: Guided 50+ students through workshops, code reviews and Android architecture practices",
  ],
  website_link: "https://www.iiitbh.ac.in/",
},

    {
      title: "Avadh Collegiate",
      subtitle: "Senior Secondary (Class XII) and Secondary (Class X)",
      logo_path: "school.png",
      alt_name: "Avadh Collegiate",
      duration: "2022",
      descriptions: [
        "⚡ Class XII: 86%",
        "⚡ Class X: 92%",
      ],
      website_link: "https://www.avadhcollegiateramgarh.in/",
    },
  ],
};


// Achievements & Certifications
const certifications = {
  certifications: [
    {
      title: "Flipkart Grid 8.0",
      subtitle: "- Semifinalist",
      logo_path: "flipkart.webp",
      alt_name: "Flipkart",
      color_code: "#2874F0",
    },

    {
      title: "Amazon ML Summer School",
      subtitle: "- Selected in Top 3,000",
      logo_path: "amazon.png",
      alt_name: "Amazon",
      color_code: "#FF9900",
    },

    {
      title: "Myntra WeForShe Hackathon",
      subtitle: "- Top 100",
      logo_path: "myntra.webp",
      certificate_link: "https://drive.google.com/file/d/1Apo2HtGdQKSc0819m_gQ7KCmlDygCNVa/view?usp=drivesdk",
      alt_name: "Myntra",
      color_code: "#FF3F6C",
    },

    {
      title: "JPMorgan Chase Software Engineering Virtual Experience",
      subtitle: "- Forage",
      logo_path: "jpmorgan.png",
      certificate_link:
        "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/Sj7temL583QAYpHXD/E6McHJDKsQYh79moz_Sj7temL583QAYpHXD_QRjhgm2m6EQo6XhuW_1759736473896_completion_certificate.pdf",
      alt_name: "Forage",
      color_code: "#1F70C1",
    },

    {
      title: "Certified System Administrator (CSA)",
      subtitle: "- ServiceNow",
      logo_path: "service.png",
      certificate_link:
        "https://drive.google.com/file/d/1VkxZvQC5hLufyQfv_N56dlSwyCykE1sO/view?usp=drivesdk",
      alt_name: "ServiceNow",
      color_code: "#05505E",
    },

    {
      title: "Certified Application Developer (CAD)",
      subtitle: "- ServiceNow",
      logo_path: "service.png",
      certificate_link:
        "https://drive.google.com/file/d/1HF42DtnnQzJsTAX7YufyRGRgtmVYAONh/view?usp=drivesdk",
      alt_name: "ServiceNow",
      color_code: "#05505E",
    },
  ],
};


// Experience / Leadership Page
const experience = {
  title: "Experience",
  subtitle: "Leadership, Mentorship & Community",
  description:
    "I enjoy building software products, mentoring peers, and contributing to the developer community through technical guidance and hands-on learning.",
  header_image_path: "experience.svg",

  sections: [
    {
      title: "Positions of Responsibility",
      work: true,

      experiences: [
        {
          title: "Academic & Coding Mentor",
          company: "IIIT Bhagalpur",
          company_url: "https://www.iiitbh.ac.in/",
          logo_path:
            "Indian_Institute_of_Information_Technology,_Bhagalpur_logo.png",
          duration: "2023 - Present",
          location: "Bhagalpur, Bihar",
          description:
            "Mentored 25+ juniors in Data Structures and Algorithms and Android development. Conducted doubt-resolution sessions and guided students on project architecture and placement preparation.",
          color: "#1F8ACB",
        },

        {
          title: "Core Member",
          company: "Android Development Club, IIIT Bhagalpur",
          company_url: "https://www.iiitbh.ac.in/",
          logo_path:
            "Indian_Institute_of_Information_Technology,_Bhagalpur_logo.png",
          duration: "2023 - Present",
          location: "Bhagalpur, Bihar",
          description:
            "Guided 50+ students in Android development using Kotlin, MVVM, Retrofit and Firebase through hands-on workshops, code reviews and discussions on architectural best practices.",
          color: "#3DDC84",
        },
      ],
    },
  ],
};


// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "A selection of AI-powered, Android and full-stack projects built to solve practical problems.",
  avatar_image_path: "projects_image.svg",
};


// Publications section is used by the template for project cards
const publicationsHeader = {
  title: "Projects",
  description:
    "Selected projects demonstrating Android development, AI integration, computer vision and scalable backend development.",
  avatar_image_path: "projects_image.svg",
};


const publications = {
  data: [
    {
      id: 1,
      name: "DevMate AI",
      createdAt: "2026-01-01T00:00:00Z",
      description:
        "AI-driven interview preparation platform built with Kotlin and Jetpack Compose. Supports technical, HR, mixed and company-specific mock interviews with AI-generated follow-up questions, configurable difficulty and conversation-aware questioning. Includes Room and Firebase based interview history, progress tracking, CameraX and ML Kit based interview monitoring, voice-based answer input and automated interview completion.",
      url: "https://github.com/pooja030406/DevMateAI",
      languages: [
        "Kotlin",
        "Jetpack Compose",
        "MVVM",
        "Room",
        "Firebase",
        "Retrofit",
        "OpenRouter AI",
        "CameraX",
        "ML Kit",
      ],
    },

    {
      id: 2,
      name: "TriSpark",
      createdAt: "2025-01-01T00:00:00Z",
      description:
        "AI-powered fashion intelligence platform developed as part of a 3-member team for the Myntra WeForShe 2025 Hackathon. Built four AI-enabled fashion modules using OpenAI embeddings and FAISS vector search to retrieve semantically similar outfit recommendations from a catalog of 1,000+ products. Integrated OpenAI, OpenWeather and ImgBB APIs for personalized recommendations based on clothing type, location, weather and occasion. Built Virtual Vanity using OpenCV and MediaPipe pose estimation for virtual try-on and added AI-driven features for gamified and inclusive fashion discovery.",
      url: "https://github.com/pooja030406/Myntra_Team_Trispark",
      languages: [
        "FastAPI",
        "Python",
        "React",
        "OpenAI API",
        "FAISS",
        "OpenCV",
        "MediaPipe",
        "OpenWeather API",
      ],
    },
  ],
};


// Contact Page
const contactPageData = {
  contactSection: {
    title: "Let's Connect",
    profile_image_path: "pooja.jpg",
    description:
      "I'm always open to discussing software development, Android, AI, hackathons, and interesting technical projects. Feel free to connect with me through LinkedIn or GitHub.",
  },

  addressSection: {
    title: "Location",
    subtitle: "IIIT Bhagalpur",
    locality: "Bhagalpur",
    country: "India",
    region: "Bihar",
    postalCode: "812007",
    streetAddress: "Indian Institute of Information Technology Bhagalpur",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://maps.google.com/",
  },

  phoneSection: {
    title: "Email",
    subtitle: "ps2137800@gmail.com",
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