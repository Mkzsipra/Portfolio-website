//  >>>>>>>>>>>>>>>>>>>> Name Typing effect function <<<<<<<<<<<<<<<<<<<

function typeName() {
	let myName = document.querySelector(".myName");
	let name = "Kaleem Sipra";
	let index = 0;
	function typeWriter() {
		let newMainHeading = name.slice(0, index);
		myName.innerHTML = newMainHeading;
		index > name.length ? (index = 0) : index++;
	}
	setInterval(function () {
		typeWriter();
	}, 300);
}

//  >>>>>>>>>>>>>>>>>>>> Mobile navbar buttons <<<<<<<<<<<<<<<<<<<

function menuButton() {
	const left = document.querySelector(".left");
	const navBtn = document.querySelector("#nav-btn");
	navBtn.addEventListener("click", function () {
		left.classList.toggle("toggle");
	});
}

//  >>>>>>>>>>>>>>>>>>>> Mobile navbar function 2nd part <<<<<<<<<<<<<<<<<<<

function closeMenuOnItemClick() {
	const left = document.querySelector(".left");
	const navLinks = document.querySelectorAll(".left ul li a");

	navLinks.forEach(function (link) {
		link.addEventListener("click", function () {
			left.classList.remove("toggle");
		});
	});
}

//  >>>>>>>>>>>>>>>>>>>> Call All Function <<<<<<<<<<<<<<<<<<<

typeName();
menuButton();
closeMenuOnItemClick();
