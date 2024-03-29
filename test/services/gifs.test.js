import { searchGifs } from '../../src/services/gifs'

describe('Test searchGifs', () => {
  test('must return an array of gifs', async () => {
    const gifs = await searchGifs('One Punch')

    expect(gifs.length).toBeGreaterThan(0)
    expect(gifs[0]).toEqual({
      id: expect.any(String),
      title: expect.any(String),
      url: expect.any(String)
    })
  })
})
