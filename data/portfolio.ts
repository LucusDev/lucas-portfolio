export const personalInfo = {
  name: "LucasDev",
  title: "Flutter & Full-Stack Developer",
  tagline: "Building mobile, web, and desktop apps with clean architecture and great UX.",
  location: "Thailand",
  website: "https://bylucas.tech/",
  email: "htetaungshine20028@gmail.com",
  linkedin: "https://www.linkedin.com/in/lucasknk/",
  resumeFile: "/HtetAungShineResume.pdf",
};

export const recommendation = {
  name: "Aung Myo Kyaw",
  title: "Managing Director",
  company: "Xlance Collective",
  pdfFile: "/HtetAungShineRecommendationLetter.pdf",
};

export const skills = [
  { category: "Mobile", items: ["Flutter", "Dart", "Android", "iOS"] },
  { category: "Web", items: ["Next.js", "React", "TypeScript", "HTML/CSS"] },
  { category: "State Management", items: ["Bloc", "Provider"] },
  { category: "Backend", items: ["Firebase", "REST APIs", "WordPress", "PHP"] },
  { category: "Architecture", items: ["Clean Architecture", "Unit/Integration Testing"] },
  { category: "DevOps", items: ["GitHub Actions (CI/CD)", "App Store / Play Store deployment"] },
  { category: "Tools", items: ["Git", "VS Code", "Android Studio", "Xcode", "AI Tools"] },
];

export interface ProjectLink {
  label: string;
  url: string;
}

export interface Project {
  slug: string;
  title: string;
  description: string;
  techStack: string;
  platform: string;
  downloads?: string;
  role: string;
  overview: string;
  keyFeatures: string[];
  whatILearned: string[];
  details?: string;
  links: ProjectLink[];
  previews: string[];
}

export const featuredProjects: Project[] = [
  {
    slug: "mmxianxia",
    title: "Mmxianxia",
    description: "A Web Novel Reader App",
    techStack: "Flutter, Bloc",
    platform: "Android / iOS",
    downloads: "10K+",
    role: "Lead and solo developer of the mobile app",
    overview: "A freelance project developed for a client who had an existing web application for reading web novels. I created a mobile app that allows users to read web novels on the go with offline support.",
    keyFeatures: [
      "Read web novels offline",
      "Secure login and registration",
      "User profile management",
      "Dark mode",
      "Library management",
      "Web Novel Reader with multiple reading modes and adaptive theming",
      "Deeplinking with existing website",
      "In App Purchases",
    ],
    whatILearned: [
      "Flutter & Bloc state management at production scale",
      "WordPress plugin development & PHP API integration",
      "App security — anti-screenshot / anti-recording for paid content",
      "Performance optimization for low-end devices",
      "Real-user bug fixing & production debugging",
    ],
    details: "Since this is a big project with real users, I learned a lot about Flutter and Bloc. Since the client already has a website in WordPress, I had to learn how to develop WordPress plugins and edit in PHP so that I could develop and get data from the WordPress API securely. I also learned about how to structure a Flutter project, how to use Bloc to manage state, and how to handle network requests. I also learned how to secure a Flutter application since it has paid contents that need protection from things such as screenshots, recordings, etc. I also learned a lot about Flutter's performance optimization techniques since the majority of our users have weak devices. I also had to solve a lot of bugs and issues that arise from real users.",
    links: [
      { label: "Play Store", url: "https://play.google.com/store/apps/details?id=com.mmxianxia.mmxianxia_mobile" },
      { label: "App Store", url: "https://apps.apple.com/us/app/mm-xianxia/id6755873664" },
      { label: "Website", url: "https://mmxianxia.com/" },
    ],
    previews: [
      "https://github.com/user-attachments/assets/f6431261-a445-4684-acee-5be85f0aa18c",
      "https://github.com/user-attachments/assets/98c0be7e-1a0a-4a4e-86ec-f8b69dc68b82",
    ],
  },
  {
    slug: "lango",
    title: "Lango",
    description: "AI-powered Language Learning App",
    techStack: "Flutter, Firebase, REST API",
    platform: "Android / iOS",
    downloads: "5K+",
    role: "Flutter Developer",
    overview: "Part of my work from a previous company where I worked as a Flutter Developer. Lango is an AI-powered language learning platform focused on improving speaking skills through interactive conversations, role-play scenarios, and gamified experiences.",
    keyFeatures: [
      "AI Conversation Practice",
      "Role-play & Immersive Scenarios",
      "Real-time Feedback & Grading",
      "Multi-language Support & Translation",
    ],
    whatILearned: [
      "Flutter 1 to Flutter 2 migration at scale",
      "Package dependency management & version upgrades",
      "Feature development — Improve sections & Role-play exercises",
      "Performance optimization & large-scale bug fixing",
    ],
    details: "I was the lead developer for migrating this application from Flutter 1 to Flutter 2. I learned a lot about how to migrate a Flutter application from one version to another, how to use the new features in Flutter 2, and how to optimize the performance of the application. I also learned how to handle and upgrade package dependencies. I also led and worked on features such as Improve sections and Role-play exercises. I also worked on a lot of bug fixes and performance improvements.",
    links: [
      { label: "Play Store", url: "https://play.google.com/store/apps/details?id=com.lango.schoolapp" },
      { label: "App Store", url: "https://apps.apple.com/us/app/lango-school/id1597890437" },
      { label: "Website", url: "https://lango.ai/" },
    ],
    previews: [
      "https://github.com/user-attachments/assets/d727cab9-b564-49da-9e17-4043b5be16c6",
      "https://github.com/user-attachments/assets/408a39be-b10c-414d-a9d7-23ac02da57c5",
    ],
  },
  {
    slug: "metta-associates",
    title: "Metta Associates",
    description: "A Company Showcase Website",
    techStack: "Next.js, Firebase",
    platform: "Web",
    role: "Lead Developer",
    overview: "Developed with one other friend to showcase the company's products and services. The company had a Wix website but wanted a more professional and customizable solution. We replicated and improved the existing website using Next.js and Firebase with a content editor for non-technical updates.",
    keyFeatures: [
      "Responsive and user-friendly website",
      "Authentication with Firebase Auth",
      "Blog editor for creating and managing blog posts",
    ],
    whatILearned: [
      "Next.js project structure & internal workings",
      "Firebase Hosting & Authentication",
      "Content editor with server-side rendering for SEO",
      "CI/CD pipeline setup for Next.js deployment to Firebase",
    ],
    details: "I already had a lot of experience working with Web Development but at the time of developing this project, I was just starting to learn Next.js. I learned a lot about how to structure a Next.js project, how Next.js works internally, and how to use Firebase to host a website. I also learned a lot about developing a content editor and how to server-side render the blog posts which is important for SEO. I also learned a lot about CI/CD pipelines for Next.js projects and how to set up a pipeline to deploy the website to Firebase.",
    links: [{ label: "Website", url: "https://mettaassociates.com/" }],
    previews: [
      "https://github.com/user-attachments/assets/b3039ea3-1663-45de-9b40-44fc2051bfbf",
      "https://github.com/user-attachments/assets/18efbed6-a4df-4ad8-ac19-3757133da375",
      "https://github.com/user-attachments/assets/39248829-f66b-470b-83a9-02516f19a6d1",
    ],
  },
  {
    slug: "dropadoo",
    title: "Dropadoo",
    description: "A drag-and-drop file sender app",
    techStack: "Flutter",
    platform: "macOS",
    role: "Lead Developer",
    overview: "A drag-and-drop file sender app that allows users to send files with ease. Features overlay mode that shows over other windows, implemented via custom native macOS API integration.",
    keyFeatures: [
      "Drag and drop file content",
      "Toggle for overlay mode showing over other windows",
    ],
    whatILearned: [
      "Native macOS API integration via custom Flutter package",
      "Drag-and-drop file handling on macOS",
      "Email sending from Flutter",
    ],
    details: "Since there was no package or way to implement overlay toggle mode in Flutter, I had to create a custom package where it exports native macOS APIs to simulate the overlay mode. I also learned a lot about how to handle files via drag and drop on macOS and how to send mails using Flutter.",
    links: [
      { label: "App Store", url: "https://apps.apple.com/th/app/dropadoo-send-files-via-drop/id6758711616?mt=12" },
    ],
    previews: [
      "https://github.com/user-attachments/assets/590d0271-0614-4b88-8349-d7ae84279d36",
      "https://github.com/user-attachments/assets/a6bbd6c3-3eb1-463f-a9e5-d4d1ac03985c",
    ],
  },
  {
    slug: "movie-app",
    title: "Movie App",
    description: "A simple movie browsing app with clean architecture and testing",
    techStack: "Flutter, REST API, Clean Architecture",
    platform: "Android",
    role: "Flutter Developer",
    overview: "A movie application that allows users to browse and explore movie data. This project focuses on building a well-structured and maintainable codebase while integrating real-world development practices such as testing and CI/CD.",
    keyFeatures: [
      "Browse and view movie details",
      "Clean and structured UI",
      "API integration for dynamic content",
    ],
    whatILearned: [
      "Implementing Clean Architecture for scalable and maintainable apps",
      "Writing Unit Tests to ensure business logic correctness",
      "Writing Integration Tests for end-to-end feature validation",
      "Setting up GitHub Actions (CI/CD) for Flutter projects",
    ],
    links: [
      { label: "GitHub", url: "https://github.com/LucusDev/movie_app" },
      { label: "Download APK", url: "https://github.com/LucusDev/movie_app/releases/download/Legacy/app-release.apk" },
    ],
    previews: [
      "https://user-images.githubusercontent.com/98591667/209701016-a8b82721-fe19-4162-8be9-039a647a0e10.png",
    ],
  },
];

export interface MiniApp {
  slug: string;
  title: string;
  description: string;
  techStack: string;
  purpose: string;
  overview: string;
  whatILearned: string[];
  highlights: string[];
  links: ProjectLink[];
  previews?: string[];
}

export const miniApps: MiniApp[] = [
  {
    slug: "luckywheel",
    title: "LuckyWheel",
    description: "Interactive lucky draw / spinner app",
    techStack: "Flutter, Flutter Web",
    purpose: "Experimenting with animations and interactivity",
    overview: "A fun lucky wheel app with smooth animations, available on both mobile and web.",
    whatILearned: [
      "Animation handling in Flutter",
      "Cross-platform deployment (mobile + web)",
      "Managing interactive UI elements",
    ],
    highlights: ["Smooth spinning wheel animation", "Web preview support"],
    links: [
      { label: "GitHub", url: "https://github.com/LucusDev/luckywheel.git" },
      { label: "Download APK", url: "https://github.com/LucusDev/luckywheel/releases/download/luckywheel/luckywheel.apk" },
      { label: "Live Preview", url: "https://luckywheelflutter.netlify.app/" },
    ],
  },
  {
    slug: "mindmap",
    title: "MindMap",
    description: "Mind mapping app",
    techStack: "Flutter, Flutter Web",
    purpose: "Exploring complex UI interactions and node-based structures",
    overview: "A mind mapping tool that allows users to visually organize ideas. Focused on building dynamic and interactive UI.",
    whatILearned: [
      "Managing complex state in UI",
      "Building draggable / interactive components",
      "Structuring non-linear data",
    ],
    highlights: ["Interactive node-based layout", "Web support"],
    links: [
      { label: "GitHub", url: "https://github.com/LucusDev/mindmap.git" },
      { label: "Download APK", url: "https://github.com/LucusDev/mindmap/releases/download/v0.1.0-beta/mindmap.apk" },
      { label: "Live Preview", url: "https://mindmapflutter.netlify.app/" },
    ],
  },
  {
    slug: "puzzle-app",
    title: "Puzzle App",
    description: "Simple puzzle game",
    techStack: "Flutter",
    purpose: "Learning basic game logic and UI handling",
    overview: "A simple puzzle app focused on logic implementation and user interaction.",
    whatILearned: [
      "Implementing game logic",
      "Handling user input and state updates",
      "Structuring small interactive apps",
    ],
    highlights: ["Simple and fun gameplay", "Lightweight app structure"],
    links: [
      { label: "GitHub", url: "https://github.com/LucusDev/puzzle.git" },
      { label: "Download APK", url: "https://github.com/LucusDev/puzzle/releases/download/puzzle/puzzle.apk" },
    ],
  },
  {
    slug: "animeo",
    title: "Animeo",
    description: "Anime streaming app (scraping-based)",
    techStack: "Flutter, Web Scraping",
    purpose: "Experimenting with scraping anime content and improving app architecture",
    overview: "An anime streaming app that scraped data from gogoanime.fi. Includes a V2 rewrite with improved structure and a V1 legacy version. No longer maintained.",
    whatILearned: [
      "Handling scraped data in mobile apps",
      "Managing unstable external data sources",
      "Structuring a scalable Flutter project",
      "Lessons on project scope and maintainability",
    ],
    highlights: ["Anime browsing from scraped source", "Functional anime streaming"],
    links: [
      { label: "GitHub (V2)", url: "https://github.com/LucusDev/animeo.git" },
      { label: "Download APK", url: "https://github.com/LucusDev/animeo/releases/download/v0.0.3-alpha/animeo.apk" },
      { label: "GitHub (V1)", url: "https://github.com/LucusDev/aniemo-v1.git" },
      { label: "Notion", url: "https://chocolate-reply-0f8.notion.site/faa05e2403d1469cbc188e2300862e18?v=343fd1052cd64e0bb42d6b2a01c59833" },
    ],
    previews: [
      "https://user-images.githubusercontent.com/98591667/209701071-7993b552-5809-4c04-b716-47ff1ee8bcec.png",
    ],
  },
];
