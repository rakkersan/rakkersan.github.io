// セカンドタイトル
const titles = [
    "PHP勉強中",
    "ubntu勉強中",
    "WEB開発をやってみたい"
]

let index = 0;
const place = document.getElementById("second-title");

setInterval(() => {
    place.style.opacity = 0;

    setTimeout(() => {
        index = (index + 1) % titles.length;
        place.textContent = titles[index];
        place.style.opacity = 1;
    }, 500);
}, 3000);