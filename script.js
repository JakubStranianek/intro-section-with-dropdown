var switcher = false;
var switcherForButton = false;
var switcherForButton1 = false;
var navigation = document.querySelector("nav");

document.querySelector(".menu").addEventListener("click", toggleMenu);
document.getElementById("dropbtn1").addEventListener("click", toggleButton1);
document.getElementById("dropbtn2").addEventListener("click", toggleButton2);

function toggleMenu() {
    switcher = !switcher;

    if (switcher === true) {
        document.body.classList.remove("overflow", "bodyBg");
        navigation.style.display = "none";
        document.getElementById("menuIcon").src = "../src/assets/icon-menu.svg";
        document.getElementById("menuIcon").style.width = "32px";
        document.getElementById("menuIcon").style.height = "18px";
    } else {
        document.body.classList.add("overflow", "bodyBg");
        navigation.style.display = "block";
        document.getElementById("menuIcon").src = "../src/assets/icon-close-menu.svg";
        document.getElementById("menuIcon").style.width = "24px";
        document.getElementById("menuIcon").style.height = "24px";
    }
} 

function toggleButton1() {
    switcherForButton = !switcherForButton;
    
    if (switcherForButton === false) {
        document.querySelector("#dropdown1").style.display = "none";
    } else {
        document.querySelector("#dropdown1").style.display = "flex";
    }

    if (window.innerWidth <= "1080" && switcherForButton === true) {
        document.querySelector("#dropbtn2").style.marginTop = "150px";
    } else {
        document.querySelector("#dropbtn2").style.marginTop = "0px";
    }
}

function toggleButton2() {
    switcherForButton1 = !switcherForButton1;
    
    if (switcherForButton1 === false) {
        document.querySelector("#dropdown2").style.display = "none";
    } else {
        document.querySelector("#dropdown2").style.display = "flex";
    }

    if (window.innerWidth <= "1080" && switcherForButton1 === true) {
        document.querySelector("#carrers").style.marginTop = "130px";
    } else {
        document.querySelector("#carrers").style.marginTop = "16px";
    }

}


