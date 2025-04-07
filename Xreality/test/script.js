window.onload = () => {
    let places = staticLoadPlaces();
    if (places.length > 0) {
        renderPlaces(places);
    } else {
        console.error("No locations found!");
    }
};

function staticLoadPlaces() {
    return [
        {
            name: 'Magnemite',
            location: { lat: 53.2278412, lng: -4.1302649 }
        },
        {
            name: 'pointio',
            location: { lat: 53.2277804, lng: -4.1302079 }
        },
        {
            name: 'pl4',
            location: { lat: 53.2277437, lng: -4.1302056 }
        },
        {
            name: 'pl4.5',
            location: { lat: 53.2278414, lng: -4.1303702 }
        },
        {
            name: 'pl4.6',
            location: { lat: 53.2300650, lng: -4.1212611 }
        },
        {
            name: 'pl4.7',
            location: { lat: 53.2300702, lng: -4.1213231 }
        },
    ];
}

function renderPlaces(places) {
    let scene = document.querySelector('a-scene');

    if (!scene) {
        console.error("A-Frame scene not found!");
        return;
    }

    places.forEach((place) => {
        let { lat, lng } = place.location;

        let model = document.createElement('a-entity');
        model.setAttribute('gps-entity-place', `latitude: ${lat}; longitude: ${lng};`);
        model.setAttribute('gltf-model', 'https://nikhilpambinkavil.github.io/nikhil.github.io/Xreality/tools/scene.gltf');
        model.setAttribute('rotation', '0 180 0');
        model.setAttribute('scale', '0.5 0.5 0.5');

        model.addEventListener('loaded', () => {
            console.log(`Model loaded at: ${lat}, ${lng}`);
            window.dispatchEvent(new CustomEvent('gps-entity-place-loaded'));
        });

        scene.appendChild(model);
    });
}