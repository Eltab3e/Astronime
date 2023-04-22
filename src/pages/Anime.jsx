import React from 'react'
import { useParams } from 'react-router-dom'

const Anime = () => {
  const {id} = useParams()

  return (
    <div>Anime</div>
  )
}

export default Anime