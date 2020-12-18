import { fetchData } from "./components/DataMiner.js";
import { mainMenu } from "./components/mainMenu.js";

(() => {

    let vue_info = new Vue({

        //el: "#app",

        data: {

        },
            created: function() {
             },

            mounted: function() {            
            fetchData("./includes/index.php")
                .then(data => {
                    this.table_name = data;
                })
                console.log("Loaded data!");

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