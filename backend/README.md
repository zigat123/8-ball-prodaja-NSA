# 8-Ball Store Backend

This is the backend server for the 8-Ball billiard store, handling order submissions and storage in MongoDB.

## Setup

1. Install dependencies:
   ```
   npm install
   ```

2. Set up MongoDB:
   - Install MongoDB locally or use MongoDB Atlas (cloud)
   - For local MongoDB, start MongoDB service
   - For Atlas, get your connection string

3. Configure environment:
   - Set `MONGODB_URI` environment variable to your MongoDB connection string
   - Example: `mongodb://localhost:27017/billiard-store` for local
   - Or `mongodb+srv://username:password@cluster.mongodb.net/billiard-store` for Atlas

4. Start the server:
   ```
   npm start
   ```
   Or for development:
   ```
   npm run dev
   ```

The server will run on port 3000 by default.

## API Endpoints

- `POST /api/orders` - Submit a new order
- `GET /api/orders` - Get all orders (for admin purposes)

## Integration with Frontend

The Angular frontend expects the backend to be running on the same domain or configure CORS accordingly. For development, you can proxy requests or run the backend on a different port and configure the frontend to point to it.

In production, deploy both frontend and backend, and update the fetch URL in `order.service.ts` to point to your backend URL.