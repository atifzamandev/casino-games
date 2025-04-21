# React app to display Comeon games

## Project overview

The purpose of this project is to utilize JSON backend to create login functionality and then display games to the logged in users where they can also search and filter games to play.

### Initial Project Setup

The project is created from scratch by installing the following packages/features which are being used to achieve the desired functionality and optimize app performance.

- TypeScript: Adds type safety to the code and catches errors at compile time.
- Semantic UI: For styling the app. It helps in developing visually appealing and responsive UIs.
- React Router DOM: To add navigation features and define routes in our single-page application.
- Axios: To make HTTP requests efficiently and handle automatic data transformation.
- React Query: To manage server state, data fetching, caching, and synchronization in a simpler and more efficient way.
- Prettier: To format the code in a standardized way.
- ESLint: To enforce consistent code quality and style across the app.

## Project Steps

### Step 1

Setup basic scaleable folder structure and clean up boilerplate to have clean code architecture. Creating routes displaying games. Completed React Query, created an API client to encapsulate the Axios logic, making the code more reusable, modular, and easier to maintain for different endpoints. Added API interfaces to show proper API data. Created API hooks to abstract the data-fetching logic and make them reusable. Also added React Query automatic caching and query management configurations.

### Step 2

Setup Semantic UI for styling. Designing homepage with logo and login form and after that adding login functionality. Added login functionality using conteact api. Created AuthContext, Login hook while maintaing sepration of concern. Added validations at UI level.

### Step 3

Added UserAvatarCard, LogoutButton with functionality and SearchGame components. Refactored component structure and styles for better scalability and maintainability. All components have been organized into appropriate folders, each with its own dedicated style file. Added responsive styling. Secured games route with route protection from unauthorized access. Improved error page.

### Step 4

Created categories component to display games categories on the left side. Display games list using game card. Some small code improvements.

### Step 5

Developed game play screen for the logged in users to load the selected game and button functionality to return to the games list.

### Step 6

Implemented category-based filtering. Users can filter games by selecting a category. Refactored categories component for scalability and maintainability. Extracted CategoryItem into a reusable, isolated component. Improved structure and readability for easier future updates

## Future Tasks & Suggestions

- Extensive styling improvement such is fonts, sizing, spacing etc.
- Additional styling improvements are needed to make components use their own styles instead of relying on global styling.
- Some components need to be more structured if the project size increases.
- For pixel perfect a proper figma design required.
- Create loading skeleton instead of using simple loader
- Create custom button component with props as it is being used on different places.
