import {
  BrowserRouter,
  HashRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import { Header } from "./Header";
import { Home } from "./routes/Home";
import { Intro } from "./routes/Intro";
import { PageNotFound } from "./routes/PageNotFound";
import { Product } from "./routes/Product";

export const BaseRouter = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/intro" element={<Intro />} />
        <Route path="/product" element={<Product />} />
        <Route path="/*" element={<PageNotFound />} />
      </Routes>
    </Router>
  );
};

// *HashRouter=>해시태그가 붙어있는 라우터

// *Route=>컴포넌트의 속성에 설정된 URL과 현재 경로가 일치하면 해당하는 컴포넌트, 함수를 렌더링함

// <HashRouter>

//   <Routes>

//     <Route path="/" element={<Home />} />

//     <Route path="/detail/*" element={<Detail />} />

//     <Route path="/search/*" element={<Search />} />

//     <Route path="/*" element={<NotFound />} />

//   </Routes>

// </HashRouter>

// *Link

// =>라우터 내부에서 a태그 대신 사용할수 있으며, 반드시 Route안에 있어야됨

// =>to="" 는 경로를 지정할수 있음
