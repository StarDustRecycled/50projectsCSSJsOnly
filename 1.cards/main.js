const panels = document.querySelectorAll(".panel");

console.log(panels);
panels.forEach((panel) => {
  panel.addEventListener("click", () => {
    RemoveForEachPanel();
    panel.classList.add("active");
  });
});

function RemoveForEachPanel() {
  panels.forEach((panel) => {
    panel.classList.remove("active");
  });
}
