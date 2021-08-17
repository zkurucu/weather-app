import "./App.css";
import "semantic-ui-css/semantic.min.css";
import Weather from "./components/Weather";
import { Container } from "semantic-ui-react";

function App() {
  return (
    <div>
      <Container>
        <Weather />
      </Container>
    </div>
  );
}

export default App;
