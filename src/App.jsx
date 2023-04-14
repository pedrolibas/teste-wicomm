import { Home } from "./pages/Home";
import { GlobalStyle } from "./styles/global";
import { GlobalTypography } from "./styles/typography";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <GlobalTypography />
      <Home />
    </div>
  );
}

export default App;
