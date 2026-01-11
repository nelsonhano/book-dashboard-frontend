import { BrowserRouter, Route, Routes } from "react-router-dom";

import { ApolloWrapper } from "./components/ApolloProvider";
import UpdateBookModal from "./components/UpdateBookModal";
import Dashboard from "./components/Dashboard";

import "./App.css";

function App() {
  return (
    <>
      <ApolloWrapper>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/books/:id/edit" element={<UpdateBookModal />} />
          </Routes>
        </BrowserRouter>
      </ApolloWrapper>
    </>
  );
}

export default App;
