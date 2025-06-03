import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ToolsPage from './pages/ToolsPage';
import ToolDetailPage from './pages/ToolDetailPage';
import AboutPage from './pages/AboutPage';
import AuthPage from './pages/AuthPage';
import SubmitToolPage from './pages/SubmitToolPage';
import { AdminToolsReviewPage } from './pages/AdminToolsReviewPage';
import ProfilePage from './pages/ProfilePage';
import FAQPage from './pages/FAQPage';
import ContactPage from './pages/ContactPage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import TermsPage from './pages/TermsPage';
import FinalToolsPage from './pages/FinalToolsPage';
import ProtectedRoute from './components/auth/ProtectedRoute';
import AdminRoute from './components/auth/AdminRoute';
import { ThemeProvider } from './context/ThemeContext';
import { AuthProvider } from './context/AuthContext';
import { ToolsProvider } from './context/ToolsContext';
import PendingToolsPage from './pages/PendingToolsPage';

function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <ToolsProvider>
          <Router future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/tools" element={<ToolsPage />} />
              <Route path="/tools/:id" element={<ToolDetailPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/auth" element={<AuthPage />} />
              <Route path="/faq" element={<FAQPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
              <Route path="/terms" element={<TermsPage />} />
              
              {/* Protected Routes */}
              <Route 
                path="/profile" 
                element={
                  <ProtectedRoute>
                    <ProfilePage />
                  </ProtectedRoute>
                } 
              />
              <Route 
                path="/submit-tool" 
                element={
                  <ProtectedRoute>
                    <SubmitToolPage />
                  </ProtectedRoute>
                }
              />

              {/* Admin Routes */}
              <Route
                path="/admin"
                element={
                  <AdminRoute>
                    <AdminToolsReviewPage />
                  </AdminRoute>
                }
              />
              <Route
                path="/admin/tools-review"
                element={
                  <AdminRoute>
                    <AdminToolsReviewPage />
                  </AdminRoute>
                }
              />
              <Route
                path="/admin/final-tools"
                element={
                  <AdminRoute>
                    <FinalToolsPage />
                  </AdminRoute>
                }
              />
              <Route
                path="/admin/pending"
                element={
                  <AdminRoute>
                    <PendingToolsPage />
                  </AdminRoute>
                }
              />
            </Routes>
          </Router>
        </ToolsProvider>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;