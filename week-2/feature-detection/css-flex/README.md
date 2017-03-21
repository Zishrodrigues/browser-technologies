# CSS - Flex

Flex is getting better support as time goes on. These days all modern browsers and their newer versions support it. However it's wise to keep in mind that some older browsers don't. Here's an example of a simple fallback to deal with that.

## Example code

```

div {
    display: block;
    flex-direction: row;
    display: flex;
}

div section {
    width:10em;
    height: 10em;
    display: inline-block;
}

```
If the browser doesn't support flexbox than it will fall back to using display: inline-block.
