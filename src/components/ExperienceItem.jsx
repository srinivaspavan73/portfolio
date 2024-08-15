import React from 'react';

const ExperienceItem = ({ experience }) => {
    return (
        <div className="mb-10 ml-4">
            <div className="absolute w-3 h-3 bg-blue-500 rounded-full -left-1.5 border-2 border-white"></div>
            <div className="pl-8 pr-6 py-4 bg-white shadow-lg rounded-lg">
                <p className="text-sm font-semibold text-blue-500">{experience.period}</p>
                <h5 className="text-lg font-semibold text-gray-900">{experience.company}</h5>
                <p className="font-medium text-gray-600">{experience.role}</p>
                <p className="text-gray-500 text-sm">{experience.description}</p>
            </div>
        </div>
    );
};

export default ExperienceItem;
