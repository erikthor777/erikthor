// below is the menu which took quite a bit of trial and error and took a while to perfect.
const centreBox = document.querySelector(".centre-box");
const menu = document.querySelector(".menu")
const about = document.querySelector(".about");
const sites = document.querySelector(".sites");
const zines = document.querySelector(".zines");
const mail = document.querySelector(".mail");

//press about button
about.addEventListener("click", () => {
    // remove buttons
    menu.removeChild(about);
    menu.removeChild(sites);
    menu.removeChild(zines);
    menu.removeChild(mail);
    // print about content
    const para = document.createElement("p");
    para.innerText = "i am known as erikthor or cgmt. i am an independent publisher and aspiring web developer."
    centreBox.append(para);
});

// press site button
sites.addEventListener("click", () => {
    // remove buttons
    menu.removeChild(about);
    menu.removeChild(sites);
    menu.removeChild(zines);
    menu.removeChild(mail);
    // print site content
    const vibeCity = document.createElement("div");
    vibeCity.innerHTML = `<a href="https://erikthor777.github.io/vibecity" target="_blank" class="vibe">Vibe City</a>`
    centreBox.append(vibeCity);
    const bib = document.createElement("div");
    bib.innerHTML = `<a href="https://erikthor777.github.io/bibliotek" target="_blank" class="bib">bibliothèque</a>`
    centreBox.append(bib);

    vibeCity.style.margin = "20px";
});

// press zine button
zines.addEventListener("click", () => {
    // remove buttons
    menu.removeChild(about);
    menu.removeChild(sites);
    menu.removeChild(zines);
    menu.removeChild(mail);

    // print zine content
    const jiang1 = document.createElement("div");
    jiang1.innerHTML = `<a href="https://drive.google.com/file/d/1QGWm33GtmnIalqekzjyY9q3dzoGA7QSL/view?usp=sharing" target="_blank">Jiang Xueqin volume 1</a>`
    centreBox.append(jiang1);

    const jiang2 = document.createElement("div");
    jiang2.innerHTML = `<a href="https://drive.google.com/file/d/1u_2VPT5s7tueAON95ja-hEDGcVneL33T/view?usp=sharing" target="_blank">Jiang Xueqin volume 7</a>`
    centreBox.append(jiang2);

    const conscious = document.createElement("div");
    conscious.innerHTML = `<a href="https://drive.google.com/file/d/1-NV6OSBWqtv9BT50bDLgQHEVKs6A9oNt/view?usp=sharing" target="_blank">Conscious Consumption Guide</a>`
    centreBox.append(conscious);
});

// light/dark mode. I have struggled with classList in the past so this felt quite challenging
const lightButton = document.querySelector(".light-button");
const body = document.querySelector("#body");
const list = body.classList;

lightButton.addEventListener("click", () => {
    list.toggle("light");
})