

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
            <div class="options_box" id="Parents" @click="addFilter"><h2 class="options_title">PARENTS</h2></div>
            <div class="options_box" id="Kids" @click="addFilter"><h2 class="options_title">KIDS</h2></div>
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
        addFilter(event) {
            var thisBox = event.target.id;
            this.$emit("setversion", thisBox);
         }
    }

}