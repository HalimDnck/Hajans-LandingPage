//Size selection
/*
$("body").on("click", "label", function(e) {
   var getValue = $(this).attr("for");
   var goToParent = $(this).parents(".select-size");
   var getInputRadio = goToParent.find("input[id = " + getValue + "]");
   console.log(getInputRadio.attr("id"));  
 });*/
 
//Image Slide
var imageBtn1 = document.getElementById("s1")
var imageBtn2 = document.getElementById("s2")
var imageBtn3 = document.getElementById("s3")

imageBtn1.addEventListener("click", function(){
   document.getElementById("image").src = "images/1_silver.png"
   imageBtn1.style.border = "2px solid black"
   imageBtn2.style.border = "none"
   imageBtn3.style.border = "none"
})
imageBtn2.addEventListener("click", function(){
   document.getElementById("image").src = "images/2_silver.png"
   imageBtn2.style.border = "2px solid black"
   imageBtn1.style.border = "none"
   imageBtn3.style.border = "none"
})
imageBtn3.addEventListener("click", function(){
   document.getElementById("image").src = "images/3_silver.png"
   imageBtn3.style.border = "2px solid black"
   imageBtn2.style.border = "none"
   imageBtn1.style.border = "none"
})

//Color options
