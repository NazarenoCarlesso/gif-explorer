import { useEffect, useState } from 'react'
import getGifs from '../hooks/getGifs'
import GifItem from './GifItem'

const GifGrid = ({ category }) => {
  const [gifs, setGifs] = useState([])

  useEffect(() => {
    getGifs(category).then(g => setGifs(g))
  }, [])

  return (
    <>
      <h3>{category}</h3>
      <div className='card-grid'>
        {gifs.map(gif => <GifItem key={gif.id} {...gif} />)}
      </div>
    </>
  )
}

export default GifGrid
