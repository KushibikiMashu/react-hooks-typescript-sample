import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Counter from "./hooks/Counter";
import Todo from "./hooks/Todo";
import CounterWithContext from "./hooks/CounterWithContext";
import CounterWithReducer from "./hooks/CounterWithReducer";
import FibonacciCounter from "./hooks/FibonacciCounter";
import useRefSample from "./hooks/SampleOfUseRef";
import TodoA from "./hooks/TodoA";

const AppRouter: React.FC = () => {
  return (
    <Router basename="/react-hooks-typescript-sample/">
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

      <hr />

      <div>
        <Route exact path="/" component={Counter} />
        <Route path="/useeffect" component={Todo} />
        <Route path="/usecontext" component={CounterWithContext} />
        <Route path="/usereducer" component={CounterWithReducer} />
        <Route path="/usememo" component={() => <FibonacciCounter n={36} />} />
        <Route path="/useref" component={useRefSample} />
        <Route path="/customhook" component={TodoA} />
      </div>
    </Router>
  );
};

export default AppRouter;
