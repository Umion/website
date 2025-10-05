let collectionsGliderInstanceMd = null;
let collectionsGliderInstanceSm = null;
let whyGliderInstanceSm = null;
let galleryGliderInstanceSm = null;
let mediaGliderInstanceLg = null;
let mediaGliderInstanceMd = null;

document.addEventListener("DOMContentLoaded", function () {
  const screenWidth = window.innerWidth;

  initNavMenu();
  initReadMoreButtons();
  initAssortmentSlider(screenWidth);
  initDocumentsSlider();
  initAccordion();
  initEvents();

  // media
  initGalleryModal();
  initVideoModal();

  handleResize(screenWidth);

  // ресайз с debounce
  window.addEventListener(
    "resize",
    debounce(() => {
      handleResize(window.innerWidth);
      initAssortmentSlider(window.innerWidth);
    }, 200)
  );
});

// ---------- helpers ----------

function debounce(fn, delay) {
  let timer;
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => fn.apply(this, args), delay);
  };
}

// ---------- resize handler ----------

function handleResize(screenWidth) {
  // 👉 SMALL
  if (screenWidth <= 800) {
    if (!collectionsGliderInstanceSm) {
      destroyCollectionsSliderMd();
      initCollectionsSliderSm();
    }
  }
  // 👉 MEDIUM
  else if (screenWidth <= 1140) {
    if (!collectionsGliderInstanceMd) {
      destroyCollectionsSliderSm();
      initCollectionsSliderMd();
    }
  }
  // 👉 LARGE
  else {
    destroyCollectionsSliderSm();
    destroyCollectionsSliderMd();
  }

  // WHY slider
  if (screenWidth <= 1140) {
    if (!whyGliderInstanceSm) {
      initWhySliderSm();
    }
  } else {
    destroyWhySliderSm();
  }

  // gallery slider
  if (screenWidth <= 1000) {
    if (!galleryGliderInstanceSm) {
      initGallerySliderSm();
    }
  } else {
    destroyGallerySliderSm();
  }

  // media
  if (screenWidth <= 1140) {
    if (!mediaGliderInstanceMd) {
      destroyMediaSliderLg();
      initMediaSliderMd();
    }
  } else {
    if (!mediaGliderInstanceLg) {
      destroyMediaSliderMd();
      initMediaSliderLg();
    }
  }
}

// ---------- sliders ----------

function initCollectionsSliderMd() {
  try {
    const el = document.querySelector(".collections-glider-md");
    if (!el) return;

    const prev = resetArrow(".collection-prev-md");
    const next = resetArrow(".collection-next-md");

    collectionsGliderInstanceMd = new Glider(el, {
      slidesToShow: 1,
      arrows: { prev, next },
    });
  } catch (error) {
    console.log("Glider error:", error);
  }
}

function destroyCollectionsSliderMd() {
  if (collectionsGliderInstanceMd) {
    collectionsGliderInstanceMd.destroy();
    collectionsGliderInstanceMd = null;
  }
}

function initCollectionsSliderSm() {
  try {
    const el = document.querySelector(".collections-glider-sm");
    if (!el) return;

    const prev = resetArrow(".collection-prev-sm");
    const next = resetArrow(".collection-next-sm");

    collectionsGliderInstanceSm = new Glider(el, {
      slidesToShow: 1,
      arrows: { prev, next },
    });
  } catch (error) {
    console.log("Glider error:", error);
  }
}

function destroyCollectionsSliderSm() {
  if (collectionsGliderInstanceSm) {
    collectionsGliderInstanceSm.destroy();
    collectionsGliderInstanceSm = null;
  }
}

function initWhySliderSm() {
  try {
    const el = document.querySelector(".why-glider-sm");
    if (!el) return;

    const prev = resetArrow(".why-prev");
    const next = resetArrow(".why-next");

    whyGliderInstanceSm = new Glider(el, {
      slidesToShow: 1,
      arrows: { prev, next },
      responsive: [
        {
          breakpoint: 670,
          settings: { slidesToShow: 2 },
        },
      ],
    });
  } catch (error) {
    console.log("Glider error:", error);
  }
}

function destroyWhySliderSm() {
  if (whyGliderInstanceSm) {
    whyGliderInstanceSm.destroy();
    whyGliderInstanceSm = null;
  }
}

function initMediaSliderLg() {
  try {
    const el = document.querySelector(".media-glider");
    if (!el) return;

    const prev = resetArrow(".media-prev");
    const next = resetArrow(".media-next");

    new Glider(el, {
      slidesToShow: 1,
      arrows: { prev, next },
    });
  } catch (error) {
    console.log("Glider error:", error);
  }
}
function initDocumentsSlider() {
  try {
    const el = document.querySelector(".doc-glider");
    if (!el) return;

    new Glider(el, {
      slidesToShow: "auto",
      itemWidth: 335,
      exactWidth: true,
      dots: ".dots",
      arrows: {
        prev: ".doc-prev",
        next: ".doc-next",
      },
      responsive: [
        {
          breakpoint: 670,
          settings: { itemWidth: 290 },
        },
        {
          breakpoint: 1200,
          settings: { itemWidth: 308 },
        },
      ],
    });
  } catch (error) {
    console.log("Glider error:", error);
  }
}

function initGallerySliderSm() {
  try {
    const el = document.querySelector(".gallery-glider-sm");
    if (!el) return;

    const prev = resetArrow(".gallery-prev");
    const next = resetArrow(".gallery-next");

    galleryGliderInstanceSm = new Glider(el, {
      slidesToShow: 1,
      arrows: { prev, next },
    });
  } catch (error) {
    console.log("Glider error:", error);
  }
}
function destroyGallerySliderSm() {
  if (galleryGliderInstanceSm) {
    galleryGliderInstanceSm.destroy();
    galleryGliderInstanceSm = null;
  }
}

function initMediaSliderLg() {
  try {
    const el = document.querySelector(".media-glider");
    if (!el) return;

    const prev = resetArrow(".media-prev");
    const next = resetArrow(".media-next");

    mediaGliderInstanceLg = new Glider(el, {
      slidesToShow: 1,
      arrows: { prev, next },
    });
  } catch (error) {
    console.log("Glider error:", error);
  }
}
function destroyMediaSliderLg() {
  if (mediaGliderInstanceLg) {
    mediaGliderInstanceLg.destroy();
    mediaGliderInstanceLg = null;
  }
}
function initMediaSliderMd() {
  try {
    const el = document.querySelector(".media-glider-md");
    if (!el) return;

    const prev = resetArrow(".media-prev-md");
    const next = resetArrow(".media-next-md");

    mediaGliderInstanceMd = new Glider(el, {
      slidesToShow: 1,
      arrows: { prev, next },
      responsive: [
        {
          breakpoint: 740,
          settings: { slidesToShow: 2 },
        },
      ],
    });
  } catch (error) {
    console.log("Glider error:", error);
  }
}
function destroyMediaSliderMd() {
  if (mediaGliderInstanceMd) {
    mediaGliderInstanceMd.destroy();
    mediaGliderInstanceMd = null;
  }
}

// ---------- accordion & nav ----------
function initAccordion() {
  const headers = document.querySelectorAll(".dropdown__header");

  headers.forEach((header) => {
    header.addEventListener("click", () => {
      headers.forEach((el) => {
        const parent = el.parentElement;
        const article = el.nextElementSibling;

        if (el === header && !parent.classList.contains("open")) {
          parent.classList.add("open");
          article.style.maxHeight = article.scrollHeight + "px";
        } else {
          parent.classList.remove("open");
          article.style.maxHeight = "0px";
        }
      });
    });
  });
}

function initNavMenu() {
  const burger = document.querySelector(".nav-icon");
  const menu = document.querySelector(".mobile-menu");
  const body = document.body;

  if (!burger || !menu) return;

  burger.addEventListener("click", () => {
    burger.classList.toggle("open");
    menu.classList.toggle("active");
    body.classList.toggle("no-scroll");
  });

  const links = menu.querySelectorAll('a[href^="#"]');
  links.forEach((link) => {
    link.addEventListener("click", () => {
      burger.classList.remove("open");
      menu.classList.remove("active");
      body.classList.remove("no-scroll");
    });
  });
}

function initEvents() {
  const getCallBtns = document.querySelectorAll(".popup-trigger");
  const buyBtns = document.querySelectorAll(".assortment-card__btn"); // кнопки купить
  const modal = document.getElementById("modal");
  const closeBtn = document.getElementById("closeModal");
  const body = document.body;

  // 👉 открытие модалки по .popup-trigger
  getCallBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      modal.classList.add("active");
      body.classList.add("no-scroll");
    });
  });

  // 👉 открытие модалки по "Купити"
  buyBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      // находим ближайший .assortment-card
      const card = btn.closest(".assortment-card");
      const title = card
        ?.querySelector(".assortment-card__title")
        ?.textContent.trim();

      console.log("Открыт попап для товара:", title);

      modal.classList.add("active");
      body.classList.add("no-scroll");
    });
  });

  // 👉 закрытие по крестику
  closeBtn.addEventListener("click", () => {
    modal.classList.remove("active");
    body.classList.remove("no-scroll");
  });

  // 👉 закрытие по клику на фон
  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.classList.remove("active");
      body.classList.remove("no-scroll");
    }
  });
}

function initReadMoreButtons() {
  const aboutReadMore = document.querySelector(".about__read-more");
  const aboutMore = document.querySelector(".about__more");

  const aboutUsReadMore = document.querySelector(".about-us__read-more");
  const aboutUsMore = document.querySelector(".about-us__more");

  aboutReadMore.addEventListener("click", () => {
    aboutReadMore.style.display = "none";
    aboutMore.style.display = "block";
  });

  aboutUsReadMore.addEventListener("click", () => {
    aboutUsReadMore.style.display = "none";
    aboutUsMore.style.display = "block";
  });
}

function initGalleryModal() {
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = lightbox.querySelector("img");
  const lightboxClose = lightbox.querySelector(".lightbox-close");

  document.querySelectorAll(".gallery-content img").forEach((img) => {
    img.addEventListener("click", () => {
      lightboxImg.src = img.src;
      lightbox.classList.add("active");
      document.body.classList.add("no-scroll");
    });
  });

  lightbox.addEventListener("click", () => {
    lightbox.classList.remove("active");
    document.body.classList.remove("no-scroll");
  });
  lightboxClose.addEventListener("click", () => {
    lightbox.classList.remove("active");
    document.body.classList.remove("no-scroll");
  });
}

function initVideoModal() {
  const lightbox = document.getElementById("video-lightbox");
  const frame = lightbox.querySelector("#yt-frame");
  const closeBtn = lightbox.querySelector(".lightbox-close");

  // делегирование: слушаем весь body
  document.body.addEventListener("click", (e) => {
    const preview = e.target.closest("[data-video-id]");
    if (preview) {
      const videoId = preview.dataset.videoId;
      frame.src = `https://www.youtube.com/embed/${videoId}?autoplay=1`;
      lightbox.classList.add("active");
      document.body.classList.add("no-scroll");
    }
  });

  closeBtn.addEventListener("click", () => {
    frame.src = "";
    lightbox.classList.remove("active");
    document.body.classList.remove("no-scroll");
  });

  lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox) {
      frame.src = "";
      lightbox.classList.remove("active");
      document.body.classList.remove("no-scroll");
    }
  });
}

function resetArrow(sel) {
  const el = document.querySelector(sel);
  if (!el) return null;
  const clone = el.cloneNode(true);
  el.parentNode.replaceChild(clone, el);
  return document.querySelector(sel);
}

function initAssortmentSlider(screenWidth) {
  console.log(1, screenWidth);

  const containerLg = document.querySelector(".assortment-content-lg");
  const containerMd = document.querySelector(".assortment-content-md");
  const prevBtn = document.querySelector(".assortment-prev");
  const nextBtn = document.querySelector(".assortment-next");
  const tabs = document.querySelectorAll(".assortment-tab");
  const contentsLg = document.querySelectorAll(".assortment-content-wrap");
  const contentsMd = document.querySelectorAll(".assortment-content-wrap-md");

  if (!prevBtn || !nextBtn || !tabs.length) return;

  // 👉 ширина слайда зависит от экрана
  let slideWidth;
  if (screenWidth <= 1150) {
    slideWidth = 315;
  } else if (screenWidth <= 1280) {
    slideWidth = 280;
  } else if (screenWidth <= 1440) {
    slideWidth = 315;
  } else if (screenWidth < 1640) {
    slideWidth = 1100;
  } else {
    slideWidth = 1272;
  }

  // 👉 стрелки (работают для активного контейнера)
  nextBtn.onclick = () => {
    const container = screenWidth <= 1440 ? containerMd : containerLg;
    if (container) {
      container.scrollBy({ left: slideWidth, behavior: "smooth" });
    }
  };

  prevBtn.onclick = () => {
    const container = screenWidth <= 1440 ? containerMd : containerLg;
    if (container) {
      container.scrollBy({ left: -slideWidth, behavior: "smooth" });
    }
  };

  // 👉 табы (включаем правильный набор контента)
  tabs.forEach((tab, index) => {
    tab.onclick = () => {
      tabs.forEach((t) => t.classList.remove("active"));
      contentsLg.forEach((c) => c.classList.remove("active"));
      contentsMd.forEach((c) => c.classList.remove("active"));

      tab.classList.add("active");

      if (contentsMd[index]) contentsMd[index].classList.add("active");
      if (contentsLg[index]) contentsLg[index].classList.add("active");
    };
  });
}
