


const projects = [
   {
     title: 'Shop Nest',
     slug: 'shop-nest',
     description: 'A comprehensive multi-vendor e-commerce marketplace supporting sellers and buyers with real-time interaction and secure payments.',
     features: [
       'Product catalog with advanced filtering, shopping cart, wishlist',
       'Order tracking and review system',
       'Seller dashboards with analytics and coupon management',
       'Real-time messaging via Socket.io',
       'Integrated Stripe & PayPal payments',
       'Role-based authentication with JWT'
     ],
     tech: ['React.js', 'Redux Toolkit', 'Tailwind CSS', 'Node.js', 'Express.js', 'MongoDB', 'Socket.io', 'Stripe', 'PayPal'],
     link: 'https://frontend-multivendor.netlify.app/',
     sourceCodeLink: 'https://github.com/alishair7071/Multivendor',
     readmeLink: 'https://github.com/alishair7071/Multivendor/blob/main/README.md',
     gradient: 'from-blue-600 to-purple-600',
     caseStudy: {
       overview: 'Shop Nest is a production-style multi-vendor marketplace. It enables sellers to manage stores, products, coupons, and withdrawals while buyers browse, wishlist, purchase, and track orders. Real-time chat connects buyers and sellers; Stripe and PayPal power secure payments.',
       highlights: [
         'End-to-end marketplace flows for sellers and buyers',
         'Real-time chat with Socket.io for instant support and negotiation',
         'Payments with Stripe & PayPal, including webhook-based verification',
         'Scalable MERN architecture with role-based access control'
       ],
       implementation: [
         'Frontend: React + Redux Toolkit, Tailwind UI, route-guarded dashboards',
         'Backend: Node.js + Express REST APIs, MongoDB models, JWT auth for users/shops',
         'Integrations: Socket.io for messaging, Stripe/PayPal for payments',
         'DevOps: Environment-based config and Cloudinary for media storage'
       ],
       results: [
         'Fast product discovery with filters and server-driven pagination',
         'Reliable checkout and order lifecycle from payment to delivery',
         'Maintainable codebase with clear separation of concerns'
       ]
     },
     personal: {
       idea: 'I built Shop Nest after noticing repeated client needs around multi-seller storefronts and secure, scalable checkout flows—aiming for a reusable marketplace foundation inspired by platforms like Etsy/Amazon.',
       challenges: [
         'Designing clean role-based access for users vs. sellers',
         'Handling payment webhooks and order lifecycle reliability',
         'Managing real-time chat without overloading the backend'
       ],
       solves: 'It enables small sellers to reach customers quickly with modern UX, streamlined catalog/checkout, and real-time communication, reducing friction for both sides.',
       implemented: [
         'Multi-vendor dashboards with coupons and analytics',
         'Socket.io chat between buyers and sellers',
         'Stripe & PayPal payments with verification',
         'Cloudinary media management and robust data models'
       ],
       learnings: [
         'Best practices for webhooks and idempotent operations',
         'WebSocket patterns and back-pressure considerations',
         'Scalable filtering/pagination for large catalogs'
       ]
     }
   },
   {
     title: 'Real Estate Platform',
     slug: 'real-estate-platform',
     description: 'A property listing and management platform where individuals can post their estates for sale or rent, and buyers can search, filter, and explore available properties.',
     features: [
       'Property posting for sale or rent',
       'Advanced search and filtering',
       'Responsive modern UI with Tailwind CSS',
       'Redux Toolkit for state management',
       'RESTful APIs with JWT authentication'
     ],
     tech: ['React', 'Redux Toolkit', 'Tailwind CSS', 'Node.js', 'Express', 'MongoDB'],
     link: 'https://mern-estate-frontend.netlify.app/',
     sourceCodeLink: 'https://github.com/alishair7071/real-estate',
     readmeLink: 'https://github.com/alishair7071/real-estate/blob/main/README.md',
     gradient: 'from-green-600 to-teal-600',
     caseStudy: {
       overview: 'A streamlined real estate portal for listing, discovering, and managing properties. Owners can create and update listings; users search with filters, view details, and contact owners.',
       highlights: [
         'Optimized listing search and filtering across price, type, and location',
         'Secure auth flows and role-aware actions (create/update listings)',
         'Clean, responsive UI optimized for mobile'
       ],
       implementation: [
         'Frontend: React + Redux Toolkit with reusable listing components',
         'Backend: Express APIs with MongoDB schema for listings and users',
         'Auth: JWT-based sessions with protected routes',
         'Image handling via cloud storage integration and client-side compression'
       ],
       results: [
         'Reduced time-to-find with efficient filters and debounced queries',
         'Simple listing management that non-technical users can operate',
         'Foundation for extensions like saved searches and alerts'
       ]
     },
     personal: {
       idea: 'This started as a way to simplify the property search experience and practice real-world CRUD + search at scale with a clean UI.',
       challenges: [
         'Efficient, scalable filters (price/type/location) and pagination',
         'Reliable media uploads and handling across devices',
         'Clear UX for complex, multi-field listing forms'
       ],
       solves: 'Owners can self-serve listings; users can quickly narrow results with meaningful filters, improving discovery and decision-making.',
       implemented: [
         'Listing CRUD with secure JWT-based access',
         'Debounced search and query param synchronization',
         'Image handling via cloud storage and client-side compression'
       ],
       learnings: [
         'Query optimization and indexing strategy in MongoDB',
         'Designing forms for clarity and error prevention',
         'Tradeoffs between optimistic UI and server authority'
       ]
     }
   },
   {
     title: 'Sociopedia',
     slug: 'sociopedia',
     description: 'A social media web app for user interaction through posts, likes, comments, and friend connections.',
     features: [
       'User registration and authentication',
       'Create posts, like and comment',
       'Friend connections management',
       'Professional UI with Material UI',
       'RESTful APIs with MongoDB'
     ],
     tech: ['React', 'Redux Toolkit', 'Material UI', 'Node.js', 'Express', 'MongoDB'],
     link: 'https://sociopedia-front-end.netlify.app/',
     sourceCodeLink: 'https://github.com/alishair7071/Sociopedia',
     readmeLink: 'https://github.com/alishair7071/Sociopedia/blob/main/README.md',
     gradient: 'from-pink-600 to-red-600',
     caseStudy: {
       overview: 'Sociopedia is a lightweight social platform focused on content creation and interactions. Users post updates, like and comment, and manage connections.',
       highlights: [
         'Feed-first UX with fast interactions',
         'Moderation-ready API design and permissions',
         'Composable UI components using Material UI'
       ],
       implementation: [
         'Frontend: React + Redux for feed, profile, and connections modules',
         'Backend: RESTful Node/Express with MongoDB for posts and relationships',
         'Optimistic UI and pagination for a responsive experience'
       ],
       results: [
         'Smooth content interactions even on mid-range devices',
         'Clear extension points for notifications and real-time features'
       ]
     },
     personal: {
       idea: 'I wanted to explore social app patterns—newsfeeds, interactions, and relationships—while focusing on performance and clean data modeling.',
       challenges: [
         'Modeling relationships for likes/comments without heavy joins',
         'Keeping feed interactions fast with pagination and caching',
         'Ensuring UI feels instant with optimistic updates'
       ],
       solves: 'Creates a lightweight space for sharing and discussion with low friction interactions and clean UX.',
       implemented: [
         'Posts, likes, comments, profiles, and connections',
         'Material UI-based, composable components',
         'Paginated APIs designed for smooth infinite scrolling'
       ],
       learnings: [
         'State normalization and caching for responsive feeds',
         'Balancing optimistic UI with consistent server state',
         'Planning for real-time notifications and moderation hooks'
       ]
     }
   }
 ];

 export default projects;