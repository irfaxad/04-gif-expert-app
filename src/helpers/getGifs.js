export const getGifs = async (category) => {
  const url = `https://api.giphy.com/v1/gifs/search?api_key=suCBRbpHMJ33gPtDgXGl2zFsAUPxeXbg&limit=10&lang=es&q=${category}`;
  const resp = await fetch(url);

  const { data = [] } = await resp.json();

  const gifs = data.map((img) => ({
    id: img.id,
    title: img.title,
    url: img.images.downsized_medium.url,
    height: img.images.downsized_medium.height,
    width: img.images.downsized_medium.width,
    type: img.type,
  }));
  console.log(gifs);
  return gifs;
};
