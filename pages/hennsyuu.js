import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'

const hennsyuu = () => {
  const router = useRouter()
  const [text, setText] = useState("");
  const todo_id = router.query.todo_id

  useEffect(() => {
    const existing_todo = localStorage.getItem(todo_id)
    setText(existing_todo)
  }, [])

  const saveTextInLocalStorage = () => {
    localStorage.setItem(todo_id, text)
  }
  

  return (
    <>
      <div className='flex justify-center mt-96'>
        <div className="relative w-96">
          <input type="text" value={text} onChange={(event) => setText(event.target.value)} className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
          <button onClick={() => {router.push('/');saveTextInLocalStorage()}} className="text-white absolute right-2.5 bottom-1 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">送信</button>
        </div>
        <p></p>
      </div>
    </>
  )
}

export default hennsyuu