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
            medialist: this.parentData[5],
            typevalues: {
                "isMovie": true,
                "isMusic": false
             }
        };
    },

    template: 
    `<div class="items_container">
        <div class="banner">
        <img class="banner-bg" :src="setBackground">
            <h2 class="banner-title">{{parentData[2]}}</h2>
        </div>
        <div class="gallery-container">
            <p class="gallery-head">Popular Now</p>
            <div @click="scrollLeft" class="l-arrow">◀</div>
            <div @click="scrollRight" class="r-arrow">▶</div>
            <div class="gallery-row">
                <thumb v-for="item in medialist" :media="item" :type="type" :key="item.imdbID" @setitem="setItem"></thumb>
            </div>
        </div>
    </div>`,
//               

    created: async function() {
 
    },

    computed: {
        setBackground() {
            var decade = this.decade.toLowerCase();
            var type = this.type.toLowerCase();
            var version = this.version.toLowerCase();
            var bg = "";

            if(type == "movies" || type == "tv" && version == "parents") {
                bg = `images/${decade}-bg.jpg`
                return bg;
            } else if(type == "music") {
                bg = `images/music-bg.jpg`;
                return bg;
            } else if(type == "movies" || type == "tv" && version == "kids") {
                bg = `images/${decade}-bg-kids.jpg`
                return bg;
            }
        }
    },

    mounted: function() {
       
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
