function InputLabel({ htmlFor, children }) {
    return <label htmlFor={htmlFor} className="text-sm">{children}</label>
}

export default InputLabel