

export default {
    name: "MainMenu",

    props: ["main-menu"],

    data() {
        return {
        };
    },

    template: 
    `<div class="wrapper">
        <h1 class="home_title">WHO'S WATCHING?</h1>
        <div class="options_container">
            <div @mouseover="hover('Parents')" @mouseleave="unhover('Parents')" class="options_box" id="Parents" @click="addFilter('Parents')">
                <h2 @mouseover.stop="hover" @click="addFilter('Parents')" class="options_title">PARENTS</h2>
            </div>
            <div @mouseover="hover('Kids')" @mouseleave="unhover('Kids')" class="options_box" id="Kids" @click="addFilter('Kids')">
            <div @mouseover="hover('Kids')" @mouseleave="unhover('Kids')" class="square blue"></div>
            <div @mouseover="hover('Kids')" @mouseleave="unhover('Kids')" class="square red"></div>
            <div class="square purple" @mouseover="hover('Kids')" @mouseleave="unhover('Kids')"></div>
                <h2 class="options_title" @click="addFilter('Kids')">KIDS</h2>
            </div>
        </div>
    </div>`,

    computed: {
        currentComponent: function() {
        }
    },

  
    mounted: function() {
        document.querySelector(".sidebar").style.display = "block";
    },

    methods: {
        addFilter(version) {
            this.$emit("setversion", version);
         },
         hover(box) {
             console.log(box);
             if(box == "Parents") {
                document.getElementById(box).classList.add("darkpurple");
             } else if (box == "Kids") {
                document.getElementById(box).classList.add("darkyellow");
                let blue = document.querySelector(".blue");
                blue.classList.add("darkblue");
                let red = document.querySelector(".red");
                red.classList.add("darkred");
                let purple = document.querySelector(".purple");
                purple.classList.add("darkpurple");
             }
         },
         unhover(box) {
            console.log(box);
            if(box == "Parents") {
                document.getElementById(box).classList.remove("darkpurple");
             } else if (box == "Kids") {
                document.getElementById(box).classList.remove("darkyellow");
                let blue = document.querySelector(".blue");
                blue.classList.remove("darkblue");
                let red = document.querySelector(".red");
                red.classList.remove("darkred");
                let purple = document.querySelector(".purple");
                purple.classList.remove("darkpurple");
             }
         }
    }

}