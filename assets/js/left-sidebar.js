var wrapper = document.getElementById("main-posts");
var post_full = document.getElementById("post-full");
var right_side_bar = document.getElementById("right-side-bar");
var sidebar = document.getElementById("left-side-bar");
var toggle = document.getElementById("burgertoggle");
var dropNav = document.getElementById("dropdown-navbar");

window.onscroll = function () {
  document
    .getElementById("left-side-bar")
    .setAttribute(
      "style",
      "display:block;width:" +
        document.getElementById("left-side-bar-wrapper").offsetWidth +
        "px"
    );
  document.getElementById("left-side-bar").style.width =
    document.getElementById("left-side-bar-wrapper").offsetWidth;
  //sidebar < main
  if (sidebar.offsetHeight < post_full.offsetHeight) {
    //sidebar < screen - stick to top
    if (sidebar.offsetHeight < window.innerHeight) {
      if (
        wrapper.getBoundingClientRect().bottom < window.innerHeight &&
        wrapper.getBoundingClientRect().bottom < sidebar.offsetHeight
      ) {
        wrapper.classList.remove("fix-top");
        wrapper.classList.add("flex-bottom");
        toggle.setAttribute("id", "burgertoggle");
      } else if (wrapper.getBoundingClientRect().top < 0) {
        wrapper.classList.add("fix-top");
        wrapper.classList.remove("flex-bottom");
        toggle.setAttribute("id", "burgertoggle-scroll");
      } else {
        wrapper.classList.remove("fix-top");
        wrapper.classList.remove("flex-bottom");
        toggle.setAttribute("id", "burgertoggle");
      }
    }
    //wrapper taller than sidebar - stick to bottom
    else if (sidebar.offsetHeight < wrapper.offsetHeight) {
      if (wrapper.getBoundingClientRect().bottom < window.innerHeight) {
        wrapper.classList.remove("fix-bottom");
        wrapper.classList.add("flex-bottom");
        toggle.setAttribute("id", "burgertoggle");
      } else if (
        wrapper.getBoundingClientRect().bottom >
        sidebar.offsetHeight + window.innerHeight
      ) {
        wrapper.classList.remove("fix-bottom");
        wrapper.classList.remove("flex-bottom");
        toggle.setAttribute("id", "burgertoggle");
      } else {
        wrapper.classList.add("fix-bottom");
        wrapper.classList.remove("flex-bottom");
        toggle.setAttribute("id", "burgertoggle-scroll");
      }
    }
  }
};
