window.onload = function() {
  var mymap = L.map("mapid").setView([54.3146, -1.3884], 7);
  var iconSize = [44, 44]; //Controlls the icon size of every stadium marker!

  function safcClick(e) {
    var safcPopUp = L.popup();
    mymap.flyTo([54.9146, -1.3884], 17);
    safcPopUp
      .setLatLng(e.latlng)
      .setContent(
        "Find out more about this Stadium at" +
          "<br>" +
          '<a href="/Stadium_pages/sunderlandStadium.html">Stadium Of Light</a>"'
      )
      .openOn(mymap);
  }

  function nufcClick(e) {
    var nufcPopUp = L.popup();
    mymap.flyTo([54.9756, -1.6217], 17);
    nufcPopUp
      .setLatLng(e.latlng)
      .setContent(
        "Find out more about this Stadium at" +
          "<br>" +
          '<a href="/Stadium_pages/newcastleStadium.html">Newcastle Stadium</a>"'
      )
      .openOn(mymap);
  }

  function mufcClick(e) {
    var mufcPopUp = L.popup();
    mymap.flyTo([53.4631, -2.2913], 17);
    mufcPopUp
      .setLatLng(e.latlng)
      .setContent(
        "Find out more about this Stadium at" +
          "<br>" +
          '<a href="/Stadium_pages/manchesterUtdStadium.html">Manchester United Stadium</a>"'
      )
      .openOn(mymap);
  }

  function aufcClick(e) {
    var aufcPopUp = L.popup();
    mymap.flyTo([51.5549, -0.1084], 17);
    aufcPopUp
      .setLatLng(e.latlng)
      .setContent(
        "Find out more about this Stadium at" +
          "<br>" +
          '<a href="/Stadium_pages/arsenalStadium.html">Aresenal Stadium</a>"'
      )
      .openOn(mymap);
  }
  
  function cfcClick(e) {
    var cfcPopUp = L.popup();
    mymap.flyTo([51.4817, -0.191], 17);
    cfcPopUp
      .setLatLng(e.latlng)
      .setContent(
        "Find out more about this Stadium at" +
          "<br>" +
          '<a href="/Stadium_pages/chelseaStadium.html">Chelsea Stadium</a>"'
      )
      .openOn(mymap);
  }

  
  function mccClick(e) {
    var mccPopUp = L.popup();
    mymap.flyTo([53.4831, -2.2004], 17);
    mccPopUp
      .setLatLng(e.latlng)
      .setContent(
        "Find out more about this Stadium at" +
          "<br>" +
          '<a href="/Stadium_pages/manchesterCtyStadium.html">Manchester City Stadium</a>"'
      )
      .openOn(mymap);
  }

  function efcClick(e) {
    var efcPopUp = L.popup();
    mymap.flyTo([53.4388, -2.9663], 17);
    efcPopUp
      .setLatLng(e.latlng)
      .setContent(
        "Find out more about this Stadium at" +
          "<br>" +
          '<a href="/Stadium_pages/evertonStadium.html">Everton Football Stadium</a>"'
      )
      .openOn(mymap);
  }

  
  function ccfClick(e) {
    var ccfPopUp = L.popup();
    mymap.flyTo([51.4728, -3.2030], 17);
    ccfPopUp
      .setLatLng(e.latlng)
      .setContent(
        "Find out more about this Stadium at" +
          "<br>" +
          '<a href="/Stadium_pages/cardifStadium.html">Cardiff City Football Stadium</a>"'
      )
      .openOn(mymap);
  }

  function nfcClick(e) {
    var nfcPopUp = L.popup();
    mymap.flyTo([52.6221, 1.3092], 17);
    nfcPopUp
      .setLatLng(e.latlng)
      .setContent(
        "Find out more about this Stadium at" +
          "<br>" +
          '<a href="/Stadium_pages/cardifStadium.html">Norwich Stadium</a>"'
      )
      .openOn(mymap);
  }

  document.getElementById("zoomButton").onclick = function() {
    refreshZoom();
  };

  function refreshZoom(e) {
    mymap.flyTo([54.3146, -1.3884], 7, {
      pan: {
        animate: true,
        duration: 0.5
      },
      zoom: {
        animate: true
      }
    });
  }

  L.tileLayer(
    "https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}",
    {
      attribution:
        'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
      minZoom: 7,
      maxZoom: 18,
      id: "mapbox.streets",
      accessToken:
        "pk.eyJ1Ijoic2FhbWJlbGwxOTk2IiwiYSI6ImNqbmszbDI4eDB0bDczcHRkZmxmdGdxMnEifQ.VIBUsDQgXDSZpaS_4PzKZw"
    }
  ).addTo(mymap);

  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  //SAFC Icon Code

  var safcMarker = L.marker;
  var safcIcon = L.icon({
    iconUrl: "img/safc.png",

    iconSize: iconSize, // size of the icon
    iconAnchor: [10, 25], // point of the icon which will correspond to marker's location
    popupAnchor: [-3, -76] // point from which the popup should open relative to the iconAnchor
  });

  safcMarker([54.9146, -1.3884], { icon: safcIcon })
    .addTo(mymap)
    .on("click", safcClick);

  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  //NUFC Icon Code
  var nufcMarker = L.marker;
  var nufcIcon = L.icon({
    iconUrl: "img/nufc.png",

    iconSize: iconSize, // size of the icon
    iconAnchor: [10, 25], // point of the icon which will correspond to marker's location
    popupAnchor: [-3, -76] // point from which the popup should open relative to the iconAnchor
  });

  nufcMarker([54.9756, -1.6217], { icon: nufcIcon })
    .addTo(mymap)
    .on("click", nufcClick);
  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  //MUFC Icon Code
  var mufcMarker = L.marker;
  var mufcIcon = L.icon({
    iconUrl: "img/mufc.png",

    iconSize: iconSize, // size of the icon
    iconAnchor: [10, 25], // point of the icon which will correspond to marker's location
    popupAnchor: [-3, -76] // point from which the popup should open relative to the iconAnchor
  });

  mufcMarker([53.4631, -2.2913], { icon: mufcIcon })
    .addTo(mymap)
    .on("click", mufcClick);
  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  //AUFC Icon Code
  var aufcMarker = L.marker;
  var aufcIcon = L.icon({
    iconUrl: "img/aufc.png",

    iconSize: iconSize, // size of the icon
    iconAnchor: [10, 25], // point of the icon which will correspond to marker's location
    popupAnchor: [-3, -76] // point from which the popup should open relative to the iconAnchor
  });

  aufcMarker([51.5549, -0.1084], { icon: aufcIcon })
    .addTo(mymap)
    .on("click", aufcClick);
  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  //CFC Icon Code
  var cfcMarker = L.marker;
  var cfcIcon = L.icon({
    iconUrl: "img/cfc.png",

    iconSize: iconSize, // size of the icon
    iconAnchor: [10, 25], // point of the icon which will correspond to marker's location
    popupAnchor: [-3, -76] // point from which the popup should open relative to the iconAnchor
  });

  cfcMarker([51.4817, -0.191], { icon: cfcIcon })
    .addTo(mymap)
    .on("click", cfcClick);
  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  //MCC Icon Code
  var mccMarker = L.marker;
  var mccIcon = L.icon({
    iconUrl: "img/mcc.png",

    iconSize: iconSize, // size of the icon
    iconAnchor: [10, 25], // point of the icon which will correspond to marker's location
    popupAnchor: [-3, -76] // point from which the popup should open relative to the iconAnchor
  });

  mccMarker([53.4831, -2.2004], { icon: mccIcon })
    .addTo(mymap)
    .on("click", mccClick);
  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  //EFC Icon Code
  var efcMarker = L.marker;
  var efcIcon = L.icon({
    iconUrl: "img/efc.png",

    iconSize: iconSize, // size of the icon
    iconAnchor: [10, 25], // point of the icon which will correspond to marker's location
    popupAnchor: [-3, -76] // point from which the popup should open relative to the iconAnchor
  });

  efcMarker([53.4388, -2.9663], { icon: efcIcon })
    .addTo(mymap)
    .on("click", efcClick);
  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  //CCF
  var ccfMarker = L.marker;
  var ccfIcon = L.icon({
    iconUrl: "img/ccf.png",

    iconSize: iconSize, // size of the icon
    iconAnchor: [10, 25], // point of the icon which will correspond to marker's location
    popupAnchor: [-3, -76] // point from which the popup should open relative to the iconAnchor
  });

  ccfMarker([51.4728, -3.2030], { icon: ccfIcon })
    .addTo(mymap)
    .on("click", ccfClick);

    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    //NFC
    var nfcMarker = L.marker;
    var nfcIcon = L.icon({
      iconUrl: "img/nfc.png",
  
      iconSize: iconSize, // size of the icon
      iconAnchor: [10, 25], // point of the icon which will correspond to marker's location
      popupAnchor: [-3, -76] // point from which the popup should open relative to the iconAnchor
    });
  
    nfcMarker([52.6221, 1.3092], { icon: nfcIcon })
      .addTo(mymap)
      .on("click", nfcClick);


  
};
