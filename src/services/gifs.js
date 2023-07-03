const apiKey = import.meta.env.VITE_API_KEY

const limit = 10

export const searchGifs = async (category) => {
  const urlGiphy = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${category}&limit=${limit}`

  if (category === '') return null

  return await fetch(urlGiphy)
    .then(res => res.json())
    .then(res => res.data.map(g => ({
      id: g.id,
      title: g.title,
      url: g.images.downsized_medium.url
    })))
}
