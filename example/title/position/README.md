# myt-pie-chart
Simple pie chart library with D3

# Title.Position Properties

## x

  _`pie.title.position.setX(int)` - Optional, defaults to 150._

```JavaScript
pie.title.position.setX(int); // Sets the x-position of the title.
pie.title.position.getX();       // Returns the x-position of the title.
```
# y

  _`pie.title.position.setY(int)` - Optional, defaults to 150._

```JavaScript
pie.title.position.setY(int); // Sets the y-position of the title.
pie.title.position.getY();       // Returns the y-position of the title.
```
# dx

  _`pie.title.position.setDX(int)` - Optional, defaults to null._

```JavaScript
pie.title.position.setDX(int); // Sets the x-offset of the title.
pie.title.position.getDX();       // Returns the x-offset of the title.
```
# dy

  _`pie.title.position.setDY(int)` - Optional, defaults to null._

```JavaScript
pie.title.position.setDY(int); // Sets the y-offset of the title.
pie.title.position.getDY();       // Returns the y-offset of the title.
```

## get Position

```JavaScript
pie.title.position.getPosition() // Returns the properties of the title.position object

// #=> {
//   x: ..,
//   y: ..,
//   dx: ..,
//   dy: ..
// };
```

## Examples

- example_position.html
![example_position](https://s10.postimg.org/ccnk3vep5/example_position.png)
