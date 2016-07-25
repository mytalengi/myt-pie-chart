# myt-pie-chart
Simple pie chart library with D3

# Tooltip.Font Properties

## Family

  _`pie.tooltip.font.setFamily(string)` - Optional, defaults to "'Arial', Helvetica, sans-serif"._

```JavaScript
pie.tooltip.font.setFamily(str); // Sets the font-family of the tooltip.
pie.tooltip.font.getFamily();       // Returns the font-family of the tooltip.
```

## Size

  _`pie.tooltip.font.setSize(int)` - Optional, defaults to 14._

```JavaScript
pie.tooltip.font.setSize(int); // Sets the font-size of the tooltip.
pie.tooltip.font.getSize();       // Returns the font-size of the tooltip.
```
## Size Type

  _`pie.tooltip.font.setSizeType(str)` - Optional, defaults to "px"._

```JavaScript
pie.tooltip.font.setSizeType(str); // Sets the size type of the tooltip font.
pie.tooltip.font.getSizeType();       // Returns the size type of the tooltip font.
```
## Variant

  _`pie.tooltip.font.setVariant(str)` - Optional, defaults to "normal"._

```JavaScript
pie.tooltip.font.setVariant(str); // Sets the font-variant of the tooltip.
pie.tooltip.font.getVariant();       // Returns the font-variant of the tooltip.
```
## Weight

  _`pie.tooltip.font.setWeight(obj)` - Optional, defaults to "normal"._

```JavaScript
pie.tooltip.font.setWeight(obj); // Sets the font-weight of the tooltip.
pie.tooltip.font.getWeight();       // Returns the font-weight of the tooltip.
```

## Style

  _`pie.tooltip.font.setStyle(str)` - Optional, defaults to "normal"._

```JavaScript
pie.tooltip.font.setStyle(str); // Sets the font-style of the tooltip.
pie.tooltip.font.getStyle();       // Returns the font-style of the tooltip.
```

## get Font

```JavaScript
pie.tooltip.font.getFont() // Returns the properties of the tooltip.font object

// #=> {
//   family: ..,
//   size: ..,
//   sizeType: ..,
//   variant: ..,
//   weight: ..,
//   style: ..
// };
```
