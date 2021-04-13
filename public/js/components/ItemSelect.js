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
            decade: this.parentData[2],
            medialist: this.parentData[5]
        };
    },

    template: 
    `<div class="items_container">
        <div class="banner">
            <h2 class="banner-title">{{parentData[2]}}</h2>
        </div>
        <div class="gallery-container">
            <p class="gallery-head">Popular Now</p>
            <div @click="scrollLeft" class="l-arrow">◀</div>
            <div @click="scrollRight" class="r-arrow">▶</div>
            <div class="gallery-row">
                <thumb v-for="item in medialist" :media="item" :key="item.imdbID" @setitem="setItem"></thumb>
            </div>
        </div>
    </div>`,
//               

    created: async function() {
 
    },

    computed: {

    },

    components: {
        "thumb": MovieThumb
    },

    methods: {

        loadMedia(list) {
            this.medialist = list;
        },
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
            let box = document.querySelector(".gallery-container");
            box.scrollLeft += 200;
        },

        setItem(item) {
            this.$emit("setitem", item);
        }
        }
    }
