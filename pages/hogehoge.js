import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'

const hogehoge = () => {

  const router = useRouter()

  const [search, setsearch] = useState("")
  const [todos, setTodos] = useState([])
  const [time, settime] = useState("")
  const [definetime, setdefinetime] = useState([])


  const addtodo = () => {
    const newtodo = [...todos, search]
    setTodos(newtodo)
  }

  const minustodo = (x) => {
    const newTodos = todos.filter((todo) => todo !== x)
    setTodos(newTodos)
  }

  const addtime = () => {
    const newtime = [...definetime, time]
    setdefinetime(newtime)
  }

  const minustime = (x) => {
    const newTime = definetime.filter((time) => time !== x)
    setTodos(newTime)
  }





  return (
    <>
      <div className='italic text-4xl font-bold flex justify-center pt-40'>
        にゃんこスケジュール
      </div>
      <div className="flex mx-96 mt-5">

        <div className="relative w-1/2">
          <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
            {/*虫眼鏡のマーク*/}
            <svg className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
          </div>
          <input onChange={(event) => setsearch(event.target.value)} type="text" className="block p-4 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="ニャンコの予定を入れよう" required />
          <button onClick={addtodo} className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">保存</button>
        </div>
        <div className="relative w-1/2">
          <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
            {/*虫眼鏡のマーク*/}
            <svg className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
          </div>
          <input onChange={(event) => settime(event.target.value)} type="text" className="block p-4 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="イベントの時刻を入れよう" required />
          <button onClick={addtime} className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">保存</button>
        </div>


        {/*</div>script src="https://unpkg.com/flowbite@1.4.0/dist/flowbite.js"></script>*/}
      </div>

      <div className="overflow-x-auto relative flex justify-center mx-96 my-5">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="py-3 px-6">
                番号
              </th>
              <th scope="col" className="py-3 px-6">
                ステージ名
              </th>
              <th scope="col" className="py-3 px-6">
                時間
              </th>
              <th scope="col" className="py-3 px-6">
                編集
              </th>
              <th scope="col" className="py-3 px-6">
                削除
              </th>
            </tr>
          </thead>
          <tbody>
            {todos.map((a, index) => (
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <td className="py-2 px-6">
                  {index + 1}
                </td>
                <th scope="row" className="py-2 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  {todos[index]}
                </th>
                <td className="py-2 px-6">
                  {definetime[index]}
                </td>
                <td className="py-2 px-6">
                  <button onClick={() => router.push('/hennsyuu')} className='bg-blue-400 px-2 py-2 text-white rounded-lg'>編集</button>
                </td>
                <td className="py-2 px-6">
                  <button onClick={() => { minustodo(a) && minustime(a)}} className='bg-blue-400 px-2 py-2 text-white rounded-lg'>削除</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p>{JSON.stringify(todos)}</p>

    </>
  )
}

export default hogehoge