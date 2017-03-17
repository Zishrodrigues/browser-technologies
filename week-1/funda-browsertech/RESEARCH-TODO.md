# Progressive enhancement/accessibility tests and todo's

## 1.No images

### Progressive enhancement/accessibility

My web app relies heavily on the use of images. I tested what would happen if a user either couldn't load the images or chose to disable them using the browser.

My web app without images:

![Funda app screenshot - no images](screenshots/no-images-1.jpg)

As we can see the app breaks in a serieus way. All that remains is the selection border around the boxes. Due to a height setting the boxes still keep their original size and the next buttons remains. The functionality remains intact - but without the images the user really has no idea what they're supposed to do and what their selection means. This has breaking effect on accessibility and it is clear that my progressive enhancement could've been better.

### TO DO (fixes)

The best way to fix this issue is to add fallback text to the images which let's the user know what value is behind each image. My app's concept is all about visualizing and choosing based on how you feel, but in the case of no images it's wise to have a fallback, even if it fundamentally changes the way my app works.

An example of how this looks after implementing it:

![Funda app screenshot - no images but al text](screenshots/no-images-2.jpg)

## 2.Custom fonts

### Progressive enhancement/accessibility

My Funda app uses a standard sans-serif font. Turning off custom fonts means nothing changes for me. I've also avoided using any kind of icon font. If I did however user custom/icon fonts then the results could be a disjointed typography and no icons.

![Funda app screenshot4](screenshots/funda-4.jpg)

### TO DO (fixes)

Had I used custom/icon fonts then I'd make sure to have a fallback in place. Using the standard sans-serif font in place of my custom sans-serif font and adding images for icons instead of a font.

## 3.No Javascript

## Progressive enhancement/accessibility.

This is where things really start to get icky. My Funda app is a one page web app which means I used Javascript routes to get from 'page' to 'page'. Turning off Javascript means that i'm stuck on a view and can't continue further into the app. Every image choice adds a parameter to the api url and this doesn't happen without my Javascript. The lay-out does remain instact because it's built using html and css only.

![Funda app screenshot](screenshots/funda-1.jpg)

## TO DO (fixes)

The best way to fix a fall back for someone who doesn't use Javascript is to change the app from a one pager to a normal website. Each click links to the next page and sends a submit form with it. This way users can still continue into the app. It's also wise to add a message stating that Javascript enabled gives users the best experience.

## 4.Color

## Progressive enhancement/accessibility.

My Funda app has a strong contrast between elements. If a text is white, than the background is a strong orange or blue. If the text is colored and I use a white background. Testing of several settings like colorblind mode and inverted colors(broken screens) the results are that the app is still quite readable. The main issue is that images lose some of their clarity and feel. My app is about getting a feel for a certain environment but different colors can have a strong impact on how something feels.

![Funda app screenshot - colors](screenshots/colors-1.jpg)

## TO DO (fixes)

A good way to deal with the risk of images losing their feel because of broken or different colors is to add a small description. So an image of a quiet neighborhood could have the description of "Calm, quiet neighborhood". It's also wise to make sure I keep the contrast between text, buttons and other elements and their background clear.

## 5.Broadband internet

## Progressive enhancement/accessibility.

When testing on a regular 2g network with 300ms the page takes up to 40 seconds to load because of the high use  of images. This means that the app isn't optimized for mobile devices that aren't on wifi or a good cellular connection.

![Funda app screenshot - network](screenshots/broadband.jpg)

## TO DO (fixes)

A sure fire way to fix the loading time it so compress images. Reduce their pixel ratio and quality to get a better file size. A blurring load could also help the perceived performance, the users get an idea of what they're waiting for.

## 6.Cookies

## Progressive enhancement/accessibility.

## TO DO (fixes)
