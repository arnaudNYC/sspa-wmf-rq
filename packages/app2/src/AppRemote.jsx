import React from "react";
import App from "./App";

import queryClient from "host/queryClient";

function AppRemote(props) {
  return <App {...props} queryClient={queryClient} />;
}

export default AppRemote;
