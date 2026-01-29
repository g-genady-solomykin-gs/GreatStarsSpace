let currentLang = 'ru';

async function setLang(lang) {
  currentLang = lang;
  const res = await fetch(`lang/${lang}.json`);
  const data = await res.json();




}

setLang('ru');


const videos = document.querySelectorAll('video[data-src]');

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;

      const video = entry.target;
      video.src = video.dataset.src;
      video.load();

      obs.unobserve(video);
    });
  }, {
    rootMargin: '200px'
  });

  videos.forEach(video => observer.observe(video));