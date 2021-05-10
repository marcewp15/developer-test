new Vue({
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
        hotels: [],
        hotelSearch: "",
        hotelFilters: []
    },
    mounted(){
        fetch('./recursos/data/data.json')
        .then(response => response.json())
        .then(data => {
            console.log(data)
            this.hotels = data;
            this.hotelFilters = data;
        });
    },
    methods: {
        updateSearch(event) {
            console.log(event);
            this.hotelFilters = this.hotels.filter(hotel => hotel.name.toLowerCase().includes(event.toLowerCase()));
        },
        starsSelected(event) {
            console.log(event);
            this.hotelFilters = this.hotels.filter(hotel => event.includes(hotel.stars));
        }
    }
  })
  