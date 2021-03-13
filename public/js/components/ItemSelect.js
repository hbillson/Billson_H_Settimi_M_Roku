import MovieThumb from "./MovieThumb.js";

export default {
    name: "Items",

    props: ["parent-data"],

    data() {
        return {
            hover: false,
            filters: this.parentData,
            version: this.parentData[0],
            type: this.parentData[1],
            decade: this.parentData[3],
            medialist: this.parentData[2]
        };
    },

    template: 
    `<div class="items_container">
        <div class="banner">
            <h2 class="banner-title">{{parentData[3]}}</h2>
        </div>
        <div class="gallery-container">
            <p class="gallery-head">Popular Now</p>
            <div @click="scrollLeft" class="l-arrow">◀</div>
            <div @click="scrollRight" class="r-arrow">▶</div>
            <div class="gallery-row">
                <thumb v-for="item in medialist" :media="item" :key="item["imdbID"]"></thumb>
            </div>
        </div>
    </div>`,
//               

    created: function() {
        console.log(this.filters);
        this.version = this.version.toLowerCase();
        this.type = this.type.toLowerCase();

        let url = `/api/media/${this.version}/${this.type}/${this.decade}`;
        console.log(this.parentData[2]);

    },

    computed: {

    },

    components: {
        "thumb": MovieThumb
    },

    methods: {

        showInfo(event) {
            document.querySelector(".info").style.display = "inline-block";
        },

        hideInfo(event) {
            document.querySelector(".info").style.display = "none";
        },

        loadItem(event) {
            var thisBox = event.target.id;
            console.log(thisBox);
         },

         scrollLeft() {
             let box = document.querySelector(".gallery-container");
             box.scrollLeft += 200;
         },

         scrollRight() {
             debugger;
            let box = document.querySelector(".gallery-container");
            box.scrollRight += 200;
        },
        }
    }
