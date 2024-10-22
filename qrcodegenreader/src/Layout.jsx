import { QRCodeGenerator } from "./components/QRCodeGenerator/QRCodeGenerator";
import { QRCodeScanner } from "./components/QRCodeScanner/QRCodeScanner";
import { Routes, Route } from "react-router-dom";
import { Navigation } from "./components/Navigation/Navigation";

export const Layout = () => {
    return (
        <div>
            <Navigation />
            <Routes>
                <Route path="/" element={<QRCodeGenerator />} />
                <Route path="/generate" element={<QRCodeGenerator />} />
                <Route path="/scan" element={<QRCodeScanner />} />
                {/* <Route path="/" element={<QRCodeGenerator />} />
                <Route path="/" element={<QRCodeGenerator />} /> */}
            </Routes>
            
        </div>
        
    );
}