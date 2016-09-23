# D3 Pie Chart

_myt-pie-chart_

Simple pie chart library with D3

## Prerequisites

If you're installing with NPM, you need NPM installed. Otherwise you can checkout the library from GitHub and use directly.

## Getting started:

- Install via the npm `npm install myt-pie-chart --save`.
- Either include the library with a script tag or require it _(RequireJS, AMD, Browserify etc.)_.

## Usage

If using script tags.

```HTML
<script src="./node_modules/path/to/d3.js"></script>
<script src="./node_modules/myt-pie-chart/myt-pie-chart.js"></script>
```

If requiring.

```JavaScript
var d3 = require('d3');
var mytPieChart = require('myt-pie-chart');
```

Prepare your chart data, it may look something like this:

```JavaScript
var data = [{
  name: 'Users',      // Required. {string} - Data entry name.
  value: 28819,       // Required. {int}    - Data entry value.
  bgColor: '#747485', // Optional. {string} - defaults to ~random color.
  color: 'green'      // Optional. {string} - defaults to black.
}];
```

Create a pie chart instance, then assign your data to it.

```JavaScript
var pie = mytPieChart.newChart('container-id').setData(data);
```

Configure your chart.

```JavaScript
// Chart inherits the size of the container element.

// Additional options, see full options support in documentation.
pie.tooltip = true;    // Optional. {boolean}    - To show the tooltip, defaults to false.
pie.tooltipId = 'tooltipContainerId'; // Optional. {string}    - Assign the element to be used as tooltip.
```

Render the chart.

```JavaScript
pie.display();
```
In case you want to redraw the chart, you may call `pie.restart();`.

```JavaScript
pie.display();

// Do some data changes, like Ajax calls.
data = someNewData();
pie.setData(data);

// Re-render the chart with new data.
pie.update(); // Update only works for data changes, if you want to redraw the chart use 'pie.restart()'
```

---

## Examples and in depth explanations

For more info, see [examples and complete API documentation](example/).
