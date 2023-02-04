import {HashRouter, Route,Routes} from "react-router-dom"
import Movies from "../component/Movies";

function Router() {
  return (
    <HashRouter>
        <Routes>
            <Route path="/" element={<Movies />}></Route>
        </Routes>
    </HashRouter>
  );
}

export default Router;
