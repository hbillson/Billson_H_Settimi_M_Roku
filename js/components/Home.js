//import Parents from "./Parents.js";
//import Kids from "./Kids.js";


export default {
    name: "Home",

    props: ["version"],

    data() {
        return {
            versions: []
        };
    },

    template: 
    `<div class="options_box" :id="version.id" @click="loadVersion">
        <h2 class="options_title">{{version.title}}</h2>
        <div :class="version.title.toLowerCase()">this is the  {{version.title.toLowerCase()}} container</div>
    </div>`,
    //        <component :is="currentVersion" :version="version" :v-for="version in versions"></component>

    computed: {
        currentVersion: function() {
            return this.version;
        }
    },

    components: {
     //   Parents,
        //Kids
    },

    methods: {
        loadVersion(event) {
            debugger;
            let containerTitle = this.version.title;
            let containerClass = containerTitle.toLowerCase();
            let thisContainer = document.querySelector(`.${containerClass}`);
            console.log(thisContainer);
            thisContainer.style.opacity = "1";
            document.querySelector(".options_title").style.display = "none";
            this.$emit("setversion", this.version);
        }
    },

}