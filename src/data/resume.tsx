import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Muhammad Hanzala",
  initials: "MH",
  url: "https://sdfs.com",
  location: "Faisalabad, Pakistan",
  locationLink: "https://maps.app.goo.gl/Qvt5rpv4comGPr8x6",
  description:
    "Software engineer passionate about building innovative solutions and helping others succeed.",
  summary:
    "I am a Software Engineer from NTU Pakistan with over 3+ years of hands-on experience in modern web development. I have successfully delivered numerous real-world projects for clients through internships and freelance work. Additionally, I have served twice as a teaching assistant for web development courses at NTU, where I supported students in mastering contemporary web technologies. My expertise lies in full-stack development, with a strong focus on front-end technologies. I am proficient in React, Next.js, and Tailwind CSS, and I have a solid understanding of back-end technologies such as Node.js and Express.js. I am also well-versed in database management with PostgreSQL and MongoDB. My passion for coding drives me to continuously learn and adapt to new challenges in the ever-evolving tech landscape.",
  avatarUrl: "/me.png",
  skills: [
    "React",
    "Next.js",
    "Express.js",
    "Typescript",
    "Node.js",
    "Python",
    "Postgres",
    "MongoDB",
    "TailwindCSS",
    "Framer Motion",
    "Figma",
    "C++",
  ],
  navbar: [{ href: "/", icon: HomeIcon, label: "Home" }],
  contact: {
    email: "mhanzala267@gmail.com",
    tel: "+92 332 166 26 88",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/hanzala267",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/muhammad-hanzala-906a30200/",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://dub.sh/dillion-twitter",
        icon: Icons.x,

        navbar: false,
      },
      Youtube: {
        name: "Youtube",
        url: "https://dub.sh/dillion-youtube",
        icon: Icons.youtube,
        navbar: false,
      },
      email: {
        name: "Send Email",
        url: "mailto:mhanzala267@gmail.com",
        icon: Icons.email,

        navbar: true,
      },
    },
  },

  work: [
    {
      company: "VonixSoft",
      href: "",
      badges: [],
      location: "Onsite",
      title: "Web Dev Intern",
      logoUrl: "/vonix.png",
      start: "Sep 2022",
      end: "Aug 2023",
      description:
        "Focused on developing front-end applications using Next.js, React, Tailwind CSS, ShadCN, and Framer Motion. Collaborated with the team to create responsive and user-friendly interfaces while enhancing the overall user experience.",
    },
    {
      company: "VonixSoft",
      badges: [],
      href: "https://shopify.com",
      location: "Onsite",
      title: "Web Application Engineer",
      logoUrl: "/vonix.png",
      start: "Sep 2023",
      end: "Cont.",
      description:
        "Currently developing full-stack applications using the MERN stack and Next.js. Involved in architecting scalable solutions, implementing complex features, and ensuring optimal performance across various web applications. Contributing to both front-end and back-end development to deliver seamless user experiences.",
    },

    {
      company: "Fiverr",
      href: "https://www.fiverr.com/hanz_dev",
      badges: [],
      location: "Remote",
      title: "Full Stack Web developer | Next.js",
      logoUrl: "/Fiverr.png",
      start: "January 2020",
      end: "Cont",
      description:
        "A full stack web dev extraordinaire and UI/UX connoisseur. I'm armed with Next js, React js, Express Js, GraphQL and all modern web technologies. Design genius is fueled by Figma, Adobe XD, and the full suite of Adobe tools. And with their proficiency in Javascript, Python, and can tackle various aspects of development. Get ready to see your digital dreams come alive with their expertise and creativity",
    },
  ],
  education: [
    {
      school: "National Textile University",
      href: "https://www.ntu.edu.pk/index.php",
      degree: "Bechelors of Science in Software Engineering",
      logoUrl: "/NTU.png",
      start: "2021",
      end: "2025",
    },
  ],
  projects: [
    {
      title: "AHVW web application for a semi-trailer service company! ",
      href: "https://ahvw-admindashboard-frontend.vercel.app/",
      dates: "Mar 2024 -  Sep 2024",
      active: true,
      description:
        "AHVW web application for a semi-trailer service company, featuring role-based authentication, admin and employee dashboards, and service management. The app allows seamless tracking of services, vehicles, and invoices, ensuring a smooth user experience. Built with modern technologies, it’s optimized for performance and security. manage customers, employeess, and admin at one place ",
      technologies: [
        "Next.js",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Shadcn UI",
        "ZOD",
        "Zustand",
        "React Hook Form",
        "NextAuth",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/hanzala267/ahvw-nextauth",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://res.cloudinary.com/dmfh8lexl/video/upload/v1729331137/wgdvykihtp8u6c48kjcu.mp4",
    },
    {
      title: "Algo Generation",
      href: "https://algogeneration.com/",
      dates: "Sep 2023 - Dec 2023",
      active: true,
      description:
        "Algo Generation is a fintech platform that uses advanced AI algorithms and bots to assist with financial trading. Their AI-driven technology is designed to analyze market trends in real time and execute trades with high precision, aiming to maximize profitability for users. The platform offers various AI bots that cater to different portfolio ranges and provide daily returns based on the user's investment. These bots are trained on extensive trading data and operate throughout the week, providing capital returns after a set trading duration.",
      technologies: [
        "HTML 5",
        "CSS 3",
        "React.js",
        "Javascript",
        "TailwindCSS",
        "Laravel",
      ],
      links: [
        {
          type: "Website",
          href: "https://algogeneration.com/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://res.cloudinary.com/dmfh8lexl/video/upload/v1729331151/b5viqnwtkfwisuf2gblj.mp4",
    },
    {
      title: "Yoks - rent a car",
      href: "https://yoks-frontend.vercel.app/",
      dates: "Dec 2023 - Mar 2024",
      active: true,
      description:
        "Developed the YOKS Rent-A-Car website, offering seamless vehicle rental services and professional fleet management solutions. The site features an intuitive design tailored for user convenience and corporate clientele.",
      technologies: ["React.js", "Expres.js", "TailwindCSS", "Shadcn UI"],
      links: [
        {
          type: "Website",
          href: "https://yoks-frontend.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://res.cloudinary.com/dmfh8lexl/video/upload/v1729331153/qyl1ohuyarwwbq3yo5c4.mp4",
    },
    {
      title: "Doc Mobil App",
      href: "https://portal.docmobilapp.com/",
      dates: "Aug 2023 - Oct 2023",
      active: true,
      description:
        "DocMobil is a telemedicine platform designed to provide patient-centric healthcare through a hybrid AI-powered system. The platform allows patients to easily find healthcare professionals, schedule virtual or in-person consultations, and manage their health records. The portal offers services such as locating a doctor, tracking health progress, accessing prescriptions, and monitoring reports. Patients can log in securely with a PIN code, ensuring data protection during consultations and interactions​",
      technologies: ["HTML 5", "CSS 3", "Javascript", "Bootstrap", "laravel"],
      links: [
        {
          type: "Website",
          href: "https://portal.docmobilapp.com/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://res.cloudinary.com/dmfh8lexl/video/upload/v1729331147/pcbwbhqbtzeusbadelpn.mp4",
    },
    {
      title: "Event Crown ",
      href: "",
      dates: "Aug 2023 -  Cont. [Under Development]",
      active: true,
      description:
        "A cutting-edge event venue in Fayetteville, North Carolina, which is set to open in 2027. This facility will replace the existing Crown Theatre and Crown Arena, offering modern amenities, including a large concert space with 3,000 seats, VIP suites, and multi-purpose rooms. The venue is designed to enhance the city’s cultural scene, hosting high-profile performances and community events​​",
      technologies: [
        "React.js",
        "MySQL",
        "Javascript",
        "Tailwind CSS",
        "ShadCN",
        "laravel",
      ],
      links: [
        {
          type: "Website",
          href: "",

          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://res.cloudinary.com/dmfh8lexl/video/upload/v1729331132/tf8ipzt43yzfxylwmbjm.mp4",
    },
    {
      title: "Jamica PCS ",
      href: "https://www.jamaicapcs.com/",
      dates: "Sep 2023 -  Oct 2023",
      active: true,
      description:
        "JamaicaPCS (Port Community System) is an online platform designed to streamline the logistics and operations of the Jamaican shipping industry. It enables key stakeholders, including the Port Authority of Jamaica, customs agencies, shipping agents, warehouse operators, and truckers, to coordinate more efficiently. The system helps with tasks like tracking the arrival and departure of vessels, managing cargo, and overseeing various logistics activities, such as warehouse operations, customs handling, and container management​​​",
      technologies: ["React.js", "Javascript", "MUI", "Bootstrap", "laravel"],
      links: [
        {
          type: "Website",
          href: "https://www.jamaicapcs.com/",

          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://res.cloudinary.com/dmfh8lexl/video/upload/v1729331147/axong7qlhh4k4wyeqo3k.mp4",
    },
    {
      title: "Cruise Jamaica",
      href: "https://www.royalcaribbean.com/jamaica-cruises",
      dates: "Sep 2023 -  Oct 2023",
      active: true,
      description:
        "Cruising Jamaica offers a blend of adventure, culture, and relaxation for travelers. Cruise ships typically dock at popular ports like Falmouth, Montego Bay, and Ocho Rios, each offering unique experiences. In Falmouth, you can explore historic Georgian architecture, relax on beautiful beaches like Burwood Beach, or embark on river rafting adventures on the Martha Brae River. Adventurous cruisers can visit the Good Hope Estate for zip-lining and other outdoor activities​",
      technologies: ["HTML 5", "CSS 3", "Javascript", "MUI", "laravel"],
      links: [
        {
          type: "Website",
          href: "https://www.royalcaribbean.com/jamaica-cruises",

          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://res.cloudinary.com/dmfh8lexl/video/upload/v1729331141/q18swmrefjtgd3jl3czt.mp4",
    },
    {
      title: "Payback",
      href: "",
      dates: "Sep 2023 -  Dec 2023 [Development Pause]",
      active: true,
      description:
        "Immediately report the scam to your credit card company or bank. Most credit cards offer fraud protection, allowing you to dispute unauthorized charges. Explain the situation, and they may reverse the charge (called a chargeback) if they determine the transaction was fraudulent.​",
      technologies: ["HTML 5", "CSS 3", "Bootstrap", "laravel"],
      links: [
        {
          type: "Website",
          href: "",

          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://res.cloudinary.com/dmfh8lexl/video/upload/v1729331149/kuoaqlxktjtx5d9d23dz.mp4",
    },
  ],
} as const;
