removeButton();
console.log('lel');
function removeButton() {
    document.getElementById('formButton').style.display = 'none';
}

(function checkInput(){
    if(document.addEventListener){
        document.getElementById("search").addEventListener('input', function (e) {
            filtering();
        }, false);
    } else {
        document.getElementById("search").getElementById("search").attachEvent("onkeydown", function(e){
            if( e.keyCode == '27' ){
                cmnOverlayV2.hideOverlay();
            }
        });
    }
})();

function filtering() {

    var input, filter, ul, li, a, i;

    input = document.getElementById("search");
    filter = input.value.toUpperCase();
    ul = document.getElementById("listUl");
    li = ul.getElementsByTagName("li");

    for (i = 0; i < li.length; i++) {
        var kek = li[i];

        if (kek.innerHTML.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}
