# CSS - Gradient

Using a CSS gradient as a background-image is a widely support feature. But even when a feature is widely supported it is important to remember that there are still some browsers that won't be able to parse it. In this case it's wise to create a fallback.

## Example code

```

section {
    background-color: red;
    background-image: linear-gradient(red, orange);
}

```
If the browser doesn't support using a gradient as background color, then the background color will be rendered as red.

[Directory with the micro-projects](http://oege.ie.hva.nl/~khushiz001/browsertech/)
