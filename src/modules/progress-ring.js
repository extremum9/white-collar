const initProgressRing = () => {
  const selectors = {
    root: '.js-progress-ring',
    value: '.js-progress-ring-value',
    arc: '.js-progress-ring-arc'
  };

  const rings = document.querySelectorAll(selectors.root);
  rings.forEach((ring) => {
    const value = parseFloat(ring.querySelector(selectors.value).textContent);
    const arc = ring.querySelector(selectors.arc);
    const radius = arc.r.baseVal.value;
    const circumference = 2 * Math.PI * radius;
    const offset = circumference * ((100 - value) / 100);

    arc.style.strokeDasharray = `${circumference}`;
    arc.style.strokeDashoffset = `${offset}`;
  });
};

export default initProgressRing;
