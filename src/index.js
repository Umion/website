import "./index.pug";
import "./index.scss";

import { debounce, throttle, scrollTo } from "./scripts/helpers";

const body = document.body;
const hamburger = document.querySelector(".nav__hamburger");
const mobNav = document.querySelector(".nav__links");
const btnNav = document.querySelector(".nav__action");
const links = document.querySelectorAll(".link_to");
const sidebarDots = document.querySelectorAll(".sidebar__dot");
const sections = document.querySelectorAll("section");

let isMobile;

// const preloader = document.querySelector(".preloader");

// window.addEventListener("load", () => {
//   preloader.classList.add("hide");
//   setTimeout(() => {
//     preloader.remove();
//   }, 500);
// });

document.addEventListener("DOMContentLoaded", function (event) {
  isMobile = window.innerWidth < 848;

  function checkSize() {
    if (isMobile) {
      document.removeEventListener("scroll", scrollListener);
      document.addEventListener("scroll", mobScrollListener);
    } else {
      document.removeEventListener("scroll", mobScrollListener);
      document.addEventListener("scroll", scrollListener);
    }
  }
  window.addEventListener("resize", checkSize);
  checkSize();

  const darkBtnSections = ["main", "reviews"];
  let isScrollLocked = false;
  let debounceTime = 250;
  let throttleTime = 200;

  const sectionPos = {};
  const sectionName = {};

  try {
    links.forEach((l) => {
      l.addEventListener("click", async (e) => {
        e.preventDefault();
        if (isScrollLocked) return;

        const id = l.dataset.href;
        const section = Array.from(sections).find((s) => s.id == id);
        const sidebarDot = Array.from(sidebarDots).find(
          (d) => d.dataset.id == id
        );
        if (section && sidebarDot) {
          sidebarDots.forEach((dot) => dot.classList.remove("active"));
          links.forEach((link) => link.classList.remove("active"));

          l.classList.add("active");
          sidebarDot.classList.add("active");

          isScrollLocked = true;

          const offset = isMobile ? 40 : 0;
          scrollTo(section, offset).then((d) => {
            isScrollLocked = false;
          });

          darkBtnSections.includes(id)
            ? btnNav.classList.remove("light")
            : btnNav.classList.add("light");
        }
        if (isMobile) {
          hamburger.classList.remove("active");
          mobNav.classList.remove("active");
          body.classList.remove("overflow");
        }
      });
    });
  } catch (error) {
    console.log(error);
  }

  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    mobNav.classList.toggle("active");
    body.classList.toggle("overflow");
  });

  try {
    setTimeout(() => {
      sections.forEach((section) => {
        sectionPos[section.id] = section.offsetTop;
        sectionName[section.id] = section.id;
      });
    }, 1000);
  } catch (error) {
    console.log(error);
  }

  function scrollListener() {
    debounce(() => {
      const targetYCoordinate = window.innerHeight / 2;
      const sectionEl = Array.from(sections).find((el) => {
        const rect = el.getBoundingClientRect();

        return (
          targetYCoordinate >= rect.y &&
          targetYCoordinate <= rect.y + rect.height
        );
      });

      if (sectionEl) {
        sectionEl.scrollIntoView({
          behavior: "smooth",
        });

        sidebarDots.forEach((dot) => {
          dot.classList.remove("active");
          if (sectionEl.id === dot.dataset.id) {
            dot.classList.add("active");
          }
        });
        links.forEach((l) => {
          l.classList.remove("active");
          if (sectionEl.id === l.dataset.href) {
            l.classList.add("active");
          }
        });
        darkBtnSections.includes(sectionEl.id)
          ? btnNav.classList.remove("light")
          : btnNav.classList.add("light");
      }
    }, debounceTime);
  }
  function mobScrollListener() {
    throttle(() => {
      console.log("asd");
      var scrollPos =
        document.documentElement.scrollTop || document.body.scrollTop;

      let active;
      for (let id in sectionPos) {
        if (sectionPos[id] <= scrollPos + 62) {
          active = sectionName[id];
        }
      }
      if (active) {
        links.forEach((l) => {
          l.classList.remove("active");
          if (active === l.dataset.href) {
            l.classList.add("active");
          }
        });
      }
    }, throttleTime);
  }
});
