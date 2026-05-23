const projects = [
  {
    title: 'LMS',
    slug: 'lms',
    description: 'Full-featured Learning Management System with course creation, video streaming, Stripe payments, Q&A, reviews, and real-time admin notifications. Built with Next.js and TypeScript.',
    features: [
      'Multi-role access (Admin & users); course creation and content management with video streaming',
      'Stripe payment processing; enrollment and purchase verification',
      'Q&A with threaded replies; reviews and star ratings; admin reply to reviews',
      'Real-time notifications (Socket.io): course purchased, new review, Q&A discussion',
      'Admin analytics and reporting; dynamic layout (banners, FAQs, categories)',
      'Redis caching; rate limiting; JWT access/refresh tokens; dark/light theme'
    ],
    tech: ['Next.js', 'TypeScript', 'React', 'Redux Toolkit', 'RTK Query', 'NextAuth', 'Tailwind CSS', 'Material UI', 'Node.js', 'Express', 'MongoDB', 'Redis', 'Socket.io', 'Stripe', 'Cloudinary'],
    link: 'https://lms-client-1ofg.vercel.app/',
    sourceCodeLink: 'https://github.com/Anasyaseen92/LMS-',
    readmeLink: 'https://github.com/Anasyaseen92/LMS-/tree/main#complete-case-study---lms',
    gradient: 'from-amber-600 to-orange-600',
    caseStudy: {
      overview: 'LMS is a full-stack Learning Management System built with Next.js (TypeScript) on the frontend and Node.js/Express (TypeScript) on the backend. It provides RESTful APIs for courses, authentication, enrollment, Stripe payments, content delivery, and analytics. The system supports multi-role users, video-based learning, Q&A, reviews, and real-time admin notifications.',
      problemSolution: 'Beginner developers need a platform that combines structured courses, hands-on practice, and community interaction. LMS bridges theory and practice with curated lessons, video content, secure payments, and real-time notifications—giving admins visibility into purchases, reviews, and Q&A so they can support learners effectively.',
      highlights: [
        'Three-tier architecture: Next.js frontend, Express REST API, MongoDB + Redis + Cloudinary',
        'Course CRUD with thumbnails, video sections (VDO Cipher), benefits, prerequisites; admin data grid',
        'Stripe payment flow; enrollment gated by purchase; JWT access/refresh token auth',
        'Socket.io real-time notifications for admin: course purchased, new review, Q&A activity'
      ],
      implementation: [
        'Frontend: Next.js 13+, React, TypeScript, Redux Toolkit, RTK Query, NextAuth, Tailwind CSS, Material UI, Socket.io client',
        'Backend: Node.js, Express, TypeScript, Mongoose, MongoDB, Redis (cache), JWT, bcrypt, Stripe, Cloudinary, nodemailer, EJS templates, express-rate-limit',
        'APIs: /api/v1/user, /api/v1/course, /api/v1/order, /api/v1/notifications, /api/v1/analytics, /api/v1/layout',
        'Security: CORS, cookie-based tokens, rate limiting (100 req/15 min/IP)'
      ],
      results: [
        'End-to-end flow from course discovery and purchase to video access, Q&A, and reviews',
        'Admin panel for course management, layout customization, and real-time notification handling',
        'TypeScript across stack for type safety and maintainability; Redis cache for performance'
      ]
    }
  },
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
    tech: ['React.jsS', 'Redux Toolkit', 'Tailwind CSS', 'Node.js', 'Express.js', 'MongoDB', 'Socket.io', 'Stripe', 'PayPal'],
    link: 'https://mv92.netlify.app/shop-create',
    sourceCodeLink: 'https://github.com/Anasyaseen92/Multi-vendor-ecommerce-',
    readmeLink: 'https://github.com/Anasyaseen92/Multi-vendor-ecommerce-#multivendor-e-commerce-platform-mern-stack',
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
    }
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
    link: 'https://mern-estate-fronten.netlify.app/',
    sourceCodeLink: 'https://github.com/Anasyaseen92/mern-estate',
    readmeLink: 'https://github.com/Anasyaseen92/mern-estate#readme',
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
    }
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
    link: 'https://socialmediafo.netlify.app/',
    sourceCodeLink: 'https://github.com/Anasyaseen92/social_media',
    readmeLink: '',
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
    }
  }
];

export default projects;
