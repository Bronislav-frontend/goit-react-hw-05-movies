import { lazy, Suspense } from "react";
import { Switch, Route } from "react-router-dom/cjs/react-router-dom.min";

import Navigation from "../Navigation/Navigation";

const HomePage = lazy(() =>
    import('../../views/HomePage'),
);

const MoviesPage = lazy(() =>
    import('../../views/MoviesPage'),
);
const MovieDetailsPage = lazy(() =>
    import('../../views/MovieDetailsPage/MovieDetailsPage' ),
)


export default function App () {
    return (
        <>
        <Navigation/>
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
        </Switch>
        </Suspense>
        </>
    )
}