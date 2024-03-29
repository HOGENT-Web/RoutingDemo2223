import { Link, Switch, Route } from 'react-router-dom';
import { useRouteMatch, useLocation, useParams } from 'react-router';
import { LoremIpsum } from 'react-lorem-ipsum'

export const Home = () => (
    <div>
        <h1>Welkom!</h1>
        <p>Kies één van de volgende links:</p>
        <ul>
            <li>
                <Link to="/over">Over ons</Link>
            </li>
            <li>
                <Link to="/products">Producten</Link>
            </li>
            <li>
                <Link to="/contact">Contact</Link>
            </li>
        </ul>
    </div>
);

const About = () => (
    <div>
        <h1>Over ons</h1>
        <LoremIpsum p={2} />


        <ul>
            <li>
                <Link to="/over/services">Onze diensten</Link>
            </li>
            <li>
                <Link to="/over/history">Geschiedenis</Link>
            </li>
            <li>
                <Link to="/over/services">Locatie</Link>
            </li>
        </ul>
    </div>
);

const Services = () => (
    <div>
        <h1>Our services</h1>
        <LoremIpsum p={2} />
    </div>
);

const History = () => (
    <div>
        <h1>History</h1>
        <LoremIpsum p={2} />
    </div>
);

const Location = () => (
    <div>
        <h1>Location</h1>
        <LoremIpsum p={2} />
    </div>
);

export const AboutModule = () => {
    const { path } = useRouteMatch();

    return (
        <Switch>
            <Route exact path={path}>
                <About />
            </Route>
            <Route exact path={`${path}/services`}>
                <Services />
            </Route>
            <Route exact path={`${path}/history`}>
                <History />
            </Route>
            <Route exact path={`${path}/location`}>
                <Location />
            </Route>
        </Switch>
    );
};

export const Contact = () => (
    <div>
        <h1>Contact</h1>
        <LoremIpsum p={2} />
    </div>
);

export const NotFound = () => {
    const location = useLocation();

    return (
        <div>
            <h1>Pagina niet gevonden</h1>
            <p>Er is geen pagina met als url {location.pathname}, probeer iets anders.</p>
        </div>
    );
};

const products = [{
    id: 1,
    name: 'Confituur',
    price: 2.50
}, {
    id: 2,
    name: 'Choco',
    price: 3.50
}, {
    id: 3,
    name: 'Coco-cola',
    price: 3.20
}, {
    id: 4,
    name: 'Fanta',
    price: 3.00
}, {
    id: 5,
    name: 'Sprite',
    price: 2.90
}];

export const Products = () => (
    <div>
        <ul>
            {products.map(({ name }) => (
                <li>
                    {name}
                </li>
            ))}
        </ul>
    </div>
);

export const Product = () => {
    const { id } = useParams();
    const idAsNumber = Number(id);

    const [product] = products.filter((p)  => p.id === idAsNumber);
    if (!product) {
        return (
            <div>
                <h1>Product niet gevonden</h1>
                <p>
                    Er is geen product met id {id}.
                </p>
            </div>
        )
    }

    return (
        <div>
            <h1>{product.name}</h1>
            <p><b>Price:</b> &euro; {product.price}</p>
        </div>
    )
};
