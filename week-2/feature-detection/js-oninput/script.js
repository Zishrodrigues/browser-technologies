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
