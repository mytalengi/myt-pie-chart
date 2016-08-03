
# Graph properties

## Instantiate new chart

```JavaScript
var pie = mytPieChart.newChart(); // Creates and returns a new instance of the chart object.
```

## Set data, get data

_`setData(array)` - Required._

```JavaScript
var data = [{
  name: 'Users',      // Required. {string} - Data entry name.
  value: 28819,       // Required. {int}    - Data entry value.
  bgColor: '#747485', // Optional. {string} - defaults to ~random color.
  color: 'green'      // Optional. {string} - defaults to black.
}];

pie.setData(data);    // Binds the data to the chart.
pie.getData();        // Returns the chart data object.
```

## Set width, get width

_`setWidth(int)` - Optional, defaults to 450._

```JavaScript
pie.setWidth(int);    // Sets the width of the SVG object, defaults to 450.
pie.getWidht();       // Returns the width of the SVG object.
```

## Set height, get height

_`setHeight(int)` - Optional, defaults to 300._

```JavaScript
pie.setHeight(int);   // Sets the height of the SVG container.
pie.getHeight();      // Returns the height of the SVG container.
```

## Set container, get container

_`setContainer(str)` - Optional, defaults to `body`._

```JavaScript
pie.setContainer(str); // Sets the SVG container id.
pie.getContainer();       // Returns the SVG container id.
```

## Set ID, get ID

_`setID(str)` - Optional, defaults to randomly generated string._

```JavaScript
pie.setId(str); // Sets the SVG id.
pie.getId();       // Returns the SVG id.
```

## Display graph

_`display()` - Required, renders graph. If the graph exists already it executes `update()` else it generates a new graph._

```JavaScript
pie.display();
```

## Update graph

_`update()` - Optional, updates graph. Updates the graph and some of it's properties._

```JavaScript
pie.update();
```

## Delete graph

_`delete()` - Optional, deletes graph. Removes the svg element from the container, useful if
you need to update some core properties._

```JavaScript
pie.delete();
```

## Restart graph

_`restart()` - Optional, deletes and renders a new graph. First executes `delete()` and after it `display()`._

```JavaScript
pie.restart();
```

# Chart properties

[Chart properties documentation](chart/)

# Tooltip properties

[Tooltip properties documentation](tooltip/)

# Title properties

[Title properties documentation](title/)

# Events properties

[Events properties documentation](events/)
