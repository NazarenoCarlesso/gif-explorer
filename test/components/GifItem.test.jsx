import { render, screen } from '@testing-library/react'
import GifItem from '../../src/components/GifItem'

describe('Test <GifItem />', () => {
  const title = 'Dragon Ball Ultra Instinct GIF'
  const url = 'https://media2.giphy.com/media/19JSJ5ucu91R5D7a3w/giphy.gif?cid=b112ed82qn0pe3ma98puryu7iwn63w4eogbyoxq81m77kktt&rid=giphy.gif&ct=g'

  test('should match with snapshot', () => {
    const { container } = render(<GifItem title={title} url={url} />)

    expect(container).toMatchSnapshot()
  })

  test('should have the url and alt', () => {
    render(<GifItem title={title} url={url} />)
    // screen.debug()
    // expect(screen.getByRole('img').src).toBe(url)
    // expect(screen.getByRole('img').alt).toBe(title)
    const { src, alt } = screen.getByRole('img')
    expect(src).toBe(url)
    expect(alt).toBe(title)
  })

  test('should have title as text', () => {
    render(<GifItem title={title} url={url} />)

    expect(screen.getByText(title)).toBeTruthy()
  })
})
