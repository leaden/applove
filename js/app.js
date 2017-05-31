/*
 * Archivo principal de funcionalidad de JS
 */

 (function main(){
 	var boxes = array.from(document.getelementsByClassName("box-services"));

 })();

var modal = document.getelementsById("box-services-modal");

boxes.forEach(function(box){
	box.addEventListener("click", function(){
    modal.classList.remove("hide")
	});
 });

var close = document.querySelector("#box-services-modal .close");
close.addEventListener("click", function(){
   modal.classList.add("hide");

});
})();