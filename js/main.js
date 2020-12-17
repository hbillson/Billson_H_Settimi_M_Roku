import { fetchData } from "./modules/DataMiner.js";

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

        },

        // run a method when we change our view (update the DOM with Vue)
        updated: function() {

        },

        methods: {
            },

        components: {
        }
    })
    .$mount("#app"); // also connects Vue to your wrapper in HTML
 

})();