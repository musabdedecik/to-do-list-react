# About the App

  - In this project I created a simple SPA using React.
  - The purpose of the application is to follow the to-do list of the logged in user.
  - First, a Login page welcomes us.
  - User can register or log in on the login page.
  - A Dashboard screen comes up after logging in.
  - I created a Navigation Bar using a MaterialUI library in the Dashboard.
  - I have included a switch button on the navbar where we can disable the account within the application.
  - User deactivating account cannot add and update tasks.
  - I created an area under the NavBar and rendered the user's to-do list in this area.
  - At the top of the Dashboard page, I created a form where the user can create a new task.
  - At the bottom, I created a table view that instantly displays the data entered in the form.
  - Can create a task on behalf of someone else while creating a task.
  - If we create the task on behalf of someone else, it can perform the same task in the account to which the task is assigned.


# Technologies & Tools & Solutions
  - I started the project with create-react-app.
  - I used pascalcase naming while writing the code.
  - I tried to give examples of the contents of the assignment you sent.
    - I used Redux Toolkit for state management
    - I included routing mechanism (ReactRouterDOM)
    - I used JSON-Server (https://www.npmjs.com/package/json-server) to make CRUD operations and API requests.
    - I used Formik (https://www.npmjs.com/package/formik) for form validation processes throughout the application.
    - Shared on Github (https://github.com/musabdedecik/to-do-list-react)
    - I used hooks.
    - I used Ref Hook.
    - I used MaterialUI as UI kit. In addition, I gave examples of different CSS uses.
    - I deployed to Heroku (https://my-todolist-app-reactjs.herokuapp.com/)
    - While deploying to Heroku, I had to come up with some solutions for our application to work with json-server.

# Follow these steps to run the project on your computer
  - Import the project to your computer with git clone.
  - Go to the project directory in Visual Studio Code.
  - Then open the `package.json` file of the project.
  - Find the `scripts` field contained in this file.
  - Delete `node server.js` in `start` command in `scripts` field and add `react-scripts start` command.
  - Then install the necessary dependencies with the `npm install` command.
  - After the dependencies are installed, you can run the `npm start` command to view the application at `http://localhost:3000`.
  - Then run `json-server --watch db.json -p 8080` on a new terminal screen to run our backend server.