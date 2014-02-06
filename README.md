# Slinky.js #

Create beautiful scrolling driven navigation lists with stacking headers that remain visible at all times. Scroll around on the [plugin homepage](http://slinky.iclanzan.com) to see it in action.

_Slinky is currently implemented as a jQuery plugin but if there is enough demand I might write a standalone version too._

## Getting Started ##

Download the [production version][min] or the [development version][max] and include it after jQuery. Then just call `$('.nav').slinky()` for example to enable Slinky on all elements with a `nav` class.

[min]: https://raw.github.com/iclanzan/slinky/master/dist/jquery.slinky.min.js
[max]: https://raw.github.com/iclanzan/slinky/master/dist/jquery.slinky.js

### Example ###

A minimal HTML structure for Slinky to work with can look something like this:

```html
<div class="nav">
  <div class="scroller">
    <section>
      <header>First Header</header>
      <ul>
        <li>item</li>
        <li>item</li>
      </ul>
    </section>
    <section>
      <header>Second Header</header>
      <p>Some content</p>
    </section>
    <!-- more sections here -->
  </div>
</div>
```

And the accompanying CSS:

```CSS
.nav {
  position: relative;
  height: 400px;
  overflow: hidden;
}

.scroller {
  height: 100%;
  overflow: auto;
}
```

Slinky doesn’t make any assumptions about the tags and classes you are using but it does expect to find an element with hidden overflow wrapped around a scrollable element. Inside of it content should be split into sections. The first child of each section is considered to be the header.

## Credits ##

Thanks to [@callmevlad](https://twitter.com/callmevlad) for the idea!

## Release History ##

+ **v0.1.1 (2014-02-06)** Fixed rendering glitches on high density screens.
+ **v0.1.0 (2014-01-31)** Initial version
