let nav = document.querySelector(".nav");
let navLink = document.querySelectorAll(".navLink");
let user= document.querySelector(".user");
let userIcon= document.querySelector(".userIcon");
let menuBar=document.querySelector("#menuBar");
document.querySelector("#menuBar").addEventListener("click", () => {
    let menuBarContainer = document.createElement("div");
    menuBarContainer.style.height="40px";
    menuBarContainer.style.width="380px";
    menuBarContainer.style.display="flex";
    menuBarContainer.style.justifyContent="space-between";
    menuBarContainer.innerHTML = `
          <a href="#" class="navLink" id="Home" style="margin-left:0em; margin-top:0.4em;">Home</a>
                        <a href="#" class="navLink" id="About" style="margin-left:0em; margin-top:0.4em;">About</a>
                        <a href="#" class="navLink" id="Contact" style="margin-left:0em; margin-top:0.4em;">Contact</a>
                        <svg class="cross" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="38" height="38" color="#ffffff   " fill="none">
    <path d="M18 6L12 12M12 12L6 18M12 12L18 18M12 12L6 6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
</svg> `;
    nav.appendChild(menuBarContainer);
     menuBar.style.display = "none"
     user.style.display ="none"
});
