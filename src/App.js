import Header from "./components/Header";
import Prototypes from "./components/Prototypes";
import Order from "./components/Order";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <div className='container'>
        <Prototypes />
        <Order />
        <Footer />
      </div>
    </>
  );
}

export default App;
