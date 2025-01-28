import React from 'react'
import { Link } from 'react-router-dom'

export const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-6 w-full h-[calc(100vh-80px)]">
    <h1 className="text-lg sm:text-xl font-semibold">404 Not Found!</h1>
    <Link to={"/"}>
      <button
        className="bg-[#16a34a] text-white text-md uppercase font-semibold py-3 px-10 rounded-md
        border-[#16a34a] border-2 hover:bg-white hover:text-[#16a34a] transition-all duration-300"
      >
       Go back to shopping
      </button>
    </Link>
  </div>
  )
}
