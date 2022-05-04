const mobileNavClick = () => {
    const menuButton = document.querySelector(".menu-button");
    const navMenu = document.querySelector(".navigation-menu");
    const navLinks = document.querySelectorAll(".top-nav-links");

    const toggleMenu = () => {
        menuButton.classList.toggle("active");
        navMenu.classList.toggle("open-menu");
    }

    const hideMenu = () => {
        menuButton.classList.remove("active");
        navMenu.classList.remove("open-menu");
    }

    menuButton.addEventListener("click", ()=>{
        toggleMenu();
    })

    navLinks.forEach(link => link.addEventListener("click", () => {
        hideMenu();
    }));
}

export default mobileNavClick;