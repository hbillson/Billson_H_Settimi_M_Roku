import { fetchData } from "./components/DataMiner.js";
import mainMenu from "./components/mainMenu.js";
import { changeVersion } from "./components/siteFunctions.js";

(() => {

    let siteVersions = document.querySelectorAll(".options_box");
    let vue_info = new Vue({

        //el: "#app",

        data: {
            options: []
        },
            created: function() {
             },

            mounted: function() {            

            console.log("Vue is mounted, trying a fetch for the initial data");

            fetchData("./dummyData.json")
                .then(data => {
                    this.options = data;
                })
                siteVersions.forEach(box => box.addEventListener("click", changeVersion))
        },

        // run a method when we change our view (update the DOM with Vue)
        updated: function() {

        },

        methods: {
            },

        components: {
            "menu": mainMenu
        }
    })
    .$mount("#app"); // also connects Vue to your wrapper in HTML
})();