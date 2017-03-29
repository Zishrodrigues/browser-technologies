# HTML - JS-oninput
A fallback using oninput for onkeydown. onkeydown is relativly new and unsupported.

## Example code

```
function update() {
  console.log(this.value);
}
someElement.oninput = function() {
  this.onkeydown = null;
  update.call(this);
};
someElement.onkeydown = function() {
  update.call(this);
};

```
If the browser doesn't support onkeydown it will use oninput.

*Inspired by bswisher*

[Directory with the micro-projects](http://oege.ie.hva.nl/~khushiz001/browsertech/)
