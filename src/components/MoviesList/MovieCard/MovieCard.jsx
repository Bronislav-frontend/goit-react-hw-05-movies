import noPoster from '../../../images/noPoster.jpg'

export default function MovieCard ({movie}){
    return (
        <div>
            <img src={movie.backdrop_path
             ? `https://image.tmdb.org/t/p/w500${movie.backdrop_path}` : noPoster}
            alt={movie.title} />
            <h2>{movie.title}</h2>
            <p>{movie.release_date}</p>
            <p> User Score: {(movie.vote_average * 100) / 10}%</p>
            <h2>Overview</h2>
            <p>{movie.overview}</p>
            <h2>Genres</h2>
            <ul>{movie.genres.map(({id, name}) => (
            <li key={id}> {name} </li>
            ))}   
            </ul>
        </div>
    )    
}

