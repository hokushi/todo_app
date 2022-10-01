import React, { useState, useEffect } from 'react'

const uniuni = () => {

    const kakin = [
        { plan: "梅", price: 1000 },
        { plan: "竹", price: 4000 },
        { plan: "松", price: 10000 }
    ]

    const [number, setnumber] = useState()
    const [opa, setopa] = useState()

    const opai=()=>{
        setopa(number)
    }

    return (
        <>
            <p>買うプランを数字で記入してください!!</p>
            <p className=' text-gray-500'>（梅は１、竹は２、松は３）</p>
            <div className="relative w-40">
                <input onChange={(event) => setnumber(event.target.value)} type="number" className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                <button onClick={opai} className="text-white absolute right-2.5 bottom-1 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">送信</button>
            </div>
            <div className="flex justify-center mt-20 w-3/5 bg-slate-500">
                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-100 dark:bg-gray-700 dark:text-gray-400 ">
                        <tr>
                            <th scope="col" className="py-3 px-6 rounded-l-lg">
                                買う組み合わせ
                            </th>
                            <th scope="col" className=" py-3 px-6 rounded-r-lg border-l-zinc-900">
                                Price
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="bg-white dark:bg-gray-800">
                            <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                <p>{opa && kakin[opa-1].plan}</p>
                            </th>
                            <td className="py-4 px-6">
                                10000
                            </td>
                        </tr>
                    </tbody>
                    <tfoot>
                        <tr className="font-semibold text-gray-900 dark:text-white">
                            <th scope="row" className="py-3 px-6 text-base">Total</th>

                            <td classname="py-3 px-6">10000</td>
                        </tr>
                    </tfoot>
                </table>
            </div>

        </>


    )
}

export default uniuni