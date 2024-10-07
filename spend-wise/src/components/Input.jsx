import React, { useId, forwardRef } from 'react'

const Input = ({
  label,
  type = "text",
  className = "rounded-lg p-2 border-2 border-gray-300 focus:outline-none focus:border-gray-500 transition duration-300 w-2/3",
  ...props
}, ref) => {
  const id = useId();
  return (
    <div className='input w-2/3 flex gap-5 justify-center'>

      {label && <label className='font-semibold text-lg m-auto' htmlFor={id}>{label}</label>}

      <input
        type={type}
        className={`${className}`}
        ref={ref}
        id={id}
        {...props}
      />

    </div>
  )
}

export default forwardRef(Input)