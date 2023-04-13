var featurePage = document.querySelector(".features")
var fashionPage = document.querySelector(".fashion-details")
var reviewPage = document.querySelector(".reviews")

const featureBtn = document.querySelector(".feature-btn")
const fashionBtn = document.querySelector(".fashion-btn")
const reviewBtn = document.querySelector(".review-btn")

featureBtn.addEventListener("click", function(){
   featurePage.style.display = "flex"
   fashionPage.style.display = "none"
   reviewPage.style.display = "none"

   featureBtn.classList.add("activePage")
   fashionBtn.classList.remove("activePage")
   reviewBtn.classList.remove("activePage")
})
fashionBtn.addEventListener("click", function(){
   featurePage.style.display = "none"
   fashionPage.style.display = "flex"
   reviewPage.style.display = "none"

   featureBtn.classList.remove("activePage")
   fashionBtn.classList.add("activePage")
   reviewBtn.classList.remove("activePage")
})
reviewBtn.addEventListener("click", function(){
   featurePage.style.display = "none"
   fashionPage.style.display = "none"
   reviewPage.style.display = "flex"

   featureBtn.classList.remove("activePage")
   fashionBtn.classList.remove("activePage")
   reviewBtn.classList.add("activePage")
})