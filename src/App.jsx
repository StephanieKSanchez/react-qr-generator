import QRCode from "qrcode";
import { useState } from "react";

function App() {
  const [url, setUrl] = useState("");
  const [qrCode, setQrCode] = useState("");

  const GenerateQRCode = () => {
    QRCode.toDataURL(
      url,
      {
        width: 800,
        margin: 1,
        color: {
          dark: "#335383ff",
        },
      },
      (err, url) => {
        if (err) return console.error(err);
        setQrCode(url);
      }
    );
  };
  return (
    <div className="app">
      <h1>QR Code Generator</h1>
      <input
        type="text"
        placeholder="ex. https://google.com"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
      />
      <button onClick={GenerateQRCode}>Generate</button>
      {qrCode && (
        <>
          <img src={qrCode} />
          <a href={qrCode} download="qrcode.png">
            Download
          </a>
        </>
      )}
    </div>
  );
}

export default App;
