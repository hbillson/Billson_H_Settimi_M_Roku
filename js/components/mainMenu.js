import Welcome from "./Welcome.js";

export default {
    name: "mainMenu",

    props: ["menu", "mediatype"],

    template: 
    `<div>
        <!-- Welcome component -->
    </div>`,

    created: function () {
    },

    computed: {
        currentComponent: function() {
        }
    },

    components: {
        Welcome 
    },

    methods: {
        closelb() {

        }
    }

    }