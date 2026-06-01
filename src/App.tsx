import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import CatsPage from './pages/CatsPage';
import CatPage from './pages/CatPage';
import KittensPage from './pages/KittensPage';
import ContactsPage from './pages/ContactsPage';
import NotFoundPage from './pages/NotFoundPage';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<HomePage />} />
                    <Route path="about" element={<AboutPage />} />
                    <Route path="cats" element={<CatsPage />} />
                    <Route path="cats/:id" element={<CatPage />} />
                    <Route path="kittens" element={<KittensPage />} />
                    <Route path="contacts" element={<ContactsPage />} />
                    <Route path="*" element={<NotFoundPage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
