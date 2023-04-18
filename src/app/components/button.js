import React from 'react'

export default function button({text, padding}) {
  return (
    <button className={` bg-orange-500 ${padding} px-11 text-white`}>
        {text}
    </button>
  )
}
