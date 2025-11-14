// セカンドタイトル
const titles = [
    "新しい言語に挑戦中",
    "サーバー管理を勉強中",
    "ubntuを勉強中",
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