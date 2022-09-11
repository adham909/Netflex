const API_KEY = 'ecf28015395f141297c395db5376258b';

const userrequest ={
    featchTrending : `/trending/all/week?api_key=${API_KEY}&language=en-US`,
    feachNetflexOriginals : `/discover/tv?api_key=${API_KEY}&with_networks=213`,
    featchTopRated : `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    featchActionMovies : `/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=28`,
    featchComedyMovies : `/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=35`,
    featchHorrorMovies : `/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=27`,
    featchRomanceMovies : `/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=10749`,
    featchDocumentaries : `/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=99`,
}

export default userrequest;