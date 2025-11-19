import { BrowserRouter as Router, Routes, Route, Link} from "react-router-dom"
import Home from "./components/pages/Home"
import Company from "./components/pages/Company.jsx"
import Contact from "./components/pages/Contact.jsx"
import NewProject from "./components/pages/NewProject.jsx"
import Container from "./components/layout/Container.jsx"
function App() {

  return (
    <Router>
      <ul>
        <Link to="/">Início</Link> |{" "}
        <Link to="/company">Empresa</Link> |{" "}
        <Link to="/contact">Contacto</Link> |{" "}
        <Link to="/newproject">Novo Projecto</Link>
      </ul>
      <Container customClass="min-height">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/company" element={<Company />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/newproject" element={<NewProject />} />
        </Routes>
      </Container>
      
      <p>Footer</p>
    </Router>
  )
}

export default App
