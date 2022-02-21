const apiUrl = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_hour.geojson";

fetch(apiUrl, {
    method: 'GET',
  })
    .then(response => {
        return response.json();
    })
    .then(data => {
        const features = data.features;
       features.map((feature, i) => {
        console.log(feature.properties.place);
       })
    })
    .catch((error) => console.log(error.message));