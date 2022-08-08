import MasterLayout from "layouts/MasterLayout/MasterLayout";
import Login from "pages/Login";
import { Route, Routes } from "react-router";

const App = () => {
  return (
    <MasterLayout>
      <Routes>
        <Route path='/' element={<Login />} />
      </Routes>
    </MasterLayout>
  );
}

export default App;
