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

export const worksData: IWorkData[] = [
  {
    id: 5,
    title: "E-Shopper",
    overview: "Ecommerce template called eshopper ",
    results: [],
    "challenges": [
      "Creating a seamless user experience with a visually appealing UI that effectively showcases products and categories.",
      "Addressing performance issues such as slow loading times and image optimization to ensure a smooth browsing experience.",
      "Implementing a robust navigation system that simplifies product discovery and encourages exploration.",
      "Managing the daunting task of redesigning and recreating over 200 pages with consistent design and content.",
    ],
    "solution": [
      "Crafted a modern and visually stunning UI that highlights products and categories, enhancing the overall user experience.",
      "Implemented performance optimizations, including image compression and lazy loading, to significantly improve page loading times.",
      "Revamped the navigation architecture with intuitive menus and search functionality, facilitating seamless product discovery.",
      "Employed efficient content creation workflows and automation tools to streamline the recreation of over 200 pages, ensuring consistency and quality.",
    ],
    imageURL: "eshopper.png",
    liveUrl: "https://eshopper-xi.vercel.app",
    skills: ["Next.js", "Typescript", "Tailwind CSS", "MySQL"],
  },
  {
    id: 1,
    title: "Autroworld",
    overview:
      "A client with 80 product images listed in a Google sheet was struggling with product placement and the creation of 30 pages on their website, while also facing issues with website speed. I  provided a solution by creating a data structure of fixed positions of products from images, along with reusable templates for page creation, and moving the website to NEXT JS with optimized images",
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
    skills: ["React", "Next.js", "SCSS", "Data Structure", "Vercel"],
  },
  {
    id: 4,
    title: "Access Elevator",
    overview:
      "The Access Elevator website was slow and outdated, with a UI that did not make sense for showing categories, subcategories, and documentation PDFs. The navigation was hard to notice, and there was no proper way to showcase products to customers. Pages were loading slowly, and images needed to be optimized. There were over 200 pages that needed to be recreated. Our team provided a solution by creating a fast and user-friendly website that met all of the client's needs.",
    results: [],
    challenges: [
      "The Access Elevator website was slow and outdated, with a UI that did not make sense for showing categories, subcategories, and documentation PDFs.",
      "The navigation was hard to notice, and there was no proper way to showcase products to customers.",
      "Pages were loading slowly, and images needed to be optimized.",
      "There were over 200 pages that needed to be recreated.",
    ],
    solution: [
      "Redesigned the website from scratch, with a modern and responsive design.",
      "Restructured the categories and subcategories to make it easy for customers to find the products they are looking for.",
      "Added a dedicated section for documentation PDFs, making it easy for customers to access and download relevant information.",
      "Improved the website navigation by making it more intuitive and user-friendly.",
      "Implemented an optimized image loading strategy, reducing page loading times and improving overall performance.",
      "Streamlined the content creation process and recreated over 200 pages with a consistent and cohesive design.",
    ],
    imageURL: "accesselevator.png",
    liveUrl: "https://www.allaboutaccess.com/",
    skills: ["HTML", "CSS", "JavaScript", "WordPress", "Woocommerce"],
  },

  {
    id: 2,
    title: "Flexistore",
    overview:
      "Our client, a leading global warehousing company, approached us with a unique challenge. They wanted to integrate an external global warehouse API into their existing WordPress website to showcase their storage facilities in a single listing UI with search capabilities. However, the API job was not straightforward, as there were multiple APIs for managing store locations, rooms, facilities, and discount codes, all linked to one another with a one-to-many relation.",
    results: [
      // "The custom API reduced complexity and increased efficiency, potentially leading to a 30% reduction in management time and costs.",
      // "The use of shortcodes saved time and improved website navigation, potentially increasing user satisfaction by 20-25%.",
      // "The multilingual translation feature expanded the company's reach to non-English speaking audiences, potentially increasing sales and revenue by 15-20%.",
      // "The location-finding function improved the user experience and provided relevant information to potential customers, potentially increasing conversion rates by 10-15%.",
    ],
    challenges: [
      "The company wanted to integrate an external global warehouse API into its WordPress website to showcase its storage facilities in a single listing UI with search capabilities.",
      "There are multiple APIs for managing store locations, rooms, facilities, and discount codes that are linked to one another with a one-to-many relation, making it challenging to integrate them into the website.",
      "The text generated by the API needs to be translated into three different languages, which can be time-consuming and complicated.",
      "The company wants to display the two nearest storage locations based on user location data, which requires a location-finding function to be implemented.",
    ],
    solution: [
      "To integrate the external global warehouse API into the WordPress website, I merged the multiple APIs into one custom API and created a UI with Vue JS.",
      "Created a list of page URLs and used regex to filter API locations without updating page URLs",
      "Filtered items on matching pages, creating shortcodes, saving time and improving website navigation.",
      "Translated the API-generated text into three different languages, using the TranslatePress plugin to make the process easier and faster.",
      "Implemented a location-finding algorithm that retrieves coordinates from the API.",
    ],
    imageURL: "flexistore.png",
    liveUrl: "https://www.flexistore.no/minilager/oslo/ensjo/",
    skills: ["Vue.js", "SCSS", "REST API", "CI/CD", "WordPress"],
  },
  {
    id: 3,
    title: "Bakala Kuwait",
    overview:
      "The Bakala Kuwait Delivery Service project involved developing a cross-platform application for IOS, Android, and the web with no authentication. The UI needed to be designed with children in mind, while still providing the ability to track orders, checkout with previous credentials, and integrate QR codes. Our team provided a solution by creating a fast and user-friendly application that met all of the client's needs.",
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
