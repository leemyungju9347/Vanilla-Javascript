const colors = ["#1abc9c", "#3498db", "#9b59b6", "#f39c12", "#e74c3c"];
const title = document.querySelector("h2");

/* 
    조건
    
    ✅ The text of the title should change when the mouse is on top of it.
    ✅ The text of the title should change when the mouse is leaves it.
    ✅ When the window is resized the title should change.
    ✅ On right click the title should also change.
    ✅ The colors of the title should come from a color from the colors array.
    ✅ DO NOT CHANGE .css, or .html files.
    ✅ ALL function handlers should be INSIDE of "superEventHandler"
*/
const superEventHandler = {
  clickHandler: function (event) {
    title.style.color = colors[0];
  },
  resizeHandler: function () {
    title.style.color = colors[1];
  },
  overHandler: function () {
    title.style.color = colors[2];
  },
  leaveHandler: function () {
    title.style.color = colors[3];
  }
};

window.addEventListener("contextmenu", superEventHandler.clickHandler);
title.addEventListener("mouseover", superEventHandler.overHandler);
title.addEventListener("mouseout", superEventHandler.leaveHandler);
window.addEventListener("resize", superEventHandler.resizeHandler);
