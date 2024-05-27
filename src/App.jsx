
import Header from "./Components/Header/Header";
import Logged from "./Pages/Logged/Logged"
import Footer from "./Components/Footer/Footer"
import Sing from "./Pages/Sing-up/Sing";

export default function App() {
  return (
    <div  >
      <Header/>
      
      <Logged />
      <Sing/>
      <Footer/>
      
    </div>
  )
}