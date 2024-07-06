import { useOktaAuth } from "@okta/okta-react";
import React, { useState, useEffect } from "react";
import { redirect } from "react-router-dom";
import { Button, Header } from "semantic-ui-react";

function TermsOfUse() {
  return (
    <div>
      <Header as="h1">KarthikTC: Terms and conditions for SMS</Header>
      <div class="container">
        <h1>Terms of Use</h1>
        <p>
          <strong>Last Updated:</strong> June 24, 2024
        </p>
        <p>
          Welcome to the KarthikTC. This site is a hobby wesbite to learn
          Identity through Okta. By accessing or using the Service, you agree to
          be bound by these Terms of Use (the "Terms"). If you do not agree to
          these Terms, please do not use the Service.
        </p>

        <h2>1. Acceptance of Terms</h2>
        <p>
          By creating an account or accessing the Service, you agree to comply
          with and be bound by these Terms, our Privacy Policy, and any
          additional terms applicable to certain programs in which you may elect
          to participate.
        </p>

        <h2>2. Account Registration</h2>
        <p>
          To access certain features of the Service, you may be required to
          create an account. You agree to:
        </p>
        <ul>
          <li>
            Provide accurate, current, and complete information during the
            registration process.
          </li>
          <li>Maintain and promptly update your account information.</li>
          <li>
            Keep your password secure and accept all risks of unauthorized
            access to your account and the information you provide.
          </li>
        </ul>

        <h2>3. Two-Factor Authentication (2FA)</h2>
        <p>
          By signing up for an account, you agree to the use of One-Time
          Passwords (OTP) for two-factor authentication (2FA) as a security
          measure. You acknowledge and agree that:
        </p>
        <ul>
          <li>
            You will receive OTPs via the method specified (e.g., SMS or email).
          </li>
          <li>
            You are responsible for maintaining the security of your OTPs and
            any device used to receive them.
          </li>
          <li>
            We are not responsible for any loss or damage arising from your
            failure to comply with these security obligations.
          </li>
        </ul>

        <h2>4. Use of the Service</h2>
        <p>
          You agree to use the Service only for lawful purposes and in
          accordance with these Terms. You agree not to:
        </p>
        <ul>
          <li>
            Use the Service in any way that violates any applicable federal,
            state, local, or international law or regulation.
          </li>
          <li>
            Engage in any conduct that restricts or inhibits anyone's use or
            enjoyment of the Service, or which, as determined by us, may harm us
            or users of the Service.
          </li>
          <li>
            Impersonate or attempt to impersonate the Company, a Company
            employee, another user, or any other person or entity.
          </li>
        </ul>
      </div>
      <br />
      <br />
      <br />
    </div>
  );
}

export default TermsOfUse;
