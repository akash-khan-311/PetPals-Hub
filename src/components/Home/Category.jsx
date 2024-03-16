import React from 'react';

const Category = () => {
    return (
        <>
            <div className="bg-gray-100 py-8">
            <div className="container mx-auto px-4">
                <h2 className="text-2xl font-bold mb-4">Pets Categories</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {/* Category Cards/Buttons */}
                    <a href="#" className="bg-white rounded-lg shadow-md flex items-center justify-center p-4 transition duration-300 hover:bg-gray-200">
                        <div className="flex-shrink-0 mr-2">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7.586 11l5-5H21v2l-5 5m-3 2l5 5v2h-2l-5-5M3 9l5-5v2L3 9zm0 6l5 5v2L3 15z" />
                            </svg>
                        </div>
                        <span>Cats</span>
                    </a>
                    <a href="#" className="bg-white rounded-lg shadow-md flex items-center justify-center p-4 transition duration-300 hover:bg-gray-200">
                        <div className="flex-shrink-0 mr-2">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7.586 11l5-5H21v2l-5 5m-3 2l5 5v2h-2l-5-5M3 9l5-5v2L3 9zm0 6l5 5v2L3 15z" />
                            </svg>
                        </div>
                        <span>Dogs</span>
                    </a>
                    <a href="#" className="bg-white rounded-lg shadow-md flex items-center justify-center p-4 transition duration-300 hover:bg-gray-200">
                        <div className="flex-shrink-0 mr-2">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7.586 11l5-5H21v2l-5 5m-3 2l5 5v2h-2l-5-5M3 9l5-5v2L3 9zm0 6l5 5v2L3 15z" />
                            </svg>
                        </div>
                        <span>Rabbits</span>
                    </a>
                    <a href="#" className="bg-white rounded-lg shadow-md flex items-center justify-center p-4 transition duration-300 hover:bg-gray-200">
                        <div className="flex-shrink-0 mr-2">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7.586 11l5-5H21v2l-5 5m-3 2l5 5v2h-2l-5-5M3 9l5-5v2L3 9zm0 6l5 5v2L3 15z" />
                            </svg>
                        </div>
                        <span>Fish</span>
                    </a>
                    {/* Add more category cards/buttons as needed */}
                </div>
            </div>
        </div>
        </>
    );
};

export default Category;