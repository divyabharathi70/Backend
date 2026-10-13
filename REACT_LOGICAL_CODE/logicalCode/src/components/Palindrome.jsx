
import React, { useState } from 'react'

const Palindrome = () => {
  const [word, setWord] = useState("")
  const [palindrome, setPalindrome] = useState("")

  const handleClick = () => {
    let rev = ""
    for (let i = word.length - 1; i >= 0; i--) {
      rev += word[i]
    }
    rev == word ? setPalindrome("Palindrome") : setPalindrome("Not a Palindrome")
    console.log(rev)
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
      <div className="w-full max-w-sm rounded-lg bg-white p-6 shadow-md">
        <h2 className="mb-4 text-center text-xl font-bold text-gray-800">Check Palindrome
        </h2>

        <input
          type="text"
          placeholder="Enter Word"
          value={word}
          onChange={(e) => setWord(e.target.value)}
          className="mb-4 w-full rounded-md border border-gray-300 p-2 outline-none focus:border-blue-500"
        />

        <button
          onClick={handleClick}
          className="w-full rounded-md bg-blue-500 p-2 text-white hover:bg-blue-600"
        >
          Check
        </button>

        <h3 className="mt-4 text-center font-semibold text-gray-700">
          {palindrome}
        </h3>
      </div>
    </div>
  )
}

export default Palindrome