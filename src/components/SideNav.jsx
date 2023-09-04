import React from 'react'
import { FiLogOut } from "react-icons/fi";
import { NavLink } from 'react-router-dom'
import Button from './Button'

export default function SideNav() {
    return (
        <ul className='flex flex-col w-44'>
            <div className='flex-1 flex flex-col gap-2'>
                <li><NavLink className="w-full block bg-gray-200 hover:bg-gray-400 transition-all hover:text-white rounded px-2 py-1" to="dashboard">Dashboard</NavLink></li>
                <li><NavLink className="w-full block bg-gray-200 hover:bg-gray-400 transition-all hover:text-white rounded px-2 py-1" to="todos">Todos</NavLink></li>
                <li><NavLink className="w-full block bg-gray-200 hover:bg-gray-400 transition-all hover:text-white rounded px-2 py-1" to="backlog">Backlog</NavLink></li>
                <li><NavLink className="w-full block bg-gray-200 hover:bg-gray-400 transition-all hover:text-white rounded px-2 py-1" to="settings">Settings</NavLink></li>
            </div>
            <li>
                <button className=' text-gray-500 flex gap-2 items-center hover:text-gray-900'><FiLogOut />Sign out</button>
            </li>
        </ul>
    )
}
