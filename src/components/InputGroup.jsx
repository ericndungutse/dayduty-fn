import React from 'react'
import InputLabel from './InputLabel'
import Input from './Input'

export default function InputGroup({ htmlFor, labelText, type, id, placeholder, required }) {
    return (
        <div className="flex flex-col gap-1">
            <InputLabel htmlFor={htmlFor}>{labelText}</InputLabel>
            <Input type={type} id={id} placeholder={placeholder} required={required} />
        </div>
    )
}
