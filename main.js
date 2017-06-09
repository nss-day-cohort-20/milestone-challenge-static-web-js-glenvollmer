



let tree = " ";
let space = " ";
let inputCharacter = document.getElementById("character");
let inputHeight = document.getElementById("height");

let growButton = document.getElementById("button").addEventListener("click", function treeFunc () {
	for (var i = 0; i < inputHeight.value; i++) {
		tree = space.repeat(inputHeight.value - i - 1) + inputCharacter.value.repeat((i * 2) + 1);
		console.log(tree)
	}
});

document.getElementById("button").addEventListener("click", function errorMessage() {
	if (inputCharacter.value === "", inputHeight.value === "") {
	document.getElementById("error").innerHTML = "Please Fill Out Fields";
	}	
})








