import { useState } from 'react'
import PropTypes from 'prop-types'

const Search = ({ onAddCategory }) => {
  const [input, setInput] = useState('')

  const handleChange = ({ target }) => {
    setInput(target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    if (input.trim().length <= 3) return

    onAddCategory(input)
    setInput('')
  }

  return (
    <form onSubmit={handleSubmit} aria-label='form'>
      <input
        type='text'
        placeholder='One Punch, Dragon Ball, Demon Slayer...'
        value={input}
        onChange={handleChange}
      />
    </form>
  )
}

Search.propTypes = {
  onAddCategory: PropTypes.func.isRequired
}

export default Search
