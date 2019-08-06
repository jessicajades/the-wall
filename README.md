# Bloc.io Coding Interview Challenge

## About

This is a simple application built for Bloc's coding challenge interview prep assignment. With a 90 minute time limit, the instructions were to build an application that allows users to post to a wall and read other comments posted on the wall.

You can view the live application [here](https://jessicajades-the-wall.herokuapp.com/)

## Build Process

I built this project using React and `create-react-app`. I knew this would help me save time and maximize my time spent working on the code. I chose to make this a true SPA with no React Router for that same reason.

The database and authentication was set-up through Firebase. It allows users to sign in with their Google credentials, and post comments to the wall once signed in. I did not have the time to build out the back-end in this project, although I have built a full-stack Node application that you can find [here](https://github.com/jessicajades/blocipedia-node).

I finished up all functionality in the 90 minute time limit, although I did go back after the fact and update the styling. I could have used Bootstrap, but I wanted something a little more eye-catching and memorable.

## Tech

-   React
-   Firebase (database and authentication)

## Improvements

In the interest of time, I chose to put all functionality in the main App component. The first improvement I would make with more time would be to break the app down into smaller components. I would add a user component and a comment list component at a minimum.

Another feature I would like to add is edit and delete buttons, so that comments can be modified after they are added to the wall.

## Install

```
git clone git@github.com:jessicajades/the-wall.git the-wall
cd the-wall
npm install
npm start
```

## Author

Jessica Shepherd is a full-stack web developer currently based in Phoenix, AZ. Where you can find her:

-   [jessicajade.dev](https://jessicajade.dev/)
-   [jessicajadecodes@gmail.com](mailto:jessicajadecodes@gmail.com)
-   [twitter.com/javascript_jess](https://twitter.com/javascript_jess)
-   [github.com/jessicajades](https://github.com/jessicajades)
