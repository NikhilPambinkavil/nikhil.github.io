window.onload = () => {
    let places = staticLoadPlaces();
    renderPlaces(places);
};

function staticLoadPlaces() {
   return [
       {
           name: 'Magnemite',
           location: {
               lat: 53.2278412,
               lng: -4.1302649,
           }
       },
       {
        name: 'pointio',
        location: {
            lat: 53.2277804,
            lng: -4.1302079,
        }
       },
       {
        name: 'pl4',
        location: {
            lat: 53.2277437,
            lng: -4.1302056,
        }
        },
        {
            name: 'pl4.5',
            location: {
                lat: 53.2278414,
                lng: -4.1303702,
            }
        },
   ];
}

function renderPlaces(places) {
   let scene = document.querySelector('a-scene');

   places.forEach((place) => {
       let latitude = place.location.lat;
       let longitude = place.location.lng;

       let model = document.createElement('a-entity');
       model.setAttribute('gps-entity-place', `latitude: ${latitude}; longitude: ${longitude};`);
       model.setAttribute('gltf-model', 'https://nikhilpambinkavil.github.io/nikhil.github.io/Xreality/tools/scene.gltf');
       model.setAttribute('rotation', '0 180 0');
       model.setAttribute('animation-mixer', '');
       model.setAttribute('scale', '0.5 0.5 0.5');

       model.addEventListener('loaded', () => {
           window.dispatchEvent(new CustomEvent('gps-entity-place-loaded'))
       });

       scene.appendChild(model);
   });
}