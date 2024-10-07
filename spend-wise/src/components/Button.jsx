import React from 'react'

function Button({
    children,
    type='submit',
    className='',
    ...props
}) {
  return (
    <div className='flex justify-center items-center w-full'>
        <button className={` ${className}`} {...props}>
            {children}
        </button>
    </div>
  )
}

export default Button