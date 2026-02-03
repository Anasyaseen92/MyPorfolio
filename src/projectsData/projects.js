const projects = [
  {
    title: 'Shop Nest',
    slug: 'shop-nest',
    description: 'Multi-vendor e-commerce marketplace with real-time chat and secure payments. Sellers manage stores and orders; buyers browse, checkout, and message sellers.',
    features: [
      'Product catalog with filtering, cart, wishlist, and order tracking',
      'Seller dashboards: products, coupons, analytics, withdrawals',
      'Admin panel: approve sellers, manage users, monitor transactions',
      'Real-time buyer–seller chat via Socket.io',
      'Stripe & PayPal with webhook verification',
      'Role-based access (Customer, Seller, Admin) with JWT'
    ],
    tech: ['React.js', 'Redux Toolkit', 'Tailwind CSS', 'Node.js', 'Express.js', 'MongoDB', 'Socket.io', 'Stripe', 'PayPal'],
    link: 'https://frontend-multivendor.netlify.app/',
    sourceCodeLink: 'https://github.com/alishair7071/Multivendor',
    readmeLink: 'https://github.com/alishair7071/Multivendor/blob/main/README.md',
    gradient: 'from-blue-600 to-purple-600',
    caseStudy: {
      overview: 'Shop Nest is a full-stack multivendor marketplace inspired by platforms like Amazon and Daraz. Multiple sellers list and manage products; customers browse, purchase, and pay securely. An admin panel controls seller approval and platform oversight.',
      problemSolution: 'Single-vendor stores limit product variety and scalability. Shop Nest gives each seller a dedicated dashboard and storefront while providing customers one place to discover products, checkout with Stripe or PayPal, and chat with sellers in real time.',
      highlights: [
        'End-to-end marketplace: seller onboarding, product CRUD, order lifecycle, withdrawals',
        'Real-time chat with Socket.io for customer–seller communication',
        'Stripe and PayPal integration with webhook-based payment verification',
        'MERN stack with role-based JWT auth and guarded dashboards'
      ],
      implementation: [
        'Frontend: React, Redux Toolkit, Tailwind CSS, route-guarded Customer/Seller/Admin dashboards',
        'Backend: Node.js + Express REST API, MongoDB (users, products, orders, payments, messages)',
        'Socket.io server for real-time messaging; Cloudinary for product media',
        'Deployment: Netlify (frontend), Render/Heroku (backend), MongoDB Atlas'
      ],
      results: [
        'Complete checkout flow from cart to payment confirmation and order tracking',
        'Scalable catalog with filters and server-side pagination',
        'Production-style architecture ready for extensions (notifications, reviews)'
      ]
    },
    technicalDecisions: [
      'Socket.io over polling for real-time chat to keep latency low and backend simple',
      'Webhook handling for Stripe/PayPal to confirm payments and update order status reliably',
      'Role-based middleware (customer/seller/admin) for secure API and dashboard access'
    ]
  },
  {
    title: 'Real Estate Platform',
    slug: 'real-estate-platform',
    description: 'Property listing platform for sale or rent. Owners create and manage listings; visitors search, filter, and explore with Google sign-in and cloud image uploads.',
    features: [
      'Create, update, and delete listings (sale or rent) with up to 6 images',
      'Search and filter by name, type, offer, furnished, parking; sort and paginate',
      'Google OAuth and email/password auth with JWT cookies',
      'Image uploads to Supabase Storage; listing detail page with image carousel',
      'Profile management: avatar, username, email, password; view own listings'
    ],
    tech: ['React', 'Vite', 'Redux Toolkit', 'Tailwind CSS', 'Swiper', 'Node.js', 'Express', 'MongoDB', 'Firebase Auth', 'Supabase'],
    link: 'https://mern-estate-frontend.netlify.app/',
    sourceCodeLink: 'https://github.com/alishair7071/real-estate',
    readmeLink: 'https://github.com/alishair7071/real-estate/blob/main/README.md',
    gradient: 'from-green-600 to-teal-600',
    caseStudy: {
      overview: 'A real-estate listing portal where authenticated users post properties for sale or rent and visitors browse and search. Built with MERN plus Firebase (Google sign-in) and Supabase for image storage, simulating features found on Zillow or Realtor.com.',
      problemSolution: 'Many tutorial projects skip production concerns like multi-role access, cloud image storage, and robust search. This platform gives owners a secure way to manage listings and gives visitors fast, filterable discovery with pagination and a clear UX.',
      highlights: [
        'Full listing CRUD with owner-only update/delete and JWT-protected routes',
        'Search and filters (type, offer, furnished, parking) with query params and pagination',
        'Google OAuth via Firebase and cookie-based JWT for API auth',
        'Supabase Storage for listing images; Swiper carousel on detail pages'
      ],
      implementation: [
        'Frontend: React (Vite), Redux Toolkit, redux-persist, Tailwind CSS, Swiper',
        'Backend: Express REST API, MongoDB/Mongoose (User, Listing), bcrypt, JWT, cookie-parser',
        'Firebase Auth for Google sign-in; Supabase Storage for image uploads and public URLs',
        'Vite proxy to Express in dev; production build and deploy (e.g. Netlify + backend host)'
      ],
      results: [
        'Visitors find listings quickly with debounced search and filters',
        'Owners can self-serve listing management without technical knowledge',
        'Solid base for saved searches, alerts, or admin moderation'
      ]
    },
    technicalDecisions: [
      'Supabase Storage for images to avoid overloading the API and to get CDN-backed URLs',
      'JWT in HTTP-only cookie for auth so the client stays simple and tokens are secure',
      'Query params for search/filters so results are shareable and back-button friendly'
    ]
  },
  {
    title: 'Sociopedia',
    slug: 'sociopedia',
    description: 'Social platform for posts, likes, comments, and friend connections. Users share updates and interact through a feed-first UI built with Material UI.',
    features: [
      'User registration and authentication',
      'Create, like, and comment on posts; friend connections',
      'Feed with pagination and responsive interactions',
      'Profile and connections management',
      'RESTful API with MongoDB; Material UI components'
    ],
    tech: ['React', 'Redux Toolkit', 'Material UI', 'Node.js', 'Express', 'MongoDB'],
    link: 'https://sociopedia-front-end.netlify.app/',
    sourceCodeLink: 'https://github.com/alishair7071/Sociopedia',
    readmeLink: 'https://github.com/alishair7071/Sociopedia/blob/main/README.md',
    gradient: 'from-pink-600 to-red-600',
    caseStudy: {
      overview: 'Sociopedia is a lightweight social app focused on content and connections. Users post updates, like and comment, and manage friend relationships. The UI is built with Material UI for a consistent, professional look.',
      problemSolution: 'Social apps need clear data models for posts, likes, comments, and relationships, plus a responsive feed. Sociopedia provides a minimal but complete flow: create content, interact, and manage connections with pagination and state management that scales.',
      highlights: [
        'Posts, likes, comments, and friend connections with normalized data models',
        'Feed-first UX with pagination and optimistic-style updates where appropriate',
        'Reusable Material UI components and RESTful API design'
      ],
      implementation: [
        'Frontend: React, Redux Toolkit, Material UI; feed, profile, and connections modules',
        'Backend: Node.js + Express REST API, MongoDB for users, posts, and relationships',
        'Paginated list endpoints for feed and infinite-scroll readiness'
      ],
      results: [
        'Smooth content interactions and clear extension points for notifications or real-time features'
      ]
    },
    technicalDecisions: [
      'Normalized Redux state for posts and users to keep the feed performant and cache-friendly',
      'Paginated APIs for the feed to support infinite scroll without loading everything at once'
    ]
  }
];

export default projects;
