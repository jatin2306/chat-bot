import React, { useState, useRef, useEffect } from 'react';


const chats = [
  // Your chat data here...
];

const ChatList = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const buttonRef = useRef(null);

  const handleDropdownToggle = () => {
    setDropdownOpen(prev => !prev);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target) &&
        buttonRef.current && !buttonRef.current.contains(event.target)) {
      setDropdownOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="w-full max-w-sm bg-gray-100 rounded-lg shadow-md flex flex-col h-screen relative">
      <div className="p-4 border-b flex items-center justify-between">
        <h2 className="text-lg font-semibold">Chats</h2>

        <div className="flex items-center">
        <button className="w-8 h-8 flex items-center justify-center text-gray-600 hover:bg-gray-200 rounded-full">
            <i className="fas fa-user-plus"></i> {/* Font Awesome icon for adding a user */}
          </button>
          <button
            onClick={handleDropdownToggle}
            ref={buttonRef}
            className="w-8 h-8 flex items-center justify-center relative mr-2"
          >
            <div className="flex flex-col items-center space-y-1">
              <span className="w-1 h-1 bg-gray-600 rounded-full"></span>
              <span className="w-1 h-1 bg-gray-600 rounded-full"></span>
              <span className="w-1 h-1 bg-gray-600 rounded-full"></span>
            </div>
          </button>

          {dropdownOpen && (
            <div
              ref={dropdownRef}
              className="absolute top-10 right-0 mt-2 bg-white border border-gray-300 rounded-lg shadow-lg z-10"
            >
              <ul className="py-1">
                <li className="px-4 py-2 text-sm cursor-pointer hover:bg-gray-100">Option 1</li>
                <li className="px-4 py-2 text-sm cursor-pointer hover:bg-gray-100">Option 2</li>
                <li className="px-4 py-2 text-sm cursor-pointer hover:bg-gray-100">Option 3</li>
              </ul>
            </div>
          )}
        </div>
      </div>
      <div className="p-4 border-b border-gray-300">
        <input
          type="text"
          placeholder="Search"
          className="w-full px-4 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none"
        />
      </div>
      <div className="flex-1 overflow-y-auto">
        {chats.map((chat, index) => (
          <div
            key={index}
            className="flex items-center p-4 border-b border-gray-300 hover:bg-gray-200 cursor-pointer"
          >
            <div className="flex-shrink-0">
              <div className="w-12 h-12 bg-gray-400 rounded-full"></div>
            </div>
            <div className="ml-4 flex-1">
              <div className="flex justify-between">
                <h4 className="text-sm font-medium">{chat.name}</h4>
                <span className="text-xs text-gray-500">{chat.time}</span>
              </div>
              <p className="text-sm text-gray-600 truncate">{chat.message}</p>
            </div>
            {chat.muted && <span className="ml-2 text-gray-400">🔇</span>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChatList;
