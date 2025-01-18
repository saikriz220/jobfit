const express =require('express')
const cors = require('cors')
require ('dotenv').config()
const userRoutes = require('./routes/userRoutes'); // Import user-related 

const app = express(); // Create an Express app
app.use(cors()); // Enable CORS
app.use(express.json()); // Parse JSON bodies

app.use('/api/user', userRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
