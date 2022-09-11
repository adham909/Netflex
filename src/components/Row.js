import React ,{useState , useEffect}from 'react'
import './Row.css'
import axios from '../axios';

function Row({title , isLargeRow , fetchurl}) {

    const [movies , setMovies] = useState([]);
    useEffect(() => {
        async function fetchData() {
            const req = await axios.get(fetchurl);
            setMovies(req.data.results);
            return req
        }
        fetchData();
    },[fetchurl]);

  return (
    <div className="row">
        <h1>{title}</h1>
            <div className="row__posters">
                {
                    movies.map(movie => {
                        return (
                            <img key={movie.id} src={`https://image.tmdb.org/t/p/original/${isLargeRow? movie.poster_path : movie.backdrop_path}`} alt={movie.name} className={`poster ${isLargeRow && "largeimage"}`}/>
                        )
                    })
                }
                
            </div>
        </div>
  )
}

export default Row