#Dynamic Task Management App
Integrated React.js for the frontend with Node.js and Express for the backend. Utilized MongoDB/PostgreSQL/Firebase for data storage, ensuring efficient task management. Applied JWT-based authentication and implemented secure API endpoints with rate limiting, CORS, and input validation.

Frontend Components:
TaskForm.jsx:
Handles the creation and editing of tasks. Includes form inputs for the task title, description, and priority level (Low, Medium, High). Implements form validation and error handling.

TaskList.jsx:
Displays the list of tasks dynamically. Supports filtering by status (Completed, Pending) and priority level. Includes buttons for marking tasks as complete/incomplete, editing, and deleting.

TaskFilter.jsx:
Provides filtering options based on task status and priority. Uses dropdowns and checkboxes to apply filters dynamically.

TaskItem.jsx:
Represents individual task items with interactive buttons. Includes visual indicators for task status and priority.

ContextProvider.jsx / Redux Store:
Manages the global state using React Context API or Redux. Ensures smooth communication between components and maintains task data consistency.

LocalStorage Integration (Vanilla JS Option):
For the Vanilla JavaScript version, uses LocalStorage or IndexedDB to persist task data across sessions.

Backend Components:
server.js:
Configures the Express server and defines middleware for parsing JSON data, handling CORS, and applying rate limiting for security. Establishes API routes.

routes/taskRoutes.js:
Defines the RESTful API endpoints:

POST /tasks: Creates a new task.

GET /tasks: Retrieves all tasks.

GET /tasks/:id: Retrieves a specific task.

PUT /tasks/:id: Updates an existing task.

DELETE /tasks/:id: Deletes a task.

models/Task.js:
Defines the MongoDB schema or PostgreSQL model for task data, including fields for title, description, priority, and status.

controllers/taskController.js:
Handles the business logic for CRUD operations. Interacts with the database and sends appropriate responses to the frontend.

authMiddleware.js:
Implements JWT-based authentication. Protects private routes by verifying tokens.

DBConfig.js:
Establishes and manages the database connection using MongoDB, PostgreSQL, or Firebase credentials. Ensures efficient and secure data interactions.

Authentication & Security:
JWT Authentication:

Generates and verifies tokens for secure user authentication.

CORS Protection:

Prevents unauthorized cross-origin requests.

Rate Limiting:

Restricts excessive API requests to prevent abuse.

Input Validation:

Sanitizes user input to avoid SQL injection or XSS attacks.

Integration & Flow:
To integrate the various features of the task management app, I employed a modular and layered architecture that connects the frontend, backend, and database seamlessly.

Frontend:

The React.js interface enables users to interact with tasks dynamically, providing real-time filtering, marking, and CRUD operations.

The frontend uses Context API/Redux to manage the task state efficiently.

Backend:

The Node.js/Express backend handles RESTful API requests, processes them, and interacts with the database using Mongoose/Sequelize models.

Database operations (create, read, update, delete) are performed through modular controller functions.

Database:

MongoDB/PostgreSQL/Firebase stores all task data, ensuring data persistence and retrieval.

IndexedDB or LocalStorage handles persistence for the Vanilla JavaScript version.

Security:

JWT authentication secures sensitive routes.

CORS and rate limiting protect the app from unauthorized access and API abuse.

