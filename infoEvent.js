// 用語のポップアップと点数表を出す
/**
 * タブについて
 * ・用語
 * ・点数表(ロン)
 * ・点数表(ツモ)
 */

// ダブ1「用語解説」のボタン設定
const descButtons = document.querySelectorAll(".descButton");

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


const popup = document.getElementById("popup");

document.getElementById("imageButton").addEventListener("click", () => {
    popup.style.display = "flex";
});
document.getElementById("closeButton").addEventListener("click", () => {
    popup.style.display = "none";
});
