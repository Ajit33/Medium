import React from "react";
import { useNavigate, useParams } from "react-router-dom";
// import Comment from "../components/Comment"
import Footer from "../componets/Footer";
import Navbar from "../componets/Navbar";
import { BiEdit } from "react-icons/bi";
import { MdDelete } from "react-icons/md";

const PostDetails = () => {
  return (
    <div>
      <Navbar />
      <div className="px-8 md:px-[200px] mt-8">
        <div className=" flex justify-between items-center">
          <h1 className="text-2xl font-bold text-black md:text-3xl">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga qui,
            adipisci inventore vero quaerat labore quos sed numquam cupiditate
            dolorum. Consequuntur temporibus repellat excepturi esse nemo
            nesciunt tempore numquam voluptatibus.
          </h1>
          <div className="flex items-center justify-center space-x-2">
            <p>
              <BiEdit />
            </p>
            <p>
              <MdDelete />
            </p>
          </div>
        </div>
        <div className="flex items-center justify-between mt-2 md:mt-4 ">
          <p>JustAjit33</p>
          <div className="flex space-x-2 text-sm">
            <p>13/08/2024</p>
            <p>14:41</p>
          </div>
        </div>
        <img
          src="https://sbr-technologies.com/wp-content/uploads/2021/07/Mern-Stack-Developer.png"
          alt=""
          className="w-full mx-auto mt-8"
        />
        <p className="mx-auto mt-8">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus dolore
          culpa doloribus excepturi ut nostrum dolorum quia soluta, rem
          voluptatum fugit ex iste vel itaque? Quis et voluptatibus quibusdam
          deserunt! Ratione numquam dolores minus explicabo veniam totam culpa
          nam dignissimos, eligendi quia neque, deleniti atque nobis sequi sint
          similique consequatur amet impedit error doloremque provident nemo
          quae? Placeat, officiis quaerat?
        </p>
        <div className="flex items-center mt-8 space-x-4 font-semibold">
          <p>Categories</p>
          <div className="flex justify-center items-center space-x-2">
            <div className=" bg-gray-300 rounded-lg px-3 py-1">Tech </div>
            <div className=" bg-gray-300 rounded-lg px-3 py-1">Marketing </div>
            <div className=" bg-gray-300 rounded-lg px-3 py-1">
              Arificial Inteligent
            </div>
          </div>
        </div>
        {/* Comments section */}
        <div className=" flex flex-col mt-4">
          <h3 className="mt-6 mb-4 font-semibold">Comments:</h3>
          <div className="px-2 py-2 bg-gray-200 rounded-lg my-2">
            <div className="flex items-center justify-between">
              <h3 className=" font-bold text-gray-600">Ajit@33</h3>
              <div className=" flex justify-center items-center space-x-4">
                <p className="text-gray-500 text-sm">13/08/2024</p>
                <p className="text-gray-500 text-sm">14:41</p>
                <div className="flex items-center justify-center space-x-2">
                  <p>
                    <BiEdit />
                  </p>
                  <p>
                    <MdDelete />
                  </p>
                </div>
              </div>
            </div>
            <p className="px-4 mt-2"> Great post</p>
          </div>
        </div>
        {/* write commnet */}
        <div className="flex flex-col mt-4 md:flex-row">
            <input  className="md:w-[90%] outline-none px-4 py-2 mt-4 md:mt-0"  type="text" placeholder=" write a commnet"/>
            <button className="bg-black  text-white px-4 py-2 md:w-[10%] mt-4 md:mt-0">Post</button>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default PostDetails;
