import { APIGatewayProxyHandler } from 'aws-lambda';
import 'reflect-metadata';
import { connectDatabase } from '../database';
import { fetchAndStoreWeatherData } from '../services/solcastservice';

export const handler: APIGatewayProxyHandler = async (event, _context) => {
  try {
    await connectDatabase();
    const location = event.queryStringParameters?.location;

    if (!location) {
      return {
        statusCode: 400,
        body: JSON.stringify({ message: 'Location parameter is required' }),
      };
    }

    await fetchAndStoreWeatherData(location);

    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Data fetched and stored successfully' }),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ message: 'Internal Server Error', error: error.message }),
    };
  }
};
