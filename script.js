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
let contactSection = document.getElementById("contact-section");
let contactDiv = document.getElementById("contact-div"); 

openContactButton.addEventListener("click", showContactSection);
closeContactButton.addEventListener("click", hideContactSection);


function hideContactSection() {
  contactSection.classList.remove("visibility-section");
  contactDiv.classList.remove("visibility-div");
  // contactSection.style.opacity = 0;
  // contactSection.setAttribute( 'style', 'z-index: -9999 !important');
  // contactDiv.style.opacity = 0;
  // contactDiv.setAttribute( 'style', 'z-index: -9999 !important');
}
function showContactSection() {
  contactSection.classList.add("visibility-section");
  contactDiv.classList.add("visibility-div");
  // contactSection.style.opacity = 1;
  // contactSection.setAttribute( 'style', 'z-index: 197 !important');
  // contactDiv.style.opacity = 1;
  // contactDiv.setAttribute( 'style', 'z-index: 200 !important');
}



