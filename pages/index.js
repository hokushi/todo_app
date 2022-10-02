import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
// todos.map((todo)=>())

const index = () => {

  const router = useRouter()

  const [text, setText] = useState("")
  const [todos, setTodos] = useState([]) // [ "皿洗い", "洗濯", "掃除"]

  const addTextToTODO = () => {
    // todos ⇒ ["皿洗い", "洗濯", "掃除"]
    // ...todos ⇒ "皿洗い", "洗濯", "掃除"!
    const newTodos = [...todos, text]
    setTodos(newTodos)
  }

  const minusTextToTODO = (x) => {
    /**  */
    const newTodos = todos.filter((todo) => todo !== x)
    setTodos(newTodos)
  }

  const saveTextInLocalStorage = () => {
    localStorage.setItem('tinpo', text)
  }

  useEffect(() => {
    // const x = ["task1", "task2", "task3"] (これはlocalStorageから取得した配列)
    // setTodos(x)
    const x = localStorage.getItem('tinpo')
    setTodos([x])
  }, [])

  return (
    <>
      <div className='flex justify-center pt-10 '>
        <h1 className="font-bold text-lg">Todo List</h1>
      </div>
      <p>{JSON.stringify(todos)}</p>
      <div className='flex justify-center m-4'>
        <input type="text" onChange={(event) => setText(event.target.value)} className="rounded-l-lg p-0 border-t mr-0  my-0 border-b border-l text-gray-800 border-gray-200 bg-white" placeholder="(例：宿題をする)" />
        <button onClick={()=>{addTextToTODO();saveTextInLocalStorage()}} className="px-4 rounded-r-lg bg-yellow-400  text-gray-800 font-bold p-4 uppercase border-yellow-500 border-t border-b border-r">保存</button>
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
          <tbody >
            {todos.map((a,index) => (
              <tr className=" bg-yellow-400 dark:bg-gray-800">
                <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  {a}
                </th>
                <td className="py-4 px-6 border-l-4">
                  <button onClick={() => router.push('/hennsyuu')} className='flex  p-2 ml-0 bg-gray-800'>編集する</button>
                </td>
                <td className="py-4 px-6 border-l-4">
                  <button onClick={()=>{minusTextToTODO(a)}} className='flex  p-2 ml-0 bg-gray-800'>{index+1}番を削除する</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  )
}


// pはパディング、mはマージン

// 方向は、tは上、rは右、bは下、lは左。xは左右、yは上下
export{}
export default index

