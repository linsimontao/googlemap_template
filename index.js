import { Loader } from "@googlemaps/js-api-loader";

const loader = new Loader({
    apiKey: import.meta.env.VITE_GOOGLEMAPS_API_KEY
});

loader.load().then(() => {
    const map = new google.maps.Map(document.getElementById('map'), {
      center: { lat: 35.6819677, lng: 139.7614256 },
      zoom: 15
    })
});