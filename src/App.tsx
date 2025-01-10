
import { Routes, Route } from 'react-router-dom';

import Projects from './pages/projects.tsx';
import Home from './pages/home.tsx';
import About from './pages/about.tsx';
import Layout from './pages/layout.tsx';

export default function App() {
    return (
        <Routes>
            {/*Anything nested in layout is given it's components (e.g. header) */}
            <Route path="/" element={<Layout/>}>
                <Route index element={<Home/>} />
                <Route path="projects" element={<Projects/>} />
                <Route path="about" element={<About/>} />
                {/*<Route path="*" element={<NoPage/>} /> - use as a catchall for 404 errors later*/}
            </Route>
        </Routes>
    )
}
