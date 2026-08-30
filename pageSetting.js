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
/*

<div data-element="pages">
    <button data-element="tab"></button>
    <div data-element="content"></div>

</div>
*/