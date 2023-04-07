import { useState } from 'react'

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
    <form onSubmit={handleSubmit}>
      <input
        type='text'
        placeholder='One Punch, Dragon Ball, Demon Slayer...'
        value={input}
        onChange={handleChange}
      />
    </form>
  )
}

export default Search
