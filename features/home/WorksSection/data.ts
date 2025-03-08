export type IWorkData = {
  id: number;
  title: string;
  overview: string;
  challenges: string[];
  solution: string[];
  results: string[];
  imageURL: string;
  liveUrl: any;
  pageUrl?: string;
  skills: string[];
};
/* 
 
Lead-X (Digital Marketing Website)

Challenges:

Dynamic Content Management: How can Lead-X allow clients to easily update and manage their content without requiring technical expertise?
Lead Generation Optimization: How can the website be optimized to capture more leads and improve conversion rates?
Data Analytics and Reporting: How can Lead-X provide clients with valuable data and insights about their website traffic and lead generation efforts?
Solutions:

Content Management System (CMS): Integrate a user-friendly CMS that allows clients to edit and publish content without coding knowledge.
A/B Testing: Implement A/B testing to compare different website elements and landing pages to identify the most effective designs for lead generation.
Analytics and Reporting Dashboard: Develop a dashboard that provides clients with real-time data on website traffic, lead conversions, and marketing campaign performance.
Home Finder (Real Estate Platform)

Challenges:

Virtual Tours and Property Showcasing: How can Home Finder provide potential buyers with immersive virtual tours and property showcasing experiences?
AI-powered Matching: How can the platform use AI to match users with their ideal properties based on their preferences and search criteria?
Market Trend Analysis and Insights: How can Home Finder offer users valuable insights and data about market trends and property valuations?
Solutions:

360° Virtual Tours: Integrate support for 360° virtual tours that allow users to explore properties remotely and get a realistic feel for the space.
AI-powered Matching Algorithm: Develop an AI-powered matching algorithm that analyzes user preferences, search behavior, and property listings to recommend the most suitable options.
Market Data Integration: Partner with real estate data providers to offer users insights on market trends, pricing data, and property valuations within specific locations.
*/
export const worksData: IWorkData[] = [
  {
    id: 1,
    title: "Static.run",
    overview: " ",
    results: [
      "Scaled the platform to handle 50K monthly users with zero downtime, ensuring seamless static hosting",
      "Achieved 200+ paid customers within the first month of launch, validating product-market fit",
      "Reduced server costs by 35% through AWS S3 optimizations and traffic limit controls",
    ],
    challenges: [
      "Managing high-traffic spikes while maintaining static site performance and uptime",
      "Implementing secure multi-tenant architecture for user isolation at scale",
      "Optimizing AWS S3-Nginx integration for low-latency global content delivery",
      "Preventing abuse of hosting resources through rate-limiting and traffic controls",
    ],
    solution: [
      "Designed a microservices architecture using Nest.js + Docker for horizontal scalability",
      "Deployed Nginx reverse proxy with caching layers to reduce AWS S3 bandwidth costs",
      "Built traffic monitoring dashboard with automated throttling for abuse prevention",
      "Implemented CI/CD pipelines with automated canary deployments using GitHub Actions",
    ],

    imageURL: "staticrun.png",
    liveUrl: "https://static.run/",
    skills: ["NGINX", "Node.js", "Tailwind CSS", "PostgresQL", "Docker", "S3"],
  },
  {
    id: 3,
    title: "Lineicons v5",
    overview: " ",
    results: [],
    challenges: [
      "Handling 100K+ daily active requests, exceeding shared server limits and causing performance bottlenecks",
      "Relying on a free-tier Cloudflare Worker, which became expensive as user traffic grew exponentially",
      "Directly querying the database for icon metadata, leading to inefficient SQL operations and slow response times",
      "Using a non-S3 compatible CDN, making it difficult to manage and scale icon storage effectively",
      "Complex icon management system that was time-consuming for non-technical users to upload and modify icons",
    ],
    solution: [
      "Migrated to a custom lightweight Express.js server on a VPS for efficient request mapping and handling",
      "Implemented a key-value pair database (e.g., Redis) to cache icon metadata, reducing SQL load and improving response times",
      "Integrated Cloudflare R2 (S3-compatible) as the CDN for scalable and cost-effective icon storage",
      "Built a custom icon management system with an S3 file system browser, enabling non-technical users to easily upload, modify, and sync icons",
      "Added a caching layer to minimize database queries and optimize server performance for high-traffic scenarios",
    ],
    imageURL: "lineicons.png",
    liveUrl: "https://www.lineicons.com/",
    skills: [
      "Next.js",
      "Cloudflare R2",
      "Express.js",
      "Tailwind CSS",
      "MySQL",
      "Redis",
      "S3",
    ],
  },
  {
    id: 5,
    title: "E-Shopper",
    overview: "",
    results: [],
    "challenges": [
      "Personalization: How can we recommend fruits to users based on their purchase history and preferences?",
      "Inventory Management: How can we ensure real-time stock availability and prevent overselling of perishable items?",
      "Delivery Optimization: How can we optimize delivery routes to minimize costs and ensure fresh fruit arrives quickly?",
    ],
    "solution": [
      "Recommendation Engine: Implement a recommendation engine that analyzes user data to suggest relevant fruits. This could involve collaborative filtering or content-based filtering techniques.",
      "Real-time Inventory System: Integrate a real-time inventory system that updates stock levels automatically upon purchase. This can be achieved through API connections with warehouse management systems.",
      "Route Optimization Algorithm: Utilize a route optimization algorithm that considers factors like distance, traffic patterns, and delivery time to create efficient delivery routes.",
    ],
    imageURL: "eshopper1.png",
    liveUrl: "https://kbtanvir.vercel.app/sites/eshopper",
    skills: [
      "Next.js",
      "Typescript",
      "Tailwind CSS",
      "PostgresQL",
      "Docker",
      "Prisma",
    ],
  },
  {
    id: 4,
    title: "CRYPTIO",
    overview: "",
    results: [],
    challenges: [
      "Ensuring top-tier security for user funds and transactions was critical, as even a small vulnerability could lead to significant losses.",
      "Scaling the platform to handle thousands of concurrent users and transactions without slowing down or crashing was a major hurdle.",
      "Navigating the constantly changing cryptocurrency regulations required a flexible and proactive compliance strategy.",
    ],
    solution: [
      "Built a multi-layered security system with end-to-end encryption, secure cold storage for funds, and regular third-party security audits to ensure user trust.",
      "Adopted a microservices architecture, allowing us to scale individual components (like transaction processing) independently and handle peak loads efficiently.",
      "Developed a dynamic compliance framework that automatically updates based on regulatory changes, ensuring Cryptio stays ahead of legal requirements.",
    ],
    imageURL: "crypto.png",
    liveUrl: "https://kbtanvir.vercel.app/sites/crypto",
    skills: ["Next.js", "Typescript", "Tailwind CSS", "Docker"],
  },
  {
    id: 2,
    title: "Home Finder",
    overview: " ",
    results: [],
    challenges: [
      "Providing immersive virtual tours was challenging, as users needed a realistic way to explore properties without physical visits.",
      "Matching users with their ideal homes required analyzing vast amounts of data, including preferences, location, and budget.",
      "Delivering accurate market insights and property valuations in real-time was essential for helping users make informed decisions.",
    ],
    solution: [
      "Integrated 360° virtual tour technology, allowing users to explore properties remotely with a seamless, interactive experience.",
      "Developed an AI-powered recommendation engine that analyzes user behavior and preferences to suggest the most relevant properties.",
      "Partnered with real estate data providers to offer real-time market trends, pricing analytics, and property valuation tools directly on the platform.",
    ],
    imageURL: "property.png",
    liveUrl: "https://kbtanvir.vercel.app/sites/real-estate/",
    skills: ["Next.js", "Typescript", "Tailwind CSS", "PostgresQL", "Docker"],
  },
  {
    id: 1,
    title: "LEAD-X",
    overview: " ",
    results: [],
    challenges: [
      "Clients struggled to update website content without technical expertise, leading to delays and reliance on developers.",
      "Optimizing the website for lead generation required testing and refining various design and content elements.",
      "Clients needed actionable insights into their website performance and lead conversion rates to make data-driven decisions.",
    ],
    solution: [
      "Implemented a user-friendly CMS that allowed clients to easily update content, add blog posts, and manage landing pages without coding knowledge.",
      "Ran A/B tests on key website elements, such as CTAs and forms, to identify the most effective designs for maximizing lead conversions.",
      "Built a custom analytics dashboard that provided real-time insights into traffic sources, lead conversions, and campaign performance, empowering clients to optimize their strategies.",
    ],

    imageURL: "agency.png",
    liveUrl: "https://kbtanvir.vercel.app/sites/agency/",
    skills: ["Next.js", "Typescript", "Tailwind CSS", "PostgresQL", "Docker"],
  },
  
];
