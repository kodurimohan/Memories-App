Memories App MERN
=================



Features
--------

-   User authentication (sign up, log in, log out) using JWT (JSON Web Tokens) & Google Auth.
-   Ability to create, update, delete and like posts.
-   Pagination and filtering of posts.
-   Display of posts in a grid or list view.
-   Ability to view user profiles and their posts.
-   Mobile-responsive design.

Technologies used
-----------------

-   React (Frontend JavaScript library)
-   Redux (State management library)
-   Axios (Promise-based HTTP client for the browser and Node.js)
-   Material-UI (React UI framework)
-   Node.js (Backend JavaScript runtime environment)
-   Express (Backend web application framework for Node.js)
-   MongoDB (NoSQL document-oriented database)
-   Mongoose (Object Data Modeling (ODM) library for MongoDB)
-   JWT (JSON Web Tokens)

Getting started
---------------

### Prerequisites

-   Node.js
-   MongoDB Atlas account (to create a cloud database instance)





<!-- Improved compatibility of back to top link: See: https://github.com/othneildrew/Best-README-Template/pull/73 -->
<a name="readme-top"></a>
<!--
*** Thanks for checking out the Best-README-Template. If you have a suggestion
*** that would make this better, please fork the repo and create a pull request
*** or simply open an issue with the tag "enhancement".
*** Don't forget to give the project a star!
*** Thanks again! Now go create something AMAZING! :D
-->



<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->
<!---[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url] --->



<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/othneildrew/Best-README-Template">
    <img src="images/memories-Text.png" alt="Logo" width="80" height="80">
  </a>

  <h3 align="center">Memories App</h3>

  <p align="center">
    An awesome MERN stack app to share your memories with people.
    <br />
    <a href="https://github.com/kodurimohan/Memories-App"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://memories-b4a6.onrender.com">View Demo</a>
    ·
    <a href="https://github.com/kodurimohan/Memories-App/issues">Report Bug</a>
    ·
    <a href="https://github.com/kodurimohan/Memories-App/issues">Request Feature</a>
  </p>
</div>



<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project


This is a full-stack web application developed using the MERN stack (MongoDB, Express, React, Node.js) to enable users to upload and share their memories in the form of posts, along with the title, message, image and creator of the post.

<p align="right">(<a href="#readme-top">back to top</a>)</p>


<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- GETTING STARTED -->
## Getting Started

This is an example of how you may give instructions on setting up your project locally.
To get a local copy up and running follow these simple example steps.

### Prerequisites

This is an example of how to list things you need to use the software and how to install them.
* npm
  ```sh
  npm install npm@latest -g
  ```

### Installation

_Below is an example of how you can instruct your audience on installing and setting up your app. This template doesn't rely on any external dependencies or services._

1.  Clone the repository:

bashCopy code

`git clone https://github.com/kodurimohan/Memories-App.git`

1.  Install the dependencies for both the client and server:

bashCopy code

`cd client
npm install
cd ../server
npm install`

1.  Create a `.env` file in the server folder with the following variables:

makefileCopy code

`PORT=5000
CONNECTION_URL=<your_mongodb_uri>
JWT_SECRET=<your_jwt_secret>`

1.  Start the server and client:

bashCopy code

`cd server
npm start
cd ../client
npm start`

1.  Open `http://localhost:3000` in your browser to view the app.
   ```