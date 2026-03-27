const tabs = document.querySelectorAll(".top-tab");
const forms = document.querySelectorAll(".form");

tabs.forEach(tab => {
    tab.addEventListener("click", () => {
        tabs.forEach(t => t.classList.remove("active"));
        tab.classList.add("active");

        forms.forEach(form => form.classList.remove("active-form"));
        document.getElementById(tab.dataset.target + "-form")
            .classList.add("active-form");
    });
});

// LINK TEXT
document.getElementById("goRegister").onclick = (e) => {
    e.preventDefault();
    tabs[1].click();
};

document.getElementById("goLogin").onclick = (e) => {
    e.preventDefault();
    tabs[0].click();
};