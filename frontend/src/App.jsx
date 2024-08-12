import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import PostDetails from "./pages/PostDetails";
import CreatePost from "./pages/CreatePost";
import EditPost from "./pages/EditPost";
import Profile from "./pages/Profile";


function App() {
  return (
    <Router>
      <div>
        {/* <Navbar /> */}
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/login" exact element={<Login />} />
          <Route path="/register" exact element={<Register />} />
          <Route path="/create" exact element={<CreatePost />} />
          <Route path="/posts/post/:id" element={<PostDetails />} />
          <Route exact path="/edit/:id" element={<EditPost />} />
          <Route exact path="/profile/:id" element={<Profile />} />
        </Routes>
        {/* <Footer /> */}
      </div>
    </Router>
  );
}

export default App;

