const apiConfig = {
    baseUrl: 'https://api.themoviedb.org/3/',
    apiKey: '426c4ee9c1c43f7b4343c8b5617f358f',
    originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
    w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`
}

export default apiConfig;