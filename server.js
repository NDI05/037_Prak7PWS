const express = require('express');
const app = express();
const port = process.env.PORT || 8000;

const connectionDatabase = require('./config/db');
const routes = require('./routes/index.route');

// Middleware to parse JSON requests
app.use(express.json());

// Sample route
app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.use('/api/v1', routes);

// Start the server after establishing database connection
connectionDatabase().then(() => {
    app.listen(port, () => {
        console.log(`Server is running on http://localhost:${port}`);
    }
);
}).catch((error) => {
    console.error('Failed to start server due to database connection error:', error);
});