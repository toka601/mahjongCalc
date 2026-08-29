// 用語のポップアップと点数表を出す
/**
 * タブについて
 * ・用語
 * ・点数表(ロン)
 * ・点数表(ツモ)
 */

// ダブ1「用語解説」のボタン設定
const descButtons = document.querySelectorAll(".descButton");
const descContents = document.querySelectorAll(".descContent");

descButtons.forEach(button => {
    button.addEventListener("click", () => {
        
        const content = document.getElementById(button.dataset.tab);

        if(content){
            if(button.classList.contains("inactive")){
                button.classList.remove("inactive");
                content.classList.remove("inactive");

            }else{
                button.classList.add("inactive");
                content.classList.add("inactive");
            }
        }
    });
});


// タブ2「点数表(ロン)」のタブボタン設定
const ronTabButtons = document.querySelectorAll(".ronScoreButton");
const ronTabContents = document.querySelectorAll(".ronScoreList");

ronTabButtons.forEach(button => {
    button.addEventListener("click", () => {
        ronTabButtons.forEach(button => button.classList.remove("active"));
        ronTabContents.forEach(content => content.classList.remove("active"));

        button.classList.add("active");
        const tabId = button.dataset.tab;

        document.getElementById(tabId).classList.add("active");
    })
});

// タブ3「点数表(ツモ)」のタブボタン設定
const tsumoTabButtons = document.querySelectorAll(".tsumoScoreButton");
const tsumoTabContents = document.querySelectorAll(".tsumoScoreList");

tsumoTabButtons.forEach(button => {
    button.addEventListener("click", () => {
        tsumoTabButtons.forEach(button => button.classList.remove("active"));
        tsumoTabContents.forEach(content => content.classList.remove("active"));

        button.classList.add("active");
        const tabId = button.dataset.tab;

        document.getElementById(tabId).classList.add("active");
    })
});


// タブと対応ページ
const tabButtons = document.querySelectorAll(".tabButton");
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
