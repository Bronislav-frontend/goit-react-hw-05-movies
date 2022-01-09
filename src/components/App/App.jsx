import { lazy, Suspense } from "react";
import { Switch, Route, Redirect } from "react-router-dom/cjs/react-router-dom.min";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Navigation from "../Navigation/Navigation";

const HomePage = lazy(() =>
    import('../../views/HomePage/HomePage'),
);

const MoviesPage = lazy(() =>
    import('../../views/MoviesPage/MoviesPage'),
);
const MovieDetailsPage = lazy(() =>
    import('../../views/MovieDetailsPage/MovieDetailsPage' ),
)


export default function App () {
    return (
        <>
        <Navigation/>
        <ToastContainer />
        <Suspense fallback={<h2>Loading</h2>}>
        <Switch>
            <Route exact path="/">
                <HomePage />
            </Route>
            <Route exact path="/movies">
                <MoviesPage />
            </Route>
            <Route path="/movies/:slug">
                <MovieDetailsPage />
            </Route>
            <Redirect to="/" />
        </Switch>
        </Suspense>
        </>
    )
}