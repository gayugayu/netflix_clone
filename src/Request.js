

const API_KEY = '961ea38f149ef645172c006d0bd456ce'






const requests ={
    requestPopular:`/movie/popular?api_key=${ API_KEY}&language=en-US&page=1`,
    requestTopRated:`/movie/top_rated?api_key=${ API_KEY}&language=en-US&page=1`,
    requestActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
    requestHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
    requestUpcoming:`/movie/upcoming?api_key=${ API_KEY}&language=en-US&page=1`,
    requestMystery: `/discover/movie?api_key=${API_KEY}&with_genres=9648`,
    requestSciFi: `/discover/movie?api_key=${API_KEY}&with_genres=878`,
    requestWestern: `/discover/movie?api_key=${API_KEY}&with_genres=37`,
    requestAnimation: `/discover/movie?api_key=${API_KEY}&with_genres=16`,
    requestTV: `/discover/movie?api_key=${API_KEY}&with_genres=10770`,

}

export default requests

//https://api.themoviedb.org/3/movie/popular?api_key=961ea38f149ef645172c006d0bd456ce&language=en-US&page=1