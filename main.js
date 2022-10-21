let minusBtn = document.getElementById("minus-btn");
let count = document.getElementById("count");
let plusBtn = document.getElementById("plus-btn");

let countNum = 0;
count.innerHTML = countNum;

minusBtn.addEventListener("click", () => {
	countNum -= 1;
	count.innerHTML = countNum;
});

plusBtn.addEventListener("click", () => {
	countNum += 1;
	count.innerHTML = countNum;
});


  
    