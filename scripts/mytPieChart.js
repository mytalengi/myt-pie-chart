
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

  newChart: function(d, w, h){
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

    if(w) width = w;
    if(h) height = h;
    if(d) data = d;

    return {
    // Default width
    width: this.width,
    // Default height
    height: this.height,
    // Default data
    data: this.data,

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

    draw: function(){
      // Set radius to half of the smaller side
      // to avoid 'out-of-bounds' issue
      var radius = Math.min(width,height) / 2;

      // Color range
      var color = d3.scale.ordinal()
        .range(["#ff6666", "#99ddff", "#ffff66", "#66ff66", "#ffb366", "#c2c2a3", "#ff66d9", "#b3ff66", "#ffd966", "#6666ff"]);

      var arc = d3.svg.arc()
        .outerRadius(radius - 10)
        .innerRadius(0);

      var labelArc = d3.svg.arc()
        .outerRadius(radius - 40)
        .innerRadius(radius - 40);

      var pie = d3.layout.pie()
        .sort(null)
        .value(function(d) { return d.value; });

      var svg = d3.select("body").append("svg")
        .attr("width", width)
        .attr("height", height)
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
          d3.select(this).select("path").attr("r", 5.5).style("opacity", "0.5");
        });

      g.append("path")
        .attr("d", arc)
        .style("fill", function(d) { return color(d.data.name); })
        .style("opacity", "0.5");

      g.append("text")
        .attr("transform", function(d) { return "translate(" + labelArc.centroid(d) + ")"; })
        .attr("dy", ".35em")
        .style("opacity", "1")
        .text(function(d) { return d.data.name; });
    },

    redraw: function(){
      // A function to re-draw the table with same or modified values
    }
    }
  }
});
