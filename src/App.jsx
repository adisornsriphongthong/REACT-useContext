import React from "react";

const AuthContext = React.createContext();
import A1 from "./sentData/A1";

let data = 0;

function App() {

  data = 50

  return (
    <div>
      <AuthContext.Provider value={data}>
        <A1></A1>
      </AuthContext.Provider>
    </div>
  )
}



export { AuthContext };
export default App;