import React from 'react'
import { useParams } from 'react-router-dom'
import data from '../../public/subject_data.json'
type Props = {}

export default function Subject({}: Props) {
    let { subjectId } = useParams();
    const content = data
    console.log(data)
 return (
    <div>{ subjectId }</div>
  )
}