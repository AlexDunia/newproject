  //  We begin with the web page nav bar (Not the media query)

 // const fixednav = document.querySelector(".navbar")

 const nav = document.querySelector(".navbar");
    
 const dnav = document.querySelector(".ffcontainer");


  const getpastfirstdiv = document.querySelector(".seconddiv");
  const second = document.querySelector(".rightsecond")

  const ddnav = document.querySelector(".fcontainer");
  const scon = document.querySelector(".smallcontainer");
  const navbar = document.querySelector("#menuItem");

window.addEventListener ("scroll", function () {
const navbarHeight = dnav.getBoundingClientRect().height;
  const scrollHeight = window.pageYOffset


if (scrollHeight > navbarHeight){
   dnav.classList.add("fixed-nav");
   ddnav.classList.add("fixed-nav");
}
else{
  dnav.classList.remove("fixed-nav");
  ddnav.classList.remove("fixed-nav")
}

}
)



// const toogle = document.querySelectorAll(".menuicon")

// toggle.addEventListener ("click", function (){


// 	console.log("successs")

// })


function menutoggle(){
	const display = document.querySelector("#menuItemm")
	display.style.visibility = "visible"
	display.style.animation = "slideInFromLeft 0.7s ease-in-out";
	

}

function off(){
	const display = document.querySelector("#menuItemm")
	display.style.visibility = "hidden"
	display.style.animation = "slideOutFromRight 3s ease-in-out";
	

}

// function menutoggle(){
// 	let bodyy = document.body
//     let newnav = document.createElement("div")

//     bodyy.appendChild(newnav)

//      newnav.innerHTML = '<span class="icon"> X </span> <br> <br> </div> <ul> <li>  <a href="index.html"> Home </a> </li> <li> <a href="#about" class="scroll"> About us </a> </li> <li> <a href="#Services" class="scroll"> Services </a> </li>  <li>  <a href="#faq" class="scroll">  FAQ  </a> </li> <li> <a href="#contact" class="scroll"> Contact us </a> </li> <li> <a> Register </a> </li></ul>'

//         newnav.setAttribute("id", "menuItemm")

//         // newnav.setAttribute("class", "icon")
//         //   const linkdiv = document.createElement("div")
//         //   newnav.appendChild(linkdiv)
//         //   linkdiv.setAttribute("class", "links")
          

//         console.log(newnav)  
//     }

    
//     let iconn = document.querySelectorAll(".icon")
//     let men = document.getElementById("menuItemm")


//     iconn.addEventListener("click", function() {

//     	 men = document.getElementById("menuItemm")
//     	console.log(men)
//     })

    // function spot(){
    // 	alert("sucess")
    // }


const landing = document.querySelectorAll(".scroll")

landing.forEach(function(ev){

	ev.addEventListener ("click", function(evv){
		evv.preventDefault()


		const scrolllist = evv.currentTarget.getAttribute("href").slice(1)


		const earlydiv = document.getElementById(scrolllist)


	    // The height of the navbar 
		const navbarHeight = nav.getBoundingClientRect().height
		// the end of the height of the navbar

		const display = document.querySelector("#menuItemm")



		// const fixednav = nav.classList.contains(".fixed-nav")

		//  Now we are setting a constant based on a condition its going to end with .contains("fixednav")

		// const ashh = document.querySelector(".ash")

		let height = earlydiv.offsetTop

		// if(!fixednav){
		//    height = height - navbarHeight
		// }


		window.scrollTo({
      left: 0,
      top: height,

    });

		 // close
    display.style.visibility = "hidden"



		// follow =up with a div from earlier on

		// select the height of the constant

		// console.log(earlydiv)


	})	
})





// landingscroll.addEventListener("click", function(e)
// 	// we are adding preventdefault here because we want to modify it our own way
// 	e.preventDefault()

//     const try = e.currentTarget




	

// 	console.log(item)


// 	)


// const slide = document.querySelector(".icon")

// slide.addEventListener("click", function() {
// 		document.querySelector("#menuItemm").remove()





// })

    // function close(){

    // 	// newnav.style.style.animation = "slideInFromLeft 0.7s ease-in-out"; 
    // 	newnav.remove()
    // 	// newnav.display = "none"

    	
    // }


//  first 

const firsttp = document.querySelector(".firstp");


window.addEventListener ("scroll", function () {
const firstttp = firsttp.getBoundingClientRect().top

const scrollHeight = window.innerHeight;


if (scrollHeight > firstttp) {
   // dnav.classList.add("fixed-nav");
   firsttp.classList.add("appear2")
}
else{
  // dnav.classList.remove("fixed-nav");
  firsttp.classList.remove("appear2")
}

}
)

const seconddp = document.querySelector(".secondp");


window.addEventListener ("scroll", function () {
const secondddp = seconddp.getBoundingClientRect().top

const scrollHeight = window.innerHeight;


if (scrollHeight > secondddp) {
   // dnav.classList.add("fixed-nav");
   seconddp.classList.add("appear2")
}
else{
  // dnav.classList.remove("fixed-nav");
  seconddp.classList.remove("appear2")
}

}
)

//  2 women

const womenn = document.querySelector(".women");


window.addEventListener ("scroll", function () {
const womennn = womenn.getBoundingClientRect().top

const scrollHeight = window.innerHeight;


if (scrollHeight > womennn) {
   // dnav.classList.add("fixed-nav");
   womenn.classList.add("appear2")
}
else{
  // dnav.classList.remove("fixed-nav");
  womenn.classList.remove("appear2")
}

}
)

//  SCROLL PART for second div


window.addEventListener ("scroll", function () {
const scrollseconddiv = getpastfirstdiv.getBoundingClientRect().top

const scrollHeight = window.innerHeight;


if (scrollHeight > scrollseconddiv ) {
   // dnav.classList.add("fixed-nav");
   getpastfirstdiv.classList.add("appear")
}
else{
  // dnav.classList.remove("fixed-nav");
  getpastfirstdiv.classList.remove("appear")
}

}
)

window.addEventListener ("scroll", function () {
const scrollrightsecond = second.getBoundingClientRect().top
const scrollHeight = window.innerHeight;


if (scrollHeight > scrollrightsecond ) {
   // dnav.classList.add("fixed-nav");
   second.classList.add("appear2")
}
else{
  // dnav.classList.remove("fixed-nav");
  second.classList.remove("appear2")
}

}
)


//  end of SCROLL PART for second div


//  THIRD SCROLL PART for second div

const third = document.querySelector(".thirddiv");
const second2 = document.querySelector(".rightsecond2");


window.addEventListener ("scroll", function () {
const thirddivscroll = third.getBoundingClientRect().top

const scrollHeight = window.innerHeight;


if (scrollHeight > thirddivscroll ) {
   // dnav.classList.add("fixed-nav");
   third.classList.add("appear3")
}
else{
  // dnav.classList.remove("fixed-nav");
 third.classList.remove("appear3")
}

}
)

window.addEventListener ("scroll", function () {
const rightsecond2 = second2.getBoundingClientRect().top
const scrollHeight = window.innerHeight;


if (scrollHeight > rightsecond2) {
   // dnav.classList.add("fixed-nav");
   second2.classList.add("appear4")
}
else{
  // dnav.classList.remove("fixed-nav");
  second2.classList.remove("appear4")
}

}
)

//  end of third 

//  CARD ANIMATION

const allCards = document.querySelector(".flexcard");




window.addEventListener ("scroll", function () {
const allCardScroll = allCards.getBoundingClientRect().top

const scrollHeight = window.innerHeight;


if (scrollHeight > allCardScroll ) {
   // dnav.classList.add("fixed-nav");
   allCards.classList.add("appear5")
}
else{
  // dnav.classList.remove("fixed-nav");
  allCards.classList.remove("appear5")
}

}
)

//  END OF CARD ANIMATION

//  one GRAY CARD ANIMATION


const onegraycard = document.querySelector(".one");


window.addEventListener ("scroll", function () {
const gray1 = onegraycard.getBoundingClientRect().top

const scrollHeight = window.innerHeight;


if (scrollHeight > gray1) {
   // dnav.classList.add("fixed-nav");
   onegraycard.classList.add("appear6")
}
else{
  // dnav.classList.remove("fixed-nav");
  onegraycard.classList.remove("appear6")
}

}
)


// end of first card animation


//  second GRAY CARD ANIMATION


const twograycard = document.querySelector(".two");


window.addEventListener ("scroll", function () {
const gray2 = twograycard.getBoundingClientRect().top

const scrollHeight = window.innerHeight;


if (scrollHeight > gray2) {
   // dnav.classList.add("fixed-nav");
   twograycard.classList.add("appear7")
}
else{
  // dnav.classList.remove("fixed-nav");
  twograycard.classList.remove("appear7")
}

}
)


// end of second card animation

//  second GRAY CARD ANIMATION


const threegraycard = document.querySelector(".three");


window.addEventListener ("scroll", function () {
const gray3 = onegraycard.getBoundingClientRect().top
const gray2 = onegraycard.getBoundingClientRect().top

const scrollHeight2 = window.innerHeight;


if (scrollHeight2 > gray3) {
   // dnav.classList.add("fixed-nav");
   threegraycard.classList.add("appear8")
}
else{
  // dnav.classList.remove("fixed-nav");
  threegraycard.classList.remove("appear8")
}

}
)


// end of second card animation



//  window.addEventListener ("scroll", function () {
// // const navbarrHeight = easytrade.getBoundingClientRect().height;
//  const firstdivheight = firstdiv.getBoundingClientRect().height;

// if (scrollHeight === firstdivheight ){
//    easytrade.classList.add("appear")
// }

// }) 

 // else{
//   dnav.classList.remove("fixed-nav");
//   ddnav.classList.remove("fixed-nav")
// }

// }
// )


// function FadeInSection(props) {
//   const [isVisible, setVisible] = React.useState(true);
//   const domRef = React.useRef();
//   React.useEffect(() => {
//     const observer = new IntersectionObserver(entries => {
//       entries.forEach(entry => setVisible(entry.isIntersecting));
//     });
//     observer.observe(domRef.current);
//     return () => observer.unobserve(domRef.current);
//   }, []);
//   return (
//     <div
//       className={`fade-in-section ${isVisible ? 'is-visible' : ''}`}
//       ref={domRef}
//     >
//       {props.children}
//     </div>
//   );
// }






     const mainquestion1 = document.querySelector(".question1")
     const mainquestion2 = document.querySelector(".question2")
     const mainquestion3 = document.querySelector(".question3")
     const answer1 = document.querySelector(".ans")
     const answer2 = document.querySelector(".ans2")
     const answer3 = document.querySelector(".ans3")
     const fff = document.querySelector(".faqbq")
     const btn = document.querySelector(".mainarrow")
     const btn2 = document.querySelector(".mainarrow2")
     const btn3 = document.querySelector(".mainarrow3")




    btn.addEventListener('click', event => {
	answer1.style.display = "block"
	btn.src = "images/arrowup.png";

    btn.setAttribute("onclick", "check()")

})

    function check(){

	answer1.style.display = "none"
	btn.src = "images/arrowdown.png"
	btn.removeAttribute("onclick");	
};


//  second faq 
    btn2.addEventListener('click', event => {
	answer2.style.display = "block"
	btn2.src = "images/arrowup2.png";

    btn2.setAttribute("onclick", "check2()")

})

    function check2(){
    	answer2.style.height = 0;
    	answer2.style.width = 0;
	answer2.style.display = "none"
	btn2.src = "images/arrowdown2.png"
	btn2.removeAttribute("onclick");	
};

//  Third faq

  btn3.addEventListener('click', event => {
	answer3.style.display = "block"
	btn3.src = "images/arrowup3.png";

    btn3.setAttribute("onclick", "check3()")

})

    function check3(){
	answer3.style.display = "none"
	btn3.src = "images/arrowdown3.png"
	btn3.removeAttribute("onclick");	
};


//    function menutoggle(){
 
//  if (answer1.style.display = "none")
//  {
// alert("successs")
//  }

// var btn = document.querySelectorAll(".mainarrow");

// btn.forEach(function(frequent){
//      frequent.addEventListener('click', event => {
// 	answer1.style.display = "block"
// 	btn.src = "images/arrowup.png";

//   frequent.setAttribute("onclick", "check()")
	

// })
//  });


// const listtt = btn.forEach(function(frequent2))

// console.log(listtt)

// function check(){

// 	btn.forEach(function(frequent2){
//      frequent2.addEventListener('click', event => {
// 	answer1.style.display = "none"
// 	btn.src = "images/arrowdown.png"
// 	frequent2.removeAttribute("onclick");	
// })})}


// if(check()){
// // var.forEach(function(check2){
// //      check2.onclick = function(){
// 	 frequent.addEventListener('click', event => {
//      	answer1.style.display = "none"
// 	btn.src = "images/arrowdown.png"
// 	frequent.removeAttribute("onclick");
// })};




// btn.src = "images/arrowdown.png";

//  else 
//  {
//   question1.style.visibility = "visible";
// }
// }

//  const dnav = document.querySelector(".fcontainer");
//   const ddnav = document.querySelector(".ffcontainer");
//   const scon = document.querySelector(".smallcontainer");
//   const navbar = document.querySelector("#menuItem");

// window.addEventListener ("scroll", function () {
// const navbarHeight = dnav.getBoundingClientRect().height
// const scrollHeight = window.pageYOffset


// if (scrollHeight > navbarHeight){
//    dnav.classList.add("fixed-nav");
//    ddnav.classList.add("fixed-nav");
// }
// else{
//   dnav.classList.remove("fixed-nav");
//   ddnav.classList.remove("fixed-nav")
// }

// }
// )