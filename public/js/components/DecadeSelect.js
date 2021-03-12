export default {
    name: "Decades",

    props: ["main-menu", "parent-data"],

    data() {
        return {
            filters: this.parentData
        };
    },

    template: 
    `<div class="options_container">
        <div class="decade" id="fifties" @click="addFilter"><h2 class="options_title">50's</h2></div>
        <div class="decade" id="sixties" @click="addFilter"><h2 class="options_title">60's</h2></div>
        <div class="decade" id="seventies" @click="addFilter"><h2 class="options_title">70's</h2></div>
        <div class="decade" id="eighties" @click="addFilter"><h2 class="options_title">80's</h2></div>
        <div class="decade" id="nineties" @click="addFilter"><h2 class="options_title">90's</h2></div>
    </div>`,

    computed: {
    },

    mounted: function() {
        debugger;
        let decadeBoxes = document.querySelectorAll(".decade");
        if(this.filters[1] == "Movies") {
            decadeBoxes.forEach(box => box.style.backgroundColor="#ad54cc");
        } else if (this.filters[1] == "TV") {
            decadeBoxes.forEach(box => box.style.backgroundColor="#00c4fa");
        } else if (this.filters[1] == "Music") {
            decadeBoxes.forEach(box => box.style.backgroundColor="#ffd800");
        }
    },

    components: {

    },

    methods: {
        addFilter(event) {
            var thisBox = event.target.id;
            this.$emit("setdecade", thisBox);
         }
    }

}