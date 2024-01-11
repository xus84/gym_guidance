# Gym_guidance Next.js Fitness Application

A comprehensive fitness application built with Next.js, offering user signup, login, and dashboard functionalities. This application is designed to facilitate user registration, authentication, and personalized dashboard access, utilizing MongoDB for data storage and management.

## Features

- **User Signup**: Allows users to register by providing necessary details.
- **User Login**: Authenticates registered users using their credentials.
- **Dashboard**: Offers a personalized dashboard displaying user-specific information and features.
- **Database Integration**: Utilizes MongoDB for storing user data, application details, and other relevant information.

## Technologies Used

- **Frontend**: Next.js, React, CSS Modules
- **Backend**: Next.js API Routes
- **Database**: MongoDB
- **Authentication**: JWT (JSON Web Tokens)
- **State Management**: React Context API
- **Testing**: Jest, React Testing Library
- **Deployment**: Vercel

## Getting Started

### Prerequisites

- Node.js (Version 14 or later)
- npm or yarn package manager
- MongoDB Atlas account (or local MongoDB setup)

### Installation Steps

1. Clone the repository:

   ```bash
   git clone https://github.com/xus84/gym_guidance.git

2. First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```
## Configuration
Create a .env.local file in the root directory.

Add your MongoDB connection string:
MONGODB_URI=your_mongodb_connection_string_here


Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

## Usage

1. **Register and Login**: 
   - Register a new user account using the Signup page.
   - Log in with your registered credentials on the Login page.

2. **Navigate to Exercise Routines**:
   - Once logged in, navigate to the Exercise Routines section on the dashboard.

3. **Choose a Routine**: 
   - Browse through available exercise routines and select one that suits your preferences or fitness goals.

4. **Perform Exercises with Timer**: 
   - Start the selected exercise routine.
   - Utilize the integrated timer feature to manage and track exercise durations and rest intervals.
   - Follow the on-screen instructions or prompts to perform exercises correctly and efficiently.

5. **Track Progress**: 
   - Monitor your exercise performance, completion status, and progress within the dashboard.
   - Access historical data, metrics, and insights to evaluate your fitness journey and make informed decisions.



This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Contributing
Fork the repository on GitHub.
Create a new branch for your feature or bug fix.
Implement your changes and commit them with descriptive messages.
Push your changes to your forked repository.
Create a new Pull Request for review and integration.
License
This project is licensed under the MIT License. For more details, refer to the LICENSE file included in the repository.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
