
const panels = document.querySelectorAll(".panel");

// console.log(panels);
// console.log(panels[0]);

panels.forEach((panel) => {
    panel.addEventListener("click", () => {
        removeActiveClass();
        panel.classList.add("active");
    })
})

function removeActiveClass() {
    panels.forEach((panel) => {
        panel.classList.remove("active");
    });
}