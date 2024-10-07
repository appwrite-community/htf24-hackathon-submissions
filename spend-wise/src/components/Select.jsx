import React, { forwardRef, useEffect, useId, useState } from 'react'

const Select = ({
    options,
    label,
    className = 'w-2/3 p-2 rounded-lg border-2 border-gray-300 focus:outline-none focus:border-gray-500',
    ...props
}, ref) => {
    const id = useId()

    return (
        <div className='flex gap-5 w-2/3 justify-center'>
            {label && <label htmlFor={id} className='font-semibold text-lg m-auto'>{label}</label>}
            <select
                id={id}
                className={` ${className}`}
                {...props}
                ref={ref}>
                {options?.map((option, index) => (
                    <option key={index} value={option} className='font-semibold'>{option}</option>
                ))}
            </select>
        </div>
    )
}

export default forwardRef(Select)