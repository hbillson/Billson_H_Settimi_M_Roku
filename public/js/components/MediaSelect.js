export default {
    name: "MediaTypes",

    props: ["media-select"],

    data() {
        return {
        };
    },

    template: 
    `<div class="options_container">
        <div @mouseover="hover" @mouseleave="unhover" class="mediatype" id="Movies" @click="addFilter('Movies')"><h2 @mouseover.stop="hover" class="options_title" @click="addFilter('Movies')">Movies</h2></div>
        <div @mouseover="hover" @mouseleave="unhover" class="mediatype" id="TV" @click="addFilter('TV')"><h2 @mouseover.stop="hover" class="options_title" @click="addFilter('TV')">TV</h2></div>
        <div @mouseover="hover" @mouseleave="unhover" class="mediatype" id="Music" @click="addFilter('Music')"><h2@mouseover.stop="hover" class="options_title" @click="addFilter('Music')">Music</h2></div>
    </div>`,

    computed: {
        currentComponent: function() {
        }
    },

    components: {

    },

    methods: {
        addFilter(version) {
            this.$emit("setmediatype", version);
         },

         hover(event) {
            if(event.target.id == "Movies") {
               event.target.classList.add("darkpurple");
            } else if (event.target.id == "TV") {
               event.target.classList.add("darkblue");
            } else if (event.target.id == "Music") {
                event.target.classList.add("darkyellow");
             }
        },
        unhover(event) {
            if(event.target.id == "Movies") {
                event.target.classList.remove("darkpurple");
             } else if (event.target.id == "TV") {
                event.target.classList.remove("darkblue");
             } else if (event.target.id == "Music") {
                 event.target.classList.remove("darkyellow");
              }
         }
    }

}