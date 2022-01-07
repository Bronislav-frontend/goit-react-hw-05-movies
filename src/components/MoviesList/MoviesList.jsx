import { Link } from "react-router-dom";

export default function MoviesList ({movies, url}) {
    return (
        <ul>
            {movies.map(({id, poster_path, title}) => (
                <li key={id}>
                    <Link to = {{pathname: `${url}/${id}`}}>
                    <img src={`https://image.tmdb.org/t/p/w500/${poster_path}`} alt={{title}} />
                    </Link>
                <p>{title}</p>
                </li>
            ))}
        </ul>
    )
}