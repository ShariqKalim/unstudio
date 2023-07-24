"use client";

const Background = () => {
  return (
    <>
      <div className="all_background">
        <h1>Background</h1>
        <img src="images/bg_1.jpg" alt="" id="bg_1" onClick={func1} />
        <img src="images/bg_2.jpg" alt="" id="bg_2" />
        <img src="images/bg_3.jpg" alt="" id="bg_3" />
        <img src="images/bg_4.jpg" alt="" id="bg_4" />
      </div>
    </>
  );
};

export default Background;
