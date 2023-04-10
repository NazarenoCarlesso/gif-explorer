import { renderHook, waitFor } from '@testing-library/react'
import useGifs from '../../src/hooks/useGifs'

describe('Test useGifs custom hook', () => {
  test('must return the initial state', () => {
    const { result } = renderHook(() => useGifs('Berserk'))
    // console.log(result)
    const { gifs, isLoading } = result.current

    expect(gifs).toHaveLength(0)
    expect(isLoading).toBeTruthy()
  })

  test('must return an array of gifs', async () => {
    const { result } = renderHook(() => useGifs('Berserk'))
    // console.log(result)
    await waitFor(
      () => expect(result.current.gifs.length).toBeGreaterThan(0)
    )
    const { gifs, isLoading } = result.current

    expect(gifs).toHaveLength(10)
    expect(isLoading).toBeFalsy()
  })
})
