// Change theme---------------------------
const prefersLightScheme = window.matchMedia('(prefers-color-scheme: light)');

if (prefersLightScheme.matches) {
        document.body.classList.add('light-theme');
} else {
        document.body.classList.remove('light-theme');
}

const themeToggle = document.querySelector('.theme-toggle');

const themeToggleOnClick = () => {
        if (document.body.classList.contains("light-theme")) {
                document.body.classList.remove('light-theme');
                document.body.classList.add('dark-theme');
        } else {
                document.body.classList.remove('dark-theme');
                document.body.classList.add('light-theme');
        }
        let theme = "dark";
        if (document.body.classList.contains("light-theme")) {
                theme = "light";
        }
        localStorage.setItem("theme", theme);

};

if (themeToggle) {
        themeToggle.addEventListener('click', themeToggleOnClick);
}