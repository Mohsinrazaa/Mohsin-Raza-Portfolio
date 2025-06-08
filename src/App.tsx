import { Route, Routes } from "react-router";

import Home from "./pages/home";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  )
}

export default App;