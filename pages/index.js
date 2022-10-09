import React, { useState, useEffect } from 'react'
import { v4 as uuidv4 } from 'uuid';
import Link from 'next/link'

const Home = () => {

  const [title, setTitle] = useState("")
  const [todos, setTodos] = useState([])

  useEffect(() => {
    // リロード時既存のデータを表示
    let saved_todos = []
    for (let i = 0, length = localStorage.length; i < length; i++) {
      const id = localStorage.key(i);
      const title = localStorage.getItem(id);
      const todo = { id: id, title: title }
      saved_todos.push(todo);
    }
    setTodos(saved_todos)
  }, [])

  const addTodo = () => {
    const id = uuidv4()
    const newTodo = { id: id, title: title }
    const newTodos = [...todos, newTodo]
    setTodos(newTodos)
    localStorage.setItem(id, title)
  }

  const removeTodo = (target_id) => {
    const newTodos = todos.filter((todo) => todo.id !== target_id)
    setTodos(newTodos)
    localStorage.removeItem(target_id);
  }

  return (
    <>
      <div className='flex justify-center pt-10 '>
        <h1 className="font-bold text-lg">Todo List</h1>
      </div>
      <div className='flex justify-center m-4'>
        <input type="text" onChange={(event) => setTitle(event.target.value)} className="rounded-l-lg p-0 border-t mr-0  my-0 border-b border-l text-gray-800 border-gray-200 bg-white" placeholder="(例：宿題をする)" />
        <button onClick={() => { addTodo() }} className="px-4 rounded-r-lg bg-yellow-400  text-gray-800 font-bold p-4 uppercase border-yellow-500 border-t border-b border-r">
          保存
        </button>
      </div>

      <div className="mx-80 overflow-x-auto relative">
        <table className=" w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="py-3 px-6">
                Title
              </th>
              <th scope="col" className="py-3 px-6 border-l-4">
                編集
              </th>
              <th scope="col" className="py-3 px-6 border-l-4">
                削除
              </th>
            </tr>
          </thead>
          <tbody>
            {todos.map((todo, index) => (
              <tr className=" bg-yellow-400 dark:bg-gray-800">
                <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  {todo.title}
                </th>
                <td className="py-4 px-6 border-l-4">
                  <Link href={`/${todo.id}`}>
                    <button className='flex  p-2 ml-0 bg-gray-800'>
                      編集する
                    </button>
                  </Link>
                </td>
                <td className="py-4 px-6 border-l-4">
                  <button onClick={() => { removeTodo(todo.id) }} className='flex  p-2 ml-0 bg-gray-800'>
                    削除する
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  )
}

export default Home