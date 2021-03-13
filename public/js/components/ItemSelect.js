import MovieThumb from "./MovieThumb.js";

export default {
    name: "Items",

    props: ["main-menu", "parent-data"],

    data() {
        return {
            hover: false,
            filters: this.parentData,
            version: this.parentData[0],
            type: this.parentData[1],
            decade: this.parentData[3],
            media: {}
        };
    },

    template: 
    `<div>hello</div>`,
//                <thumb v-for="item in media" :media="item" :key="item.key"></thumb>

    created: function() {
        console.log(this.filters);
        this.version = this.version.toLowerCase();
        this.type = this.type.toLowerCase();

        let url = `/api/media/${this.version}/${this.type}/${this.decade}`;
        console.log(this.parentData[2]);

    },

    computed: {
        currentComponent: function() {
        }
    },

    components: {
    },

    methods: {

        showInfo(event) {
            console.log("hovered!");
            document.querySelector(".info").style.display = "inline-block";
        },

        hideInfo(event) {
            console.log("left!");
            document.querySelector(".info").style.display = "none";
        },

        loadItem(event) {
            var thisBox = event.target.id;
            console.log(thisBox);
         }
    }

}