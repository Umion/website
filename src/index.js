import "./index.pug";
import "./index.scss";

// import "./scripts/pureFullPage.min.css";
// import "./scripts/pureFullPage.min.js";

const easeOutCubic = (t) => --t * t * t + 1;
const scrollTo = (el, duration = 600, offset = 0) => {
  const yPos = el.offsetTop;
  const startY = window.scrollY;
  const difference = yPos - startY;
  const startTime = performance.now();

  if (yPos === startY + offset) {
    return Promise.resolve(true);
  }

  return new Promise((resolve) => {
    const step = () => {
      const progress = (performance.now() - startTime) / duration;
      const amount = easeOutCubic(progress);
      window.scrollTo({ top: startY + amount * difference - offset });
      if (progress < 0.99) {
        window.requestAnimationFrame(step);
      } else {
        resolve(true);
      }
    };
    step();
  });
};

document.addEventListener("DOMContentLoaded", function (event) {
  const body = document.body;
  const hamburger = document.querySelector(".nav__hamburger");
  const mobNav = document.querySelector(".nav__links");
  const btnNav = document.querySelector(".nav__action");

  const links = document.querySelectorAll(".link_to");
  const sidebarDots = document.querySelectorAll(".sidebar__dot");
  const sections = document.querySelectorAll("section");

  const darkBtnSections = ["main", "reviews"];
  const sectionsIds = [
    "main",
    "services",
    "instruments",
    "reviews",
    "about",
    "contacts",
  ];
  let activeSection = "main";
  let isScrollLocked = false;
  let lockScroll = false;

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

          scrollTo(section).then((d) => {
            isScrollLocked = false;
          });

          darkBtnSections.includes(id)
            ? btnNav.classList.remove("light")
            : btnNav.classList.add("light");
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

  // document.addEventListener("scroll", (event) => {
  //   if (lockScroll) return;
  //   lockScroll = true;

  //   let currentScroll =
  //     document.documentElement.scrollTop || document.body.scrollTop; // Get Current Scroll Value

  //   if (currentScroll > 0 && lastScroll <= currentScroll) {
  //     lastScroll = currentScroll;
  //     console.log("down");
  //     scrollTo(document.getElementById("contacts"));
  //   } else {
  //     lastScroll = currentScroll;
  //     console.log("up");
  //   }
  // });

  // document.addEventListener("wheel", checkScrollDirection);

  // function checkScrollDirection(event) {
  //   console.log("1");
  //   if (lockScroll) return;
  //   lockScroll = true;
  //   let prev = sectionsIds[sectionsIds.indexOf(activeSection) - 1];
  //   let next = sectionsIds[sectionsIds.indexOf(activeSection) + 1];
  //   console.log(prev, next);
  //   if (checkScrollDirectionIsUp(event)) {
  //     console.log("UP");
  //     if (!prev) {
  //       lockScroll = false;
  //       return;
  //     } else {
  //       activeSection = prev;
  //       scrollTo(document.getElementById(prev)).then((d) => {
  //         console.log("then");
  //         setTimeout(() => {
  //           lockScroll = false;
  //         }, 600);
  //       });
  //     }
  //   } else {
  //     if (!next) {
  //       lockScroll = false;
  //       return;
  //     } else {
  //       console.log("Down");
  //       activeSection = next;
  //       scrollTo(document.getElementById(next)).then((d) => {
  //         console.log("then");
  //         setTimeout(() => {
  //           lockScroll = false;
  //         }, 600);
  //       });
  //     }
  //   }
  // }

  // function checkScrollDirectionIsUp(event) {
  //   if (event.wheelDelta) {
  //     return event.wheelDelta > 0;
  //   }
  //   return event.deltaY < 0;
  // }
});
