# myt-pie-chart
Simple pie chart library with D3

# Tooltip.Position Properties

## x

  _`pie.tooltip.position.setX(int)` - Optional, defaults to 281.25._

```JavaScript
pie.tooltip.position.setX(int); // Sets the x-position of the tooltip.
pie.tooltip.position.getX();       // Returns the x-position of the tooltip.
```
## y

  _`pie.tooltip.position.setY(int)` - Optional, defaults to 30._

```JavaScript
pie.tooltip.position.setY(int); // Sets the y-position of the tooltip.
pie.tooltip.position.getY();       // Returns the y-position of the tooltip.
```
## dx

  _`pie.tooltip.position.setDX(int)` - Optional, defaults to null._

```JavaScript
pie.tooltip.position.setDX(int); // Sets the x-offset of the tooltip.
pie.tooltip.position.getDX();       // Returns the x-offset of the tooltip.
```
## dy

  _`pie.tooltip.position.setDY(int)` - Optional, defaults to null._

```JavaScript
pie.tooltip.position.setDY(int); // Sets the y-offset of the tooltip.
pie.tooltip.position.getDY();       // Returns the y-offset of the tooltip.
```
## name x

  _`pie.tooltip.position.setNameX(int)` - Optional, defaults to 4._

```JavaScript
pie.tooltip.position.setNameX(int); // Sets the x-position of the tooltip name field.
pie.tooltip.position.getNameX();       // Returns the x-position of the tooltip name field.
```
## name y

  _`pie.tooltip.position.setNameY(int)` - Optional, defaults to 14._

```JavaScript
pie.tooltip.position.setNameY(int); // Sets the y-position of the tooltip name field.
pie.tooltip.position.getNameY();       // Returns the y-position of the tooltip name field.
```
## value x

  _`pie.tooltip.position.setValueX(int)` - Optional, defaults to 4._

```JavaScript
pie.tooltip.position.setValueX(int); // Sets the x-position of the tooltip value field.
pie.tooltip.position.getValueX();       // Returns the x-position of the tooltip value field.
```

## value y

  _`pie.tooltip.position.setValueY(int)` - Optional, defaults to 31._

```JavaScript
pie.tooltip.position.setValueY(int); // Sets the y-position of the tooltip value field.
pie.tooltip.position.getValueY();       // Returns the y-position of the tooltip value field.
```

## get Position

```JavaScript
pie.tooltip.position.getPosition() // Returns the properties of the tooltip.position object

// #=> {
//   x: ..,
//   y: ..,
//   dx: ..,
//   dy: ..
// };
```
