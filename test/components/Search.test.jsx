import { fireEvent, render, screen } from '@testing-library/react'
import Search from '../../src/components/Search'

describe('Test <Search />', () => {
  test('must change input value', () => {
    render(<Search onAddCategory={() => { }} />)
    // screen.debug()
    const input = screen.getByRole('textbox')
    fireEvent.input(input, {
      target: {
        value: 'Saitama'
      }
    })

    expect(input.value).toBe('Saitama')
  })

  test('must call onAddCategory if input has a value', () => {
    const inputValue = 'Saitama'

    render(<Search onAddCategory={() => { }} />)

    const input = screen.getByRole('textbox')
    const form = screen.getByRole('form')

    fireEvent.input(input, {
      target: { value: inputValue }
    })
    fireEvent.submit(form)

    expect(input.value).toBe('')
  })
})
