# Lab 1: Developer Tools and HTML Basics

A whirlwind introduction to the basics of HTML and the tools you will need to write and debug HTML code. 

<img src="page/images/dalle_surreal.png" alt="coding" width="250"/>
<!-- Image create by [DALL-E](https://labs.openai.com/) -->

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

We're going to gadually turn this black page into a simple personal website.

**Excersise:** change the title of the page to your name.

**Checkpoint 1:** Open `experiment.html` using Google Chrome. You should see a blank page. Check that the title of the page (shown in the tab on Chrome) matches your title. Try changing the title in the code block above and reloading the page.


### Adding a heading

Let's add some text to the page. Content belongs in the `body` section of the page. Let's start by adding a `heading`. Add the following line into your code between the `<body></body>` tags (tags delimit the start and end of a section): 

```html
  <body>
    <h1>Your Name</h1>
  </body>
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
<h2>Research Interests</h2>
``` 

Underneath the `Research Interests` heading, let's add some regular text. In html, text is organized into headings and parahraphs. To add a paragraph, we can use the paragraph tags, `<p></p>`. Here's what that looks like:

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
    <h2>Research Interests</h2>
    <p>Here is a brief description of me and my research interests.</p>
  </body>
</html>
```

**Checkpoint 2:** Open your page in chrome. If everything has worked, you should have your name as the title, a heading showing your name, a picture of you, and a section underneath the picture with the heading `Research Interests` and some text description of your research interests.  

### Using `Div` to group things togethor
The `<div></div>` tags ([see here for more](https://www.w3schools.com/tags/tag_div)) delimit a *division* or section in an HTML document. That's useful because you can wrap a bunch of content togethor into a `div`, and treat it as a unit. 

For example, you can apply styling transformations to the `div`, which will apply to any content contained within the `div`. The `div` tags work like other tags, so you can begin the div with opening tag `<div>` and close it with the closing tag `</div>`

Let's use a `div` to align the content we've created so far in the center of the page. We can use the `style` attribute of the div to achieve this. Here's a `div` containing our headings, image, and text:

```html
<div style="width: 500px; text-align: center; margin: 0 auto">
    <h1 style="color: #003262;">Your name</h1>
    <img src="images/photo.jpg" width="200">
    <h2>Research Interests</h2>
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
        <h2>Research Interests</h2>
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

**Excersise:** Add the code above into you page and edit it to include a link to the webpage of whatever lab you are a part of, and replace my email with your email address. 

### Comments
Comments can help you identify what each piece of code does. They're ignored by the browser, so they don't interfere with the html. You can add comments to your code using the following syntax: `<!-- Comment goes here -->`. Let's add comments to the codeblocks we have created so far. Here's the code in full:

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
        <h2>Research Interests</h2>

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

**Excersise:** Add a new `Skills` section to your page listing some of the skills you have (or would like to have). For extra points: list some skills using a bullet point list (youwill need to look up how to do lists in html: see e.g. [this webpage](https://www.w3schools.com/html/html_lists.asp)).

**Checkpoint 3:** Your webpage should look fairly good now. You should have a title, a heading, a photo, a research description, your contact information, and a list of your skills. 

## CSS Basics

There's another way to change the style (e.g. color, centering, font size etc.) of your content. In the code above, we edited the style of the content directly inside html tags (e.g. here `<div style="width: 500px; margin: 0 auto; text-align: center">`). This is fine for simple cases, but can become unwieldy in more complex websites. Instead, you can use **CSS** (see [this page](https://www.w3schools.com/css/css_intro.asp) for an introduction).

### CSS syntax
Suppose you want to make any text contained in a pragraph green. You can do this by adding some CSS code to the `<head></head>` of your HTML file. Here's a simple example of CSS code to turn paragraph text green:

```css
p {
  color: green;
}
```

Here, we're choosing to apply styling to paragraphs by selecting the `p` elements, and declaring the value `green` for the property `color`. Here's an explanation of the syntax taken from [this page](https://www.w3schools.com/css/css_syntax.asp).

![css explained](page/images/css_explained.jpg "css")

From the tutorial page:
>The selector points to the HTML element you want to style.

>The declaration block contains one or more declarations separated by semicolons.

>Each declaration includes a CSS property name and a value, separated by a colon.

>Multiple CSS declarations are separated with semicolons, and declaration blocks are surrounded by curly braces.


### Adding CSS to the HTML page

We can add the CSS code above to our webpage by enclosing it in `<style></style>` tags and adding it to the `head` of our HTML document. Here's the resulting code in full:


```html
<!DOCTYPE html>
<html>
  <head>
    <title>Bill Thompson</title>
    <style type="text/css">
      p {
        color: green;
      }
    </style>
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
        <h2>Research Interests</h2>

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

**Checkpoint 4:** Open or reload your page in Chrome. The text in your `research interests` section and any other `p` elements should now be green. It won't look great, but you will know that the CSS is working!

**Excersise:** Instead of adding CSS code to the head of your HTML document, you can add it to a seperate new file (e.g. `my_custom_styling.css`), and then import the file in the head of your document, using code that looks like this: 

```html
<head>
  <link rel="stylesheet" href="my_custom_styling.css">
</head>
```

See [this page](https://www.w3schools.com/css/css_howto.asp) for a tutorial on the different ways of including CSS in your HTML document.

--



