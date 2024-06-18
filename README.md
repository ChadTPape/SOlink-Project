# Solcast Lambda Integration

This project contains an AWS Lambda function that integrates with the Solcast API to fetch and store weather data in a PostgreSQL database.

Prerequisites

- Node.js
- TypeScript
- PostgreSQL
- AWS CLI
- AWS SAM CLI

Setup:

1. Clone the Repository
Clone the repository to your local machine:

git clone https://github.com/ChadTPape/SOlink-Project.git

cd solink-project

2. Install Dependencies
Install project dependencies using npm:

npm install

3. Configure Environment Variables:
Create a .env file in the root of your project based on the provided .env.example. Replace the placeholders with your PostgreSQL database connection details and Solcast API key.

# PostgreSQL Database Configuration
DB_HOST=localhost

DB_PORT=5432

DB_USERNAME=your_username

DB_PASSWORD=your_password

DB_DATABASE=your_database

# Solcast API Key
SOLCAST_API_KEY=your_solcast_api_key

4. Set Up PostgreSQL Database
Ensure your PostgreSQL database is set up with the schema required for storing
Solcast weather data.

6. Build the Project
Build the TypeScript project to compile it into JavaScript:
npm run build

7. Local Testing:
Test the Lambda function locally using AWS SAM CLI:
sam local invoke "SolcastLambdaFunction" --event events/event.json

Ensure your events/event.json file contains the necessary event data for testing.

7. Deployment:
Deploy the Lambda function and related resources to AWS using AWS SAM CLI:
sam deploy --guided

Follow the prompts to configure your deployment settings (AWS Region, Stack Name, etc.).
