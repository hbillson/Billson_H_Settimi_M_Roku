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
        <div class="password_container">
            <form action="/login.php">
                <label for="pwd"><h3>Password Protected</h3></label>
                <input type="password" class="pwd" name="pwd">
                <button>SUBMIT</button>
            </form>
        </div>
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
            let containerID = this.version.id;
            let thisContainer = document.getElementById("1");
            let passwordForms = document.querySelectorAll(".password_container");
            let parentForm = passwordForms[0];
            thisContainer.style.display = "block";
            
            if(this.version.title == "PARENTS") {
                parentForm.style.display = "block"
            }
            this.$emit("setversion", this.version);

            //document.querySelector(".options_title").style.display = "none";
        }
    },

}