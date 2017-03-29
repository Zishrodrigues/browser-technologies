# HTML - Checkboxes

Styling checkboxes is a great thing for styling and usability. Though it often happens that checkbox styles don't work either due to lack of support or other libraries. Thankfully a well structured HTML form makes sure you can always fallback to the default checkbox styling.

## Example code

HTML
```

<form action="#">
    <input type="checkbox" id="c1" name="cc" />
    <label for="c1">
        <span></span>
        Check Box
    </label>
    <input type="checkbox" id="c2" name="cc" />
    <label for="c2">
        <span></span>
        Check Box
    </label>
    <input type="checkbox" id="c3" name="cc" />
    <label for="c3">
        <span></span>
        Check Box
    </label>
</form>

```
CSS
```

input[type="checkbox"] + label span {
    display:inline-block;
    width:19px;
    height:19px;
    margin:-2px 10px 0 0;
    vertical-align:middle;
    background-color: darkred;
    cursor:pointer;
}
input[type="checkbox"]:checked + label span {
    background-color: green;
}

```
If the browser doesn't support webp then it will fallback to the jpg.

[Directory with the micro-projects](http://oege.ie.hva.nl/~khushiz001/browsertech/)
