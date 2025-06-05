## **Introduction**

* To-Do-List is a simple web-based application built with Node.js (Express), HTML, CSS, and JavaScript. It allows users to add, delete, and manage their daily tasks efficiently.

## **Features**

* *Add New Tasks:* Easily add new tasks to your to-do list.

* *Delete Tasks:* Remove tasks once they are completed or no longer needed.

* *Toggle Completion Status:* Mark tasks as complete or incomplete.

* *Filter Tasks:* View all, active, or completed tasks.

* *Responsive Design:* The application is designed to be user-friendly across various devices.

* *Persistence:* Tasks are saved to a todos.json file on the server, so they persist even if the server restarts.

## **Technologies Used**

* *Node.js:* As the JavaScript runtime environment.

* *Express.js:* A fast, unopinionated, minimalist web framework for Node.js, used for building the RESTful API.

* *HTML5:* For the structure and content of the web page.

* *CSS3:* For styling the application, providing a clean and intuitive user interface.

* *JavaScript:* For front-end interactivity and making API calls.

* *body-parser:* Node.js middleware for handling JSON requests.

* *cors:* Node.js middleware for enabling Cross-Origin Resource Sharing.

## **Getting Started**

* Follow these instructions to get a copy of the project up and running on your local machine.

### **Prerequisites**

* Node.js (LTS version recommended)

* npm (comes with Node.js)

### **Installation**

* Clone the repository:

git clone <repository_url>
cd todo-app
(Replace <repository_url> with the actual URL of your GitHub repository.)

* Install dependencies:

npm install express body-parser cors

* Note: The server.js file already includes these dependencies, so you would typically install them using npm install if you were starting from scratch or if the node_modules directory was not present.

### **Running the Application**

* Start the server:

node server.js

* You should see a message in your console: ✅ Server is running at http://localhost:3000

* Open the application in your browser:

Navigate to http://localhost:3000 in your web browser.

## **Project Structure**

* server.js: The backend Express.js server, handling API routes for managing todos.

* public/: This directory serves static files (HTML, CSS, JavaScript) to the client.

* index.html: The main HTML file for the To-Do application.

* script.js: The frontend JavaScript code that interacts with the backend API.

* style.css: The CSS file for styling the To-Do application. (Note: The provided index.html also has embedded styles, but style.css could be used for external styling.)

* todos.json: A JSON file used by the server to store the todo items persistently.

## **API Endpoints**

* GET /api/todos: Retrieves all todo items.

* POST /api/todos: Creates a new todo item. Expects a JSON body with a text property (e.g., { "text": "Learn Express.js" }).

* DELETE /api/todos/:id: Deletes a todo item by its ID.

* PUT /api/todos/:id: Toggles the completed status of a todo item by its ID.

## **Frontend Functionality**

* The script.js file handles the following:

* fetchTodos(): Fetches all todos from the backend and renders them on the page.

* addTodo(): Sends a POST request to add a new todo.

* deleteTodo(id): Sends a DELETE request to remove a todo by its ID.

* toggleTodo(id): Sends a PUT request to toggle the completion status of a todo. (Note: The provided script.js currently uses deleteTodo on click; this would need to be updated to toggleTodo to implement completion toggling.)

* setFilter(filterType): Filters the displayed todos based on 'all', 'active', or 'completed' status. (Note: This functionality is present in the index.html filters but not fully implemented in the provided script.js.)

## **Backend Functionality**

* The server.js file handles the following backend tasks:

* Managing API endpoints for CRUD operations on todos.

* Reading and writing to the todos.json file to persist tasks.

* Handling JSON request parsing using body-parser middleware.

* Enabling CORS with the cors middleware for cross-origin requests.

* Starting the Express server and listening on port 3000.


