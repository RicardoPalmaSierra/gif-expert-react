export const getGifs = async (category) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=dtxDTLj3YSSY1Qfx231M9ZClTJmi4vJ4&q=${category}&limit=10`;

    const resp = await fetch(url);
    const { data = [] } = await resp.json();

    const gifs = data.map(image => ({
        id: image.id,
        url: image.images.downsized_medium.url,
        username: image.username,
        title: image.title
    }));
    console.log(gifs);
    

    return gifs;

}
