document.getElementById('headerDiv').addEventListener('change', (event) => {
  const selectedLang = event.target.value;
  changeLang(selectedLang);
});

async function changeLang(lang) {
  try {
    const response = await fetch(`../lang/lang_${lang}.json`);
    const translation = await response.json();

    document.querySelectorAll('[data-trans]').forEach(el => {
      const key = el.getAttribute('data-trans');
      if (translation[key]) {
        el.innerHTML = translation[key];
      }
    });

    document.querySelectorAll(
      '[data-trans-placeholder], [data-trans-alt], [data-trans-title], [data-trans-value], [data-trans-aria-label]'
    ).forEach(el => {
      ['placeholder', 'alt', 'title', 'value', 'aria-label'].forEach(attr => {
        const key = el.getAttribute(`data-trans-${attr}`);
        if (key && translation[key]) {
          el.setAttribute(attr, translation[key]);
        }
      });
    });
  } catch (error) {
    console.error(`言語ファイルの読み込みに失敗しました: ${error}`);
  }
}