import { BrowserRouter, Routes, Route, Navigate } from 'react-router';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from '@/components/ui/toaster';

// Layouts
import AppLayout from './components/layout/AppLayout';

// Pages
import Login from './pages/auth/Login';
import Dashboard from './pages/dashboard/Dashboard';
import Directory from './pages/directory/Directory';
import Settings from './pages/settings/Settings';
import PlaceholderPage from './pages/placeholder/PlaceholderPage';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          {/* Public Routes */}
          <Route path="/login" element={<Login />} />

          {/* Protected Routes inside AppLayout */}
          <Route path="/" element={<AppLayout />}>
            <Route index element={<Navigate to="/dashboard" replace />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="employees" element={<Directory />} />
            <Route path="profile" element={<PlaceholderPage title="My Profile" />} />
            <Route path="attendance" element={<PlaceholderPage title="Attendance" />} />
            <Route path="leave" element={<PlaceholderPage title="Leave Management" />} />
            <Route path="payroll" element={<PlaceholderPage title="Payroll" />} />
            <Route path="payslips" element={<PlaceholderPage title="My Payslips" />} />
            <Route path="statutory" element={<PlaceholderPage title="Statutory Compliance" />} />
            <Route path="reports" element={<PlaceholderPage title="Reports" />} />
            <Route path="settings" element={<Settings />} />
          </Route>
        </Routes>
      </BrowserRouter>
      <Toaster />
    </QueryClientProvider>
  );
}

export default App;
