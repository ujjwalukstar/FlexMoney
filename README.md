Yoga Class Admission System:-

This is a MERN stack application for managing enrollments in monthly yoga classes. The system allows users to enroll in yoga classes, choose a batch, and pay monthly fees. It ensures that only individuals aged 18-65 can enroll and allows participants to switch batches every month.
Deployed link : https://flexmoney-xcv0.onrender.com
Features
User Enrollment:

Users can enroll in yoga classes by providing their name, age, and preferred batch.

Only users aged between 18-65 are allowed to enroll.

Batch Selection:

Users can choose from 4 batches: 6-7AM, 7-8AM, 8-9AM, and 5-6PM.

Users can switch batches every month but must stay in the same batch for the entire month.

Monthly Payment:

The monthly fee is ₹500 INR.

Users can pay the fee at any time during the month.

Admin Dashboard:

Admins can view all enrollments and manage user data.

Tech Stack
Frontend: React.js

Backend: Node.js, Express.js

Database: MongoDB

Other Tools: Mongoose (for MongoDB modeling), CORS, Dotenv

Folder Structure
Copy
FlexMoney/
├── yoga-backend/               # Backend code
│   ├── config/                 # Database configuration
│   ├── models/                 # MongoDB models
│   ├── routes/                 # API routes
│   ├── server.js               # Backend entry point
│   └── .env                    # Environment variables
├── yoga-frontend/              # Frontend code
│   ├── public/                 # Static assets
│   ├── src/                    # React components
│   ├── package.json            # Frontend dependencies
│   └── index.js                # Frontend entry point
├── package.json                # Root dependencies
└── README.md                   # Project documentation
ER Diagram
The database consists of a single collection: Enrollments.

Enrollment Schema
Field	Type	Description	Constraints
name	String	Name of the participant	Required
age	Number	Age of the participant	Required, min: 18, max: 65
batch	String	Preferred batch	Required, enum: ["6-7AM", "7-8AM", "8-9AM", "5-6PM"]
enrollmentDate	Date	Date of enrollment	Default: Current date
Setup Instructions
Prerequisites
Node.js and npm installed

MongoDB Atlas account or local MongoDB instance

Steps to Run the Project
1.Clone the Repository:
git clone https://github.com/ujjwalukstar/FlexMoney.git
cd FlexMoney

2.Install Dependencies:

Install backend dependencies:
cd yoga-backend
npm install

Install frontend dependencies:
cd ../yoga-frontend
npm install

3.Set Up Environment Variables:
Create a .env file in the yoga-backend folder and write this inside env:
MONGO_URI=mongodb+srv://<username>:<password>@cluster0.mongodb.net/<dbname>?retryWrites=true&w=majority
PORT=5000

4.Run the Backend:
Navigate to the yoga-backend folder:
cd ../yoga-backend
npm run start
The backend server will start on http://localhost:5000.

5.Run the Frontend:
Navigate to the yoga-frontend folder:
cd ../yoga-frontend
npm start
The frontend will start on http://localhost:3000.

API Endpoints
Enrollment Routes
POST /api/enroll: Enroll a new participant.

Request Body:

json
{
  "name": "John Doe",
  "age": 25,
  "batch": "6-7AM"
}
GET /api/enroll: Fetch all enrollments.


Future Enhancements
Payment Integration:

*Integrate a payment gateway (e.g., Razorpay) for monthly fee payments.(will update later)

User Authentication:

Add user authentication for secure access.

Batch Switching:

Allow users to switch batches for the next month.

Email Notifications:

Send payment reminders and enrollment confirmations via email.

Contributor
Ujjwal
