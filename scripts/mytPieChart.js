
(mytPieChart = {
  // A function to create a pie chart.
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
  */

  newChart: function(d, w, h, c, i){
    var width = 350;
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
    var container = 'body';
    var id = "pie123";

    if(w) width = w;
    if(h) height = h;
    if(d) data = d;
    if(c) container = c;
    if(i) id = i;

    return {
      width: this.width,
      height: this.height,
      data: this.data,
      container: this.container,
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

      redraw: function(){
        // Set radius to half of the smaller side
        // to avoid 'out-of-bounds' issue
        var radius = Math.min(width,height) / 2;
      },

      draw: function(){

        if(this.chartExists){
          redraw();
          return;
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

        var svg = d3.select(container).append("svg")
          .attr("width", width)
          .attr("height", height)
          .attr("id", id)
          .append("g")
          .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

        var g = svg.selectAll(".arc")
          .data(pie(data))
          .enter().append("g")
          .attr("class", "arc")
          .on("mouseover", function(d) {
            d3.select(this).select("path").attr("r", 10).style("opacity", "1");
            console.log(d.data.name + " - " + d.data.value);
          })
          .on("mouseout", function(d){
            d3.select(this).select("path").attr("r", 5.5).style("opacity", "0.7");
          });

        g.append("path")
          .attr("d", arc)
          .style("fill", function(d) { return color(d.data.name); })
          .style("opacity", "0.7");

        g.append("text")
          .attr("transform", function(d) { return "translate(" + labelArc.centroid(d) + ")"; })
          .attr("dy", ".35em")
          .style("opacity", "1")
          .text(function(d) { return d.data.name; });

        chartExists = true;
      },

      redraw: function(){
        // A function to re-draw the table with same or modified values
      }
    }
  }

  // Generates test data with 'n' slices
  ,generateTestData: function(n){
    var data = [];
    for(var x = 1; x <= n; x++){
      data.push({
        name: x.toString(),
        value: x
      });
    }
    return data;
  }
});
