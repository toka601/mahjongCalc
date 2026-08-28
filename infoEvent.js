// 用語のポップアップと点数表を出す
/**
 * タブについて
 * ・用語
 * ・点数表(ロン)
 * ・点数表(ツモ)
 */

// タブボタン
const tabButtons = document.querySelectorAll(".tabButton");
// 内容
const tabContents = document.querySelectorAll(".tabContent");


tabButtons.forEach(button => {

    // タブ切り替え
    button.addEventListener("click", () => {

        // すべてのタブと内容を非選択
        tabButtons.forEach(button => button.classList.remove("active") );
        tabContents.forEach(content => content.classList.remove("active") );

        // 押されたタブを選択
        button.classList.add("active");

        const tabId = button.dataset.tab;

        document.getElementById(tabId).classList.add("active");
    });

});

const popup = document.getElementById("popup");

document.getElementById("imageButton").addEventListener("click", () => {
    popup.style.display = "flex";
});
document.getElementById("closeButton").addEventListener("click", () => {
    popup.style.display = "none";
});