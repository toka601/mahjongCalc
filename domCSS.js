const tableCells = document.getElementById("mentsuTable").querySelectorAll("select");

tableCells.forEach(select => {
    select.addEventListener("change", () => {
        if (select.value !== "0") {
            select.parentElement.style.backgroundColor = "rgb(85, 139, 255)";
        } else {
            select.parentElement.style.backgroundColor = "";
        }
    });
});

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


const resetButton = document.getElementById("resetButton");


resetButton.addEventListener("click", () => {
    // ラジオボタンを初期状態に戻す
    document.querySelectorAll('input[type="radio"]').forEach(input => {
        input.checked = input.defaultChecked;
    });

    // セレクトボックスを初期状態に戻す
    document.querySelectorAll("select").forEach(select => {
        select.selectedIndex = 0;
    });

    // 計算結果を初期状態に戻す
    document.getElementById("resultFu").textContent = "0符 → 0符";
    document.getElementById("resultScore0").textContent = "";
    document.getElementById("resultScore1").textContent = "";
    document.getElementById("resultJudge").textContent = "";
    document.getElementById("resultScoreT").textContent = "";

    // 面子テーブルの色を初期状態に戻す
    document.querySelectorAll("#mentsuTable td").forEach(td => {
        td.style.backgroundColor = "";
    });
});


/**
 * container
 * ・button(container内で一つのみ)
 * ・item
 * ・container
 * ↓
 * container
 * ・button(container内で一つのみ)
 * ・subContainer
 *   ・item
 *   ・container
 */

const containers = document.querySelectorAll('[data-element="list"]');

containers.forEach(container => {
    if(!container.classList.contains("active")) container.classList.add("active");

    const button = container.querySelector(':scope > [data-element="button"]');
    if(!button.classList.contains("active")) button.classList.add("active");

    const items = container.querySelectorAll(':scope > [data-element="item"], :scope > [data-element="list"]');

    const subContainer = document.createElement("div");
        subContainer.className = "subContainer active";
        items.forEach(item => subContainer.appendChild(item));
    container.appendChild(subContainer);

    button.addEventListener("click", () => {
        button.classList.toggle("active");
        subContainer.classList.toggle("active");
    });
});

const pageses = document.querySelectorAll('[data-element="pages"]');

pageses.forEach(pages => {
    const tabs = pages.querySelectorAll(':scope > [data-element="tab"]');
    const contents = pages.querySelectorAll(':scope > [data-element="content"]');

    const tabsContainer = document.createElement("div");
        tabsContainer.className = "tabsContainer";
    const contentsContainer = document.createElement("div");
        contentsContainer.className = "contentsContainer";

    tabs.forEach(tab => tabsContainer.appendChild(tab));
    contents.forEach(content => contentsContainer.appendChild(content));

    pages.appendChild(tabsContainer);
    pages.appendChild(contentsContainer);

    if(tabs.length != contents.length){
        console.log("The number of tabs and contents does not match.")
    }
    if(tabs.length > 0 && contents.length > 0){
        tabs[0].classList.add("active");
        contents[0].classList.add("active");
    }
    
    for(let i=0; i<Math.min(tabs.length, contents.length); i++){
        const tab = tabs[i];
        const content = contents[i];

        tab.addEventListener("click", () => {
            tabs.forEach(tab => tab.classList.remove("active"));
            contents.forEach(content => content.classList.remove("active"));

            tab.classList.add("active");
            content.classList.add("active");
        });
    }
});