const initProgressRing = () => {
  const selectors = {
    progressRing: '.js-progress-ring',
    progressRingValue: '.js-progress-ring-value',
    progressRingArc: '.js-progress-ring-arc'
  };

  const rings = document.querySelectorAll(selectors.progressRing);

  rings.forEach((ring) => {
    const value = parseFloat(
      ring.querySelector(selectors.progressRingValue).textContent
    );
    const arc = ring.querySelector(selectors.progressRingArc);
    const radius = arc.r.baseVal.value;
    const circumference = 2 * Math.PI * radius;
    const offset = circumference * ((100 - value) / 100);

    arc.style.strokeDasharray = `${circumference}`;
    arc.style.strokeDashoffset = `${offset}`;
  });
};

export default initProgressRing;
