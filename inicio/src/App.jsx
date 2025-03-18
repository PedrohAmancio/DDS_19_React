import "./App.css";
import FirstComponent from "./Components/FirstComponent";
import { MotivacaoComponent } from "./Components/MotivacaoComponent";
import { TemplateExpressions } from "./Components/TemplateExpressions";

function App() {
  return (
    <>
      <TemplateExpressions />
      <hr />
      <FirstComponent />
    </>
  );
}

export default App;
