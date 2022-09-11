import React , {useState , useEffect} from 'react'
import logo from '../../constans/Images'
import './Home.css'
import userrequest from '../../Request'
import axios from '../../axios'
import Row from '../Row'



function Home() {
  const [movie, setMovie] = useState([]);
  const [Loading , setLoading] = useState(true);


  useEffect(() => {
    async function fetchData() {
      const req = await axios.get(userrequest.featchTrending);
      setMovie(req.data.results[Math.floor(Math.random() * req.data.results.length)]);
      setLoading(false);
    }
    fetchData();
  },[]);

  return (


    
    <section className='home'>

      {Loading ? <div className='preloader'><div className="loader"></div></div> : (
        <>
        <section className='interface' style={{backgroundImage: `url('https://image.tmdb.org/t/p/original/${movie.backdrop_path}')`}}>
      <div className='header'>
      <img src={logo.logo} alt="logo" className='z-index-1 gg' width='150px'/>
      </div>

      <div className='content'>
        <div className='d-flex d-column align-items-start p-sm'>
          <h1 className='z-index-1'>{movie.title || movie.original_name || movie.name}</h1>
          <div className='d-flex'>
            <a className='btn btn-primary z-index-1'>Play</a>
            <a className='btn btn-primary z-index-1'>My List</a>
          </div>
          <p className='z-index-1'>{movie.overview}</p>
        </div>
        </div>
    </section>

    <Row title="Netflex Originals" isLargeRow fetchurl={userrequest.feachNetflexOriginals}/>
    <Row title="Trending Now" fetchurl={userrequest.featchTrending}/>
    <Row title="Top Rated" fetchurl={userrequest.featchTopRated}/>
    <Row title="Action Movies" fetchurl={userrequest.featchActionMovies}/>
    <Row title="Comedy Movies" fetchurl={userrequest.featchComedyMovies}/>
    <Row title="Horror Movies" fetchurl={userrequest.featchHorrorMovies}/>
    <Row title="Romance Movies" fetchurl={userrequest.featchRomanceMovies}/>
    <Row title="Documentaries" fetchurl={userrequest.featchDocumentaries}/>
   

        </>
      )}
     </section>

  )
}

export default Home