import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <>
      <Header />
      {/* <main className="mx-3"> */}
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default App;
