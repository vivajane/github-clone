"use client"
import React, { useContext } from 'react'
import { AppContext } from './Context'

const SearchComponent = () => {

   const context = useContext(AppContext);
     if (!context) {
       throw new Error("Context is null");
     }
     const { username, setUsername, getValues, error,  } = context;

  return (
    <div className='max-w-xl mx-auto'>
        <h1 className='text-2xl font-bold mb-4 text-center py-4'>SearchPage</h1>
            <div>
                <div className='pb-3'>
                    <input  className='border w-full border-gray-300 rounded-md p-2' type="search" name="search"  id="search" value={username} onChange={(e) => setUsername(e.target.value)} />
                </div>
                <button onClick={getValues} className='border border-gray-300 rounded-md p-2'>Submit</button>
                {error && <p className='text-red-500'>{error}</p>}
            </div>
    </div>
  )
}

export default SearchComponent
