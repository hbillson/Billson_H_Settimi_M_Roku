
function toggleNav() {
    debugger;
    let sidebar = document.querySelector(".sidebar");
    if (sidebar.classList.contains("open")) {
        sidebar.style.left = "-50vw";
        sidebar.classList.remove("open");
    } else if (!sidebar.classList.contains("open")) {
        sidebar.style.left = "0";
        sidebar.classList.add("open");
    }
}

export { toggleNav } 