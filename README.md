# Basic Calculator App

A fullstack basic calculator application with a clean UI.

## Features

- Addition, subtraction, multiplication, and division
- Responsive design
- Error handling for invalid inputs and division by zero
- Frontend built with HTML, CSS, JavaScript
- Backend built with Node.js and Express

## Local Development

1. Make sure you have Node.js installed.
2. Clone or download the project files.
3. Navigate to the project directory.
4. Run `npm install` to install dependencies.
5. Run `npm start` to start the server.
6. Open your browser and go to `http://localhost:3000`.

## Deployment Steps

### 1. Push Code to GitHub Repository

1. Create a new repository on GitHub.
2. Initialize git in your project directory: `git init`
3. Add all files: `git add .`
4. Commit: `git commit -m "Initial commit"`
5. Add remote: `git remote add origin https://github.com/yourusername/yourrepo.git`
6. Push: `git push -u origin main`

### 2. Docker Containerization

The project includes a `Dockerfile` for containerizing the application. It uses Node.js 18 Alpine image for a lightweight container.

### 3. CI/CD with GitHub Actions

GitHub Actions workflow (`.github/workflows/deploy.yml`) automatically builds and pushes the Docker image to Docker Hub on every push to the main branch.

**Setup:**
1. Go to your GitHub repository settings.
2. Navigate to Secrets and variables > Actions.
3. Add the following secrets:
   - `DOCKER_USERNAME`: Your Docker Hub username
   - `DOCKER_PASSWORD`: Your Docker Hub password or access token

### 4. Deploy to Render

1. Sign up/login to [Render](https://render.com).
2. Click "New" > "Web Service".
3. Connect your GitHub repository.
4. Configure the service:
   - **Name**: basic-calculator
   - **Environment**: Docker
   - **Region**: Choose your preferred region
   - **Branch**: main
   - **Dockerfile Path**: ./Dockerfile (default)
5. Under "Environment", add environment variables:
   - `PORT`: 10000 (or any port, Render assigns dynamically)
6. Click "Create Web Service".

Render will pull the Docker image from Docker Hub and deploy it.

### 5. Environment Variable Isolation

- Use `.env.example` as a template for local development.
- For production on Render, set environment variables in the Render dashboard under "Environment".
- Never commit `.env` files to version control.

## Project Structure

- `server.js`: Backend server with Express
- `public/index.html`: Frontend HTML
- `public/styles.css`: CSS for styling
- `public/script.js`: Frontend JavaScript for interaction
- `package.json`: Node.js dependencies and scripts
- `Dockerfile`: Docker configuration
- `.dockerignore`: Files to exclude from Docker build
- `.github/workflows/deploy.yml`: GitHub Actions CI/CD pipeline

## Troubleshooting

- If the server doesn't start, ensure port 3000 is available locally.
- If calculations don't work, check the browser console for errors.
- For deployment issues, check Render logs and GitHub Actions logs.
- Make sure all files are in the correct directories.