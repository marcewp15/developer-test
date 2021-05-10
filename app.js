new Vue({
    //initialize the vuetify framework
    el: '#app',
    vuetify: new Vuetify(),
    data:{
        selected: [],
        stars: [
            {name: '⭐', id: 1},
            {name: '⭐⭐', id: 2},
            {name: '⭐⭐⭐', id: 3},
            {name: '⭐⭐⭐⭐', id: 4},
            {name: '⭐⭐⭐⭐⭐', id: 5}
        ],
        //Data Hotels
        hotels: [],
        //Search the input of the hotels
        hotelSearch: "",
        //Filter the input of the hotels
        hotelFilters: []
    },
    mounted(){
        //Consume the data.json API
        fetch('./recursos/data/data.json')
        .then(response => response.json())
        .then(data => {
            console.log(data)
            this.hotels = data;
            this.hotelFilters = data;
        });
    },
    methods: {
        //Update search input
        updateSearch(event) {
            console.log(event);
            this.hotelFilters = this.hotels.filter(hotel => hotel.name.toLowerCase().includes(event.toLowerCase()));
        },
        //Update the search of hotels by the number of stars
        starsSelected(event) {
            console.log(event);
            this.hotelFilters = this.hotels.filter(hotel => event.includes(hotel.stars));
        }
    }
  })
  