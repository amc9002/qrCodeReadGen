import { QRCodeGenerator } from "./components/Generate/QRCodeGenerator";
import { QRCodeScanner } from "./components/Scan/QRCodeScanner";
import { GenerateHistory } from "./components/History/GenerateHistory/GenerateHistory";
import { ScanHistory } from "./components/History/ScanHistory/ScanHistory";
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
                <Route path="/g_history" element={<GenerateHistory />} />
                <Route path="/s_history" element={<ScanHistory />} />
            </Routes>
            
        </div>
        
    );
}