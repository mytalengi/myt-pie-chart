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
var pie = mytPieChart.newChart().setData(data);
```

Configure your chart.

```JavaScript
pie.setWidth(400)             // Required. {int}    - default unit is 'px'.
   .setHeight(350)            // Required. {int}    - default unit is 'px'.
   .setContainerId('my-id');  // Optional. {string} - ID if an existing DOM element used as container, defaults to 'body'.

// Additional options, see full options support in documentation.
pie.setId('my-chart-id')      // Optional. {string} - ID to be used by chart elements, defaults to a generated ID.
pie.chart.font.setSize(18)    // Optional. {int}    - Size of font used in chart.
pie.tooltip.font.setSize(12); // Optional. {int}    - Size of font used in tooltip.
```

Render the chart.

```JavaScript
pie.display();
```
In case you want to redraw the chart, you may call `pie.display();` again.

```JavaScript
pie.display();

// Do some data changes, like Ajax calls.
data = someNewData();
pie.setData(data);

// Re-render the chart with new data.
pie.display();
```

---

## Examples and in depth explanations

For more info, see [examples and complete API documentation](example/).
