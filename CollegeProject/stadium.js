window.onload = function() {
  var mymap = L.map("mapid").setView([54.3146, -1.3884], 8);
  var iconSize = [44, 44]; //Controlls the icon size of every stadium marker!



  L.tileLayer(
    "https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}",
    {
      attribution:
        'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
      maxZoom: 18,
      id: "mapbox.streets",
      accessToken:
        "pk.eyJ1Ijoic2FhbWJlbGwxOTk2IiwiYSI6ImNqbmszbDI4eDB0bDczcHRkZmxmdGdxMnEifQ.VIBUsDQgXDSZpaS_4PzKZw"
    }
  ).addTo(mymap);


  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  //SAFC Icon Code

  var safcIcon = L.icon({
    iconUrl: "img/safc.png",

    iconSize: iconSize, // size of the icon
    iconAnchor: [10, 25], // point of the icon which will correspond to marker's location
    popupAnchor: [-3, -76] // point from which the popup should open relative to the iconAnchor
  });
 
  L.marker([54.9146, -1.3884], { icon: safcIcon }).addTo(mymap);
  L.marker([54.9146, -1.3884], { icon: safcIcon })
    .addTo(mymap)
    .bindPopup("This is SAFC Football stadium");
 
  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  //NUFC Icon Code
  var nufcIcon = L.icon({
    iconUrl: "img/nufc.png",

    iconSize: iconSize, // size of the icon
    iconAnchor: [10, 25], // point of the icon which will correspond to marker's location
    popupAnchor: [-3, -76] // point from which the popup should open relative to the iconAnchor
  });

  L.marker([54.9756, -1.6217], { icon: nufcIcon }).addTo(mymap);
  L.marker([54.9756, -1.6217], { icon: nufcIcon })
    .addTo(mymap)
    .bindPopup("This is NUFC Football stadium");
  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  //MUFC Icon Code
  var mufcIcon = L.icon({
    iconUrl: "img/mufc.png",

    iconSize: iconSize, // size of the icon
    iconAnchor: [10, 25], // point of the icon which will correspond to marker's location
    popupAnchor: [-3, -76] // point from which the popup should open relative to the iconAnchor
  });

  L.marker([53.4631, -2.2913], { icon: mufcIcon }).addTo(mymap);
  L.marker([53.4631, -2.2913], { icon: mufcIcon })
    .addTo(mymap)
    .bindPopup("This is MUFC Football stadium");
  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  //AUFC Icon Code
  var aufcIcon = L.icon({
    iconUrl: "img/aufc.png",

    iconSize: iconSize, // size of the icon
    iconAnchor: [10, 25], // point of the icon which will correspond to marker's location
    popupAnchor: [-3, -76] // point from which the popup should open relative to the iconAnchor
  });

  L.marker([51.5549, -0.1084], { icon: aufcIcon }).addTo(mymap);
  L.marker([51.5549, -0.1084], { icon: aufcIcon })
    .addTo(mymap)
    .bindPopup("The Emirates Football Stadium");
  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  //CFC Icon Code
  var cfcIcon = L.icon({
    iconUrl: "img/cfc.png",

    iconSize: iconSize, // size of the icon
    iconAnchor: [10, 25], // point of the icon which will correspond to marker's location
    popupAnchor: [-3, -76] // point from which the popup should open relative to the iconAnchor
  });

  L.marker([51.4817, -0.191], { icon: cfcIcon }).addTo(mymap);
  L.marker([51.4817, -0.191], { icon: cfcIcon })
    .addTo(mymap)
    .bindPopup("The Emirates Football Stadium");
  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  //MCC Icon Code
  var mccIcon = L.icon({
    iconUrl: "img/mcc.png",

    iconSize: iconSize, // size of the icon
    iconAnchor: [10, 25], // point of the icon which will correspond to marker's location
    popupAnchor: [-3, -76] // point from which the popup should open relative to the iconAnchor
  });

  L.marker([53.4831, -2.2004], { icon: mccIcon }).addTo(mymap);
  L.marker([53.4831, -2.2004], { icon: mccIcon })
    .addTo(mymap)
    .bindPopup("The Eithad Football Stadium");
  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  //MCC Icon Code
  var efcIcon = L.icon({
    iconUrl: "img/efc.png",

    iconSize: iconSize, // size of the icon
    iconAnchor: [10, 25], // point of the icon which will correspond to marker's location
    popupAnchor: [-3, -76] // point from which the popup should open relative to the iconAnchor
  });

  L.marker([53.4388, -2.9663], { icon: efcIcon }).addTo(mymap);
  L.marker([53.4388, -2.9663], { icon: efcIcon })
    .addTo(mymap)
    .bindPopup("The Eithad Football Stadium");
  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
};
