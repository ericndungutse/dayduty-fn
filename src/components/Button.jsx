function Button({ children, customClasses, disabled }) {
    return <button className={`${customClasses} text-white py-1 px-2 rounded hover:opacity-50 disabled:opacity-50 transition-opacity duration-300`} disabled={disabled}>{children}</button>
}

export default Button