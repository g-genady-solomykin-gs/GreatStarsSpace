let currentLang = 'ru';

async function setLang(lang) {
  currentLang = lang;
  const res = await fetch(`lang/${lang}.json`);
  const data = await res.json();

 document.querySelectorAll('[data-i18n]').forEach(el => {
  const key = el.getAttribute('data-i18n');
  if(data[key]) {
    if(el.tagName === 'IMG') {
      el.alt = data[key]; // для alt у картинок
    } else {
      el.textContent = data[key]; // для текста
    }
  }
});


}

setLang('ru');
