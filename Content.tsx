import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandX,
  IconBrandYoutube,
  IconSmartHome,
  IconNotebook,
  IconArticle,
  IconMail,
  IconWorld,
} from "@tabler/icons-react";
import { Highlighter } from "./components/ui/highlighter";

export const DATA = {
  name: "Hemant Sharma",
  initials: "HS",
  url: "https://{Your Website URL}", // e.g., "https://hemantsharma.com"
  location: "New Delhi, IN",
  locationLink: "https://www.google.com/maps/place/delhi",
  description: "Software Engineer | Full Stack Developer | Tech Enthusiast",
  summary: (
    <p>
      A Full-Stack Engineer who enjoys turning complex ideas into fast, reliable
      products. I work mainly with{" "}
      <Highlighter action="highlight" color="#9c40ff1a">
        {" "}
        <p className="text-foreground font-semibold">
          Next.js, TypeScript, Node.js,
        </p>
      </Highlighter>
      <Highlighter action="highlight" color="#9c40ff1a">
        {" "}
        <p className="text-foreground font-semibold">and PostgreSQL</p>
      </Highlighter>
      , building everything from scalable e-commerce platforms to real-time and
      AI-powered systems. I care deeply about clean architecture, performance,
      and thoughtful UI. When I’m not coding, I’m refining systems, exploring
      new tech, and pushing ideas from concept to production.
    </p>
  ),
  avatarUrl: "/me.png",
  skills: [
    "React",
    "Next.js",
    "Typescript",
    "Node.js",
    "Redux",
    "PostgreSQL",
    "Mongo DB",
    "Prisma",
    "TailwindCSS",
    "Framer Motion",
    "GraphQL",
    "Websockets",
    "Redis",
    "Docker",
    "AWS",
    "CI/CD",
    "C++",
  ],
  navbar: [
    { url: "#", icon: IconSmartHome, label: "Home" },
    { url: "#about", icon: IconArticle, label: "About" },
    { url: "#projects", icon: IconNotebook, label: "Projects" },
  ],
  contact: {
    email: "hemantsh003@gmail.com",
    tel: "+91 9582492114",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://dub.sh/dillion-github",
        icon: IconBrandGithub,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://dub.sh/dillion-linkedin",
        icon: IconBrandLinkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/hemantsh03",
        icon: IconBrandX,

        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "mailto:hemantsh003@gmail.com",
        icon: IconMail,

        navbar: true,
      },
    },
  },

  work: [
    {
      company: "Silver Craft",
      href: "https://mq.network/",
      badges: ["1+ yr"],
      location: "Remote",
      title: "Software Engineer – Full Stack",
      logoUrl: "SC-logo.png",
      start: "October 2024",
      end: "December 2025",
      description:
        "Architected and built 7+ scalable microservices including digital wallet, real-time messaging, marketplace, trading, and AI assistant using Node.js, PostgreSQL, and Prisma. Implemented atomic transactions, double-entry accounting, and secure payment workflows. Built low-latency real-time messaging with Socket.IO and Redis Pub/Sub, and integrated AI assistants with OpenAI/Claude using SSE streaming. Optimized APIs and database queries with Redis caching, reducing latency by ~60%.",
    },
    {
      company: "Qivee",
      href: "https://qivee.in/",
      badges: ["Product"],
      location: "Remote",
      title: "Web Developer Intern",
      logoUrl: "SC-light-logo.png",
      start: "Febuary 2024",
      end: "April 2024",
      description:
        "Developed and shipped a full-scale e-commerce platform using Next.js, TypeScript, Node.js, and PostgreSQL in a monorepo setup. Built RBAC-based admin dashboards, integrated PhonePe payment gateway, and implemented authentication with NextAuth. Improved performance using Redis caching and delivered high Lighthouse scores through code-splitting, lazy loading, and mobile-first UI. Set up CI/CD with GitHub Actions, Dockerized services, and deployed on AWS EC2 with 99% uptime.",
    },
  ],

  education: [
    {
      school: "Maharshi Dayanand University",
      href: "https://mdu.ac.in/default.aspx",
      degree: "Bachelor's of Technology in Computer Science (B.Tech)",
      logoUrl: "/mdu.png",
      start: "2022",
      end: "2025",
    },
    {
      school: "Pusa Institute of Technology (BTE)",
      href: "",
      degree: "Diploma in Electrical Engineering",
      logoUrl: "/pit.jpg",
      start: "2018",
      end: "2021",
    },
  ],
  projects: [
    {
      title: "Eunary UI",
      href: "https://ui.eunary.com",
      dates: "",
      active: true,
      description:
        "A modern React UI component library featuring 15+ (and counting) reusable, animated, and type-safe components built with Tailwind CSS and Framer Motion. Includes an interactive documentation platform with live previews, instant search, and usage guidelines, designed for an excellent developer experience.",
      technologies: [
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "Framer Motion",
        "React Three Fiber",
        "Monorepo",
      ],
      links: [
        {
          type: "Website",
          href: "https://ui.eunary.com",
          icon: <IconWorld className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/Autumn003/eUnary",
          icon: <IconBrandGithub className="size-3" />,
        },
      ],
      image: "",
      video: "",
      node: (
        <div className="site-viewer">
          <iframe
            src="https://ui.eunary.com"
            title="Eunary UI"
            width="100%"
            height="600px"
            style={{ border: "1px solid #ccc", borderRadius: "6px" }}
            sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
          />
        </div>
      ),
    },

    {
      title: "MetaQuantum Network",
      href: "",
      dates: "Feb 2024 – Dec 2025",
      active: true,
      description:
        "A large-scale multi-service platform featuring digital wallets, real-time messaging, marketplace, trading systems, and an AI assistant. Built a microservices-based backend with secure authentication, real-time data flows, and ACID-compliant transactions. Optimized system performance with Redis caching and database tuning, achieving sub-100ms real-time interactions.",
      technologies: [
        "Node.js",
        "TypeScript",
        "PostgreSQL",
        "Prisma",
        "Redis",
        "Socket.IO",
        "REST APIs",
        "Docker",
        "AWS",
      ],
      links: [
        {
          type: "Website",
          href: "https://mq.network/",
          icon: <IconWorld className="size-3" />,
        },
      ],
      image: "",
      video: "/mq-network.mp4",
      node: "",
    },

    {
      title: "Qivee — E-commerce Platform",
      href: "https://qivee.in/",
      dates: "Feb 2024 – Apr 2025",
      active: true,
      description:
        "A production-ready e-commerce platform serving 500+ users with secure checkout, RBAC-based admin dashboard, and scalable backend architecture. Integrated PhonePe payment gateway, Redis caching, and NextAuth authentication. Achieved high performance and 90+ Lighthouse scores through lazy loading, code splitting, and mobile-first UI.",
      technologies: [
        "Next.js",
        "TypeScript",
        "Node.js",
        "PostgreSQL",
        "Prisma",
        "Redis",
        "NextAuth",
        "PhonePe",
        "Tailwind CSS",
        "Docker",
        "AWS EC2",
      ],
      links: [
        {
          type: "Website",
          href: "https://qivee.in/",
          icon: <IconWorld className="size-3" />,
        },
      ],
      image: "",
      video: "",
      node: "",
    },
  ],

  hackathons: [
    {
      title: "Hack Western 5",
      dates: "November 23rd - 25th, 2018",
      location: "London, Ontario",
      description:
        "Developed a mobile application which delivered bedtime stories to children using augmented reality.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-western.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [],
    },
    {
      title: "Hack The North",
      dates: "September 14th - 16th, 2018",
      location: "Waterloo, Ontario",
      description:
        "Developed a mobile application which delivers university campus wide events in real time to all students.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-the-north.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [],
    },
    {
      title: "FirstNet Public Safety Hackathon",
      dates: "March 23rd - 24th, 2018",
      location: "San Francisco, California",
      description:
        "Developed a mobile application which communcicates a victims medical data from inside an ambulance to doctors at hospital.",
      icon: "public",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/firstnet.png",
      links: [],
    },
    {
      title: "DeveloperWeek Hackathon",
      dates: "February 3rd - 4th, 2018",
      location: "San Francisco, California",
      description:
        "Developed a web application which aggregates social media data regarding cryptocurrencies and predicts future prices.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/developer-week.jpg",
      links: [
        {
          title: "Github",
          icon: <IconBrandGithub className="h-4 w-4" />,
          href: "https://github.com/cryptotrends/cryptotrends",
        },
      ],
    },
    {
      title: "HackDavis",
      dates: "January 20th - 21st, 2018",
      location: "Davis, California",
      description:
        "Developed a mobile application which allocates a daily carbon emission allowance to users to move towards a sustainable environment.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-davis.png",
      win: "Best Data Hack",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2018/white.svg",
      links: [
        {
          title: "Devpost",
          icon: <IconWorld className="h-4 w-4" />,
          href: "https://devpost.com/software/my6footprint",
        },
        {
          title: "ML",
          icon: <IconBrandGithub className="h-4 w-4" />,
          href: "https://github.com/Wallet6/my6footprint-machine-learning",
        },
        {
          title: "iOS",
          icon: <IconBrandGithub className="h-4 w-4" />,
          href: "https://github.com/Wallet6/CarbonWallet",
        },
        {
          title: "Server",
          icon: <IconBrandGithub className="h-4 w-4" />,
          href: "https://github.com/Wallet6/wallet6-server",
        },
      ],
    },
    {
      title: "ETH Waterloo",
      dates: "October 13th - 15th, 2017",
      location: "Waterloo, Ontario",
      description:
        "Developed a blockchain application for doctors and pharmacists to perform trustless transactions and prevent overdosage in patients.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/eth-waterloo.png",
      links: [
        {
          title: "Organization",
          icon: <IconBrandGithub className="h-4 w-4" />,
          href: "https://github.com/ethdocnet",
        },
      ],
    },
    {
      title: "Hack The North",
      dates: "September 15th - 17th, 2017",
      location: "Waterloo, Ontario",
      description:
        "Developed a virtual reality application allowing users to see themselves in third person.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-the-north.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
      links: [
        {
          title: "Streamer Source",
          icon: <IconBrandGithub className="h-4 w-4" />,
          href: "https://github.com/justinmichaud/htn2017",
        },
        {
          title: "Client Source",
          icon: <IconBrandGithub className="h-4 w-4" />,
          href: "https://github.com/dillionverma/RTSPClient",
        },
      ],
    },
    {
      title: "Hack The 6ix",
      dates: "August 26th - 27th, 2017",
      location: "Toronto, Ontario",
      description:
        "Developed an open platform for people shipping items to same place to combine shipping costs and save money.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-the-6ix.jpg",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
      links: [
        {
          title: "Source",
          icon: <IconBrandGithub className="h-4 w-4" />,
          href: "https://github.com/ShareShip/ShareShip",
        },
        {
          title: "Site",
          icon: <IconWorld className="h-4 w-4" />,
          href: "https://share-ship.herokuapp.com/",
        },
      ],
    },
    {
      title: "Stupid Hack Toronto",
      dates: "July 23rd, 2017",
      location: "Toronto, Ontario",
      description:
        "Developed a chrome extension which tracks which facebook profiles you have visited and immediately texts your girlfriend if you visited another girls page.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/stupid-hackathon.png",
      links: [
        {
          title: "Source",
          icon: <IconBrandGithub className="h-4 w-4" />,
          href: "https://github.com/nsagirlfriend/nsagirlfriend",
        },
      ],
    },
    {
      title: "Global AI Hackathon - Toronto",
      dates: "June 23rd - 25th, 2017",
      location: "Toronto, Ontario",
      description:
        "Developed a python library which can be imported to any python game and change difficulty of the game based on real time emotion of player. Uses OpenCV and webcam for facial recognition, and a custom Machine Learning Model trained on a [Kaggle Emotion Dataset](https://www.kaggle.com/c/challenges-in-representation-learning-facial-expression-recognition-challenge/leaderboard) using [Tensorflow](https://www.tensorflow.org/Tensorflow) and [Keras](https://keras.io/). This project recieved 1st place prize at the Global AI Hackathon - Toronto and was also invited to demo at [NextAI Canada](https://www.nextcanada.com/next-ai).",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/global-ai-hackathon.jpg",
      win: "1st Place Winner",
      links: [
        {
          title: "Article",
          icon: <IconWorld className="h-4 w-4" />,
          href: "https://syncedreview.com/2017/06/26/global-ai-hackathon-in-toronto/",
        },
        {
          title: "Source",
          icon: <IconBrandGithub className="h-4 w-4" />,
          href: "https://github.com/TinySamosas/",
        },
      ],
    },
    {
      title: "McGill AI for Social Innovation Hackathon",
      dates: "June 17th - 18th, 2017",
      location: "Montreal, Quebec",
      description:
        "Developed realtime facial microexpression analyzer using AI",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/ai-for-social-good.jpg",
      links: [],
    },
    {
      title: "Open Source Circular Economy Days Hackathon",
      dates: "June 10th, 2017",
      location: "Toronto, Ontario",
      description:
        "Developed a custom admin interface for food waste startup <a href='http://genecis.co/'>Genecis</a> to manage their data and provide analytics.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/open-source-circular-economy-days.jpg",
      win: "1st Place Winner",
      links: [
        {
          title: "Source",
          icon: <IconBrandGithub className="h-4 w-4" />,
          href: "https://github.com/dillionverma/genecis",
        },
      ],
    },
    {
      title: "Make School's Student App Competition 2017",
      dates: "May 19th - 21st, 2017",
      location: "International",
      description: "Improved PocketDoc and submitted to online competition",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/make-school-hackathon.png",
      win: "Top 10 Finalist | Honourable Mention",
      links: [
        {
          title: "Medium Article",
          icon: <IconWorld className="h-4 w-4" />,
          href: "https://medium.com/make-school/the-winners-of-make-schools-student-app-competition-2017-a6b0e72f190a",
        },
        {
          title: "Devpost",
          icon: <IconWorld className="h-4 w-4" />,
          href: "https://devpost.com/software/pocketdoc-react-native",
        },
        {
          title: "YouTube",
          icon: <IconBrandYoutube className="h-4 w-4" />,
          href: "https://www.youtube.com/watch?v=XwFdn5Rmx68",
        },
        {
          title: "Source",
          icon: <IconBrandGithub className="h-4 w-4" />,
          href: "https://github.com/dillionverma/pocketdoc-react-native",
        },
      ],
    },
    {
      title: "HackMining",
      dates: "May 12th - 14th, 2017",
      location: "Toronto, Ontario",
      description: "Developed neural network to optimize a mining process",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-mining.png",
      links: [],
    },
    {
      title: "Waterloo Equithon",
      dates: "May 5th - 7th, 2017",
      location: "Waterloo, Ontario",
      description:
        "Developed Pocketdoc, an app in which you take a picture of a physical wound, and the app returns common solutions or cures to the injuries or diseases.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/waterloo-equithon.png",
      links: [
        {
          title: "Devpost",
          icon: <IconWorld className="h-4 w-4" />,
          href: "https://devpost.com/software/pocketdoc-react-native",
        },
        {
          title: "YouTube",
          icon: <IconBrandYoutube className="h-4 w-4" />,
          href: "https://www.youtube.com/watch?v=XwFdn5Rmx68",
        },
        {
          title: "Source",
          icon: <IconBrandGithub className="h-4 w-4" />,
          href: "https://github.com/dillionverma/pocketdoc-react-native",
        },
      ],
    },
    {
      title: "SpaceApps Waterloo",
      dates: "April 28th - 30th, 2017",
      location: "Waterloo, Ontario",
      description:
        "Developed Earthwatch, a web application which allows users in a plane to virtually see important points of interest about the world below them. They can even choose to fly away from their route and then fly back if they choose. Special thanks to CesiumJS for providing open source world and plane models.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/space-apps.png",
      links: [
        {
          title: "Source",
          icon: <IconBrandGithub className="h-4 w-4" />,
          href: "https://github.com/dillionverma/earthwatch",
        },
      ],
    },
    {
      title: "MHacks 9",
      dates: "March 24th - 26th, 2017",
      location: "Ann Arbor, Michigan",
      description:
        "Developed Super Graphic Air Traffic, a VR website made to introduce people to the world of air traffic controlling. This project was built completely using THREE.js as well as a node backend server.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/mhacks-9.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
      links: [
        {
          title: "Source",
          icon: <IconBrandGithub className="h-4 w-4" />,
          href: "https://github.com/dillionverma/threejs-planes",
        },
      ],
    },
    {
      title: "StartHacks I",
      dates: "March 4th - 5th, 2017",
      location: "Waterloo, Ontario",
      description:
        "Developed at StartHacks 2017, Recipic is a mobile app which allows you to take pictures of ingredients around your house, and it will recognize those ingredients using ClarifAI image recognition API and return possible recipes to make. Recipic recieved 1st place at the hackathon for best pitch and hack.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/starthacks.png",
      win: "1st Place Winner",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
      links: [
        {
          title: "Source (Mobile)",
          icon: <IconBrandGithub className="h-4 w-4" />,
          href: "https://github.com/mattBlackDesign/recipic-ionic",
        },
        {
          title: "Source (Server)",
          icon: <IconBrandGithub className="h-4 w-4" />,
          href: "https://github.com/mattBlackDesign/recipic-rails",
        },
      ],
    },
    {
      title: "QHacks II",
      dates: "February 3rd - 5th, 2017",
      location: "Kingston, Ontario",
      description:
        "Developed a mobile game which enables city-wide manhunt with random lobbies",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/qhacks.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
      links: [
        {
          title: "Source (Mobile)",
          icon: <IconBrandGithub className="h-4 w-4" />,
          href: "https://github.com/dillionverma/human-huntr-react-native",
        },
        {
          title: "Source (API)",
          icon: <IconBrandGithub className="h-4 w-4" />,
          href: "https://github.com/mattBlackDesign/human-huntr-rails",
        },
      ],
    },
    {
      title: "Terrible Hacks V",
      dates: "November 26th, 2016",
      location: "Waterloo, Ontario",
      description:
        "Developed a mock of Windows 11 with interesting notifications and functionality",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/terrible-hacks-v.png",
      links: [
        {
          title: "Source",
          icon: <IconBrandGithub className="h-4 w-4" />,
          href: "https://github.com/justinmichaud/TerribleHacks2016-Windows11",
        },
      ],
    },
    {
      title: "Portal Hackathon",
      dates: "October 29, 2016",
      location: "Kingston, Ontario",
      description:
        "Developed an internal widget for uploading assignments using Waterloo's portal app",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/portal-hackathon.png",
      links: [
        {
          title: "Source",
          icon: <IconBrandGithub className="h-4 w-4" />,
          href: "https://github.com/UWPortalSDK/crowmark",
        },
      ],
    },
  ],
} as const;
