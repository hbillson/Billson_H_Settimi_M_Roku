

export default {
    name: "MainMenu",

    props: ["main-menu"],

    data() {
        return {
        };
    },

    template: 
    `<div class="options_container">
        <div class="options_box" id="Parents" @click="addFilter"><h2 class="options_title">PARENTS</h2></div>
        <div class="options_box" id="Kids" @click="addFilter"><h2 class="options_title">KIDS</h2></div>
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
            console.log(thisBox);
            this.$emit("setversion", thisBox);
         }
    }

}