import { useEffect, useState } from 'react'
import getGifs from '../hooks/getGifs'

const GifGrid = ({ category }) => {
  const [images, setImages] = useState()

  useEffect(() => {
    getGifs().then(gifs => setImages(gifs))
  }, [])

  return (
    <>
      <h3>{category}</h3>
      {JSON.stringify(images)}
    </>
  )
}

export default GifGrid
