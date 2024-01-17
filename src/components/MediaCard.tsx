import React from 'react';

export interface MediaCardProps {
  title: string;
  category?: string;
  description?: string;
  image?: string;
  link?: string;
  owner?: string;
  type?: string;
}

export default function MediaCard({
  title,
  category,
  description,
  image,
  link,
  owner,
  type,
}: MediaCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-lg">
      <img src={image} alt="" className="rounded-t-lg cover" />
      <div className="p-6">
        <div className="flex justify-between items-center mb-2">
          <h2 className="font-bold text-2xl text-purple-800">{title}</h2>
          {type && (
            <span className="bg-purple-500 text-white rounded-full px-2 py-1 text-sm">
              {type}
            </span>
          )}
        </div>
        <p className="text-purple-700 mb-2">{description}</p>
        <a href={link} className="text-purple-600 hover:text-purple-500 underline text-sm">
          Download
        </a>
      </div>
    </div>
  );
}
