import { useCallback } from 'react';
import { Switch, Route, Redirect, useHistory } from 'react-router-dom';
import { Home, AboutModule, Contact, NotFound, Products, Product } from './pages';
import ScrollToTop from './ScrollToTop';

function App() {
    const history = useHistory();

    const handleGoHome = useCallback(() => {
        history.replace('/');
    }, [history]);

    return (
        <>
            <ScrollToTop />
            <Switch>
                <Route exact path="/" component={Home} />
                <Redirect from="/services" to="/over/services" />
                <Route path="/over">
                    <AboutModule />
                </Route>
                <Route exact path="/products">
                    <Products />
                </Route>
                <Route exact path="/products/:id">
                    <Product />
                </Route>
                <Route exact path="/contact">
                    <Contact />
                </Route>
                <Route path="*">
                    <NotFound />
                </Route>
            </Switch>

            <button onClick={handleGoHome}>Go home!</button>
        </>
    );
}

export default App;
