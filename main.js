let pine = {
	tree: " ",
	space: " ",
	inputCharacter: document.getElementById("character"),
	inputHeight: document.getElementById("height"),
};

document.getElementById("button").addEventListener("click", function treeFunc () {
	for (var i = 0; i < pine.inputHeight.value; i++) {
		pine.tree = pine.space.repeat(pine.inputHeight.value - i - 1) + pine.inputCharacter.value.repeat((i * 2) + 1);
		console.log(pine.tree)
	}
	
	if (pine.inputCharacter.value === "" || pine.inputHeight.value === "") {
		document.getElementById("error").innerHTML = "Please Fill Out Fields";
	}	
})



document.getElementById("character").addEventListener("keypress", function(event) {
if (event.keyCode == 13) {
	
}})
      
 