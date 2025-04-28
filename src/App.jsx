//page routing
import { useRoutes } from "react-router-dom";
//header
import Header from "./features/header/Header";
//main
import routes from "./routes"; 
//footer
import Footer from "./features/footer/Footer";


import "./styles/App.css";
export default function App() {
  let router = useRoutes(routes)
  return (
    <div>
      <Header />
      <main>
        {router}
      </main>
      <Footer />
    </div>
  );
}


