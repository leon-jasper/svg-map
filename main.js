const area = document.querySelector('#map');

console.log(area);
console.log(panzoom)
// pass svg to panzoom
panzoom(area, {
    maxZoom: 1,
    minZoom: 0.1
}).zoomAbs(
    150, // initial x position
    0, // initial y position
    0.1  // initial zoom 
);
