### Version 2.1.5 - Nov 1, 2015

- **Header** - Sub headers now force `display: block` [#3020](https://github.com/Semantic-Org/Semantic-UI/issues/3020)

#### Bugs

- **Header** - Fixed `attached header` to have the correct bottom border on `top attached` and `attached` variations. [#2798](https://github.com/Semantic-Org/Semantic-UI/issues/2798)
- **Header** - Fixed issue with em sizing of `chubby` and `bookish` header themes appearing too large

### Version 2.0.0 - June 30, 2015

- **Headers** - Added new header type `sub header`, useful for displaying small headers alongside text content. See examples [in the header docs](http://www.semantic-ui.com/elements/header.html#sub-headers)
- **Dropdown** - Fixes issue with headers disappearing inside of `ui dropdown` when nested in `ui menu`
- **Label** - Labels inside `header` now vertical align better by accounting for line height offset
- **Message** - Close icon position adjusted to align with headers
- **Header/Table/Divider** - These components now pull border color defaults from `site.variables` instead of using their own values
- **Table** - Table header colors and padding defaults have been slightly adjusted

### Version 1.11.6 - March 27, 2015

- **Menu/Dropdown** - Fix dropdown headers disappearing inside menus

### Version 1.11.2 - March 6, 2015

- **Header** - Labels inside headers have been slightly increased in size

### UI Changes

- **Headers** - Headers can now contain images alongside text, added examples to docs

### Version 1.8.0 - January 23, 2015

- **Header** - Content headers now inherit `@h1-h6` sizes from `site.variables`
- **Header** - Sub headers now adjust in size depending on header size, added new variables for subheader resizing

### Version 1.5.0 - December 30, 2014

- **List** - Fixed bug when using ``ui icon button`` or ``ui icon header`` causing element to receive icon formatting

### Version 1.0.0 - November 24, 2014

- **Header / Icon** - Inverted headers and icons no longer invert background colors, but instead use a lighter version of colors more legible on dark backgrounds. Inverted circular icons, still however invert the color of the circle.
- **Dropdown** - Many new content types now work inside dropdowns, headers, dividers, images, inputs, labels and more
- **Header** - Linked headers now receive link colors

### Version 0.9.6 - Dec 04, 2013

- **Header, Grid, Segment** - Adds justified alignment

### Version 0.9.4 - Nov 24, 2013

- **Sidebar** - Typo in sidebar header (Thanks slobo)

### Version 0.9.0 - Nov 5, 2013

- **Header** - Fixes alignment of solo icons in headers

### Version 0.7.0 - Oct 22, 2013

- **List** - Celled tables now have celled table headers
- **Header** - Block header now uses RGBA instead of solid color by default
- **Table** - Table headers are now darker to increase contrast with rainbow striped rows

### Version 0.3.5 - Oct 2, 2013

- Fixes header content display in icon headers

### Version 0.3.4 - Oct 2, 2013

- Centering of content in icon header

### Version 0.3.3 - Oct 2, 2013

- Headers and lists with icons now do not break with multiline content

### Version 0.1.0 - Sep 25, 2013