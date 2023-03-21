import React from 'react'
import { useSelector } from 'react-redux';

export const  Footer = () => {
    const footColor = useSelector(state => state.theme.deux)
  return (
    <div className={` text-white h-[50px] uppercase fixed bottom-0 w-full ${footColor}`}>Footer</div>
  )
}
