import { useCallback } from 'react';
import { Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import { Home, AboutModule, Contact, NotFound, Products, Product } from './pages';
import ScrollToTop from './ScrollToTop';

function App() {
  const navigate = useNavigate();

  const handleGoHome = useCallback(() => {
    navigate('/', { replace: true });
  }, [navigate]);

  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route index element={<Home />} />
        <Route path="services" element={<Navigate to="/over/services" replace />} />
        <Route path="over/*" element={<AboutModule />} />
        <Route path="products">
          <Route index element={<Products />} />
          <Route path=":id" element={<Product />} />
        </Route>
        <Route path="contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      <button onClick={handleGoHome}>Go home!</button>
    </>
  );
}

export default App;
