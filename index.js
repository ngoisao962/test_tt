window.addEventListener("scroll",function(){
    const scrollup = this.document.querySelector(".scrollup");
    if(this.scrollY >=500) scrollup.classList.add("show-scroll")
    else scrollup.classList.remove("show-scroll")
})
window.addEventListener("scroll",function(){
const header = this.document.querySelector(".navbar")
if(this.scrollY >=80) header.classList.add("scroll-header")
else header.classList.remove("scroll-header")
})
