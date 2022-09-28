import React from 'react'

const Button = ({styles}) => (
    <button type="button" className={`button py-4 px-5 font-Rubik font-medium text-[18px] text-dark bg-secondary rounded-[10px] outline-none w-[300px]  ${styles}`}>
      Shop Now
    </button>
  )

export default Button