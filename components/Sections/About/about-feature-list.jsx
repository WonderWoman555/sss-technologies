import React from 'react';

const AboutFeatureList = () => {
    const features = [
        "Ease of Scalability",
        "Instant Impact",
        "Expertise and Experience",
        "Time Zone Aligned",
        "Full Flexibility",
        "Proactive Support"
    ];

    return (
        <div className="max-w-2xl mx-auto ">
            <div className="grid grid-cols-2 gap-4">
                {features.map((feature, index) => (
                    <div key={index} className="flex items-center">
                        <div className="w-5 h-5 rounded-full bg-primary flex items-center justify-center mr-2">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                            </svg>
                        </div>
                        <span className="text-gray-800 font-semibold">{feature}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export { AboutFeatureList };