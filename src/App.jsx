import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Footer from "./components/layout/Footer";
import Home from "./components/pages/Home";

function App() {
  return (
<Router>
<Routes>
<Route exact path="/" element={<Home />} />
</Routes>
<Footer/>
</Router>
  )
}

export default App
