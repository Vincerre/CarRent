import Hero from '../../layout/Hero/Hero';
import CarCatalogue from '../../layout/ProductList/CarCatalogue';
import { Container } from 'react-bootstrap';

const Home = () => (
  <>
    <Hero />
    <Container>
      <CarCatalogue />
    </Container>
  </>
);

export default Home;
