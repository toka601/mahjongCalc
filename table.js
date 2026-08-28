document.getElementById("mentsuTable").querySelectorAll("select").forEach(select => {
    select.addEventListener("change", () => {
        if (select.value !== "0") {
            select.parentElement.style.backgroundColor = "rgb(85, 139, 255)";
        } else {
            select.parentElement.style.backgroundColor = "";
        }
    });
});