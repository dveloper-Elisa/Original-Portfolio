import "./App.css";
import Card from "./componets/cardDevision";
import Batton from "./componets/button";
import ContactForm from "./pages/contact";

let color = "bg-red-500";
let name = "Kamana";
function App() {
  return (
    <>
      <Card name={name} />
      <Batton color={color} />
      <ContactForm />
    </>
  );
}

export default App;
