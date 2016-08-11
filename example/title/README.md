# myt-pie-chart
Simple pie chart library with D3

# Chart.Font Properties

## Family

  _`pie.chart.font.setFamily(string)` - Optional, defaults to "'Arial', Helvetica, sans-serif"._

```JavaScript
pie.chart.font.setFamily(str); // Sets the font-family of the chart.
pie.chart.font.getFamily();       // Returns the font-family of the chart.
```

## Size

  _`pie.chart.font.setSize(int)` - Optional, defaults to 14._

```JavaScript
pie.chart.font.setSize(int); // Sets the font-size of the chart.
pie.chart.font.getSize();       // Returns the font-size of the chart.
```
## Size Type

  _`pie.chart.font.setSizeType(str)` - Optional, defaults to "px"._

```JavaScript
pie.chart.font.setSizeType(str); // Sets the size type of the chart font.
pie.chart.font.getSizeType();       // Returns the size type of the chart font.
```
## Variant

  _`pie.chart.font.setVariant(str)` - Optional, defaults to "normal"._

```JavaScript
pie.chart.font.setVariant(str); // Sets the font-variant of the chart.
pie.chart.font.getVariant();       // Returns the font-variant of the chart.
```
## Weight

  _`pie.chart.font.setWeight(obj)` - Optional, defaults to "normal"._

```JavaScript
pie.chart.font.setWeight(obj); // Sets the font-weight of the chart.
pie.chart.font.getWeight();       // Returns the font-weight of the chart.
```

## Style

  _`pie.chart.font.setStyle(str)` - Optional, defaults to "normal"._

```JavaScript
pie.chart.font.setStyle(str); // Sets the font-style of the chart.
pie.chart.font.getStyle();       // Returns the font-style of the chart.
```

## get Font

```JavaScript
pie.chart.font.getFont() // Returns the properties of the chart.font object

// #=> {
//   family: ..,
//   size: ..,
//   sizeType: ..,
//   variant: ..,
//   weight: ..,
//   style: ..
// };
```
