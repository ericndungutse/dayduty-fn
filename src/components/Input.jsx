function Input({ type, id, placeholder, required }) {
    return <input type={type} className="bg-grey-200 px-3 text-sm py-2 rounded border outline-none focus:invalid:border-red-400 valid:border-green-700" id={id} placeholder={placeholder} required={required} />
}

export default Input