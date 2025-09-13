import React from 'react'

const Card = ({cardName,btnText = "visit me"}) => {
  return (
    <>
    <div className="max-w-sm rounded-lg overflow-hidden shadow-lg bg-white flex align-middle justify-center flex-col">
    <img className="w-full h-48 object-cover" src="https://plus.unsplash.com/premium_photo-1729068649616-48b0254eed5d?q=80&w=1858&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Card Image" />
    
    <div className="p-6">
      <h2 className="text-2xl font-semibold text-gray-800">{cardName}</h2>
      <p className="mt-2 text-gray-600">This is a simple card component created using Tailwind CSS. You can customize it to suit your needs!</p>
      
      <div className="mt-4 flex justify-between items-center">
        <button className="px-4 py-2 bg-blue-500 text-white text-sm font-semibold rounded hover:bg-blue-600">
          {btnText}
        </button>
        <span className="text-gray-500 text-sm">10 mins read</span>
      </div>
    </div>
  </div>
    </> 
  )
}

export default Card