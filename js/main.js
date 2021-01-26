import { fetchData } from "./components/DataMiner.js";
import MainMenu from "./components/Home.js";
import { toggleNav } from "./siteFunctions.js";
import MediaType from "./components/MediaSelect.js";
import Decades from "./components/DecadeSelect.js";
import Items from "./components/ItemSelect.js";

(() => {


    let vue_info = new Vue({

        //el: "#app",

        data: {
            versions: [],
            currentVersion: {},
            isVisible: "false",
            currrentMedia: {},
            currentView: {},
            newView: "mainmenu",
            currentDecade: {},
            thisData: []
         },

            mounted: function() {   
                let navButton = document.querySelector(".sidebar_button");

            console.log("Vue is mounted, trying a fetch for the initial data");

            fetchData("./dummyData.json")
                .then(data => {
                    this.versions = data;
                })
            
            navButton.addEventListener("click", toggleNav);
        },

        computed: {
            setView: function() {
                this.currentView = this.newView;
                return this.currentView;
            }
        },

        updated: function() {
        },

        methods: {

            // function that changes what's in the main page's box based on which side you click
            setVersion(version) {
                this.currentVersion = version;
                document.querySelector(".home_title").style.display = "none";
                this.newView = "mediatype-select";

                this.thisData.push(this.currentVersion);
            },

            setMediatype(mediatype) {
                this.currentMediatype = mediatype;
                this.newView = "decade-select";
                this.thisData.push(this.currentMediatype);
            },

            setDecade(decade) {
                this.currentDecade = decade;
                this.newView = "item-select";
                this.thisData.push(this.currentDecade);
            }

            },

        components: {
            "mainmenu": MainMenu,
            "mediatype-select": MediaType,
            "decade-select": Decades,
            "item-select": Items
        }
    })
    .$mount("#app"); // also connects Vue to your wrapper in HTML
})();