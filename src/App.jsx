
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import HeadlineCards from './components/HeadlineCards';
import Category from './components/Category';
import Food from './components/Food';
import Footer from './components/Footer';
const App = () => {
  return (
    <div >
      <Navbar />
      <Hero />
      <HeadlineCards />
      <Food />
      <Category />
      <Footer/>
    </div>
  );
}

export default App