(function (root, factory) {
  if(typeof define === "function" && define.amd) {
    // If AMD is used
    define(["myt-pie-chart_"], function(mytPieChart){
      return (root.mytPieChart = factory(mytPieChart));
    });
  } else if(typeof module === "object" && module.exports) {
    // If require is used
    module.exports = (root.mytPieChart = factory(require("myt-pie-chart_")));
  } else {
    root.mytPieChart = factory(root.mytPieChart);
  }
}(this, function(mytPieChart){

  mytPieChart = {

    newChart: function() {

      id = this.randomId();
      console.log("Initializing id with: " + id);

      return {

        data: [],
        // Data to be displayed in the chart_
        setData: function(d){
          this.data = d;
          this.graphics.data = d;

          return this;
        },
        getData: function(){
          return this.data;
        },

        width: 450,
        // Width of the SVG element
        setWidth: function(w){
          this.width = w;
          this.chartRadius = Math.min(this.width, this.height) / 2;
          this.chartPosition = { x: this.width / 3, y: this.height / 2};

          return this;
        },
        getWidth: function(){
          return this.width;
        },

        height: 300,
        // Height of the SVG element
        setHeight: function(h){
          this.height = h;
          this.chartRadius = Math.min(this.width, this.height) / 2;
          this.chartPosition = { x: this.width / 3, y: this.height / 2};

          return this;
        },
        getHeight: function(){
          return this.height;
        },

        container: 'body',
        // Container for the SVG element
        // Id is expected to be passed else
        // it won't work as expected
        // Defaults to 'body'
        setContainer: function(c){
          this.container = c;

          return this;
        },
        getContainer: function(){
          return this.container;
        },

        id: id,
        // Id of the SVG element
        // Chart id --> id + '_chart'
        // Tooltip id --> id + '_tooltip'
        setId: function(i){
          this.id = i;
          this.chart.setId(i);
          this.tooltip.setId(i);

          return this;
        },
        getId: function(){
          return this.id;
        },

        chart: {

          id: id + '_chart',
          // Id of the chart element
          setId: function(i){
            this.id = i + '_chart';

            return this;
          },
          getId: function(){
            return this.id;
          },

          font: {

            family: "'Arial', Helvetica, sans-serif",
            // Font family used to display tooltip text
            setFamily: function(f){
              this.family = f;
              return this;
            },
            getFamily: function(){
              return this.family;
            },

            size: 14,
            // Font size to display tooltip text
            setSize: function(s){
              this.size = s;

              return this;
            },
            getSize: function(){
              return this.size;
            },

            sizeType: "px",
            // Font size type, either 'px','em' or '%'
            setSizeType: function(st){
              this.sizeType = st;

              return this;
            },
            getSizeType: function(){
              return this.sizeType;
            },

            variant: "normal",
            // Font variant, either 'normal' or 'small-caps'
            setVariant: function(v){
              this.variant = v;

              return this;
            },
            getVariant: function(){
              return this.variant;
            },

            weight: "normal",
            // Font weight, either 'normal', 'bold', 'bolder', 'lighter' or number-value
            setWeight: function(w){
              this.weight = w;

              return this;
            },
            getWeight: function(){
              return this.weight;
            },

            style: "normal",
            // Font style, either 'normal', 'italic' or 'oblique'
            setStyle: function(s){
              this.style = s;

              return this;
            },
            getStyle: function(){
              return this.style;
            },

            // Returns all properties of this font
            getFont: function(){
              return {
                family: this.family,
                size: this.size,
                sizeType: this.sizeType,
                variant: this.variant,
                weight: this.weight,
                style: this.style
              }
            }

          },

          position: {

            x: 150,
            setX: function(x){
              this.x = x;

              return this;
            },
            getX: function(){
              return this.x;
            },

            y: 150,
            setY: function(y){
              this.y = y;

              return this;
            },
            getY: function(){
              return this.y;
            },

            dx: null,
            setDX: function(dX){
              this.dx = dX;

              return this;
            },
            getDX: function(){
              return this.dx;
            },

            dy: null,
            setDY: function(dY){
              this.dy = dY;

              return this;
            },
            getDY: function(){
              return this.dy;
            },

            // Returns all position properties
            getPosition: function(){
              return {
                x: this.x,
                y: this.y,
                dx: this.dx,
                dy: this.dy
              }
            }

          },

          dimension: {

            radius: 150,
            // Width of tooltip rectangle
            setRadius: function(r){
              this.radius = r;

              return this;
            },
            getRadius: function(){
              return this.radius;
            },

            // Returns all dimension properties
            getDimension: function(){
              return {
                radius: this.radius
              }
            }

          },

          getChart: function(){
            return {
              id: this.id,
              font: this.font.getFont(),
              position: this.position.getPosition(),
              dimension: this.dimension.getDimension()
            }
          }

        },

        tooltip: {

          id: id + '_tooltip',
          // Id of the tooltip element
          setId: function(i){
            this.id = i + '_tooltip';

            return this;
          },
          getId: function(){
            return this.id;
          },

          font: {

            family: "'Arial', Helvetica, sans-serif",
            // Font family used to display tooltip text
            setFamily: function(f){
              this.family = f;
              return this;
            },
            getFamily: function(){
              return this.family;
            },

            size: 14,
            // Font size to display tooltip text
            setSize: function(s){
              this.size = s;

              return this;
            },
            getSize: function(){
              return this.size;
            },

            sizeType: "px",
            // Font size type, either 'px','em' or '%'
            setSizeType: function(st){
              this.sizeType = st;

              return this;
            },
            getSizeType: function(){
              return this.sizeType;
            },

            variant: "normal",
            // Font variant, either 'normal' or 'small-caps'
            setVariant: function(v){
              this.variant = v;

              return this;
            },
            getVariant: function(){
              return this.variant;
            },

            weight: "normal",
            // Font weight, either 'normal', 'bold', 'bolder', 'lighter' or number-value
            setWeight: function(w){
              this.weight = w;

              return this;
            },
            getWeight: function(){
              return this.weight;
            },

            style: "normal",
            // Font style, either 'normal', 'italic' or 'oblique'
            setStyle: function(s){
              this.style = s;

              return this;
            },
            getStyle: function(){
              return this.style;
            },

            // Returns all properties of this font
            getFont: function(){
              return {
                family: this.family,
                size: this.size,
                sizeType: this.sizeType,
                variant: this.variant,
                weight: this.weight,
                style: this.style
              }
            }

          },

          position: {

            x: 281.25,
            setX: function(x){
              this.x = x;

              return this;
            },
            getX: function(){
              return this.x;
            },

            y: 30,
            setY: function(y){
              this.y = y;

              return this;
            },
            getY: function(){
              return this.y;
            },

            dx: null,
            setDX: function(dX){
              this.dx = dX;

              return this;
            },
            getDX: function(){
              return this.dx;
            },

            dy: null,
            setDY: function(dY){
              this.dy = dY;

              return this;
            },
            getDY: function(){
              return this.dy;
            },

            // Returns all position properties
            getPosition: function(){
              return {
                x: this.x,
                y: this.y,
                dx: this.dx,
                dy: this.dy
              }
            }

          },

          dimension: {

            width: 150,
            // Width of tooltip rectangle
            setWidth: function(w){
              this.width = w;

              return this;
            },
            getWidth: function(){
              return this.width;
            },

            height: 35,
            // Height of tooltip rectangle
            setHeight: function(h){
              this.height = h;

              return this;
            },
            getHeight: function(){
              return this.height;
            },

            // Returns all dimension properties
            getDimension: function(){
              return {
                width: this.width,
                height: this.height
              }
            }
          },

          getTooltip: function(){
            return {
              id: this.id,
              font: this.font.getFont(),
              position: this.position.getPosition(),
              dimension: this.dimension.getDimension()
            }
          }

        },

        chart_: {
          svg: 'svgElement',
          pie: 'pieElement',
          arc: 'arcElement',
          labelArc: 'labelArcElement',
          tooltip: 'tooltipElement'
        },

        graphics: {
          data: null,
          chart: this.chart,
          tooltip: this.tooltip,
          pie: null,
          arc: null,
          svg: null,
          g: null,
          path: null,
          update: null
        },

        color: d3.scale.ordinal()
          .range([
            // Blue,     Green,     Yellow,     Purple,    Red,      Brown,     Pink,      Orange,    L.Blue,   L.Green
            "#ccccff", "#ccffcc", "#ffffcc", "#f2ccff", "#ffcccc", "#f2e6d9", "#ffccff", "#ffe0cc", "#ccffff", "#e6ffcc", // 1st layer at 90%
            "#b3b3ff", "#b3ffb3", "#ffffb3", "#ecb3ff", "#ffb3b3", "#ecd9c6", "#ffb3ff", "#ffd1b3", "#b3ffff", "#d9ffb3", // 2nd layer at 85%
            "#9999ff", "#99ff99", "#ffff99", "#e699ff", "#ff9999", "#e6ccb3", "#ff99ff", "#ffc299", "#99ffff", "#ccff99", // 3rd layer at 80%
            "#8080ff", "#80ff80", "#ffff80", "#df80ff", "#ff8080", "#dfbf9f", "#ff80ff", "#ffb380", "#80ffff", "#bfff80", // 4th layer at 75%
            "#6666ff", "#66ff66", "#ffff66", "#d966ff", "#ff6666", "#d9b38c", "#ff66ff", "#ffa366", "#66ffff", "#b3ff66", // 5th layer at 70%
            "#4d4dff", "#4dff4d", "#ffff4d", "#d24dff", "#ff4d4d", "#d2a679", "#ff4dff", "#ff944d", "#4dffff", "#a6ff4d", // 6th layer at 65%
            "#3333ff", "#33ff33", "#ffff33", "#cc33ff", "#ff3333", "#cc9966", "#ff33ff", "#ff8533", "#33ffff", "#99ff33", // 7th layer at 60%
            "#1a1aff", "#1aff1a", "#ffff1a", "#c61aff", "#ff1a1a", "#c68c53", "#ff1aff", "#ff751a", "#1affff", "#8cff1a", // 8th layer at 55%
            "#0000ff", "#00ff00", "#ffff00", "#bf00ff", "#ff0000", "#bf8040", "#ff00ff", "#ff6600", "#00ffff", "#80ff00", // 9th layer at 50%
            "#0000e6", "#00e600", "#e6e600", "#ac00e6", "#e60000", "#ac7339", "#e600e6", "#e65c00", "#00e6e6", "#73e600", // 10th layer at 45%
          ]),

        getProperties: function(){
          return {
            data: this.data,
            width: this.width,
            height: this.height,
            container: this.container,
            id: this.id,
            chart_: this.chart_
          }
        },


        display: function(){
          var id = this.id;
          var container = this.container == 'body' ? this.container : ('#' + this.container);
          var color = this.color;
          var chart = this.chart;
          var tooltip = this.tooltip;
          var data = this.data;
          console.log(data);

          this.graphics.data = this.data;

          console.log("Initial display values:");
          console.log(id);
          console.log(container);
          console.log(color);
          console.log(chart);
          console.log(tooltip);

          var pie = this.graphics.pie = d3.layout.pie()
              .value(function(d){
                console.log('Value');
                if(d.data){
                  console.log(d.data.value);
                  return d.data.value;
                }
                return d.value;
              })
              .sort(null);

          var arc = this.graphics.arc = d3.svg.arc()
              .innerRadius(chart.dimension.getRadius() - 100)
              .outerRadius(chart.dimension.getRadius() - 20);

          var svg = this.graphics.svg = d3.select(container).append("svg")
              .attr("width", this.width)
              .attr("height", this.height)
            .append("g")
              .attr("width", chart.dimension.getRadius())
              .attr("height", chart.dimension.getRadius())
              .attr("id", this.chart.getId())
              .attr("transform", "translate(" + chart.dimension.getRadius() + "," + chart.dimension.getRadius() + ")");

          var path = this.graphics.path = svg.selectAll("path");
          console.log('Initial path');
          console.log(path);

          this.graphics.update = function change() {
            console.log('Update');
            var data = this.data;
            var data0 = this.path.data(),
                data1 = pie(pie(data));

            path = path.data(data1, key);


            path.enter().append("path")
                .each(function(d, i) { this._current = findNeighborArc(i, data0, data1, key) || d;})
                .attr("fill", function(d) { return color(d.data.name); })
              .append("title")
                .text(function(d) { return d.data.name; });

            path.exit()
              .datum(function(d, i) { return findNeighborArc(i, data1, data0, key) || d; })
              .transition()
              .duration(750)
              .attrTween("d", arcTween)
              .remove();

            path.transition()
            .duration(750)
            .attrTween("d", arcTween);


            console.log(path);
          }

          function key(d) {
            if(!d)
              return null;

            return d.data.name;
          }

          function type(d) {
            d.value = +d.value;
            return d;
          }

          function findNeighborArc(i, data0, data1, key) {
            var d;
            return (d = findPreceding(i, data0, data1, key)) ? {startAngle: d.endAngle, endAngle: d.endAngle}
                : (d = findFollowing(i, data0, data1, key)) ? {startAngle: d.startAngle, endAngle: d.startAngle}
                : null;
          }

          // Find the element in data0 that joins the highest preceding element in data1.
          function findPreceding(i, data0, data1, key) {
            var m = data0.length;
            while (--i >= 0) {
              var k = key(data1[i]);
              for (var j = 0; j < m; ++j) {
                if (key(data0[j]) === k) return data0[j];
              }
            }
          }

          // Find the element in data0 that joins the lowest following element in data1.
          function findFollowing(i, data0, data1, key) {
            var n = data1.length, m = data0.length;
            while (++i < n) {
              var k = key(data1[i]);
              for (var j = 0; j < m; ++j) {
                if (key(data0[j]) === k) return data0[j];
              }
            }
          }

          function arcTween(d) {
            var i = d3.interpolate(this._current, d);
            this._current = i(0);
            return function(t) {
              return arc(i(t));
            };
          }
        },

        update: function(){
          this.graphics.update();
        }
/*
          this.chart_.arc = d3.svg.arc()
            .outerRadius(r - 10)
            .innerRadius(0);

          this.chart_.labelArc = d3.svg.arc()
            .outerRadius(r - 50)
            .innerRadius(r - 50);

          this.chart_.pie = d3.layout.pie()
            .sort(null)
            .value(function(d) { return d.value; });

          // Create SVG element
          this.chart_.svg = d3.select(container).append('svg')
            .attr('width', this.width)
            .attr('height', this.height)
            .attr('id', this.id);

          // Create graphics container within svg
          this.chart_.svg.append('g')
            .attr('transform', 'translate(' + this.width / 3 + ', ' + this.height / 2 + ')')
            .attr('id', this.id + '_chart');

          console.log("x: " + this.width / 1.6);
          console.log("y: " + this.height / 10);
          // Create tooltip container within svg
          this.chart_.tooltip = this.chart_.svg.append('g')
            .attr('transform', 'translate(' + this.width / 1.6 + ', ' + this.height / 10 + ')')
            .attr('id', this.id + '_tooltip')
            .attr('opacity', 0);

          this.chart_.svg.select('#' + this.id + '_tooltip').append('rect')
            .attr('width', this.width / 3)
            .attr('height', 35)
            .attr('fill', '#d9d9d9');

          this.chart_.svg.select('#' + this.id + '_tooltip').append('text')
            .attr('x', 4)
            .attr('y', 10)
            .attr('dy', '.35em')
            .attr('font-size', 10)
            .attr('id', this.id + '_tooltip_name');

          this.chart_.svg.select('#' + this.id + '_tooltip').append('text')
            .attr('x', 4)
            .attr('y', 25)
            .attr('dy', '.35em')
            .attr('font-size', 10)
            .attr('id', this.id + '_tooltip_value');

          var g = this.chart_.svg.select('#' + this.id + '_chart').selectAll('.arc')
            .data(this.chart_.pie(this.data))
            .enter().append('g')
            .attr('class', 'arc')
            .attr('transition', 0.5)
            .on('mouseover', function(d){
              console.log('#' + id + '_tooltip');

              d3.select('#' + id + '_tooltip')
                .attr('opacity', 1)
                .attr('fill', d3.select(this).attr('fill'));

              d3.select('#' + id + '_tooltip_name')
                .attr('fill', d3.select(this).attr('fill'))
                .text('Name: ' + d.data.name);

              d3.select('#' + id + '_tooltip_value')
                .attr('fill', d3.select(this).attr('fill'))
                .text('Value: ' + d.data.value);
            })
            .on('mouseout', function(d){
              d3.select('#' + id + '_tooltip')
                .attr('opacity', 0);
            });

            g.append("path")
              .attr("d", this.chart_.arc)
              .style("fill", function(d) { if(d.data.bgColor) return d.data.bgColor; else return color(d.data.name); })
              .style("opacity", "0.7");

            g.append("text")
              .attr("transform", function(d) { return "translate(" + chart_.labelArc.centroid(d) + ")"; })
              .attr('fill', function(d){
                if(d.data.color) return d.data.color;
                else return 'black';
              })
              .attr("dy", ".1em")
              .style("opacity", "1")
              .style("font-size", 25 + "px")
              .style("font-variant", "normal")
              .style("font-weight", 900)
              .text(function(d) { return d.data.name; }); */


      }
    },

    randomId: function(){
      var id = '';
      var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

      for( var i = 0; i < 5; i++ )
        id += possible.charAt(Math.floor(Math.random() * possible.length));

      return id;
    }
  }

  return mytPieChart;
}));
/*
(myt-pie-chart_ = {
  // A function to create a pie chart_.
  // Takes data, width and height as parameters.
  // All the data is optional and if not passed
  // default data will be used.
  // Default width - 350px
  // Default height - 200px
  /* Default data = [{
      name: 'Facebook',
      value: 423
    },{
      name: 'Twitter',
      value: 200
    },{
      name: 'Google+',
      value: 146
    },{
      name: 'Youtube',
      value: 231
    }]
  */ /*

  newChart: function(d, w, h, c, i){
    var width = 300;
    var height = 200;
    var data = [{
      name: 'Facebook',
      value: 423
      },{
      name: 'Twitter',
      value: 200
      },{
      name: 'Google+',
      value: 146
      },{
      name: 'Youtube',
      value: 231
      }];
    var containerId = 'body';
    var id = "pie123";

    if(w) width = w;
    if(h) height = h;
    if(d) data = d;
    if(c) containerId = c;
    if(i) id = i;

    return {
      width: this.width,
      height: this.height,
      data: this.data,
      containerId: this.containerId,
      id: this.id,
      chartExists: false,

      color: d3.scale.ordinal()
        .range([
          // Blue,     Green,     Yellow,     Purple,    Red,      Brown,     Pink,      Orange,    L.Blue,   L.Green
          "#ccccff", "#ccffcc", "#ffffcc", "#f2ccff", "#ffcccc", "#f2e6d9", "#ffccff", "#ffe0cc", "#ccffff", "#e6ffcc", // 1st layer at 90%
          "#b3b3ff", "#b3ffb3", "#ffffb3", "#ecb3ff", "#ffb3b3", "#ecd9c6", "#ffb3ff", "#ffd1b3", "#b3ffff", "#d9ffb3", // 2nd layer at 85%
          "#9999ff", "#99ff99", "#ffff99", "#e699ff", "#ff9999", "#e6ccb3", "#ff99ff", "#ffc299", "#99ffff", "#ccff99", // 3rd layer at 80%
          "#8080ff", "#80ff80", "#ffff80", "#df80ff", "#ff8080", "#dfbf9f", "#ff80ff", "#ffb380", "#80ffff", "#bfff80", // 4th layer at 75%
          "#6666ff", "#66ff66", "#ffff66", "#d966ff", "#ff6666", "#d9b38c", "#ff66ff", "#ffa366", "#66ffff", "#b3ff66", // 5th layer at 70%
          "#4d4dff", "#4dff4d", "#ffff4d", "#d24dff", "#ff4d4d", "#d2a679", "#ff4dff", "#ff944d", "#4dffff", "#a6ff4d", // 6th layer at 65%
          "#3333ff", "#33ff33", "#ffff33", "#cc33ff", "#ff3333", "#cc9966", "#ff33ff", "#ff8533", "#33ffff", "#99ff33", // 7th layer at 60%
          "#1a1aff", "#1aff1a", "#ffff1a", "#c61aff", "#ff1a1a", "#c68c53", "#ff1aff", "#ff751a", "#1affff", "#8cff1a", // 8th layer at 55%
          "#0000ff", "#00ff00", "#ffff00", "#bf00ff", "#ff0000", "#bf8040", "#ff00ff", "#ff6600", "#00ffff", "#80ff00", // 9th layer at 50%
          "#0000e6", "#00e600", "#e6e600", "#ac00e6", "#e60000", "#ac7339", "#e600e6", "#e65c00", "#00e6e6", "#73e600", // 10th layer at 45%
        ]),

      getWidth: function(){
        return width;
      },

      setWidth: function(w){
        width = w;
      },

      getHeight: function(){
        return height;
      },

      setHeight: function(h){
        height = h;
      },

      getData: function(){
        return data;
      },

      setData: function(d){
        data = d;
      },

      getContainerId: function(){
        return containerId;
      },

      setContainerId: function(c){
        containerId = c;
      },

      getId: function(){
        return id;
      },

      setId: function(i){
        id = i;
      },

      draw: function(){
        var containerid = 'body';
        if(containerId && containerId != 'body')
          containerid = '#' + containerId;

        var Id = containerId + '_pie';
        if(id)
          Id = '#' + id;

        var tooltipId = Id + '-tooltip';

        console.log('chartExists ' + this.chartExists);
        if(this.chartExists){
          d3.select(Id).remove();
          console.log(d3.select(Id));
          this.chartExists = false;
        }

        var color = this.color;

        // Set radius to half of the smaller side
        // to avoid 'out-of-bounds' issue
        var radius = Math.min(width,height) / 2;

        var arc = d3.svg.arc()
          .outerRadius(radius - 10)
          .innerRadius(0);

        var labelArc = d3.svg.arc()
          .outerRadius(radius - 40)
          .innerRadius(radius - 40);

        var pie = d3.layout.pie()
          .sort(null)
          .value(function(d) { return d.value; });

        var svg = d3.select(containerid).append("svg")
          .attr("width", width)
          .attr("height", height)
          .attr("id", id)
          .append("g")
          .attr("transform", "translate(" + width / 3 + "," + height / 2 + ")");

        var tooltipBar = d3.select('#' + id)
          .append('g')
          .attr('id', id + "_tooltip")
          .attr('opacity', 0)
          .attr('transform', "translate(" + width / 1.6 + "," + height / 10 + ")");

        tooltipBar.append("rect")
          .attr("width", width / 3)
          .attr("height", 35)
          .attr('fill', '#d9d9d9');

        tooltipBar.append("text")
          .attr("x", 4)
          .attr("y", 10)
          .attr("dy", ".35em")
          .attr('font-size', 10)
          .attr('id', id + '_tooltip' + '_name');

        tooltipBar.append("text")
          .attr("x", 4)
          .attr("y", 25)
          .attr("dy", ".35em")
          .attr('font-size', 10)
          .attr('id', id + '_tooltip' + '_value');

        var g = svg.selectAll(".arc")
          .data(pie(data))
          .enter().append("g")
          .attr("class", "arc")
          .on("mouseover", function(d) {
            // Display toolTip box
            d3.select(Id + '_tooltip').attr('opacity', 1);

            // Change toolTip color to slice color
            if(d.data.bgColor)
              d3.select(Id + '_tooltip > rect').attr('fill', d.data.bgColor);
            else
              d3.select(Id + '_tooltip > rect').attr('fill', color(d.data.name));

            // Set toolTip data
            d3.select(Id + '_tooltip_name')
              .attr('fill', function(){
                 if(d.data.color)
                  return d.data.color;
                else
                  return 'black';
               })
              .text('Name: ' + d.data.name);
            d3.select(Id + '_tooltip_value')
              .attr('fill', function(){
               if(d.data.color)
                return d.data.color;
              else
                return 'black';
              })
              .text('Value: ' + d.data.value);
          })
          .on("mouseout", function(d){
            // Hide toolTip box
            d3.select(Id + '_tooltip')
              .attr('opacity', 0);
          });

        g.append("path")
          .attr("d", arc)
          .style("fill", function(d) { if(d.data.bgColor) return d.data.bgColor; else return color(d.data.name); })
          .style("opacity", "0.7");

        g.append("text")
          .attr("transform", function(d) { return "translate(" + labelArc.centroid(d) + ")"; })
          .attr('fill', function(d){
            if(d.data.color) return d.data.color;
            else return 'black';
          })
          .attr("dy", ".1em")
          .style("opacity", "1")
          .text(function(d) { return d.data.name; });

        this.chartExists = true;
      }
    }
  },

  // Generates test data with 'n' slices
  generateTestData: function(n){
    var data = [];
    for(var x = 1; x <= n; x++){
      data.push({
        name: x.toString(),
        value: x
      });
    }
    return data;
  }
});*/
