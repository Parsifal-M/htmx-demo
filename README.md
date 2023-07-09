# '90s Joke Machine

This is a demo project that uses HTMX, Node.js, and Prisma to serve a simple web application for getting and posting jokes. HTMX allows you to access AJAX, CSS Transitions, WebSockets and Server Sent Events directly in HTML, using attributes, so you can build modern user interfaces with the simplicity and power of hypertext.

## Setup Instructions

### 1. Clone the repository

Use git to clone the repository into a new directory on your local machine.

Then navigate into the directory:

`cd htmx-demo`

### 2. Install dependencies

You will need Node.js installed on your machine. Once you have Node.js, you can install the project dependencies using npm (Node Package Manager).

`npm install`

### 3. Setup environment variables

Create `.env` and put this in it

```
DATABASE_URL="postgresql://demoUser:demo123@localhost:5432/htmx-demo"
```

Please note: If you're using Docker to run the PostgreSQL server, ensure the DATABASE_URL points to the correct host. With Docker's port forwarding, it would typically be localhost.

### 5. Seed the database

Seeding the database with the following:

`npx prisma db seed`

Remember to run this command when running the app for the first time!

## Docker Compose

This project supports Docker Compose. If you have Docker installed, you can start the entire application (including the PostgreSQL database) with one command:

`docker-compose up -d`

Remember to seed the database when running for the first time!