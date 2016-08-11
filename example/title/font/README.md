# myt-pie-chart
Simple pie chart library with D3

# Title.Font Properties

## Family

  _`pie.title.font.setFamily(string)` - Optional, defaults to "'Arial', Helvetica, sans-serif"._

```JavaScript
pie.title.font.setFamily(str); // Sets the font-family of the title.
pie.title.font.getFamily();       // Returns the font-family of the title.
```

## Size

  _`pie.title.font.setSize(int)` - Optional, defaults to 14._

```JavaScript
pie.title.font.setSize(int); // Sets the font-size of the title.
pie.title.font.getSize();       // Returns the font-size of the title.
```
## Size Type

  _`pie.title.font.setSizeType(str)` - Optional, defaults to "px"._

```JavaScript
pie.title.font.setSizeType(str); // Sets the size type of the title font.
pie.title.font.getSizeType();       // Returns the size type of the title font.
```
## Variant

  _`pie.title.font.setVariant(str)` - Optional, defaults to "normal"._

```JavaScript
pie.title.font.setVariant(str); // Sets the font-variant of the title.
pie.title.font.getVariant();       // Returns the font-variant of the title.
```
## Weight

  _`pie.title.font.setWeight(obj)` - Optional, defaults to "normal"._

```JavaScript
pie.title.font.setWeight(obj); // Sets the font-weight of the title.
pie.title.font.getWeight();       // Returns the font-weight of the title.
```

## Style

  _`pie.title.font.setStyle(str)` - Optional, defaults to "normal"._

```JavaScript
pie.title.font.setStyle(str); // Sets the font-style of the title.
pie.title.font.getStyle();       // Returns the font-style of the title.
```

## get Font

```JavaScript
pie.title.font.getFont() // Returns the properties of the title.font object

// #=> {
//   family: ..,
//   size: ..,
//   sizeType: ..,
//   variant: ..,
//   weight: ..,
//   style: ..
// };
```

## Examples

- example_font.html
![example_font](https://s31.postimg.org/cdxc5leaz/example_font.png)
