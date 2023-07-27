import { BrowserRouter as Router ,Routes,Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import contact from "./components/contact";
import NotFound from "./components/NotFound";
import Navbar from "./components/Navbar";
// import courses from "./components/courses";
import Courses from "./components/courses";


function App() {
  console.log("app component");
  return (
    <div>
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" Component={Home}/>
          <Route path="/about" Component={About}/>
          <Route path="/courses" Component={Courses}></Route>
          <Route path="/contact" Component={contact}/>
          <Route path="*" Component={NotFound}/>
        </Routes>
        
      </Router>
    </div>
  );
}

export default App;

