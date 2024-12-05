import React from 'react'

export const PrimaryButton = ({name, onClick, className}) => {
  return (
    <button onClick={onClick} className={'bg-primary hover:bg-primary text-white text-[16px] rounded-[10px] px-5 py-2.5 ' + className}>
        {name}
    </button>
  )
}

export const PrimaryOutlineButton = ({name, onClick, className}) => {
  return (
    <button onClick={onClick} className={'bg-white text-primary border border-primary text-[16px] rounded-[10px] px-5 py-2.5 hover:bg-primary hover:text-white ' + className}>
        {name}
    </button>
  )
}