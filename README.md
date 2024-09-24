# **Mini E-commerce Product Gallery**

> A full-featured mini e-commerce web application built using React, TypeScript, and Redux Toolkit. The app allows users to browse products, filter by name, category, and price, view product details, and manage a shopping cart. It includes a modern UI with responsive design and follows best practices for maintainable, modular code architecture.

---

## **Table of Contents**

- [Features](#features)
- [Project Structure](#project-structure)
- [Setup & Installation](#setup--installation)
- [Available Scripts](#available-scripts)
- [Technologies Used](#technologies-used)
- [Deployment](#deployment)
- [Contributing](#contributing)

---
## **Features**

- 📦 **Product Browsing**: View a list of products with their image, name, and price.
- 🔍 **Search & Filters**: Search products by name and filter by category and price range.
- 🛒 **Cart Management**: Add, increase, and decrease product quantities in the cart, with an intuitive cart modal.
- 🔗 **Product Details**: View detailed product information, including image, description, price, and reviews.
- 🎨 **Responsive Design**: Optimized for all screen sizes, from mobile to desktop.
- ✅ **Clean Code Architecture**: Modular structure adhering to SOLID principles and best practices.

---
## **Project Structure**

The project follows a feature-based structure, adhering to the **Single Responsibility Principle (SRP)**. Each folder is designed to handle specific concerns, making the code modular, maintainable, and scalable.
```
src/
├── components/          # Reusable UI components (e.g., Layout, Navbar, Footer)
├── features/            # Feature-based components (e.g., product, cart, login)
│   ├── cart/            # Cart-specific components, hooks, and state management
│   ├── product/         # Product listing, filtering, and product detail logic
│   ├── login/           # User authentication components (if any)
├── hooks/               # Custom hooks for shared functionality (e.g., fetching, state)
├── pages/               # Route-based page components (e.g., ProductPage, Product)
├── routes/              # Route definitions and protected route logic
├── store/               # Redux Toolkit store and slices for state management
├── types/               # TypeScript types used across the app (e.g., Product, Cart)
├── utils/               # Utility functions (e.g., formatting, helper functions)
```

### **Feature-Based Architecture**

- **`features/`**: Contains feature-specific logic, such as `cart`, `login`, and `product`. Each feature has its own components, hooks, and business logic. This keeps all feature-related concerns isolated, making the project easier to maintain and scale.
- **Example**:
    - `features/cart/` handles everything related to the cart, including cart components, hooks, it might have also (styles,utils...) it depends on needs.
    - `features/product/` manages product listings, product details, and filtering logic.
### **Hooks Layer**

- **`hooks/`**: This folder contains reusable hooks across the app.
  - **`useAppDispatch`** and **`useAppSelector`**: These are custom hooks that interact with the Redux store, abstracting the use of `dispatch` and `selector` from Redux.
  - **`useAuth`**: Likely handles user authentication logic, managing login state and user information across the app.

### **Pages Layer**

- **`pages/`**: Contains page components that act as higher-level components, rendering the core features and layout of the application. Examples of pages are:
  - `ProductDetailPage.tsx`: Displays detailed information for a specific product.
  - `ProductPage.tsx`: Displays product listings and filters.
### **Routes Layer**

- **`routes/`**: This folder contains the routing configuration for your application using **React Router**. The routes define how users navigate between different pages, like the product list, product detail, etc.

### **Store (Redux State Management)**

- **`store/`**: Handles Redux state management and is split into different slices. Each slice manages the state of a specific feature, like cart or products, with additional action thunks to handle asynchronous logic (e.g., fetching data from APIs). 
  - **`cart/`**: 
    - **`cartSlice.ts`**: Manages the state for cart items, including actions like adding, increasing, and decreasing quantities.
  - **`product/`**: 
    - **`productSlice.ts`**: Manages product data, including fetching and filtering logic for the product list and product details.
    - **`productActionThunk.ts`**: Handles asynchronous actions related to products, such as fetching products from the API using Redux Toolkit’s `createAsyncThunk`. This separates concerns, ensuring that action-related logic remains separate from the slice definition.
  
### **Separation of Concerns**

Each folder under the `store/` directory is organized by feature (e.g., `cart`, `product`), and typically contains:
  
- **Slice**: Defines the feature's state and synchronous actions (e.g., `cartSlice.ts`, `productSlice.ts`).
- **Action Thunks**: For handling asynchronous actions, each feature can have a dedicated file for thunks (e.g., `productActionThunk.ts`). This ensures that complex logic like API requests is separated from the slice's main logic.

  Example:
  
  ```ts
  import { createAsyncThunk } from '@reduxjs/toolkit';
  import axios from 'axios';

  export const fetchProducts = createAsyncThunk('products/fetchProducts', async () => {
    const response = await axios.get('https://fakestoreapi.com/products');
    return response.data;
  });
  ```

## **Single Responsibility Principle (SRP)**

The project adheres to the **Single Responsibility Principle (SRP)**, ensuring that each unit of code does only one thing, making it easier to maintain and extend.

### **Example SRP in CartSlice** :

**Each action does one thing** :
  - **Adding an item**: The `addItem` action handles adding a new product to the cart.
  - **Increasing quantity**: The `increaseQuantity` action handles increasing the quantity of an item already in the cart.
  - **Decreasing quantity**: The `decreaseQuantity` action manages reducing the quantity of a cart item or removing it entirely if the quantity reaches zero.

This ensures that each action in the `cartSlice` has a **single responsibility**, avoiding tightly coupled logic and making each action easy to test and modify independently.

---
### Setup & Installation

Follow these steps to set up and run the project locally:
##### **1. Clone the Repository**

```bash
git clone https://github.com/medghazdali/mini-ecommerce-kata-project.git
cd mini-ecommerce-kata-project
```

##### **2. Install Dependencies**
>

Using npm or yarn:
```bash
npm Install
```
or 
```bash

yarn install
````

#### **3. Run the Application**

There are two options to run the application: either directly using **npm/yarn** or through **Docker**.

#### Option 1: Run with npm or Yarn

Using npm:

```bash
npm start
```
or 

```bash
yarn start
```
The application will be accessible at http://localhost:3000.

#### Option 2: Run the Docker container:
```bash
docker run -p 3000:3000 mini-ecommerce-app
```
The application will now be accessible at http://localhost:3000.






---
## **Available Scripts**

In the project directory, you can run:

- **`npm start`** or **`yarn start`**: Runs the app in development mode. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
- **`npm run build`** or **`yarn build`**: Builds the app for production. Output files will be placed in the `build/` folder.
- **`npm run test`** or **`yarn test`**: Launches the test runner for executing unit tests.
- **`npm run format`** or **`yarn format`**: Automatically formats the codebase using **Prettier**. Ensures consistent code style across the project.
- **`npm run lint`** or **`yarn lint`**: Runs **ESLint** to check for linting errors across the project, enforcing coding standards.
- **`npm run lint-staged`**: Used by **Husky** pre-commit hooks to lint and format only staged files. This script ensures that code pushed to the repository follows consistent standards.
- **`npm run prepare`**: Initializes **Husky** hooks for running pre-commit and other Git hooks.

---

### **Linting & Formatting**

This project uses **ESLint** for linting and **Prettier** for code formatting. Both tools help maintain a consistent and clean codebase.

- **ESLint**: Detects and reports on patterns found in ECMAScript/JavaScript code, promoting consistency.
- **Prettier**: Enforces a consistent code format across the project.
- **Lint-Staged**: Ensures that only staged files (files you're about to commit) are linted and formatted.
- **Husky**: Runs pre-commit hooks that execute `lint-staged` to ensure that code is properly formatted and free from linting errors before committing to Git.

---

### **Git Hooks and Pre-commit Checks**

The project is configured to run linting and formatting checks before every commit, ensuring that all code adheres to predefined standards. This is handled via **Husky** with the **lint-staged** command, which ensures only staged files are checked. This helps in maintaining code quality without slowing down the development process.

- **Husky**: Manages Git hooks like pre-commit to run `lint-staged` automatically.
- **lint-staged**: Runs linting and formatting only on files staged for commit, ensuring that the codebase maintains a consistent style without affecting the entire project.

---

## **Technologies Used**

This project leverages several modern technologies and tools to ensure a scalable, maintainable, and performant application:

- **React**: A popular JavaScript library for building user interfaces, particularly single-page applications where dynamic rendering of components is essential.
  
- **TypeScript**: A statically typed superset of JavaScript that helps catch errors early and makes the code more robust and easier to maintain.

- **Redux Toolkit**: A powerful and standardized way to manage application state in React. Redux Toolkit simplifies setting up and working with Redux by offering pre-configured tools like `createSlice` and `createAsyncThunk`.

- **React Router**: For handling client-side routing and navigation between different views of the app.

- **Material-UI (MUI)**: A modern React component library that provides customizable, pre-built UI components for building responsive user interfaces.

- **Axios**: A promise-based HTTP client for making API requests. Used for handling all communication between the frontend and backend services (e.g., fetching product data).

- **ESLint**: A tool for identifying and reporting on patterns found in ECMAScript/JavaScript code, promoting code consistency and preventing errors.

- **Prettier**: An opinionated code formatter that enforces a consistent style across your codebase, ensuring readability and maintainability.

- **Husky**: A tool to configure Git hooks, allowing us to run tasks (e.g., linting and formatting) automatically before committing code.

- **Lint-Staged**: Runs linting and formatting checks on staged files (files that are about to be committed) to ensure the codebase remains clean without affecting the development workflow.

- **Docker**: A platform used to containerize the application. It simplifies development and deployment by ensuring consistency across environments.

- **Vercel**: Used for hosting and deploying the application. Both provide continuous integration and deployment (CI/CD) pipelines that automatically deploy the app when changes are pushed to the repository.
---
## **Deployment**
The app is deployed using Vercel for automatic CI/CD integration. Every push to the main branch triggers a new deployment.

To deploy the app manually:

Push your latest changes to GitHub.
Vercel/Netlify will automatically deploy the app. You can access the live URL (e.g., https://mini-ecommerce-kata-project.vercel.app/).

---
## Contributing
Contributions are welcome! Feel free to submit a pull request or open an issue for any improvements.

Live Demo
You can access the live version of the app here: https://mini-ecommerce-kata-project.vercel.app/