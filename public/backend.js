function drawChart(){chart=new google.visualization.ColumnChart(document.getElementById("chart_div")),sitesChart()}function sitesChart(t){data=!t||t.length<2?google.visualization.arrayToDataTable([["Sites","Users"],["Unknown",0]]):data=google.visualization.arrayToDataTable(t);var e={title:"Sites by User",hAxis:{title:"Site",titleTextStyle:{color:"black"}},animation:{duration:500,easing:"out"},vAxis:{minValue:0,maxValue:50}};chart.draw(data,e)}var mapOptions={center:new google.maps.LatLng(39.5,-35),zoom:2},sitelist=[],chart,map=new google.maps.Map(document.getElementById("map-canvas"),mapOptions),styles=[{featureType:"landscape",stylers:[{saturation:-100},{visibility:"simplified"}]}];map.setOptions({styles:styles}),google.load("visualization","1",{packages:["corechart"]}),google.setOnLoadCallback(drawChart),$(function(){function t(t){var e,i=[],a=[];t.sort();for(var o=0;o<t.length;o++)t[o]!==e?(i.push(t[o]),a.push(1)):a[a.length-1]++,e=t[o];return[i,a]}function e(t){output=[["Site","Users"]];for(var e=0;e<t[0].length;e++)output.push([t[0][e],t[1][e]]);return output}var i=io(document.location.host,{multiplex:!1,path:"/socket.io"}),a=new Object,o=new Object;i.emit("bc"),i.on("ui",function(i){$("#"+i.id).length?(o[i.id]="unknown",sitelist.push("unknown")):(o[i.id]=i.site,sitelist.push(i.site)),chartSites=t(sitelist),chartdata=e(chartSites),sitesChart(chartdata)}),i.on("ubv",function(t){for(var e in t.creatives)if(creative=t.creatives[e],"undefined"!=typeof a[t.id]&&"number"==typeof creative.visible){if(creative.visible>0){var i=a[t.id].get("icon");i.fillColor="green",i.strokeColor="green",i.fillOpacity=creative.visible,a[t.id].set("icon",i)}if(creative.visible<=0){var i=a[t.id].get("icon");i.strokeColor="red",i.fillColor="red",i.fillOpacity=.05,a[t.id].set("icon",i)}}}),i.on("uj",function(t){function e(t){var e=30,i=window.setInterval(function(){e--;var a=t.get("icon");a.strokeWeight=e,t.set("icon",a),1>=e&&clearInterval(i)},15)}$("#TotalUsers").text(t.total);var i={icon:{path:google.maps.SymbolPath.CIRCLE,fillOpacity:.05,fillColor:"#ff0000",strokeOpacity:1,strokeColor:"#ff0000",strokeWeight:30,scale:5},map:map,position:new google.maps.LatLng(t.latitude,t.longitude)};a[t.id]=new google.maps.Marker(i),"undefined"!=typeof a[t.id]&&e(a[t.id])}),i.on("ul",function(i){function n(t){var e=t.get("icon"),i=30,a=window.setInterval(function(){i--,e.strokeWeight=i,e.strokeColor="#000000",t.set("icon",e),0>=i&&(clearInterval(a),t.setMap(null))},20)}"undefined"==typeof o[i.id]&&console.log(i.id+" never had a site."),$("#TotalUsers").text(i.susers),sitelist.splice(sitelist.indexOf(o[i.id]),1),chartSites=t(sitelist),chartdata=e(chartSites),sitesChart(chartdata),"undefined"!=typeof a[i.suid]&&n(a[i.suid])})});