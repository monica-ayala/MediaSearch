import React from 'react'

export interface MediaCardProps {
    title: string;
    category?: string;
    description?: string;
    image?: string;
    link?: string;    
    owner?: string;
    type?: string;
    }

export default function MediaCard({title, category, description, image, link, owner, type}: MediaCardProps) {
  return (
<div className="bg-white rounded-lg shadow-lg">
    
    <img src={image} alt="" className="rounded-t-lg cover"/>
    <div className="p-6">
      <h2 className="font-bold mb-2 text-2xl text-purple-800">{ title }
      </h2>
      <p className="text-purple-700 mb-2">{description}</p>
      <a href={link} className="text-purple-600 hover:text-purple-500 underline text-sm">Download</a>
    </div>

  </div>
  )
}