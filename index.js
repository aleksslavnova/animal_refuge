window.onload = function () {
	const imageArray = [
		"./images/image-5.jpg",
		"./images/image-4.jpg",
		"./images/image-3.jpg",
	];
	const imageJSDiv = document.getElementById("imgJS");
	console.log(imageJSDiv);
	const modifyImageArray = imageArray.map((elementSRC) => {
		const img = document.createElement("img");
		img.src = elementSRC;
		imageJSDiv.append(img);
	});

	const showBtn = document.getElementById("showBtn");
	const openClose = document.getElementById("openClose");

	showBtn.addEventListener("click", () => {
		openClose.style.display = "block";
	});
};
