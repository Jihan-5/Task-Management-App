# Dynamic Task Management App


Integrated React.js for the frontend with Node.js and Express for the backend. Utilized MongoDB for data storage, ensuring efficient task management. Applied JWT-based authentication and implemented secure API endpoints with CORS protection, rate limiting, and input validation to prevent unauthorized access and maintain data integrity. The system uses modular architecture to separate concerns, making it scalable and easy to maintain.

The frontend was built with React.js, leveraging functional components and React hooks for efficient state management and reusability. Key components such as TaskForm.jsx and TaskList.jsx handle task creation, editing, and dynamic rendering, while TaskFilter.jsx enables users to filter tasks by status (Completed, Pending) and priority (Low, Medium, High). To maintain global state consistency, I implemented a ContextProvider.jsx and later refactored it using Redux for improved performance and scalability. The TaskModal.jsx component introduces a modal interface for detailed task viewing and editing, enhancing the user experience with a clean and interactive design. Additionally, custom hooks were created to simplify data fetching, API interactions, and local state management. The app integrates LocalStorage to persist task data across sessions, ensuring continuity even after browser refreshes.

On the backend, the Node.js and Express server handles all CRUD operations. The server.js file configures the Express server, defining API routes and middleware functions. The taskRoutes.js file manages RESTful API operations, while the Task.js model defines the MongoDB schema for task data, including fields for the task title, description, priority, status, and timestamps. To secure the application, authMiddleware.js implements JWT authentication, ensuring that only authorized users can access protected routes. The DBConfig.js module manages MongoDB connections with built-in error handling and reconnection logic to ensure stability. I also added rate limiting to prevent API abuse and input validation middleware to sanitize and validate incoming data, reducing security vulnerabilities.

The integration between the frontend and backend ensures smooth communication and data consistency. The React frontend handles user interactions by triggering API calls to the Express server, which performs database operations on MongoDB. When a user logs in or creates a task, JWT tokens are generated and stored in the browser's HTTP-only cookies for secure session management. The app uses CORS policies to prevent cross-origin attacks and error-handling middleware to catch and log server issues, providing detailed feedback for easier debugging.

The modular architecture of the app ensures scalability and maintainability. Real-time task updates and smooth UI interactions create a seamless task management experience. By implementing lazy loading and code splitting, I optimized the app's performance, reducing the initial load time. The combination of secure backend operations, efficient frontend rendering, and error handling mechanisms ensures a robust and user-friendly task management application.









