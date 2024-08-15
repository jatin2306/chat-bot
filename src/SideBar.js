import React from 'react';

const Sidebar = () => {
    return (
        <div className="w-20 h-screen bg-gray-100 flex flex-col items-center py-5">
            <div className="flex flex-col space-y-8">
                {/* Chat Icon */}
                <div className="group relative p-3 bg-gray-200 rounded-lg hover:bg-gray-300 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-500 group-hover:text-blue-500 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17 8h2a2 2 0 012 2v5a2 2 0 01-2 2h-3l-4 4v-4H7a2 2 0 01-2-2V10a2 2 0 012-2h2m6-4h-3a2 2 0 00-2 2v5a2 2 0 002 2h3l4 4v-4h2a2 2 0 002-2V6a2 2 0 00-2-2h-3z" />
                    </svg>
                    <span className="absolute bottom-10 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity text-xs text-white bg-black p-1 rounded">Chat</span>
                </div>

                {/* Call Icon */}
                <div className="group relative p-3 bg-gray-200 rounded-lg hover:bg-gray-300 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-500 group-hover:text-green-500 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 8a4 4 0 014-4h10a4 4 0 014 4v8a4 4 0 01-4 4H7a4 4 0 01-4-4V8z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M10 8v4l2-2 2 2V8" />
                    </svg>
                    <span className="absolute bottom-10 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity text-xs text-white bg-black p-1 rounded">Call</span>
                </div>

                {/* Notification Icon with Badge */}
                <div className="group relative p-3 bg-gray-200 rounded-lg hover:bg-gray-300 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-500 group-hover:text-red-500 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.157V11c0-2.142-.896-4.115-2.34-5.506a7.968 7.968 0 00-1.235-.988 2 2 0 00-3.85 0 7.968 7.968 0 00-1.235.988C6.896 6.885 6 8.858 6 11v3.157a2.032 2.032 0 01-.595 1.438L4 17h5" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 20h6a2 2 0 11-6 0z" />
                    </svg>
                    <span className="absolute top-0 right-0 w-4 h-4 bg-green-500 text-white text-xs rounded-full flex items-center justify-center">5</span>
                    <span className="absolute bottom-10 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity text-xs text-white bg-black p-1 rounded">Notifications</span>
                </div>

                {/* Favorite Icon */}
                <div className="group relative p-3 bg-gray-200 rounded-lg hover:bg-gray-300 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-500 group-hover:text-yellow-500 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5.121 13.05L12 17.318l6.879-4.268A1.5 1.5 0 0018.879 11H5.121a1.5 1.5 0 00-1.5 2.05z" />
                    </svg>
                    <span className="absolute bottom-10 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity text-xs text-white bg-black p-1 rounded">Favorites</span>
                </div>

                {/* Settings Icon */}
                <div className="group mt-auto relative p-3 bg-gray-200 rounded-lg hover:bg-gray-300 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-500 group-hover:text-purple-500 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.25 6.75v10.5M19.75 6.75v10.5M9 12H4.25M14 12H19.75M11.25 9.75h-2.5M11.25 14.25h-2.5" />
                    </svg>
                    <span className="absolute bottom-10 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity text-xs text-white bg-black p-1 rounded">Settings</span>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
