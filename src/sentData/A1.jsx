import React, { useContext } from "react";

import { AuthContext } from "../App";

const A1 = () => {
    const auth = useContext(AuthContext);

    return (
        <div>
          {auth}
        </div>
      )
}

export default A1
