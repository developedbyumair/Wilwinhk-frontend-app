import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import GetLoader from "./common/GetLoader/Loader";
const User = React.lazy(() => import("./Modules/User"));

function App() {
  return (
    <div className="App">
      <React.Suspense fallback={<GetLoader />}>
        <Routes>
          <Route index path="/*" element={<User />} />
        </Routes>
      </React.Suspense>
    </div>
  );
}

export default App;
