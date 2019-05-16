import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import CounterWithUseState from "./hooks/CounterWithUseState";
import CounterWithUseContext from "./hooks/CounterWithUseContext";
import CounterWithUseReducer from "./hooks/CounterWithUseReducer";
import FibonacciCounterWithUseMemo from "./hooks/FibonacciCounterWithUseMemo";
import useRefSample from "./hooks/SampleOfUseRef";
import SampleOfUseEffect from "./hooks/SampleOfUseEffect";
import SampleOfCustomHooks from "./hooks/SampleOfCustomHooks";

const Header: React.FC = () => {
  return (
    <nav>
      <ul>
        <li>
          useState: <Link to="/">counter</Link>
        </li>
        <li>
          useEffect: <Link to="/useeffect">data fetch</Link>
        </li>
        <li>
          useContext: <Link to="/usecontext">counter</Link>
        </li>
        <li>
          useReducer: <Link to="/usereducer">counter</Link>
        </li>
        <li>
          useMemo: <Link to="/usememo">Fibonacci Counter</Link>
        </li>
        <li>
          useRef, useCallback: <Link to="/useref">text input</Link>
        </li>
        <li>
          Custom Hook: <Link to="/customhook">data fetch</Link>
        </li>
      </ul>
      <p>
        Code is on{" "}
        <a href="https://github.com/KushibikiMashu/react-hooks-typescript-sample">
          my GitHub repo
        </a>
      </p>
    </nav>
  );
};

const AppRouter: React.FC = () => {
  return (
    <Router basename="/react-hooks-typescript-sample/">
      <Header />
      <hr />
      <div>
        <Route exact path="/" component={CounterWithUseState} />
        <Route path="/useeffect" component={SampleOfUseEffect} />
        <Route path="/usecontext" component={CounterWithUseContext} />
        <Route path="/usereducer" component={CounterWithUseReducer} />
        <Route
          path="/usememo"
          component={() => <FibonacciCounterWithUseMemo n={36} />}
        />
        <Route path="/useref" component={useRefSample} />
        <Route path="/customhook" component={SampleOfCustomHooks} />
      </div>
    </Router>
  );
};

export default AppRouter;
