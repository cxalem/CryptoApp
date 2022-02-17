
import { AppUI } from "./AppUI";
import { CryptoProvider } from "./components/CryptoContext/CryptoContext";
import "./App.css";

function App() {

  return (
    <CryptoProvider>
      <AppUI />
    </CryptoProvider>
  );
}

export default App;
