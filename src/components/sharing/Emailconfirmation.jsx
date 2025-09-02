// EmailConfirmation.jsx
import React from "react";

const EmailConfirmation = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center  bg-opacity-50 z-50">
      <div className="bg-white rounded-2xl shadow-xl p-8 w-[90%] max-w-md text-center">
        <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-800 to-blue-500">
          Email Confirmation Required
        </h2>
        <p className="mt-4 text-gray-700">
          Please confirm your email to continue using your account.
        </p>
      </div>
    </div>
  );
};

export default EmailConfirmation;
