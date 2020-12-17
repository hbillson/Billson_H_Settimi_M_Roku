import Video from "./VideoComponent.js";
import Audio from "./AudioComponent.js";


export default {
    name: "mainMenu",

    props: ["work", "mediatype"],

    template: 
    `<div>
        <!-- Media component -->
    </div>`,

    created: function () {
    },

    computed: {
        currentComponent: function() {
        }
    },

    components: {
        Video,
        Audio 
    },

    methods: {
        closelb() {

        }
    }

    }