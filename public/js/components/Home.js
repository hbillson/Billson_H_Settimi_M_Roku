

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
            <div @mouseover="hover" @mouseleave="unhover" class="options_box" id="Parents" @click="addFilter('Parents')">
                <h2 @mouseover.stop="hover" @click="addFilter('Parents')" class="options_title">PARENTS</h2>
            </div>
            <div @mouseover="hover" @mouseleave="unhover" class="options_box" id="Kids" @click="addFilter('Kids')">
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
            debugger;
            this.$emit("setversion", version);
         },
         hover(event) {
             console.log(event);
             if(event.target.id == "Parents") {
                event.target.classList.add("darkpurple");
             } else if (event.target.id == "Kids") {
                event.target.classList.add("darkyellow");
             }
         },
         unhover(event) {
            console.log(event);
            if(event.target.id == "Parents") {
                event.target.classList.remove("darkpurple");
             } else if (event.target.id == "Kids") {
                event.target.classList.remove("darkyellow");
             }
         }
    }

}