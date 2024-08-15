import React from 'react';

const ChatInterFace = () => {
  return (
    <div className="flex-1 flex flex-col bg-chat-pattern">
      {/* Chat Header */}
      <div className="p-4 bg-white border-b flex items-center">
        <img
          src="https://via.placeholder.com/40"
          alt="Profile"
          className="w-10 h-10 rounded-full mr-3"
        />
        <div>
          <h2 className="text-gray-900 font-semibold">Sumit Bhaiya(4-126)</h2>
        </div>
      </div>

      {/* Chat Messages */}
      <div className="p-4 space-y-2 overflow-y-auto flex-1">
        {/* Date Divider */}
        <div className="text-center my-4">
          <div className="relative inline-block text-xs text-gray-500">
            <span className="bg-gray-200 text-gray-700 px-4 py-2 rounded-full shadow-md relative z-10">
              Today
            </span>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-full border-t border-gray-300"></div>
            </div>
          </div>
        </div>

        {/* Received Message */}
        <div className="flex items-start">
          <div className="max-w-xs">
            <div className="p-2 bg-white rounded-lg shadow-md">
              <p>Call krle normal</p>
              <p className="text-xs text-gray-500 mt-1">10:09 PM</p>
            </div>
            <div className="p-2 bg-white rounded-lg shadow-md mt-2">
              <p>Jatin bhai inform chacha like we are not coming tomorrow</p>
              <p className="text-xs text-gray-500 mt-1">10:25 PM</p>
            </div>
          </div>
        </div>

        {/* Sent Message */}
        <div className="flex justify-end items-start">
          <div className="max-w-xs">
            <div className="p-2 bg-green-200 rounded-lg shadow-md">
              <p>Ok bol deta hu monday ka hi</p>
              <p className="text-xs text-gray-500 mt-1">10:26 PM</p>
            </div>
          </div>
        </div>

        {/* Additional Messages */}
        {/* ... */}
      </div>

      {/* Message Input */}
      <div className="p-4 bg-white border-t flex items-center">
        <button className="text-green-500">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 4v16m8-8H4"
            />
          </svg>
        </button>
        <input
          type="text"
          className="flex-1 p-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 ml-2"
          placeholder="Type a message"
        />
        <button className="ml-2 text-green-500">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M14.752 11.168l-7.151 4.142a1 1 0 01-1.451-1.054l1.515-8.409a1 1 0 011.5-.806l7.176 4.13a1 1 0 010 1.696l-7.176 4.13a1 1 0 01-1.5-.806l-1.515-8.409a1 1 0 011.451-1.054l7.151 4.142z"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default ChatInterFace;
