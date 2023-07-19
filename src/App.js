import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { About, Contact, Footer, Header, Navbars, Product, Teams, Testimonials, Work } from './components';

function App() {
  return (
    <BrowserRouter>
      <div className='relative z-2'>
        <Navbars />
        <Header />
        <About />
        <Product />
        {/* <Work /> */}
        <Testimonials />
        <Teams />
        <Contact />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
