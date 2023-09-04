import React from "react";
import { FiTrash2, FiCheck, FiEdit3 } from "react-icons/fi";
export default function Table({ columns, data }) {
    return (

        <div className="flex flex-col">
            <div className="overflow-x-auto">
                <div className="w-full px-12 inline-block align-middle">

                    <h1 class="text-3xl leading-none text-center tracking-tight text-gray-900 mt-2"><mark class="px-1 py-0.5 items-center text-white inline-block bg-gradient rounded  ">Your</mark> today's <mark class="px-1 py-0.5 items-center inline-block  text-white bg-gradient rounded">Dunties</mark></h1>

                    <hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>

                    <div className="overflow-hidden border rounded-lg">
                        <table className="min-w-full divide-y divide-gray-200">
                            <thead className="bg-gray-50">
                                <tr>
                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                                    >
                                        #
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                                    >
                                        Title
                                    </th>

                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                                    >
                                        Date
                                    </th>

                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                                    >
                                        Status
                                    </th>

                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                                    >
                                        Action
                                    </th>
                                </tr>

                            </thead>
                            <tbody className="divide-y divide-gray-200">
                                <tr>
                                    <td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
                                        1
                                    </td>
                                    <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">Jone Doe</td>

                                    <td className="px-6 py-4 text-sm font-medium text-left whitespace-nowrap">
                                        <a className="text-green-500 hover:text-green-700" href="#">
                                            Edit
                                        </a>
                                    </td>
                                    <td className="px-6 py-4 text-sm font-medium text-left whitespace-nowrap">
                                        <span className="bg-red-100 text-red-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-red-400 border border-red-400">Delayed</span>
                                    </td>

                                    <td className="px-6 py-4 text-sm font-medium text-left whitespace-nowrap">

                                        <div className="c flex gap-1">

                                            <button type="button" className="text-white  bg-green-700 hover:bg-green-800  rounded p-1 focus:outline-none "><FiCheck className="text-xl" />
                                            </button>

                                            <button type="button" className="text-white  bg-red-700 hover:bg-red-800  rounded p-1 focus:outline-none "><FiTrash2 className="text-xl" />
                                            </button>

                                            <button type="button" className="text-gray-900  bg-gray-200 hover:bg-gray-300  rounded p-1 focus:outline-none "><FiEdit3 className="text-xl" />
                                            </button>


                                        </div>


                                    </td>
                                </tr>
                                <tr>
                                    <td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
                                        2
                                    </td>
                                    <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">Jone Doe</td>

                                    <td className="px-6 py-4 text-sm font-medium text-left whitespace-nowrap">
                                        <a className="text-green-300 hover:text-green-700" href="#">
                                            Pending
                                        </a>
                                    </td>
                                    <td className="px-6 py-4 text-sm font-medium text-left whitespace-nowrap">
                                        <span className="bg-green-100 text-green-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-green-900 dark:text-green-300">Completed</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
                                        3
                                    </td>
                                    <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">Jone Doe</td>

                                    <td className="px-6 py-4 text-sm font-medium text-left whitespace-nowrap">
                                        <a className="text-green-500 hover:text-green-700" href="#">
                                            Edit
                                        </a>
                                    </td>
                                    <td className="px-6 py-4 text-sm font-medium text-left whitespace-nowrap">
                                        <span className="bg-yellow-100 text-yellow-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-yellow-900 dark:text-yellow-300">Pending</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
                                        4
                                    </td>
                                    <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                                        Mary Poppins
                                    </td>

                                    <td className="px-6 py-4 text-sm font-medium text-left whitespace-nowrap">
                                        <a className="text-green-300 hover:text-green-700" href="#">
                                            Edit
                                        </a>
                                    </td>
                                    <td className="px-6 py-4 text-sm font-medium text-left whitespace-nowrap">
                                        <span className="bg-yellow-100 text-yellow-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-yellow-900 dark:text-yellow-300">Pending</span>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}


