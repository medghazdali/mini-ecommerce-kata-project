import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AuthProvider } from '../context/AuthContext';
import { RequireAuth } from '../utils/RequireAuth';
import MainLayout from '../components/layout/MainLayout';
import ProductsPage from '../pages/ProductsPage';
import NotFoundPage from '../pages/NotFoundPage';
import ProductDetailPage from '../pages/ProductDetailPage';
import CheckoutPage from '../pages/CheckoutPage';
import LoginPage from '../pages/LoginPage';
import RedirectIfAuthenticated from '../utils/RedirectIfAuthenticated';

const AppRoutes: React.FC = () => {
  return (
    <AuthProvider>
      <BrowserRouter>
        <MainLayout>
          <Routes>
            {/* Public Routes */}
            <Route element={<RedirectIfAuthenticated />}>
              <Route path="/login" element={<LoginPage />} />
            </Route>
            <Route path="/" element={<ProductsPage />} />
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/products/:productId" element={<ProductDetailPage />} />
            {/* Protected Route */}
            <Route
              path="/checkout"
              element={
                <RequireAuth>
                  <CheckoutPage />
                </RequireAuth>
              }
            />

            {/* Fallback Route */}
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </MainLayout>
      </BrowserRouter>
    </AuthProvider>
  );
};

export default AppRoutes;
