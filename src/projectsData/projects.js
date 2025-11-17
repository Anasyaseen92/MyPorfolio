


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
     }
   }
 ];

 export default projects;