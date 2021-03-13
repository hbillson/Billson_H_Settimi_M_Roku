export default {
    name: "Decades",

    props: ["main-menu", "parent-data"],

    data() {
        return {
            filters: this.parentData,
            version: this.parentData[0],
            type: this.parentData[1],
            medialist: {}
        };
    },

    template: 
    `<div class="options_container" >
        <div class="decade" id="fifties" @click="addFilter"><h2 class="options_title">50's</h2></div>
        <div class="decade" id="sixties" @click="addFilter"><h2 class="options_title">60's</h2></div>
        <div class="decade" id="seventies" @click="addFilter"><h2 class="options_title">70's</h2></div>
        <div class="decade" id="eighties" @click="addFilter"><h2 class="options_title">80's</h2></div>
        <div class="decade" id="nineties" @click="addFilter"><h2 class="options_title">90's</h2></div>
    </div>`,

    computed: {

    },

    mounted: function() {
    
        let decadeBoxes = document.querySelectorAll(".decade");
        if(this.filters[1] == "Movies") {
            decadeBoxes.forEach(box => box.style.backgroundColor="#ad54cc");
        } else if (this.filters[1] == "TV") {
            decadeBoxes.forEach(box => box.style.backgroundColor="#00c4fa");
        } else if (this.filters[1] == "Music") {
            decadeBoxes.forEach(box => box.style.backgroundColor="#ffd800");
        }
        this.version = this.version.toLowerCase();
        this.type = this.type.toLowerCase();
        //let url = `/api/media/${this.version}/${this.type}`;
        let url = `/api/media/kids/movies`;
        fetch(url)
            .then(res => res.json())
            .then(data => {
                this.loadMedia(data);
            })
            .catch(err => console.error(err));
    },

    components: {

    },

    methods: {
        loadMedia(list) {
            this.medialist = list;
            console.log(this.medialist);
            this.$emit("loadmedia", this.medialist);
        },
        addFilter(event) {
            var thisBox = event.target.id;
            this.$emit("setdecade", thisBox);
         }
    }

}