// Get input
var input = document.getElementById('searchFilter');
console.log(input);

// Get items to be searched through
var imgLinks = document.querySelectorAll("img");
console.log(imgLinks);

// 
input.addEventListener("keyup", function(filterImage){
    var searchResult = input.value.toUpperCase();

    for (var i = 0; i < imgLinks.length; i++){

		var caption = imgLinks[i].getAttribute("img");

		if (caption.toUpperCase().includes(searchResult)) {
			imgLinks[i].style.display = "inline";
		} else {
			imgLinks[i].style.display = "none";
		}
}

});
