const headingH1 = document.querySelector(".heading");
const headerParent = headingH1.closest("header");
headerParent.style.border = "5px solid black";

console.log(headingH1);

/////////////////////////////////////////////////////////////

const infoTitle = document.querySelector(".info");
const infoPackage = document.querySelector(".info-package");
const packageTitle = document.querySelectorAll(".package-title");

if (infoTitle.contains(infoPackage)) {
  packageTitle.forEach((item) => {
    item.previousElementSibling.style.border = "2px red solid";
  });
}

////////////////////////////////////////////////////////////

const labelTag = document.querySelectorAll("label");

labelTag.forEach((item) => {
  if (item.matches(".mild")) {
    item.style.border = "2px solid yellow";
  } else if (item.matches(".intense")) {
    item.style.border = "2px solid orange";
  } else {
    item.style.border = "2px solid red";
  }
});

///////////////////////////////////////////////////////////

/* const navList = document.querySelector(".nav-list")
const siteMap = document.querySelector(".site-map")

Array.from(navList.children).forEach((item) => {

})
 */

const navList = document.querySelector(".nav-list");
const navListCopy = navList.cloneNode(true);

const siteMap = document.querySelector(".site-map");

Array.from(navListCopy.children).forEach((item) => {
  siteMap.appendChild(item);
});
