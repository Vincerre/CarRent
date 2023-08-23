import Hero from '../../layout/Hero/Hero';
import CarCatalogue from '../../layout/CarCatalogue/CarCatalogue';

const Home = () => {
  return (
    <>
      <Hero />
      <div className="container-fluid">
        <CarCatalogue />
      </div>
    </>
  );
};

export default Home;
