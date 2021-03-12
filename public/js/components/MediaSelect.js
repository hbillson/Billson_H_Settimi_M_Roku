export default {
    name: "MediaTypes",

    props: ["media-select"],

    data() {
        return {
        };
    },

    template: 
    `<div class="options_container">
        <div class="mediatype" id="Movies" @click="addFilter"><h2 class="options_title">Movies</h2></div>
        <div class="mediatype" id="TV" @click="addFilter"><h2 class="options_title">TV</h2></div>
        <div class="mediatype" id="Music" @click="addFilter"><h2 class="options_title">Music</h2></div>
    </div>`,

    computed: {
        currentComponent: function() {
        }
    },

    components: {

    },

    methods: {
        addFilter(event) {
            var thisBox = event.target.id;
            this.$emit("setmediatype", thisBox);
         }
    }

}