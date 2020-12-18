import { fetchData } from "./components/DataMiner.js";
//import MediaTypes from "./components/MediaTypes.js";
import Home from "./components/Home.js";
import { toggleNav } from "./siteFunctions.js";
(() => {


    let vue_info = new Vue({

        //el: "#app",

        data: {
            versions: []
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

        updated: function() {

        },

        methods: {

            // function that changes what's in the main page's box based on which side you click
            setVersion(version) {
                debugger;
                let thisVersion = document.getElementById(version.id);
                if (version.id == "1") {
                    let otherVersion = document.getElementById("2");
                    if (thisVersion.classList.contains("full")) {
                        thisVersion.classList.remove("full");
                        otherVersion.classList.remove("hidden");
                        return;
                    }  
                    otherVersion.classList.add("hidden");
                    thisVersion.classList.add("full");
                    // add trigger for opening a "mediaMenu" showing the array under "parents"
                }
                else if (version.id == "2") {
                    let otherVersion = document.getElementById("1");
                    if (thisVersion.classList.contains("full")) {
                        thisVersion.classList.remove("full");
                        otherVersion.classList.remove("hidden");
                        return;
                    }
                    otherVersion.classList.add("hidden");
                    thisVersion.classList.add("full");
                    // add trigger for opening a "mediaMenu" showing the array under "kids"
                }
            }
            },

        components: {
            "version": Home
        }
    })
    .$mount("#app"); // also connects Vue to your wrapper in HTML
})();