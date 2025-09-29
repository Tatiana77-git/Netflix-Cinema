import Router from "./Router";
import Header from "../ui/Header";
import { BrowserRouter } from "react-router-dom";

export default function App() {
  return (
     <BrowserRouter>
      <Header />
      <Router />
    </BrowserRouter>
  );
}

