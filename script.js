// make hover of "designer" span trigger the underline on "UX/UI" span as well, same for all the other spans/texts in this section

let span1 = document.getElementById("span-1");
let span2 = document.getElementById("span-2");
let span3 = document.getElementById("span-3");
let span4 = document.getElementById("span-4");
let span5 = document.getElementById("span-5");
let span6 = document.getElementById("span-6");

span2.addEventListener('mouseover', function(){
    span1.classList.add("active-span");
});
span4.addEventListener('mouseover', function(){
    span3.classList.add("active-span");
});
span6.addEventListener('mouseover', function(){
    span5.classList.add("active-span");
});
span2.addEventListener('mouseout', function(){
    span1.classList.remove("active-span");
});
span4.addEventListener('mouseout', function(){
    span3.classList.remove("active-span");
});
span6.addEventListener('mouseout', function(){
    span5.classList.remove("active-span");
});

window.onscroll = function() {scrollFunctionDesktop()};

function scrollFunctionDesktop() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-110px";
  }
} 

let openContactButton = document.getElementById("contact-btn");
let closeContactButton = document.getElementById("contact-close-btn");
let popUpSection = document.getElementById("pop-up-section");
let contactDiv = document.getElementById("contact-div"); 

openContactButton.addEventListener("click", showContactSection);
closeContactButton.addEventListener("click", hideContactSection);

function showContactSection() {
  popUpSection.classList.add("visibility-section");
  contactDiv.classList.add("visibility-div");
}
function hideContactSection() {
  popUpSection.classList.remove("visibility-section");
  contactDiv.classList.remove("visibility-div");
}

let work1Div = document.getElementById("work1-readmore-div");
let openWork1 = document.getElementById("work1-open") 
let work2Div = document.getElementById("work2-readmore-div");
let openWork2 = document.getElementById("work2-open") 
let work3Div = document.getElementById("work3-readmore-div");
let openWork3 = document.getElementById("work3-open") 
let work4Div = document.getElementById("work4-readmore-div");
let openWork4 = document.getElementById("work4-open") 
let work5Div = document.getElementById("work5-readmore-div");
let openWork5 = document.getElementById("work5-open") 

openWork5.addEventListener("click", showWork5Section);
closeWork5.addEventListener("click", hideWork5Section);

function showWork5Section() {
  work5Div.classList.add("visibility-div");
  popUpSection.classList.add("visibility-section");
}
function hideWork5Section() {
  work5Div.classList.remove("visibility-div");
  popUpSection.classList.remove("visibility-section");
}


