# HTML - Webp image

Webp is a relativly new image format. It has a huge benefit on file size and makes loading pages much faster. As with all new features it's not supported by all browser yet. Using a <picture> element we can create a fallback for browser by using a regular jpg or png.

## Example code

```
<picture>
  <source srcset="owl.jpg" type="image/webp">
  <img src="owl.jpg" alt="Owl">
</picture>

```
