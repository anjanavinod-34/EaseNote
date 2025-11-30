📝 EaseNote – A Fast & Simple Note-Taking App

Quick Note is a lightweight React + Redux application that allows users to create, edit, search, and delete notes with ease. Designed with a clean UI and powered by Redux Toolkit, it ensures smooth state management and a seamless user experience. SweetAlert2 is integrated for elegant alerts and feedback.

🚀 Features

✏️ Add Notes

Create new notes with a title and content field. Provides instant visual feedback using SweetAlert2.

🛠 Edit Notes

Easily update existing notes. Clicking EDIT loads the note data into the form. The UPDATE button appears through conditional rendering.

❌ Delete Notes

Remove any note instantly using the delete button.

🔍 Search Notes

Real-time search by note title using a Redux reducer.

🎨 UI Enhancements

Clean, minimal card-based layout

Background image with centered layout

Bootstrap for responsive styling

SweetAlert2 for visually appealing alerts

🧰 Tech Stack

React.js

Redux Toolkit

Bootstrap 5

SweetAlert2

JavaScript (ES6+)

📂 Core Logic Overview
🔹 Add Note

Dispatches addNote() with title and content.
Form resets automatically.

🔹 Edit Note

Loads selected note into input fields and switches the button to UPDATE mode.

🔹 Update Note

Dispatches editNote() using the selected ID.

🔹 Delete Note

Removes note using deleteNote().

🔹 Search Note

Filters notes dynamically using search() reducer.



📁 Folder Structure
src/
├── components/
│   └── Home.jsx
├── redux/
│   └── noteSlice.js
└── App.js

🎯 What This Project Demonstrates

Redux Toolkit for CRUD operations

Conditional rendering in React

Clean UI with Bootstrap

Realtime search functionality

Alert handling with SweetAlert2

Component + state structuring
