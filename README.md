# CafeCollect

CafeCollect is a modern web application that enables café owners to create and manage star-collection promotions while allowing customers to collect stars and redeem rewards, similar to the popular Starbucks loyalty program.

## Table of Contents

1. [Features](#features)
2. [Tech Stack](#tech-stack)
3. [Getting Started](#getting-started)

   * [Prerequisites](#prerequisites)
   * [Installation](#installation)
   * [Environment Variables](#environment-variables)
   * [Running the App](#running-the-app)
4. [Usage](#usage)

   * [For Café Owners](#for-café-owners)
   * [For Customers](#for-customers)
5. [Project Structure](#project-structure)
6. [Contributing](#contributing)
7. [License](#license)
8. [Contact](#contact)

## Features

* **Promotion Management**: Café owners can create, update, and delete star-collection promotions.
* **Real-time Tracking**: Customers can view their current star count in real time.
* **Reward Redemption**: Automatically unlock a reward (e.g., free drink) when a customer collects 100 stars.
* **Authentication**: Secure login for café owners and customers using Firebase Authentication.
* **Responsive Design**: Built with Tailwind CSS to work seamlessly on mobile and desktop.

## Tech Stack

* **Frontend**: React (Vite)
* **Styling**: Tailwind CSS
* **Backend-as-a-Service**: Firebase (Firestore, Authentication, Hosting)
* **Version Control**: Git & GitHub

## Getting Started

### Prerequisites

* Node.js v14 or above
* npm (v6+) or Yarn
* Firebase CLI (`npm install -g firebase-tools`)

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/your-username/cafecollect.git
   cd cafecollect
   ```
2. **Install dependencies**

   ```bash
   npm install
   # or
   yarn install
   ```

### Environment Variables

Create a `.env.local` file in the root directory with your Firebase configuration:

```
VITE_FIREBASE_API_KEY=<your_api_key>
VITE_FIREBASE_AUTH_DOMAIN=<your_auth_domain>
VITE_FIREBASE_PROJECT_ID=<your_project_id>
VITE_FIREBASE_STORAGE_BUCKET=<your_storage_bucket>
VITE_FIREBASE_MESSAGING_SENDER_ID=<your_messaging_sender_id>
VITE_FIREBASE_APP_ID=<your_app_id>
```

### Running the App

* **Development**

  ```bash
  npm run dev
  # or
  yarn dev
  ```
* **Production Build**

  ```bash
  npm run build
  # or
  yarn build
  ```
* **Preview Production Build**

  ```bash
  npm run serve
  # or
  yarn serve
  ```

## Usage

### For Café Owners

1. Sign up or log in with your café owner account.
2. Navigate to **Promotions** and click **Create New Promotion**.
3. Specify the star target (e.g., 100 stars) and the reward details.
4. Save and share the promotion code with your customers.

### For Customers

1. Sign up or log in with your customer account.
2. Enter the promotion code provided by the café.
3. Scan or manually enter stars for each purchase.
4. Track your star count in your dashboard.
5. Once you reach the target, click **Redeem Reward**.

## Project Structure

```
├── public/                # Static assets
├── src/
│   ├── components/       # Reusable UI components
│   ├── pages/            # Route-based pages
│   ├── styles/           # Global and component styles
│   ├── utils/            # Helper functions and Firebase setup
│   ├── App.jsx           # Main application component
│   └── main.jsx          # Entry point
├── .env.local            # Environment variables
├── tailwind.config.js    # Tailwind CSS configuration
├── vite.config.js        # Vite configuration
└── package.json          # Project metadata & scripts
```

## Contributing

1. Fork the repository
2. Create a new feature branch (`git checkout -b feature/my-feature`)
3. Commit your changes (`git commit -m 'Add some feature'`)
4. Push to the branch (`git push origin feature/my-feature`)
5. Open a Pull Request

Please follow the [Code of Conduct](CODE_OF_CONDUCT.md) and ensure all linting and tests pass before submitting.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contact

**Luis Camus**
Email: [camus.luis95@gmail.com]
Project Link: [https://github.com/gradientick/cafecollect]
