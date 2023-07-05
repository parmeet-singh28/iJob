import MainLayout from '../src/components/layout/main-layout';
import ProtectedRoute from '../src/components/ProtectedRoute'
import '../styles/globals.css';
import '../styles/general.sass';
import { AuthContextProvider } from '../context/AuthContext';
const noAuthRequired = ['/', '/login', '/signup']
import { useRouter } from 'next/router'
// import ProtectedRoute from ''
function MyApp({ Component, pageProps }) {
  const router = useRouter()
  return (
    <>
    <AuthContextProvider>
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </AuthContextProvider>
    </>
  );
}

export default MyApp;
