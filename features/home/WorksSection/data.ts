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
    title: "Autroworld",
    overview: " ",
    results: [
      "The data structure were made easily accessible for the client and developers",
      "Development time was reduced by 40%",
      "Website speed was improved by 70%",
    ],
    challenges: [
      "Product placement was difficult due to a lack of information in the Google sheet",
      "Creating too many unorganized pages was time-consuming for developers",
      "Website speed was slow, affecting user experience and potentially decreasing conversion rates",
    ],
    solution: [
      "Created a data structure of fixed positions of products from images with help of browser dev tools",
      "Created reusable templates for repetitive page creation",
      "Applied caching, lazy loading methods with NEXT JS to improve website speed",
    ],

    imageURL: "autroworld.png",
    liveUrl: "https://autroworld.com/",
    skills: ["Next.js", "SCSS", "DSA"],
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
    skills: ["Next.js", "Typescript", "Tailwind CSS", "PostgresQL", "Docker", "Prisma"],
  },
  {
    id: 4,
    title: "CRYPTIO",
    overview: "",
    results: [],
    challenges: [
      "Security: How can we ensure the highest level of security for user funds and transactions on the platform?",
      "Scalability: How can the platform handle a large volume of users and transactions without compromising performance?",
      "Compliance: How can Cryptio stay compliant with evolving regulations in the cryptocurrency market?",
    ],
    solution: [
      "Multi-layered Security: Implement a multi-layered security approach that includes robust encryption, secure storage of user credentials, and regular penetration testing.",
      "Microservices Architecture: Design the platform using a microservices architecture to ensure scalability and enable independent scaling of different functionalities.",
      "Regulatory Compliance Framework: Develop a comprehensive regulatory compliance framework that monitors and adapts to changing regulations in the cryptocurrency space.",
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
      "Virtual Tours and Property Showcasing: How can Home Finder provide potential buyers with immersive virtual tours and property showcasing experiences?",
      "AI-powered Matching: How can the platform use AI to match users with their ideal properties based on their preferences and search criteria?",
      "Market Trend Analysis and Insights: How can Home Finder offer users valuable insights and data about market trends and property valuations?",
    ],
    solution: [
      "360° Virtual Tours: Integrate support for 360° virtual tours that allow users to explore properties remotely and get a realistic feel for the space.",
      "AI-powered Matching Algorithm: Develop an AI-powered matching algorithm that analyzes user preferences, search behavior, and property listings to recommend the most suitable options.",
      "Market Data Integration: Partner with real estate data providers to offer users insights on market trends, pricing data, and property valuations within specific locations.",
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
      "Dynamic Content Management: How can Lead-X allow clients to easily update and manage their content without requiring technical expertise?",
      "Lead Generation Optimization: How can the website be optimized to capture more leads and improve conversion rates?",
      "Data Analytics and Reporting: How can Lead-X provide clients with valuable data and insights about their website traffic and lead generation efforts?",
    ],
    solution: [
      "Content Management System (CMS): Integrate a user-friendly CMS that allows clients to edit and publish content without coding knowledge.",
      "A/B Testing: Implement A/B testing to compare different website elements and landing pages to identify the most effective designs for lead generation.",
      "Analytics and Reporting Dashboard: Develop a dashboard that provides clients with real-time data on website traffic, lead conversions, and marketing campaign performance.",
    ],

    imageURL: "agency.png",
    liveUrl: "https://kbtanvir.vercel.app/sites/agency/",
    skills: ["Next.js", "Typescript", "Tailwind CSS", "PostgresQL", "Docker"],
  },
  {
    id: 3,
    title: "Bakala Kuwait",
    overview: " ",
    results: [],
    challenges: [
      "Creating a cross-platform application for IOS, Android, and the web with no authentication",
      "Designing a UI that was easy for children to use while still being functional for adult users",
      "Providing the ability for users to track orders and checkout with their previous credentials",
      "Ensuring the store was fast and responsive to meet user expectations",
      "Integrating QR codes into the application for easy ordering and tracking",
    ],
    solution: [
      "Stored minimal user information locally and tracked orders using phone numbers, eliminating the need for authentication.",
      "Created a cross-platform PWA app for iOS, Android, and the web, reducing complexity and cost.",
      "Designed the UI to resemble a mobile app, making it easy for children to navigate on mobile and tablet devices.",
      "Implemented React Query, a powerful tool for managing cache and reducing API calls, to ensure the app runs super fast.",
      "Integrated an NPM package for QR codes, enabling easy installation and quick order tracking.",
    ],
    imageURL: "bakala.png",
    liveUrl: "https://www.bakalakuwait.com/",
    skills: [
      "Next.js",
      "PWA",
      "Flutter",
      "Chakra UI",
      "React Query",
      "Firebase",
    ],
  },
];
