import React from 'react'
import { NavLink } from 'react-router-dom'
import Button from './Button'

export default function SideNav() {
    return (
        <ul>
            <li><NavLink to="dashboard">Dashboard</NavLink></li>
            <li><NavLink to="todos">Todos</NavLink></li>
            <li><NavLink to="settings">Settings</NavLink></li>
            <li><NavLink to="backlog">Backlog</NavLink></li>
            <li><Button customClasses="btn-primary" to="">Sign out</Button></li>
        </ul>
    )
}
