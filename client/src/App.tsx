import { CLIENT_APPLICATION_ROUTE } from "data/routes/client/application";
import MasterLayout from "layouts/MasterLayout/MasterLayout";
import Main from "pages/application/Main";
import Login from "pages/Login";
import { Route, Routes } from "react-router";

const App = () => {
  return (
    <MasterLayout>
      <Routes>
        <Route path='/' element={<Login />} />

        <Route path={CLIENT_APPLICATION_ROUTE} element={<Main />} />
      </Routes>
    </MasterLayout>
  );
}

export default App;
