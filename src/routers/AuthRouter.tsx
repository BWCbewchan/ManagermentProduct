import { Typography } from "antd";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Login, SignUp } from "../screens";

const { Title } = Typography;
const AuthRouter = () => {
  return (
    <div className="container-fluid">
      <div style={{marginTop: '10%'}} className="row">
        
        {/* <div className="col-2"></div> */}
        <div className="col d-none d-lg-block d-flex justify-content-center align-items-center m-auto">
          <div className="d-flex flex-column align-items-center ">
            <img style={{ width: 256, height: 256 , objectFit: "cover"}}
              src="https://firebasestorage.googleapis.com/v0/b/kanban-fa725.appspot.com/o/canbanlogo.png?alt=media&token=68732bc4-5cfe-4b80-b6ee-9c281ac255b5"
              alt=""
            />
            <br />
            <h1  className="text-center" >KANBAN</h1>
          </div>
          
        </div>
        <div className="col d-flex justify-content-center">
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/sign-up" element={<SignUp />} />
            </Routes>
          </BrowserRouter>
        </div>
        {/* <div className="col-2"></div> */}
      </div>
    </div>
  );
};

export default AuthRouter;
