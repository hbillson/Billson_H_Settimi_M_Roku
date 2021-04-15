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
        <div @mouseover="hover" @mouseleave="unhover" class="decade" id="fifties" @click="addFilter('fifties')"><h2 @mouseover.stop="hover" class="options_title" @click="addFilter('fifties')">50's</h2></div>
        <div @mouseover="hover" @mouseleave="unhover" class="decade" id="sixties" @click="addFilter('sixties')"><h2 @mouseover.stop="hover"  class="options_title" @click="addFilter('sixties')">60's</h2></div>
        <div @mouseover="hover" @mouseleave="unhover" class="decade" id="seventies" @click="addFilter('seventies')"><h2 @mouseover.stop="hover"  class="options_title" @click="addFilter('seventies')">70's</h2></div>
        <div @mouseover="hover" @mouseleave="unhover" class="decade" id="eighties" @click="addFilter('eighties')"><h2 @mouseover.stop="hover"  class="options_title" @click="addFilter('eighties')">80's</h2></div>
        <div @mouseover="hover" @mouseleave="unhover" class="decade" id="nineties" @click="addFilter('nineties')"><h2 @mouseover.stop="nohover"class="options_title" @click="addFilter('nineties')">90's</h2></div>
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

    },

    components: {

    },

    methods: {
        loadMedia(list) {
            document.querySelector(".loading").style.display = "none";
            this.medialist = list;
        },
        async addFilter(decade) {
            this.version = this.version.toLowerCase();
            this.type = this.type.toLowerCase();
            let url = `/api/media/${this.version}/${this.type}/${decade}`;
            document.querySelector(".loading").style.display = "flex";
            var response = await fetch(url)
            .then(res => res.json())
            .then(data => {
                return data;
            })
            .catch(err => console.error(err));
            this.medialist = await response;
            let filtered = { list: this.medialist, dec: decade};
            document.querySelector(".loading").style.display = "none";
            this.$emit("setdecade", filtered);
         },
         hover(event) {
             if(this.type == "movies") {
                event.target.classList.add("darkpurple");
             } else if (this.type == "tv") {
                event.target.classList.add("darkblue");
             } else if (this.type == "music") {
                event.target.classList.add("darkyellow");
             } 
         },

         unhover(event) {
            if(this.type == "movies") {
               event.target.classList.remove("darkpurple");
            } else if (this.type == "tv") {
               event.target.classList.remove("darkblue");
            } else if (this.type == "music") {
               event.target.classList.remove("darkyellow");
            } 
        },
    }

}