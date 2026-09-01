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