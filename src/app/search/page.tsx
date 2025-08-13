"use client"
import React from 'react'
import { useState, useEffect } from 'react'

type UserData = {
    login: string;
    avatar_url: string;
    name: string;
    bio: string;
    public_repos: number;
    html_url: string;
    followers: number;
    following: number;
}



const SearchPage = () => {
    const [username, setUsername] = useState<string>("");
    const [searchData, setSearchData] = useState<UserData | null>(null);
    const [error, setError] = useState<string | null>("")



    const handleSearch = async () => {
        try {
            const response = await fetch(`https://api.github.com/users/${username}`)
            if (!response.ok) {
                throw new Error("User not found")
            }
            const data: UserData = await response.json()
            setSearchData(data)

           

        } catch (error) {

            if (error instanceof Error) {
                setError(error.message)
                setSearchData(null)
                setTimeout(() => {
                setError("")

            }, 1000)
            }else{
                setError(String(error))
            }

        }

    }


    return (
        <div className={`max-w-md mx-auto ${searchData && "border-zinc-600 border p-4 rounded-md"} `}>
            <h1 className='text-2xl font-bold mb-4 text-center py-4'>SearchPage</h1>
            <div>
                <div className='pb-3'>
                    <input className='border w-full border-gray-300 rounded-md p-2' onChange={(e) => setUsername(e.target.value)} type="search" name="search" value={username} id="search" />
                </div>
                <div >
                    <button onClick={handleSearch} className='border border-gray-300 rounded-md p-2'>Submit</button>
                </div>
                {error && <p style={{ color: "red" }}>{error}</p>}
            </div>
            {searchData && <div className='space-y-3'>
                <h1 className='text-xl font-bold'>{searchData.name}</h1>
                <img className='w-32 h-32 rounded-full' src={searchData.avatar_url} alt={searchData.name} />
                <p className=' '>{searchData.bio}</p>
                <p>Public Repos: {searchData.public_repos}</p>
                <p>Followers: {searchData.followers}</p>
                <p>Following: {searchData.following}</p>
            </div>}
            {/* {repo && repo.length > 0 && (
                <div>
                    <h2>Repositories:</h2>
                    <ul>
                        {repo.map((repository: repoData) => (
                            <li key={repository.id}>
                                <a href={repository.html_url} target="_blank" rel="noopener noreferrer">
                                    {repository.name}
                                </a>
                                <p>{repository.description}</p>
                                <p>Forks: {repository.forks_count}</p>
                            </li>
                        ))}
                    </ul>
                </div>
            )} */}
        </div>
    )
}

export default SearchPage
