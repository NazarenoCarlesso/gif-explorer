import { useState } from 'react'
import './App.css'
import Search from './components/Search'
import GifGrid from './components/GifGrid'

const App = () => {
  const [categories, setCategories] = useState(['One Punch', 'Dragon Ball'])

  const onAddCategory = (category) => {
    if (categories.includes(category)) return

    setCategories(categories => [category, ...categories])
  }

  return (
    <div>
      {/* Title */}
      <div className='hero'>
        <h1 className='title'>Gif Explorer</h1>
      </div>
      {/* Input */}
      <Search onAddCategory={onAddCategory} />
      {/* Search List */}
      <ol>
        {categories.map(category => <GifGrid key={category} category={category} />)}
      </ol>
      {/* Gif Grid */}
    </div>
  )
}

export default App
