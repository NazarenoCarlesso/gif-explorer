import PropTypes from 'prop-types'
import useGifs from '../hooks/useGifs'
import GifItem from './GifItem'

const GifGrid = ({ category }) => {
  const { gifs, isLoading } = useGifs({ category })

  return (
    <>
      <h3>{category}</h3>
      {isLoading && <h4>Cargando...</h4>}
      <div className='card-grid'>
        {gifs.map(gif => <GifItem key={gif.id} {...gif} />)}
      </div>
    </>
  )
}

GifGrid.propTypes = {
  category: PropTypes.string.isRequired
}

export default GifGrid
