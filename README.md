Project Description

This project is a comprehensive web application designed to provide an engaging user experience for games, stores, and leaderboards. The application includes features like fetching and displaying detailed game and store information, handling user authentication, and simulating premium currency purchase flows (e.g., buying diamonds).

Key solutions implemented in the project:

Dynamic Routing: Pages dynamically fetch data based on route parameters, such as game or store IDs.

State Management: Utilized Redux Toolkit with React Query for efficient state and data fetching.

Authentication: Integrated Auth0 for seamless user authentication and session handling.

Persistence: Used localStorage to persist user data (e.g., diamond balance) across sessions.

Responsive Design: Ensured the UI is mobile-friendly and visually appealing across all devices.

Modular Codebase: Organized code into reusable components for easy scalability and maintenance.

How to Run

Prerequisites

Make sure you have the following installed on your system:

Node.js (v16 or higher)

npm (Node Package Manager) or yarn

Installation

Clone the repository:

git clone <repository-url>
cd <project-directory>

Install dependencies:

npm install
# or
yarn install

Create a .env.local file in the root directory and add the required environment variables:

NEXT_PUBLIC_RAWG_API_KEY=<Your RAWG API Key>
AUTH0_DOMAIN=<Your Auth0 Domain>
AUTH0_CLIENT_ID=<Your Auth0 Client ID>

Running the Application

Start the development server:

npm run dev
# or
yarn dev

The application will be available at http://localhost:3000.

To build for production:

npm run build
npm start

Testing

Run tests (if applicable):

npm test
# or
yarn test

Features and Solutions

1. Dynamic Routing for Pages

The application uses Next.js's App Router to dynamically render pages based on route parameters.

Examples:

/games/[id]: Fetches and displays details for a specific game.

/stores/[id]: Displays store-specific information.

2. State Management with Redux Toolkit

Centralized state management ensures consistent data across the application.

Integrated React Query to fetch, cache, and synchronize data from APIs.

3. User Authentication

Auth0 integration allows users to log in and access personalized features.

User details, like nickname and given_name, are displayed in the header after login.

4. Persistent Diamond Purchase Flow

Simulated diamond purchases update the user's balance dynamically.

Diamond balance persists across sessions using localStorage.

5. Responsive UI Design

Utilized Tailwind CSS for responsive layouts and clean styling.

Ensured all components (e.g., cards, headers, buttons) adapt gracefully to various screen sizes.

6. Modular and Reusable Code

Created reusable UI components, such as Header, Button, and Card, to ensure consistent design and simplify development.

7. API Integration

Connected to the RAWG API to fetch data for games, stores, and creators.

Handled pagination, dynamic queries, and error states effectively.

Future Enhancements

Search and Filter Functionality: Add search and filter options for games and stores.

Admin Dashboard: Create an admin panel for managing content dynamically.

Enhanced UX: Implement animations and interactive features for a more engaging experience.

API Rate Limit Handling: Introduce caching strategies to reduce redundant API calls.

Conclusion

This project demonstrates a scalable and feature-rich web application leveraging modern development practices with Next.js, Redux Toolkit, and Tailwind CSS. It provides a robust foundation for building advanced, user-centric platforms.

