


// Google Map API

const button = document.getElementById("button");
button.addEventListener("click", function initMap  ()  {
    map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: 17.47795889395971, lng: 78.30124082069575},
        zoom: 16,
        mapId: 'fcfc4b866e43319f',
        mapTypeControl: false,
        fullscreenControl:false,
        streetViewControl: false
      });


    const markers = [

        [
            "pipe",
            17.47795889395971,
            78.30124082069575,
            "images/pipesote.png",
            50,
            52
        ] ,

        [
            "castle",
            17.47634122203066,
            78.29894723123408,
            "images/castle.png",
            50,
            52

        ],

        [
            "super Castle",
            17.479155166353074,
             78.29920029611054,
             "images/castleLarge.png",
             52,
             60
        ],

        [
            "Final Castle",
            17.47712890228484,
             78.29866442618345,
             "images/finalCastle.png",
             76,
             45            
        ],

        [
            "star",
            17.480660439167348,
             78.30471041785121,
             "images/star.png",
             50,
             52
        ]
    ];

    for(let i = 0; i < markers.length;i ++){

        const currentMarker = markers[i];


        const marker = new google.maps.Marker({
            position: { lat :currentMarker[1] , lng: currentMarker[2] },
            map,
            title: currentMarker[0],
            icon: { 
                
            url: currentMarker[3],
            scaledSize: new google.maps.Size (currentMarker[4],currentMarker[5])
    
            },
            animation: google.maps.Animation.DROP
          });
    
       
    
          const infowindow = new google.maps.InfoWindow({
            content: currentMarker[0],
          });
    
          marker.addListener("click", () => {
            infowindow.open(map, marker);
          });
    




    }


   button.style.display = "none";
   let map_size = document.getElementById("map");
   map_size.style.display= "block";
  

}


 );


// 17.479585336705536, 78.30753576742869
// 17.47795889395971, 78.30124082069575