import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import ProductListPage from '../pages/ProductListPage';
import ProductEditPage from '../pages/ProductEditPage';


/**
 * This component is where we define all of our page routes
 * Using react-router-dom (or react-router), routes are declarative,
 * so they're just regular components like everything else
 */
const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Product List Page Route */}
        <Route
          exact
          path="/"
          element={<ProductListPage />}
        />

        {/* Product Detail/Edit Page Route */}
        <Route
          exact
          path="/products/:productId"
          element={<ProductEditPage />}
        />
       />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;