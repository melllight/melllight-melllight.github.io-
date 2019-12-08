function hideLayer(checked, layerNum) {
  if(checked) {
    if(!map.hasLayer(mapLayers[layerNum])) {
      mapLayers[layerNum].addTo(map);
    }
  }
  else {
    if(map.hasLayer(mapLayers[layerNum])) {
       mapLayers[layerNum].removeFrom(map);
    }
  }
}

