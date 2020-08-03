import React, {
  useState,
  lazy /* eslint-disable-line */,
  Suspense /* eslint-disable-line */,
} from "react";
import { Router, Link } from "@reach/router";
import ThemeContext from "./ThemeContext";
import Details from "./Details";
import SearchParams from "./SearchParams";

/* const Details = lazy(() => import("./Details"));
const SearchParams = lazy(() => import("./SearchParams")); */

const App = () => {
  const theme = useState("darkblue");
  return (
    <ThemeContext.Provider value={theme}>
      <div>
        <header>
          <Link to="/">Adompt Me!</Link>
        </header>
        {/* <Suspense fallback={<h1>loadnig route ...</h1>}> */}
        <Router>
          <SearchParams path="/" />
          <Details path="/details/:id" />
        </Router>
        {/* </Suspense> */}
      </div>
    </ThemeContext.Provider>
  );
};

export default App;
