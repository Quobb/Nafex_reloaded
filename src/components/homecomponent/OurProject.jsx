/* eslint-disable no-unused-vars */
import React from 'react';

function OurProject() {
  const projects = [
    {
      id: 1,
      title: 'Clean Water Initiative',
      description:
        'Providing access to clean and safe drinking water for underserved communities.',
      image: 'https://via.placeholder.com/500x300', // Replace with actual image URL
    },
    {
      id: 2,
      title: 'Education for All',
      description:
        'Ensuring every child has access to quality education to build a brighter future.',
      image: 'https://via.placeholder.com/500x300', // Replace with actual image URL
    },
    {
      id: 3,
      title: 'Healthcare Support',
      description:
        'Delivering medical assistance and resources to remote areas.',
      image: 'https://via.placeholder.com/500x300', // Replace with actual image URL
    },
  ];

  return (
    <div className="bg-gray-100 py-10">
      <div className="container mx-auto px-4">
        {projects.map((project, index) => (
          <div
            key={project.id}
            className={`flex flex-col ${
              index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
            } items-center mb-10`}
          >
            {/* Image Section */}
            <div className="w-full md:w-1/2">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-auto rounded-lg shadow-md"
              />
            </div>

            {/* Text Section */}
            <div className="w-full md:w-1/2 px-4 md:px-8">
              <h2 className="text-2xl font-bold mb-4">{project.title}</h2>
              <p className="text-gray-700">{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default OurProject;
