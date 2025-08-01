import React from 'react';
import './Information.css';

const InformationPage = () => {
  return (
    <div className="info-container">
      <h1>Welcome to Ex-Tracker</h1>
      <p>
        <strong>Ex-Tracker</strong> is your personal financial assistant designed to help you manage and track your daily expenses with ease. Whether you're saving for a goal, tracking business expenses, or simply trying to stay within a monthly budget, our app has the tools you need.
      </p>

      <h2>🔍 What You Can Do</h2>
      <ul>
        <li>💸 Add and categorize your expenses easily</li>
        <li>📈 View summaries of your daily, monthly, or yearly spending</li>
        <li>📊 Get clear visual insights through reports</li>
        <li>🔔 Receive budget alerts and reminders</li>
      </ul>

      <h2>💡 Why Use ExpenseTracker?</h2>
      <ul>
        <li>✅ Simple and user-friendly interface</li>
        <li>🔐 Secure — your data is private and protected</li>
        <li>📱 Accessible from any device</li>
        <li>🆓 Free to use — no hidden fees</li>
      </ul>

      <h2>🛠️ Technologies Used</h2>
      <p>
        ExpenseTracker is built with modern web technologies such as:
      </p>
      <ul>
        <li>React.js for the frontend</li>
        <li>Node.js and Express.js for the backend</li>
        <li>MongoDB for storing your expense data</li>
      </ul>

      <h2>📬 Contact Us</h2>
      <p>
        Have questions, suggestions, or feedback? We’d love to hear from you!
      </p>
      <p>
        Email: <a href="mailto:sudhinmail33@gmail.com">sudhinmail33@gmail.com</a><br />
        
      </p>
    </div>
  );
};

export default InformationPage;
