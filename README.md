News Aggregator API
===================

Overview
--------

The News Aggregator API is a RESTful service built using Node.js and Express.js. It allows users to fetch news articles from multiple sources based on their preferences. This project demonstrates user registration, authentication, and news article retrieval while incorporating optional features like caching, article tracking, and keyword-based searches.

Features
--------

-   User registration and login with bcrypt for secure password storage.
-   Token-based authentication using JSON Web Tokens (JWT).
-   User preferences management, including categories and sources.
-   Fetching news articles from external APIs (e.g., NewsAPI).
-   Asynchronous processing and filtering of news articles based on user preferences.
-   Proper error handling for invalid requests, authentication errors, and authorization errors.
-   Input validation for user registration and news preference updates.
-   Caching mechanism for storing news articles to reduce external API calls.
-   Marking articles as "read" or "favorite."
-   Endpoints to retrieve all read and favorite news articles.
-   Search for news articles based on keywords.
-   Periodic updates of cached news articles to simulate real-time news aggregation.

Installation
------------

1.  Clone this repository: `git clone https://github.com/yourusername/news-aggregator-api.git`
2.  Navigate to the project directory: `cd news-aggregator-api`
3.  Install the required packages: `npm install`

Usage
-----

1.  Start the server: `npm start`
2.  Access the API using the provided endpoints.
3.  Use tools like Postman or Curl to test the API.

Endpoints
---------

-   `POST /register`: Register a new user.
-   `POST /login`: Log in a user.
-   `GET /preferences`: Retrieve the news preferences for the logged-in user.
-   `PUT /preferences`: Update the news preferences for the logged-in user.
-   `GET /news`: Fetch news articles based on the logged-in user's preferences.
-   `POST /news/:id/read`: Mark a news article as read.
-   `POST /news/:id/favorite`: Mark a news article as a favorite.
-   `GET /news/read`: Retrieve all read news articles.
-   `GET /news/favorites`: Retrieve all favorite news articles.
-   `GET /news/search/:keyword`: Search for news articles based on keywords.

Optional Enhancements
---------------------

-   Caching mechanism: Use caching to store news articles and reduce external API calls.
-   Article tracking: Allow users to mark articles as "read" or "favorite."
-   Real-time updates: Periodically update cached news articles in the background to simulate real-time news aggregation.
