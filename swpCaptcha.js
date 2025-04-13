let swpCorrectImages = [];
const errorMsg = document.getElementById("errorMsg");
const swpPopup = document.getElementById("swpPopup");
const swpCheckBox = document.getElementById("swpCheckBox");
const swpGridContainer = document.getElementById("swpGridContainer");
const swpPalestineImages = [
	"https://samiulalim1.github.io/swpCaptcha/images/1.png",
	"https://samiulalim1.github.io/swpCaptcha/images/2.png",
	"https://samiulalim1.github.io/swpCaptcha/images/3.png",
	"https://samiulalim1.github.io/swpCaptcha/images/4.png",
	"https://samiulalim1.github.io/swpCaptcha/images/5.png",
	"https://samiulalim1.github.io/swpCaptcha/images/6.png",
	"https://samiulalim1.github.io/swpCaptcha/images/7.png",
	"https://samiulalim1.github.io/swpCaptcha/images/8.png",
	"https://samiulalim1.github.io/swpCaptcha/images/9.png",
	"https://samiulalim1.github.io/swpCaptcha/images/10.png",
	"https://samiulalim1.github.io/swpCaptcha/images/11.png",
	"https://samiulalim1.github.io/swpCaptcha/images/12.png",
	"https://samiulalim1.github.io/swpCaptcha/images/13.png",
];
const swpNonPalestineImages = [
	"https://samiulalim1.github.io/swpCaptcha/images/1.jpg",
	"https://samiulalim1.github.io/swpCaptcha/images/2.jpg",
	"https://samiulalim1.github.io/swpCaptcha/images/3.jpg",
	"https://samiulalim1.github.io/swpCaptcha/images/4.jpg",
	"https://samiulalim1.github.io/swpCaptcha/images/5.jpg",
	"https://samiulalim1.github.io/swpCaptcha/images/6.jpg",
	"https://samiulalim1.github.io/swpCaptcha/images/7.jpg",
	"https://samiulalim1.github.io/swpCaptcha/images/8.jpg",
	"https://samiulalim1.github.io/swpCaptcha/images/9.jpg",
	"https://samiulalim1.github.io/swpCaptcha/images/10.jpg",
];

function swpCaptchaSolved(){
	if(swpCheckBox.classList.contains("checked")){
		return true;
	}else{
		return false;
	}
}

function swpShuffleArray(arr) {
	return arr.sort(() => Math.random() - 0.5);
}

function swpShowPopup() {
	errorMsg.style.display = 'none';
	swpPopup.style.display = 'flex';
	swpGridContainer.innerHTML = '';

	const palestineCount = Math.floor(Math.random() * 2) + 3;
	const selectedPalestine = swpShuffleArray(swpPalestineImages).slice(0, palestineCount);
	const selectedNon = swpShuffleArray(swpNonPalestineImages).slice(0, 9 - palestineCount);
	const allImages = swpShuffleArray([...selectedPalestine, ...selectedNon]);
	swpCorrectImages = selectedPalestine;

	allImages.forEach(src => {
		const img = document.createElement('img');
		img.src = src;
		img.onclick = () => img.classList.toggle('selected');
		swpGridContainer.appendChild(img);
	});
}
  
function swpShuffleImages () {
	swpGridContainer.innerHTML = '';
	const palestineCount = Math.floor(Math.random() * 2) + 3;
	const selectedPalestine = swpShuffleArray(swpPalestineImages).slice(0, palestineCount);
	const selectedNon = swpShuffleArray(swpNonPalestineImages).slice(0, 9 - palestineCount);
	const allImages = swpShuffleArray([...selectedPalestine, ...selectedNon]);
	swpCorrectImages = selectedPalestine;

	allImages.forEach(src => {
		const img = document.createElement('img');
		img.src = src;
		img.onclick = () => img.classList.toggle('selected');
		swpGridContainer.appendChild(img);
	});
}

document.getElementById("swpSubmitCaptcha").addEventListener("click", () => {
	const selected = Array.from(swpGridContainer.querySelectorAll('img.selected')).map(img => img.src);
	const isCorrect = swpCorrectImages.every(img => selected.includes(img)) && selected.length === swpCorrectImages.length;

    if(isCorrect){
		localStorage.setItem("swpCaptcha", "Solved");
		swpPopup.style.display = 'none';
		swpCheckBox.classList.remove("swpLoading");
		swpCheckBox.classList.add("checked");
    }else{
		swpShuffleImages();
		errorMsg.style.display = 'block';
    }
});

document.getElementById("swpCaptchaTrigger").addEventListener("click", () => {
	if(swpCheckBox.classList.contains("checked")){
		return;
	}
    swpCheckBox.classList.add("swpLoading");
    setTimeout(() => {
		let swpCaptchaCached = null;
		try{
			swpCaptchaCached = localStorage.getItem("swpCaptcha");
		}catch(e){
			console.error("localStorage error:", e);
		}
		if(swpCaptchaCached === "Solved"){
			swpCheckBox.classList.remove("swpLoading");
			swpCheckBox.classList.add("checked");
		}else{
			swpShowPopup();
		}
	}, 800);
});