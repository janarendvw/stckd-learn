import React from 'react'
import SubjectCard from '../components/UI/SubjectCard'
import data from '../../public/subject_data.json'

type Props = {}

export default function Subjects({}: Props) {
    const subjects = data
  return (
    <div>
        <h1 className='title text-3xl font-bold'>Subjects</h1>
        <div className='mt-10 flex flex-wrap bg-base-200 rounded-xl duration-500'>
            {subjects.map(({id, name, link, icon}) => {
                return (<SubjectCard id={id} name={name} link={link} icon={icon}/>)
            })}
        </div>
    </div>
  )
}