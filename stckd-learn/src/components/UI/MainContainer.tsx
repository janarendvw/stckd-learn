import React from 'react'
import { Outlet } from 'react-router-dom'

type Props = {}

export default function MainContainer({}: Props) {
  return (
    <div className='card my-5 text-left'><Outlet/></div>
  )
}