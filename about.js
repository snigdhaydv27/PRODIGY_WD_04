document.addEventListener('DOMContentLoaded', function () {
    const introText = "Hello! I'm a passionate web developer with a focus on creating responsive and user-friendly websites.";
    document.getElementById('intro').innerText = introText;
});

function showMore() {
    const moreInfo = document.getElementById('more-info');
    if (moreInfo.classList.contains('hidden')) {
        moreInfo.classList.remove('hidden');
    } else {
        moreInfo.classList.add('hidden');
    }
}
let threeBar = document.querySelector("#threeBar");
let menuBarContainer = document.createElement("div");
let isMenuOpen = false;

menuBarContainer.style.position = "absolute";
menuBarContainer.style.top = "0vh";
menuBarContainer.style.right = "0vh";
menuBarContainer.style.width = "50%";
menuBarContainer.style.height = "100%";
menuBarContainer.style.background = "transparent";
menuBarContainer.style.backdropFilter = "blur(45px)"
menuBarContainer.style.display = "none";
menuBarContainer.style.flexDirection = "column";
menuBarContainer.style.gap = "40px";
menuBarContainer.style.alignItems = "flex-start";
menuBarContainer.style.padding = "1em";
menuBarContainer.innerHTML = `
    <a href="portfolio.html" class="navLink" id="Home" style ="font-size:22px; height:50px;margin-top:10px" >Home</a>
    <a href="about.html" class="navLink" id="About"style ="font-size:22px; height:50px">About</a>
    <a href="#" class="navLink" id="Contact"style ="font-size:22px; height:50px; width:110px">Contact</a>
    <svg style="position:fixed; top:17px; right:15px"class="cross" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="38" height="38" color="#ffffff" fill="none">
        <path d="M18 6L12 12M12 12L6 18M12 12L18 18M12 12L6 6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
    </svg>`;

document.body.appendChild(menuBarContainer);

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

menuBarContainer.querySelector(".cross").addEventListener("click", () => {
    menuBarContainer.style.display = "none";
    threeBar.style.display = "block";
    isMenuOpen = false;
});
