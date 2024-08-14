document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent form submission

    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Display a response message
    const responseMessage = document.getElementById('responseMessage');
    responseMessage.innerText = `Thank you, ${name}! We have received your message and will get back to you at ${email}.`;

    // Clear form fields
    document.getElementById('contactForm').reset();
});

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
    <a href="contact.html" class="navLink" id="Contact"style ="font-size:22px; height:50px; width:110px">Contact</a>
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
document.querySelector(".facebook").addEventListener("click", ()=>{
    window.open("https://www.facebook.com/profile.php?id=100009824285138")
})
document.querySelector(".instagram").addEventListener("click", ()=>{
    window.open("https://www.instagram.com/snigdha_ydv/")
})
document.querySelector(".linkedin").addEventListener("click", ()=>{
    window.open("https://www.linkedin.com/in/snigdha-kumar-90445b298/")
})