import React from 'react'
import { useNavigate } from 'react-router-dom'

type Props = {
    id:number,
    name:string,
    link:string,
    icon:string,
    content?:any,
}

export default function SubjectCard({id, name, link, icon}: Props) {
    const navigate = useNavigate()
  return (
    <div onClick={() => navigate(`/subject/${link}`)} className='card shadow-md w-full md:w-max-content md:max-w-[250px] flex flex-column items-center text-center border border-1 border-white/10 m-4 hover:shadow-xl hover:bg-base-200 duration-500 cursor-pointer rounded-lg bg-base-100'>
        <i className='material-symbols-rounded text-7xl mb-5'>{icon}</i>
        <h1 className='badge badge-success badge-outline badge-lg'>{name}</h1>
    </div>
  )
}