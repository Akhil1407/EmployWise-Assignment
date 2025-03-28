# EmployWise-Assignment
EmployWise is a React-based application.

1.The project structure as follows:
 /employee-management-app
 │── /src
 │   ├── /components
 │   │   ├── Login.js
 │   │   ├── UsersList.js
 │   │   ├── EditUserForm.js
 │   ├── App.js
 │   ├── index.js
 │── /public
 │── package.json
2.Installation & Setup:
  a.Ensue you hane node.js
  b.run this below command in the terminal
      git clone https://github.com/Akhil1407/employee-management-app.git
      cd employee-management-app
   c.install dependencies
       npm install
   d.start the application
       npm start
3.Features & Implementation
  ->Authentication
   a.uses API for authentication
   b.stores login token in local storage
   c.redirects users to /users upon succesful login
  ->User Management
    a.Fetches users from Reqres API (/api/users?page=1).
    b.Displays users in a table format with avatars.
    c.Includes search functionality to filter users.
  ->Edit User
    a.Users can edit their details.
    b.Sends PUT request (/api/users/{id}).
    c.Displays success or error messages.
  ->Delete User
    a.Users can be deleted from the list.
    b.Sends DELETE request (/api/users/{id}).
    c.Shows confirmation prompt before deleting.

  
