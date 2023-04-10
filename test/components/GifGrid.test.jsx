import { render, screen } from '@testing-library/react'
import GifGrid from '../../src/components/GifGrid'
import useGifs from '../../src/hooks/useGifs'
import berserkGifs from '../../src/mocks/berserk.json'

jest.mock('../../src/hooks/useGifs')

describe('Test <GifGrid />', () => {
  const category = 'Berserk'

  test('must init with loading', () => {
    useGifs.mockReturnValue({
      gifs: [],
      isLoading: true
    })

    render(<GifGrid category={category} />)
    // screen.debug()
    expect(screen.getByText('Cargando...')).toBeTruthy()
    expect(screen.getAllByText(category)).toBeTruthy()
  })

  test('must show images when useGifs is done', () => {
    useGifs.mockReturnValue({
      gifs: berserkGifs,
      isLoading: false
    })

    render(<GifGrid category={category} />)
    // screen.debug()
    expect(screen.getAllByRole('img')).toHaveLength(10)
  })
})
