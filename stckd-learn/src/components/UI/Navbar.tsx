import React from 'react'
import { useNavigate } from 'react-router-dom'
type Props = {}

export default function Navbar({}: Props) {
    const navigate = useNavigate();

  return (
    <div>
        <div className="navbar bg-base-100">
    <div className="flex-1">
      <a className="btn btn-ghost normal-case text-xl">STCKD #learn</a>
    </div>
    <div className="flex-none">
      <ul className="menu menu-horizontal p-0">
        <li><button onClick={() => {navigate('/subjects')}}>Subjects</button></li>
      </ul>
    </div>
  </div>
  </div>
  )
}