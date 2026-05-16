function Input({ type = 'text', label, value, onChange, placeholder, name }) {
    return (
        <div className="flex flex-col gap-1">
            {label && <label className="text-sm">{label}</label>}
            {type === "textarea" ? (
                <textarea name={name} value={value} onChange={onChange} placeholder={placeholder} className="w-52 h-8 px-2 text-xs rounded-sm"></textarea>
            ) : (
                <input type={type} name={name} value={value} onChange={onChange} placeholder={placeholder} className="w-52 h-8 px-2 text-xs rounded-md border border-gray-200 outline-none" />
            )}
        </div>
    )
}
export default Input