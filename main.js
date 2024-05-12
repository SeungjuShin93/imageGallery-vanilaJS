const body = document.querySelector('body');
const overlay = document.getElementById('overlay');
const mainBtn = document.getElementById('main-btn');
const mainImg = document.getElementById('main-img');
const subContainer = document.getElementById('sub-container');

mainBtn.addEventListener('click', darkMode);
subContainer.addEventListener('click', changeMainImg);

// dark 모드
function darkMode() {
  body.classList.toggle('dark');
  overlay.classList.toggle('dark');
  mainBtn.classList.toggle('dark');
  if (mainBtn.classList.contains('dark')) {
    mainBtn.textContent = '라이트 모드';
  } else {
    mainBtn.textContent = '다크 모드';
  }
}

// 그림 교체
function changeMainImg(e) {
  const src = e.target.src;
  const alt = e.target.alt;
  mainImg.src = src;
  mainBtn.alt = alt;
}
