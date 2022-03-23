let country = 'LY';
let guessedCountries = [];

let players = ['Payton','Eugene'];



am5.ready(function() {

// Create root element
// https://www.amcharts.com/docs/v5/getting-started/#Root_element
var root = am5.Root.new("chartdiv");


// Set themes
// https://www.amcharts.com/docs/v5/concepts/themes/
root.setThemes([
  am5themes_Animated.new(root)
]);

// Create the map chart
// https://www.amcharts.com/docs/v5/charts/map-chart/
var chart = root.container.children.push(am5map.MapChart.new(root, {
  panX: "translateX",
  panY: "translateY",
  projection: am5map.geoMercator()
}));


// Create main polygon series for countries
// https://www.amcharts.com/docs/v5/charts/map-chart/map-polygon-series/
var polygonSeries = chart.series.push(am5map.MapPolygonSeries.new(root, {
  geoJSON: am5geodata_worldLow,
  exclude: ["AQ"]
}));

polygonSeries.mapPolygons.template.setAll({
  stroke: am5.color(0xffffff),
  strokeWidth: 1,
  fillOpacity: 1,
  fill: am5.color(0x1e8346)
});

polygonSeries.mapPolygons.template.setAll({
  toggleKey: "active",
  interactive: false
});

polygonSeries.mapPolygons.template.states.create("hover", {
  fill: am5.color(0x37915a)
});

polygonSeries.mapPolygons.template.events.on("click", (ev) => {
  let guess = ev.target.dataItem._settings.id
  guessedCountries.push(guess);
  if(guess == country){
    $('#modal').modal('show');
    $('#modalTitle').html('You Found '+ guess);
    let playersHTML = '';
    players.forEach(p => {
      playersHTML += '<div>'+p;
      guessedCountries.forEach(c => {
        playersHTML += '<li>'+c+'</li>';
      });
      players += '</div>';
    });
    $('#players').html(playersHTML);
  }
});

polygonSeries.mapPolygons.template.states.create("active", {
  fill: am5.color(0xd95341)
});

chart.chartContainer.set("background", am5.Rectangle.new(root, {
  fill: am5.color(0xd4f1f9),
  fillOpacity: 1
}));

function countDown(i){
  if(i > 0){
    $('#count-down').html(i.toString());
    i--;
    setTimeout(() => {countDown(i)}, 1000);
  }else{
    $('#modal-country').modal('hide')
  }
}

countDown(3);

// Add zoom control
// https://www.amcharts.com/docs/v5/charts/map-chart/map-pan-zoom/#Zoom_control
//chart.set("zoomControl", am5map.ZoomControl.new(root, {}));


// Set clicking on "water" to zoom out
// chart.chartContainer.get("background").events.on("click", function () {
//   chart.goHome();
// })


// Make stuff animate on load
chart.appear(1000, 100);

}); // end am5.ready()
