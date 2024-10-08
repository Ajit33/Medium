import { Link } from "react-router-dom";
import React from "react";
import { BsSearch } from "react-icons/bs";
const Navbar = () => {
  const user=true;
  return (
    <div className="flex items-center justify-between px-6 md:px-[200px] py-4">
      <h1 className="text-lg  md:text-xl font-extrabold">
        <Link to="/">Blogger</Link>
      </h1>
      <div className="flex justify-center items-center space-x-0">
        <input
          className="outline-none px-3 py-1"
          placeholder="Search Post"
          type="text"
        />
        <p>
          <BsSearch />
        </p>
      </div>
      <div className="flex items-center justify-center space-x-2 md:space-x-4 gap-4">
      { user? <h3><Link to="/createPost">Create Post</Link></h3>
        :<h3>
          <Link to="login">Login</Link>
        </h3>
}
       { user? <h3><Link to="/profile">Profile</Link></h3>
        :<h3>
          <Link to="register">Register</Link>
        </h3>
}
      </div>
    </div>
  );
};

export default Navbar;
