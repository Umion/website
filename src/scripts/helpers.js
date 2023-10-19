let duration = 600;
let debounceTimer;
let throttlePause;

export const debounce = (callback, time) => {
  window.clearTimeout(debounceTimer);
  debounceTimer = window.setTimeout(callback, time);
};

export const throttle = (callback, time) => {
  if (throttlePause) return;

  throttlePause = true;
  setTimeout(() => {
    callback();
    throttlePause = false;
  }, time);
};

const easeOutCubic = (t) => --t * t * t + 1;
export const scrollTo = (el, offset = 0) => {
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
