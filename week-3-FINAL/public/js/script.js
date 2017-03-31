removeButton();

function removeButton() {
    document.getElementById('formButton').style.display = 'none';
}

function filtering() {

    var input, filter, ul, li, a, i;
    input = document.getElementById("search");
    filter = input.value.toUpperCase();
    ul = document.getElementById("listUl");
    li = ul.getElementsByTagName("li");

    for (i = 0; i < li.length; i++) {
        var kek = li[i];
        console.log(kek.innerHTML);
        if (kek.innerHTML.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}
