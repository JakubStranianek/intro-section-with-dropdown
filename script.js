var switcher = false;
var switcherForButton = false;
var navigation = document.querySelector("nav");

document.querySelector(".menu").addEventListener("click", toggleMenu);
document.querySelector(".dropbtn").addEventListener("click", toggleButton);

function toggleMenu() {
    switcher = !switcher;

    if (switcher === false) {
        document.body.classList.remove("overflow", "bodyBg");
        navigation.style.display = "none";
    } else {
        document.body.classList.add("overflow", "bodyBg");
        navigation.style.display = "block";
    }
} 

function toggleButton() {
    switcherForButton = !switcherForButton;

    if (switcherForButton === false) {
        document.querySelectorAll(".dropdown-content").style.display = "none";
    } else {
        document.querySelectorAll(".dropdown-content").style.display = "flex";
    }
}

