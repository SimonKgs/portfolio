import { Footer } from './components/Footer/Footer';
import { Header } from './components/Header';
import { AppRouter } from './router/AppRouter';

function App() {
  return (
    <>
      <Header />
      <AppRouter />
      <Footer />
    </>
  );
}

export default App;
