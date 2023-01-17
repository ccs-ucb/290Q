# Lab 1: Developer Tools and HTML Basics

## Developer Tools

### Text Editor
You will need a text editor for writing and editing code. If you already have one you like, feel free to use that. Otherwise, I reccommend [Sublime Text](https://www.sublimetext.com/) or [Visual Studio Code](https://code.visualstudio.com/). Download one of these programs to your computer. Both should be free.

### Browser
You are free to use whatever browser you like best, but I reccommend using [Google Chrome](https://www.google.com/chrome/) for this course. If you don't already have it, you can download it for free.

## HTML Basics

Using your text editor, create an empty file on your computer called `experiment.html`. Open the file with your text editor. Paste this code chunk into the file:

```html
<!DOCTYPE html>
<html>
  <head>
    <title>290Q Experiment</title>
  </head>
  <body></body>
</html>
```

Open `experiment.html` using Google Chrome. You should see a blank page. Check that the title of the page (shown in the tab on Chrome) matches your title. Try changing the title in the code block above and reloading the page.

We're going to gadually turn this black page into a simple personal website.

**Excersise:** change the title of the page to your name.

### Adding a heading

Let's add some text to the page. Content belongs in the `body` section of the page. Let's start by adding a `heading`. Add the following line into your code inside the `<body></body>` tags (tags delimit the start and end of a section): 

```html
<h1>Your Name</h1>
```  

Replace "Your Name" with your name. Now, your code should look like this:

```html
<!DOCTYPE html>
<html>
  <head>
    <title>290Q Experiment</title>
  </head>
  <body>
    <h1>Your Name</h1>
  </body>
</html>
```

Let's change the color of the heading. One simple way to do that is to add a style specification to the opening heading tag `<h1>`. Here's what that looks like:

```html
<h1 style="color: red;">Your Name</h1>
```

**Excersise:** change the color of your heading from red to [Berkeley Blue](https://brand.berkeley.edu/colors/) (the hex code for Berkeley Blue is: `#003262`).


### Adding an image

Let's add an image to the page. First, create a new directory (folder) in the same directory as your file `experiment.html` called `images`. Find a photo of yourself, and put it into the directory `images`. Ideally it should be a jpeg image (i.e. its filename should end `.jpg` or `.jpeg`). If you don't have a jpg image of yourself, look up how to convert an image into a jpg, or just download a jpeg image. 

Supposing your photo is called `photo.jpg`, you can add it to the body of page using the image tag:

```html
<img src="images/photo.jpg">
```

Depending on the size of your photo, it may come out much larger than you anticipate. You can control the display size of the image by adding width (and or height) specifications to the image tag (`<img src="images/photo.jpg" width="200">`). Adding this into the body of your page, the code as a whole should now look something like:

```html
<!DOCTYPE html>
<html>
  <head>
    <title>290Q Experiment</title>
  </head>
  <body>
    <h1 style="color: #003262;">Your name</h1>
    <img src="images/photo.jpg" width="200">
  </body>
</html>
```

### Adding some text
Let's add a brief bio to your page underneath your photo. First, let's add another heading. Previously we added the top-level largest heading (`h1`). Here, let's use the next level down the heading hierarchy (see e.g. [this page on headings](https://www.w3schools.com/html/html_headings.asp)), which would be `h2`:

```html
<h2>Biography</h2>
``` 

Underneath the `Biography` heading, let's add some regular text. In html, text is organized into headings and parahraphs. To add a paragraph, we can use the paragraph tags, `<p></p>`. Here's what that looks like:

```html
<p>Here is a brief description of me and my research interests.</p>
```

Putting these two things together and adding them into the body section after our photo, our code should now look something like this:

```html
<!DOCTYPE html>
<html>
  <head>
    <title>290Q Experiment</title>
  </head>
  <body>
    <h1 style="color: #003262;">Your name</h1>
    <img src="images/photo.jpg" width="200">
    <h2>Biography</h2>
    <p>Here is a brief description of me and my research interests.</p>
  </body>
</html>
```

### Using `Div` to group things togethor
The `<div></div>` tags ([see here for more](https://www.w3schools.com/tags/tag_div)) delimit a *division* or section in an HTML document. That's useful because you can wrap a bunch of content togethor into a `div`, and treat it as a unit. 

For example, you can apply styling transformations to the `div`, which will apply to any content contained within the `div`. The `div` tags work like other tags, so you can begin the div with opening tag `<div>` and close it with the closing tag `</div>`

Let's use a `div` to align the content we've created so far in the center of the page. We can use the `style` attribute of the div to achieve this. Here's a `div` containing our headings, image, and text:

```html
<div style="width: 500px; text-align: center; margin: 0 auto">
    <h1 style="color: #003262;">Your name</h1>
    <img src="images/photo.jpg" width="200">
    <h2>Biography</h2>
    <p>Here is a brief description of me and my research interests.</p>
</div>
  
```

Here's the crucial part:

```html
<div style="width: 500px; margin: 0 auto; text-align: center">
```

Notice that I added `style="..."` to the opening `div` tag. Within the style declaration, there are three parts. I specified the width (`width: 500px;`), the alignment of text within the div (`text-align: center;`) and the alignment of the div itself (`margin: 0 auto;`). 

This last piece (`margin: 0 auto;`) is a little less transpararent, using the `margin` attribute to control div alignment ([see here for more detail](https://www.w3schools.com/css/css_align.asp)). You don't need to understand this aspect in much detail right now. Note that each aspect of the style declartion was seperated by a semicolon.   

So here's the code in full so far:

```html
<!DOCTYPE html>
<html>
  <head>
    <title>290Q Experiment</title>
  </head>
  <body>
    <div style="width: 500px; margin: 0 auto; text-align: center">
        <h1 style="color: #003262;">Your name</h1>
        <img src="images/photo.jpg" width="200">
        <h2>Biography</h2>
        <p>Here is a brief description of me and my research interests.</p>
    </div>
  </body>
</html>
```

### Text formatting and hyperlinks
You can edit many properties of the text using html. See [this page](https://www.w3schools.com/html/html_formatting.asp) for some examples. For instance, you can create bold text by using the `<b></b>` tags, or italic using `<i></i>` tags. You can create a line break using `<br>`, or add a horizontal rule line using `<hr>`. 

You can add links to text using the `<a></a>` tags. The syntax looks like:

```html
<a href="www.myurl.com">Text goes here.</a>
```
You can use these hyperlink tags for linking to other websites and also for creating `mailto` links, which open the mail client to send an email when clicked. Below is an example using a few of these tricks:

```html
<p>I am a member of the <a href="https://psychology.berkeley.edu/">Psychology department</a> at <a href="https://www.berkeley.edu/">UC Berkeley</a>. You can write to me at: <a href="mailto:wdt@berkeley.edu">wdt@berkeley.edu</a>.</p> 
<p>I support <b>open science</b>.<br>I also support <i>preregistration</i> practices.</p>
<hr>
``` 

### Comments
You can add comments to your code using the syntax `<!-- Comment goes here -->`. Let's add comments to the codeblocks we have created so far. Here's the code in full:

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Bill Thompson</title>
  </head>

  <!-- content goes inside the body -->
  <body>

    <!-- wrap content in a div to apply styling (e.g. centering) to everything inside -->
    <div style="width: 500px; margin: 0 auto; text-align: center">
        
        <!-- Largest heading -->
        <h1 style="color: #003262;">Bill D. Thompson</h1>
        
        <!-- include an image -->
        <img src="images/photo.jpg" width="200">
        
        <!-- next largest heading (there are more: h3, h4, ...)  -->
        <h2>Biography</h2>

        <!-- Text goes inside paragraphs -->
        <p>Here is a brief description of me and my research interests.</p>
        <p>I am a member of the <a href="https://psychology.berkeley.edu/">Psychology department</a> at <a href="https://www.berkeley.edu/">UC Berkeley</a>. You can write to me at: <a href="mailto:wdt@berkeley.edu">wdt@berkeley.edu</a>.</p> 
        <p>I support <b>open science</b>.<br>I also support <i>preregistration</i> practices.</p>

        <!-- add a horizontal rule at the bottom of the page -->
        <hr>
    </div>
  </body>
</html>
```

**Excersise:** Add a new `Skills` section to your page listing some of the skills you would like to have (or have already). Use text formatting to highlight the skills you are most interested in. Alternatively, add a new `Publications` section to your page listing a publication (this can be a made up article if you don't have one already!).  

