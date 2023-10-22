// Import the required modules using ES module syntax
import './configs/database.config.js';
import express from 'express';
import cors from 'cors';
const dotenv = require('dotenv');
dotenv.config();

const mongodbUri = process.env.MONGODB_URI;
const PORT = process.env.PORT;
const secretKey = process.env.SECRET_KEY;

module.exports = {
  mongodbUri,
  port,
  secretKey,
};

import adminRouter from './routes/admin.routes.js'; // Import admin routes
// import principalRouter from './routes/principal.routes.js'; // Import principal routes
// import teacherRouter from './routes/teacher.routes.js'; // Import teacher routes
// import studentRouter from './routes/student.routes.js'; // Import student routes
// import parentRouter from './routes/parent.routes.js'; // Import parent routes
// import courseRouter from './routes/course.routes.js'; // Import course routes
// import departmentRouter from './routes/department.routes.js'; // Import department routes


const app = express();

const port = process.env.PORT || 3000;

app.use(cors());

app.use('/api/admin', adminRouter); // Use admin routes
// app.use('/api/principal', principalRouter); // Use principal routes
// app.use('/api/teacher', teacherRouter); // Use teacher routes
// app.use('/api/student', studentRouter); // Use student routes
// app.use('/api/parent', parentRouter); // Use parent routes
// app.use('/api/course', courseRouter); // Use course routes
// app.use('/api/department', departmentRouter); // Use department routes

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

// Export the 'app' variable (if needed)
export default app;