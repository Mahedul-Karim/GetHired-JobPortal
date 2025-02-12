import React from "react";
import Header from "./Header";
import Content from "./Content";
import Comments from "./comments/Comments";

const Main = () => {
  return (
    <main className="overflow-auto w-full">
      <Header />
      <div>
        <img src="https://rekroot.themes.zone/classic/wp-content/uploads/sites/14/2021/07/copernico-p_kICQCOM4s-unsplash-scaled-1-878x410.jpg" alt="" className="max-h-[350px] rounded-lg object-cover"/>
      </div>
      <Content />
      <hr className="my-12"/>
      <Comments />
    </main>
  );
};

export default Main;
