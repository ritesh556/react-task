# Responsive Mini Blog App - Setup Guide

This document provides instructions for setting up and running the Responsive Mini Blog application locally. 
---

##  Setup Instructions

Follow these steps to get the project up and running on your local machine.

### Prerequisites

* **Node.js**: Version 18.x or later. You can download it from [nodejs.org](https://nodejs.org/).
* **npm** : A package manager for JavaScript. npm is included with Node.js.

### Installation

1.  **Clone the Repository**
    Open your terminal and clone the forked repository to your local machine:
    ```bash
    git clone [https://github.com/YOUR_USERNAME/mini-blog-app.git](https://github.com/YOUR_USERNAME/mini-blog-app.git)
    ```

2.  **Navigate to the Project Directory**
    ```bash
    cd mini-blog-app
    ```

3.  **Install Dependencies**
    Install the required project dependencies using npm or yarn:
    ```bash
    # Using npm
    npm install

   
    ```

4.  **Run the Application**
    Start the development server:
    ```bash
    # Using npm
    npm start

    
    ```
    The application will automatically open in your default web browser at `http://localhost:3000`.

---




### Limitations


1.  **Basic Error Handling**: Since the API returns a small amount of data, all data is fetched at once in a single call. However, error handling remains minimal — if the API call fails, only a simple message is shown to the user. There is no advanced retry mechanism or detailed error reporting.
2.  **No Tests**: The project does not include any unit, integration, or end-to-end tests.