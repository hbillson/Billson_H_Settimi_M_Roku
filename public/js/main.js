import MainMenu from "./components/Home.js";
import { startSpin } from "./siteFunctions.js";
import { stopSpin } from "./siteFunctions.js";
import { startFloat } from "./siteFunctions.js";
import { stopFloat } from "./siteFunctions.js";
import MediaType from "./components/MediaSelect.js";
import Decades from "./components/DecadeSelect.js";
import Items from "./components/ItemSelect.js";
import Sidebar from "./components/Sidebar.js";
import Settings from "./components/Settings.js";
import Profile from "./components/Profile.js";
import LoginComponent from "./components/LoginComponent.js";

(() => {


    Vue.use(VueRouter);



    let router = new VueRouter({

        // set routes
        routes: [
            { path: '/', redirect: { name: "login" } },
            { path: '/login', name: "login", component: LoginComponent },
            { path: '/mainmenu', name: "users", component: MainMenu }
        ]
    });
    const vm = new Vue({
        //el: "#app",

        data: {
            versions: [],
            currentVersion: {},
            isVisible: "false",
            currrentMedia: {},
            currentView: {},
            newView: "mainmenu",
            currentDecade: {},
            thisData: [],
            sidebarLinks: [],
            authenticated: false,
            administrator: false,
            max_year: "0",
            min_year: "0",
            mockAccount: {
                username: "user",
                password: "password"
            },
            user: []
         },

            created: function() {
            },

            mounted: function() {   
            console.log("Vue is mounted, trying a fetch for the initial data");

           // fetchData("./dummyData.json")
           //     .then(data => {
          //          this.versions = data;
           //     })

            let settingsIcon = document.querySelector(".fa-gear");
            let profIcon = document.querySelector(".fa-user");
            settingsIcon.addEventListener("mouseover", startSpin);
            settingsIcon.addEventListener("mouseleave", stopSpin);
            profIcon.addEventListener("mouseover", startFloat);
            profIcon.addEventListener("mouseleave", stopFloat);
        },

        computed: {
            setView: function() {
                this.currentView = this.newView;
                return this.currentView;
            },
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

                if (decade == "fifties") {
                    this.max_year = "1959";
                    this.min_year = "1950";
                } else if (decade == "sixties") {
                    this.max_year = "1969";
                    this.min_year = "1960";
                } else if (decade == "seventies") {
                    this.max_year = "1969";
                    this.min_year = "1960";
                } else if (decade == "eighties") {
                    this.max_year = "1969";
                    this.min_year = "1960";
                } else if (decade == "nineties") {
                    this.max_year = "1969";
                    this.min_year = "1960";
                }
                this.thisData.push(this.currentDecade);
                this.thisData.push(this.max_year);
                this.thisData.push(this.min_year);
            },

            toggleSettings() {
                document.querySelector(".home_title").style.display = "none";
                this.newView = "settings";
            },

            toggleProfile() {
                document.querySelector(".home_title").style.display = "none";
                this.newView = "profile";
            },

            updateView(event) {
                let view = event.target.name;
                this.newView = view;

                if(this.newView == "mainmenu") {
                    document.querySelector(".home_title").style.display = "block";
                    this.thisData.splice(0, this.thisData.length);
                } else {
                    document.querySelector(".home_title").style.display = "none";
                }
            },

            loadMedia(list) {
                this.thisData.push(list);
            }


            },

        components: {
            "mainmenu": MainMenu,
            "mediatype-select": MediaType,
            "decade-select": Decades,
            "item-select": Items,
            "sidebar": Sidebar,
            "settings": Settings,
            "profile": Profile,
            "login": LoginComponent
        },
        router: router
    })
    .$mount("#app"); // also connects Vue to your wrapper in HTML

    // add some router security here
    router.beforeEach((to, from, next) => {
        console.log('router guard fired');
        // if the Vue authenticated property is set to false, then
        // push the user back to the login screen (cuz they're not logged in)

        if (vm.authenticated == false) {
        next("/login");
        } else {
        next();
        }
    })
})();