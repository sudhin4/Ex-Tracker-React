import React from 'react';
import './PrivacyPolicy.css';

const PrivacyPolicy = () => {
  return (
    <div className="privacy-container">
      <h1>Privacy Policy</h1>
      <p><strong>Last updated:</strong> August 1, 2025</p>
      <p>
        Thank you for using <strong>Ex-Tracker</strong>. Your privacy is important to us. This Privacy Policy explains how we collect, use, disclose, and protect your information when you use our website and services.
      </p>

      <h2>1. Information We Collect</h2>
      <ul>
        <li><strong>Personal Information</strong>: Name, Email, Login Credentials</li>
        <li><strong>Financial Data</strong>: Expense details like amount, date, description</li>
        <li><strong>Technical Info</strong>: IP address, browser type, usage data</li>
      </ul>

      <h2>2. How We Use Your Information</h2>
      <ul>
        <li>To provide and improve our services</li>
        <li>To personalize user experience</li>
        <li>To analyze usage and security issues</li>
      </ul>

      <h2>3. Data Sharing and Disclosure</h2>
      <p>We <strong>do not sell</strong> your data. We may share information only with:</p>
      <ul>
        <li>Trusted service providers</li>
        <li>Legal authorities if required</li>
        <li>With your explicit consent</li>
      </ul>

      <h2>4. Cookies and Tracking</h2>
      <p>We use cookies to maintain login sessions and improve experience. You can disable cookies in your browser settings.</p>

      <h2>5. Data Security</h2>
      <p>We use encryption, secure storage, and access control to protect your data. However, no system is 100% secure.</p>

      <h2>6. Your Rights</h2>
      <p>
        You may request to view, correct, or delete your data by contacting us at{' '}
        <a href="mailto:support@expensetracker.com">support@expensetracker.com</a>.
      </p>

      <h2>7. Third-Party Links</h2>
      <p>We are not responsible for privacy practices of external sites linked from our platform.</p>

      <h2>8. Changes to This Policy</h2>
      <p>We may update this policy. Revisions will be posted on this page with a new update date.</p>

      <h2>9. Contact Us</h2>
      <p>
        <strong>ExpenseTracker Team</strong><br />
        Email: <a href="mailto:sudhinmail33@gmail.com">sudhinmail33@gmail.com</a><br />
        
      </p>
    </div>
  );
};

export default PrivacyPolicy;
