let threeBar = document.querySelector("#threeBar");
let menuBarContainer = document.createElement("div");
let isMenuOpen = false;

// Create menuBarContainer with menu links and close icon
menuBarContainer.style.position = "absolute";
menuBarContainer.style.top = "0vh";
menuBarContainer.style.right = "0vh";
menuBarContainer.style.width = "100%";
menuBarContainer.style.background = "transparent";
menuBarContainer.style.backdropFilter = "blur(25px)"
menuBarContainer.style.display = "none";
menuBarContainer.style.flexDirection = "column";
menuBarContainer.style.alignItems = "center";
menuBarContainer.style.textAlign = "center"
menuBarContainer.style.justifyContent = "center";
menuBarContainer.style.padding = "1em";
menuBarContainer.innerHTML = `
    <a href="#" class="navLink" id="Home" style ="font-size:25px" >Home</a>
    <a href="#" class="navLink" id="About"style="margin-top: 0.5em;font-size:25px">About</a>
    <a href="#" class="navLink" id="Contact"style="margin-top: 0.5em;font-size:25px">Contact</a>
    <svg style="position:fixed; top:15px; right:15px"class="cross" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="38" height="38" color="#ffffff" fill="none">
        <path d="M18 6L12 12M12 12L6 18M12 12L18 18M12 12L6 6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
    </svg>`;

document.body.appendChild(menuBarContainer);

// Toggle menu visibility on threeBar click
threeBar.addEventListener("click", () => {
    if (isMenuOpen) {
        menuBarContainer.style.display = "none";
        threeBar.style.display = "block";
    } else {
        menuBarContainer.style.display = "flex";
        threeBar.style.display = "none";
    }
    isMenuOpen = !isMenuOpen;
});

// Close menu when cross icon is clicked
menuBarContainer.querySelector(".cross").addEventListener("click", () => {
    menuBarContainer.style.display = "none";
    threeBar.style.display = "block";
    isMenuOpen = false;
});
