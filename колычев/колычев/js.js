elem.addEventListener('click', function(event) {
	console.log(event.type); // выведет 'click'
});
let elem = document.querySelector('#elem');

elem.addEventListener('click', func);
elem.addEventListener('dblclick', func);
function func(event) {
    console.log(event.type);
    if (event.type === "click") {
        elemButton.style.backgroundColor = "green";
    }
    if (event.type === "dblclick") {
        elemButton.style.backgroundColor = "red";
    }
}