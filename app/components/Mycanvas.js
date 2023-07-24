"use client";

import { useEffect } from "react";
import Imagebar from "./Imagebar";

const Mycanvas = () => {
  const changeCanvasSize = () => {
    let dim1 = prompt("Enter the canvas width");
    let dim2 = prompt("Enter the canvas height");
    sessionStorage.setItem("width", dim1);
    sessionStorage.setItem("height", dim2);
    window.location.reload();
  };
  useEffect(() => {
    // Load fabric.js dynamically on the client-side
    const loadFabric = () => {
      const script = document.createElement("script");
      script.src =
        "https://cdnjs.cloudflare.com/ajax/libs/fabric.js/4.5.0/fabric.min.js";
      script.async = true;
      script.onload = initializeCanvas;
      document.body.appendChild(script);
    };

    const size1 = sessionStorage.getItem("width");
    const size2 = sessionStorage.getItem("height");

    const initializeCanvas = () => {
      const canvas = new fabric.Canvas("canvas", {
        width: size1 ? size1 : 500,
        height: size2 ? size2 : 500,
      });

      function copyImageToCanvas1() {
        const imgElement1 = document.getElementById("my-image1");

        const imgInstance1 = new fabric.Image(imgElement1, {
          opacity: 2,
        });

        const imageX = 100;
        const imageY = 100;

        imgInstance1.set({
          left: imageX,
          top: imageY,
        });

        canvas.add(imgInstance1);

        canvas.renderAll();
      }

      function copyImageToCanvas2() {
        const imgElement2 = document.getElementById("my-image2");

        const imgInstance2 = new fabric.Image(imgElement2, {
          opacity: 2,
        });

        const imageX = 100;
        const imageY = 100;

        imgInstance2.set({
          left: imageX,
          top: imageY,
        });

        canvas.add(imgInstance2);

        canvas.renderAll();
      }

      function copyImageToCanvas3() {
        const imgElement3 = document.getElementById("my-image3");

        const imgInstance3 = new fabric.Image(imgElement3, {
          opacity: 2,
        });

        const imageX = 100;
        const imageY = 100;

        imgInstance3.set({
          left: imageX,
          top: imageY,
        });

        canvas.add(imgInstance3);

        canvas.renderAll();
      }

      function copyImageToCanvas4() {
        const imgElement4 = document.getElementById("my-image4");

        const imgInstance4 = new fabric.Image(imgElement4, {
          opacity: 2,
        });

        const imageX = 100;
        const imageY = 100;

        imgInstance4.set({
          left: imageX,
          top: imageY,
        });

        canvas.add(imgInstance4);

        canvas.renderAll();
      }

      document
        .getElementById("my-image1")
        .addEventListener("click", copyImageToCanvas1);

      document
        .getElementById("my-image2")
        .addEventListener("click", copyImageToCanvas2);

      document
        .getElementById("my-image3")
        .addEventListener("click", copyImageToCanvas3);

      document
        .getElementById("my-image4")
        .addEventListener("click", copyImageToCanvas4);
    };

    loadFabric();
  }, []);

  function func1() {
    const boxElement = document.getElementById("canvas");

    const imagePath = "images/bg_1.jpg";

    boxElement.style.backgroundImage = `url(${imagePath})`;

    boxElement.style.backgroundSize = "cover";
    boxElement.style.backgroundPosition = "center";
    boxElement.style.backgroundRepeat = "no-repeat";
  }

  function func2() {
    const boxElement = document.getElementById("canvas");

    const imagePath = "images/bg_2.jpg";

    boxElement.style.backgroundImage = `url(${imagePath})`;

    boxElement.style.backgroundSize = "cover";
    boxElement.style.backgroundPosition = "center";
    boxElement.style.backgroundRepeat = "no-repeat";
  }

  function func3() {
    const boxElement = document.getElementById("canvas");

    const imagePath = "images/bg_3.jpg";

    boxElement.style.backgroundImage = `url(${imagePath})`;

    boxElement.style.backgroundSize = "cover";
    boxElement.style.backgroundPosition = "center";
    boxElement.style.backgroundRepeat = "no-repeat";
  }

  function func4() {
    const boxElement = document.getElementById("canvas");

    const imagePath = "images/bg_4.jpg";

    boxElement.style.backgroundImage = `url(${imagePath})`;

    boxElement.style.backgroundSize = "cover";
    boxElement.style.backgroundPosition = "center";
    boxElement.style.backgroundRepeat = "no-repeat";
  }

  return (
    <>
      <Imagebar />
      <div className="my_canvas">
        <button id="changeD" onClick={changeCanvasSize}>
          Change Dimensions
        </button>
        <h3>click on the image to get it in the canvas</h3>
        <canvas id="canvas"></canvas>
      </div>
      <div className="all_background">
        <h1>Background</h1>
        <img src="images/bg_1.jpg" alt="" id="bg_1" onClick={func1} />
        <img src="images/bg_2.jpg" alt="" id="bg_2" onClick={func2} />
        <img src="images/bg_3.jpg" alt="" id="bg_3" onClick={func3} />
        <img src="images/bg_4.jpg" alt="" id="bg_4" onClick={func4} />
      </div>
    </>
  );
};

export default Mycanvas;
