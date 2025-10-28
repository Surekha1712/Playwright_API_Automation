"# Playwright_API_Automation" 
# Playwright API & UI Automation Project

## Project Overview
This project demonstrates how to perform API automation and UI testing using Playwright.  
It includes practical examples of CRUD operations, API chaining, mocking API responses, and data-driven testing.  
The purpose of this project is to understand REST API testing, API–UI integration, and handling real and mock data efficiently.

---

## CRUD Operations

CRUD stands for **Create, Read, Update, and Delete**. These are the four basic operations used to interact with data in an API or database.

| Method | Meaning | What It Does |
|---------|----------|--------------|
| **POST** | Create | Used to create or add new data to the server. |
| **GET** | Read | Used to retrieve or read existing data from the server. |
| **PUT / PATCH** | Update | Used to modify or update existing data on the server. |
| **DELETE** | Delete | Used to remove or delete existing data from the server. |

Purpose:  
CRUD operations help practice real API interactions and understand how data is managed on the backend using Playwright’s `request` methods.

---

## API Chaining

**Meaning:**  
API chaining means using the **response of one API request as input for another API request**.

**What It Does:**  
- Helps simulate workflows where APIs depend on each other.  
- For example, first create a post using `POST`, then use its **ID** from the response in a `GET` request to fetch that same post.  
- Ensures smooth data flow and dependency handling between multiple APIs.

---

## Mocking

**Meaning:**  
Mocking is the process of **simulating API responses** instead of calling the actual server.

**What It Does:**  
- Enables testing when the backend is not available.  
- Returns fake or controlled data to test how the application behaves with different responses.  
- Reduces test execution time and avoids dependency on external APIs.

**Example:**  
Intercepting a request and returning a predefined mock response such as a sample list of fruits.

---

## Data-Driven Testing

**Meaning:**  
Data-driven testing runs the same test multiple times with **different sets of input data**.

**What It Does:**  
- Tests multiple scenarios without rewriting test scripts.  
- Uses data from JSON, CSV, or Excel files for better coverage.  
- Useful for login and form-based tests.

**Example:**  
Running the same login test on the SauceDemo website with different usernames and passwords.

---

## What I Used in the Project

| Feature | Source / Website Used | Purpose |
|----------|----------------------|----------|
| **CRUD Operations** | [JSONPlaceholder](https://jsonplaceholder.typicode.com) | Practicing API methods like POST, GET, PUT, DELETE |
| **API Chaining** | [JSONPlaceholder](https://jsonplaceholder.typicode.com) | Used responses from one API to call another |
| **Mocking** | [Playwright/dev/fruits](https://playwright.dev) | Simulated fake API responses for testing |
| **Data-Driven Testing** | [SauceDemo](https://www.saucedemo.com) | Tested login functionality with multiple input data sets |

