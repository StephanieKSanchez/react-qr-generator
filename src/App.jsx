import QRCode from "qrcode";
import { useState } from "react";

function App() {
  const [url, setUrl] = useState("");
  const [qrCode, setQrCode] = useState("");

  const GenerateQRCode = () => {
    QRCode.toDataURL(url, (err, url) => {
      if (err) return console.error(err);

      console.log(url);
      setQrCode(url);
    });
  };
  return (
    <div className="app">
      <h1>QR Code Generator</h1>
      <input
        type="text"
        placeholder="ex. https;//google.com"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
      />
      <button onClick={GenerateQRCode}>Generate</button>
      <img src={qrCode} />
    </div>
  );
}

export default App;
