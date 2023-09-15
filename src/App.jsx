import { Route, Routes } from "react-router-dom";
import Movie from "./component/movie";
import { Details } from "./component/details";
import { NotFound } from "./component/NotFound";
import FullMovie from "./component/FullMovie";
import Footer from "./component/footer";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Movie />} />
        <Route path="details/:movieId" element={<Details />} />
        <Route path="see-more" element={<FullMovie />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
