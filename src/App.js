import logo from "./logo.svg";
import "./App.css";

function App() {
  const handleExportPDF = async () => {
    const res = await fetch(`http://localhost:8000/api/export/pdf`, {
      method: "GET",
    }).then((response) => response.blob());
    const url = window.URL.createObjectURL(res);
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", "file.pdf");
    document.body.appendChild(link);
    link.click();
    link.remove();
  };
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <button
          class="btn btn-primary"
          style={{ cursor: "pointer" }}
          onClick={handleExportPDF}
        >
          Download PDF
        </button>
      </header>
    </div>
  );
}

export default App;
