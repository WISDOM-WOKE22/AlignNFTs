const nav=document.querySelector('nav');
const menubar=document.querySelector("#menuBar");
const image=document.querySelector(".intro__image");
const text=document.querySelector(".intro__text");
const home=document.querySelector("#home");
const about=document.querySelector("#about");
const roadmap=document.querySelector("#roadmap");
const nft=document.querySelector("#nft");
const contact=document.querySelector("#contact");
const connect=document.querySelector("#connect");
const main=document.querySelector(".main");
const footer=document.querySelector("footer");

menubar.addEventListener("click", () =>{
    nav.classList.toggle("active")
});

home.addEventListener("click", () => {
    nav.classList.remove("active");
 } );
roadmap.addEventListener("click", () => {
    nav.classList.remove("active");
 });
nft.addEventListener("click",() => {
    nav.classList.remove("active");
 });
contact.addEventListener("click", () => {
    nav.classList.remove("active");
 });
connect.addEventListener("click", () => {
    nav.classList.remove("active");
 });
main.addEventListener("click", () => {
    nav.classList.remove("active");
 });
footer.addEventListener("click", () => {
    nav.classList.remove("active");
 });
// about.addEventListener("click", () => {
//     nav.classList.remove("active");
//  })