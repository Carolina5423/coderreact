import Contacto from "./componentes/Contacto";
import ItemDetailContainer from "./componentes/ItemDetailContainer";
import ItemListContainer from "./componentes/ItemListContainer";
import Navbar from "./componentes/Navbar"
import Nosotros from "./componentes/Nosotros";
import "./main.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CartProvider } from "./context/CartContext";
import Carrito from "./componentes/Carrito";
import Checkout from "./componentes/Checkout";

function App() {
    return (
        <div>
            <CartProvider>
                <BrowserRouter>

                    <Navbar />

                    <Routes>
                        <Route path="/" element={<ItemListContainer />} />
                        <Route path="/item/:id" element={<ItemDetailContainer />} />
                        <Route path="/productos" element={<ItemListContainer />} />
                        <Route path="/productos/:categoria" element={<ItemListContainer />} />
                        <Route path="/nosotros" element={<Nosotros />} />
                        <Route path="/contacto" element={<Contacto />} />
                        <Route path="/carrito" element={<Carrito />} />
                        <Route path="/checkout" element={<Checkout />} />
                    </Routes>

                </BrowserRouter>
            </CartProvider>
        </div>
    );
}

export default App;