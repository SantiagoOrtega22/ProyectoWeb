import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './Login/Login.jsx';
import Shopping from './Shopping-cart/shopping.jsx';
import  Panel from './PanelAdmin/Panel.jsx'

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Login/>}/>
                <Route path="/shopping" element={<Shopping/>} />
                <Route path="/panel-administracion" element={<Panel />} />
            </Routes>
        </BrowserRouter>
    );
}
