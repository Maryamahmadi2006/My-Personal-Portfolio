/**
 * All project content for the portfolio lives in this single file.
 *
 * - `homeProjects` are the four featured cards on the homepage.
 * - `workProjects` is the complete list shown on the Work page (with filters).
 * - `projectDetails` holds each case-study page, keyed by project slug.
 *
 * To change a project, edit its card and detail entry here — no JSX changes
 * needed. Card categories: "web", "development", "branding" (used by filters).
 */

export const homeProjects = [
  {
    slug: "dreamhome",
    title: "Dream Home — Modern Real Estate Platform",
    label: "Netlinks · Bootcamp Challenge",
    category: "web",
    year: "2026",
    image: "assets/images/dream home.png",
    alt: "Dream Home — Modern Real Estate Platform website project preview",
  },
  {
    slug: "afghanbazar",
    title: "Afghan Bazaar",
    label: "Online Shop · CTI Final Project",
    category: "development",
    year: "2026",
    image: "assets/images/Afghan bazar.png",
    alt: "Afghan Bazar homepage showcasing Afghan culture, products, and traditional designs",
  },
  {
    slug: "greanleafpark",
    title: "GreenLeaf Park",
    label: "Front-End Development · CTI project",
    category: "web",
    year: "2026",
    image: "assets/images/Grean leaf park.png",
    alt: "GreenLeaf Park website homepage with upcoming eco events and contact section",
  },
  {
    slug: "ecommerce",
    title: "Essential — E-commerce Website",
    label: "HTML · CSS · First Bootcamp Challenge in Netlinks",
    category: "web",
    year: "2026",
    image: "assets/images/E-commerce Website.png",
    alt: "Skincare e-commerce homepage featuring a product and shopping interface",
  },
];

export const workProjects = [
  {
    slug: "dreamhome",
    title: "Skincare E-commerce Website",
    label: "Netlinks · Web Design & Development",
    category: "web",
    year: "2026",
    image: "assets/images/dream home.png",
    alt: "Dream Home real estate homepage with featured property listings",
  },
  {
    slug: "afghanbazar",
    title: "Afghan Bazaar",
    label: "Online Shop · CTI Final Project",
    category: "development",
    year: "2026",
    image: "assets/images/Afghan bazar.png",
    alt: "Afghan Bazar homepage showcasing Afghan culture, traditional products, and navigation",
  },
  {
    slug: "greanleafpark",
    title: "GreenLeaf Park",
    label: "Front-End Development · CTI project",
    category: "web",
    year: "2026",
    image: "assets/images/Grean leaf park.png",
    alt: "GreenLeaf Park website homepage with eco-friendly activities and nature theme",
  },
  {
    slug: "ecommerce",
    title: "Restaurant Website",
    label: "WordPress · Web Design",
    category: "web",
    year: "2026",
    image: "assets/images/E-commerce Website.png",
    alt: "Skincare e-commerce homepage featuring a skincare product and online shopping interface",
  },
  {
    slug: "restaurant",
    title: "Afghan Restaurant",
    label: "CTI · WordPress · Web Design",
    category: "development",
    year: "2026",
    image: "assets/images/restaurant.png",
    alt: "Restaurant website homepage with food photography and a warm dining theme",
  },
  {
    slug: "travel",
    title: "Additional Web Project",
    label: "Educational / Personal Project",
    category: "development",
    year: "2026",
    image: "assets/images/amintravel.png",
    alt: "Amin Ahmadi Travel and Tour homepage with travel services and destination information",
  },
  {
    slug: "neurosurgeon",
    title: "Dr. Khalid Khan Zadran — Neurosurgeon Portfolio",
    label: "React · GitHub Pages · English / دری / پښتو",
    category: "development",
    year: "2026",
    image: "assets/images/projects/neurosurgeon-portfolio.jpg",
    alt: "Dr. Khalid Khan Zadran neurosurgeon portfolio homepage preview",
  },
  {
    slug: "zohco",
    title: "Zohco — Website Recreation",
    label: "Framer Recreation · Front-End Assignment",
    category: "development",
    year: "2026",
    image: "assets/images/projects/zohco-website.jpg",
    alt: "Zohco website homepage preview",
  },
];

export const projectDetails = {
  dreamhome: {
    categoryLabel: "Web Design & Front-End Development",
    title: "Dream Home — Real Estate Website",
    intro:
      "Dream Home is a modern real estate website created to provide a clean and engaging experience for people looking to buy, rent, or explore properties. The design focuses on visual storytelling, clear property presentation, intuitive navigation, and strong calls to action. I created sections for featured properties, available listings, locations, the real estate process, testimonials, statistics, and real-estate insights. The goal was to create a website that feels trustworthy and premium while keeping the experience simple and easy to navigate.",
    meta: {
      project: "Dream Home",
      year: "2026",
      role: "Design + Front-End Developer",
      website: {
        href: "https://gentle-crepe-bd2e19.netlify.app/",
        label: "Visit →",
      },
    },
    cover: "assets/images/dream home.png",
    coverAlt: "Dream Home real estate homepage with a modern property search and featured homes",
    overviewTitle:
      "A real- estate interface built to put my HTML and CSS skills into practice.",
    overviewBody:
      "The project focused on practicing HTML and CSS through responsive layouts, clean structure, consistent spacing, and visual hierarchy.",
    overviewText:
      "This project was created as part of my Netlinks bootcamp training, where the challenge was to build a real-estate website using HTML and CSS. I focused on translating the design into a structured and responsive interface, paying close attention to layout, spacing, typography, images, and visual hierarchy.",
    gallery: [
      { src: "assets/images/dream home3.png", alt: "Dream Home featured property listings page with multiple modern homes" },
      { src: "assets/images/dream home4.png", alt: "Dream Home contact section with a form and call-to-action for finding a home" },
    ],
  },
  afghanbazar: {
    categoryLabel: "Front-End Development · CTI Final Project",
    title: "Afghan Bazaar — Online Shop",
    intro:
      "A responsive online shopping website inspired by Afghan culture, built as my final project at Code to Inspire using HTML, CSS, JavaScript, and Bootstrap.",
    meta: {
      project: "Afghan Bazaar",
      year: "2026",
      role: "Design + Development",
      website: {
        href: "https://maryamahmadi2006.github.io/Assignment-8---online-Shop/index.html",
        label: "Visit",
      },
    },
    cover: "assets/images/afghan bazar.png",
    coverAlt: "Afghan Bazar homepage showcasing Afghan culture, traditional products, and navigation",
    overviewTitle:
      "An online shopping experience built to strengthen my front-end development skills.",
    overviewBody:
      "The project focused on responsive design, product presentation, JavaScript interactions, and building a consistent e-commerce interface.",
    overviewText:
      "This project was created as my final project at Code to Inspire after completing training in HTML, CSS, JavaScript, and Bootstrap. I designed and developed an online shop focused on Afghan products, with an emphasis on responsive layouts, product presentation, interactive elements, and a clear user experience.",
    gallery: [
      { src: "assets/images/afghan bazar2.png", alt: "Afghan Bazar products page displaying traditional Afghan dresses, carpets, and jewelry" },
      { src: "assets/images/afghanbazar3.png", alt: "Afghan Bazar contact page with contact information and an inquiry form" },
    ],
  },
  greanleafpark: {
    categoryLabel: "Front-End Development",
    title: "GreenLeaf Park — Nature & Recreation Website",
    intro:
      "A responsive website designed to introduce visitors to a local park, its nature trails, family activities, and eco-friendly events. The project focuses on clean layouts, responsive design, and an engaging nature-inspired visual experience.",
    meta: {
      project: "GreenLeaf Park",
      year: "2026",
      role: "Front-End Developer",
      website: {
        href: "https://graceful-crisp-56c617.netlify.app",
        label: "Visit →",
      },
    },
    cover: "assets/images/Grean leaf park.png",
    coverAlt: "GreenLeaf Park homepage with a green nature-themed design and welcome section",
    overviewTitle:
      "A nature-focused website designed to make outdoor experiences easy to explore.",
    overviewBody:
      "The project focused on responsive layouts, content organization, visual hierarchy, and creating a consistent nature-inspired interface.",
    overviewText:
      "GreenLeaf Park is a front-end website created to present a park's natural spaces, activities, and events in a clear and engaging way. I focused on creating a responsive layout with HTML and CSS, organizing information into accessible sections while using imagery, typography, spacing, and visual hierarchy to create a calm, nature-inspired experience.",
    gallery: [
      { src: "assets/images/grean leaf park2.png", alt: "GreenLeaf Park family activities page featuring outdoor activities and nature images" },
      { src: "assets/images/grean leaf park3.png", alt: "GreenLeaf Park events and contact section with upcoming eco activities" },
    ],
  },
  ecommerce: {
    categoryLabel: "Netlinks Bootcamp Challenge",
    title: "Essential — E-commerce Website",
    intro:
      "A beauty-focused e-commerce website created as my first Netlinks bootcamp challenge, with a focus on HTML structure, CSS styling, layout, and visual design.",
    meta: {
      project: "Essential",
      year: "2026",
      role: "Front-End Developer",
      website: {
        href: "https://maryamahmadi2006.github.io/bootcamp-Netlinks/",
        label: "Visit →",
      },
    },
    cover: "assets/images/E-commerce Website.png",
    coverAlt: "Skincare e-commerce homepage featuring a skincare product and product categories",
    overviewTitle: "My first step into front-end development through HTML and CSS.",
    overviewBody:
      "The project focused on HTML structure, CSS styling, layout, spacing, and visual design.",
    overviewText:
      "This project was created as my first challenge during the Netlinks bootcamp. The main goal was to practice building a webpage with a clear HTML structure and styling it with CSS. I focused on page layout, typography, spacing, images, and creating a consistent visual design.",
    gallery: [
      { src: "assets/images/E-commerce2.png", alt: "Skincare e-commerce product listing page showing skincare products and categories" },
      { src: "assets/images/E-commerce3.png", alt: "Skincare e-commerce page with a beauty-focused layout and product content" },
    ],
  },
  restaurant: {
    categoryLabel: "WordPress Development · CTI Final Project",
    title: "Afghan Restaurant — Restaurant Website",
    intro:
      "A restaurant website inspired by Afghan cuisine and hospitality, created as my final project at Code to Inspire. The project focuses on presenting the restaurant's identity, menu, dining experience, testimonials, and reservation options through a warm and visually focused design.",
    meta: {
      project: "Afghan Restaurant",
      year: "2026",
      role: "WordPress Developer",
      website: {
        href: "https://www.linkedin.com/posts/maryam-ahmadi-787841336_cti-webdevelopment-frontend-activity-7486333266669584384-7Z33?utm_source=share&utm_medium=member_ios&rcm=ACoAAFR8TxcB5CMlJ4VsZHQHr62IzGL6V3eLggk",
        label: "View my LinkedIn post →",
      },
    },
    cover: "assets/images/restaurant.png",
    coverAlt: "Restaurant website homepage with food photography and a warm dining experience",
    overviewTitle:
      "A final WordPress project inspired by Afghan food, culture, and hospitality.",
    overviewBody:
      "The project focused on WordPress development, website structure, visual design, content organization, and creating a cohesive restaurant experience.",
    overviewText:
      "This project was created as my final project at Code to Inspire after learning WordPress and web development fundamentals. I designed and developed a restaurant website centered around Afghan cuisine and the dining experience. I focused on creating a strong visual identity, organizing restaurant information clearly, and presenting sections such as the food experience, testimonials, promotions, and reservations in an engaging way.",
    gallery: [
      { src: "assets/images/restaurant2.png", alt: "Restaurant website section featuring Afghan food, featured dishes, and restaurant information" },
      { src: "assets/images/restaurant3.png", alt: "Restaurant website guest testimonials section with customer reviews" },
    ],
  },
  travel: {
    categoryLabel: "WordPress Development · CTI",
    title: "Amin Ahmadi Travel & Tour",
    intro:
      "A travel website created during my early WordPress training at Code to Inspire. The project introduced me to building websites with WordPress and helped me practice page structure, navigation, content organization, and visual design.",
    meta: {
      project: "Amin Ahmadi Travel & Tour",
      year: "2026",
      role: "WordPress Developer",
      website: {
        href: "https://x.com/maryamahmadi_07/status/2071999242604826988?s=46",
        label: "View my X post →",
      },
    },
    cover: "assets/images/amintravel.png",
    coverAlt: "Amin Ahmadi Travel and Tour homepage with travel services and destination information",
    overviewTitle: "My first experience building a website with WordPress.",
    overviewBody:
      "The project focused on learning WordPress, website structure, content organization, and visual design.",
    overviewText:
      "This project was created during my WordPress training at Code to Inspire. As my first WordPress project, the main focus was learning how to work with the WordPress environment and build a complete website structure. I worked on organizing travel services, destinations, tour information, and navigation into a simple travel website.",
    gallery: [
      { src: "assets/images/amintravel2.png", alt: "Amin Ahmadi Travel and Tour page featuring popular tour destinations" },
      { src: "assets/images/amintravel3.png", alt: "Amin Ahmadi Travel and Tour page featuring an Iran tour package and destination details" },
    ],
  },
  neurosurgeon: {
    categoryLabel: "React · Vite · GitHub Pages",
    title: "Dr. Khalid Khan Zadran — Neurosurgeon Portfolio",
    intro:
      "A trilingual portfolio website for Dr. Khalid Khan Zadran, a neurosurgeon in Kabul, Afghanistan. The site is available in English, Dari, and Pashto — with full right-to-left support for the Afghan languages — and is built with React and Vite.",
    meta: {
      project: "Neurosurgeon Portfolio",
      year: "2026",
      role: "Design + Front-End Developer",
      website: {
        href: "https://maryamahmadi2006.github.io/neurosurgeon-portfolio/",
        label: "Visit ↗",
      },
    },
    cover: "assets/images/projects/neurosurgeon-portfolio.jpg",
    coverAlt: "Dr. Khalid Khan Zadran neurosurgeon portfolio homepage preview",
    overviewTitle:
      "A React portfolio that switches fully between English, Dari, and Pashto.",
    overviewBody:
      "The project focused on component-based React development, RTL layout support for Persian and Pashto text, scroll and load animations, and a responsive design across every section.",
    overviewText:
      "This project is a complete portfolio website for a neurosurgeon based in Kabul. I designed and developed it as a single-page React application with Vite, using hash-based routing so it can be hosted directly on GitHub Pages. The site includes a services section, an about section, an appointment form, and contact details, and the whole interface switches between English, Dari, and Pashto — including right-to-left layout support. Scroll animations and a light, clinical visual style complete the experience.",
    gallery: [
      {
        src: "assets/images/projects/neurosurgeon-portfolio.jpg",
        alt: "Dr. Khalid Khan Zadran neurosurgeon portfolio preview",
      },
    ],
  },
  zohco: {
    categoryLabel: "Front-End Development · Framer Recreation",
    title: "Zohco — Website Recreation",
    intro:
      "A responsive Zohco website recreated from an existing Framer design as a front-end development assignment.",
    meta: {
      project: "Zohco",
      year: "2026",
      role: "Front-End Developer",
      website: {
        href: "https://maryamahmadi2006.github.io/Zohco-website/",
        label: "Visit ↗",
      },
    },
    cover: "assets/images/projects/zohco-website.jpg",
    coverAlt: "Zohco website homepage preview",
    overviewTitle:
      "A close recreation of a Framer design, rebuilt with clean front-end code.",
    overviewBody:
      "The project focused on matching an existing design closely, building responsive layouts, and recreating animations and interactions without a site builder.",
    overviewText:
      "This project was created as a front-end development assignment. I recreated an existing Zohco website design from Framer, focusing on matching the visual style closely while building the layout with clean, responsive code. The main goals were to reproduce a professional design accurately and to make sure the result works smoothly across screen sizes.",
    gallery: [
      {
        src: "assets/images/projects/zohco-website.jpg",
        alt: "Zohco website preview",
      },
    ],
  },
};
