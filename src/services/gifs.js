export const searchGifs = async (category) => {
  const urlGiphy = `https://api.giphy.com/v1/gifs/search?api_key=SpG4R1GZJiqZHLp73PnAINQGFhVBYG93&q=${category}&limit=10`

  if (category === '') return null

  return await fetch(urlGiphy)
    .then(res => res.json())
    .then(res => res.data.map(g => ({
      id: g.id,
      title: g.title,
      url: g.images.downsized_medium.url
    })))
}
