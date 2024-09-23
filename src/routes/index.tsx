import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AuthProvider } from '../context/AuthContext';
import { RequireAuth } from '../utils/RequireAuth';
import MainLayout from '../components/layout/MainLayout';
import DashboardPage from '../pages/DashboardPage';
import ProductPage from '../pages/ProductPage';
import NotFoundPage from '../pages/NotFoundPage';

const AppRoutes: React.FC = () => {
  return (
    <AuthProvider>
      <BrowserRouter>
        <MainLayout>
          <Routes>
            {/* Public Routes */}
            <Route path="/" element={<DashboardPage />} />
            <Route path="/products" element={<ProductPage />} />
            <Route path="/second" element={<div>Second Route</div>} />

            {/* Protected Route */}
            <Route
              path="/checkout"
              element={
                <RequireAuth>
                  {/* @TODO :: <CheckoutPage /> */}
                  <>CheckoutPage</>
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
