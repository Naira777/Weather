import DisplayWeather from "./components/DisplayWeather/DisplayWeather";
import Form from "./components/Form/Form";
import * as Styled from "./styled"

function App() {
  return (
  <Styled.AppContent>
    
      <Form  />
      <DisplayWeather />  
    
   
    </Styled.AppContent>
    
  );
}

export default App;
