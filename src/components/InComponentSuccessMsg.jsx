import React from 'react'

export default function InComponentSuccessMsg({ children }) {
    return (
        <p className='w-full text-white rounded bg-green-500 py-4 px-2 text-center'>{children}</p>
    )
}
