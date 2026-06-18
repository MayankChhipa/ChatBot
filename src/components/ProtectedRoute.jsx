import { Navigate } from 'react-router-dom';

export function ProtectedRoute({ children }) {
  const user = localStorage.getItem('chatbotUser');
  return user ? children : <Navigate to="/" replace />;
}

export function PublicRoute({ children }) {
  const user = localStorage.getItem('chatbotUser');
  return user ? <Navigate to="/HomePage" replace /> : children;
}
