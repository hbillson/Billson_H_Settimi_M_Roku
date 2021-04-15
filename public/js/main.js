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
import Player from "./components/PlayerComponent.js";
import Pin from "./components/PinComponent.js";
//const Vue = require('vue');

(() => {


    Vue.use(VueRouter);

    const routes = [
        { path: '/', redirect: { name: "login" } },
        { path: '/login', name: "login", component: LoginComponent },
        { path: '/home', name: "home", component: MainMenu },
        { path: '/parents', name: "parents", component: MediaType },
        { path: '/pin', name: "pin", component: Pin },
        { path: '/kids', name: "kids", component: MediaType },
        { path: '/movies', name: "movies", component: Decades },
        { path: '/tv', name: "tv", component: Decades },
        { path: '/music', name: "music", component: Decades },
        { path: '/fifties', name: "fifties", component: Items },
        { path: '/sixties', name: "sixties", component: Items },
        { path: '/seventies', name: "seventies", component: Items },
        { path: '/eighties', name: "eighties", component: Items },
        { path: '/nineties', name: "nineties", component: Items },
        { path: '/player', name: "player", component: Player},
        { path: '/profile', name: "profile", component: Profile},
    ]
    let router = new VueRouter({
        mode: 'history',
        // set routes
        routes
    });
    const vm = new Vue({
        //el: "#app",

        data: {
            versions: [],
            currentVersion: {},
            isVisible: "false",
            currrentMedia: {},
            //currentView: window.location.pathname,
            //newView: "login",
            currentDecade: {},
            thisData: [],
            sidebarLinks: [],
            authenticated: false,
            parentauth: false,
            max_year: "0",
            min_year: "0",
            user: {}
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
                this.currentVersion = version.toLowerCase();
                document.querySelector(".home_title").style.display = "none";
                //this.newView = "mediatype-select";
               // var url = version.toLowerCase();
               if(this.currentVersion == "parents" && !this.parentauth && this.user.pin != 0) {
                    this.$router.push("pin");
               } else if(this.currentVersion == "parents" && this.parentauth) {
                   this.$router.push("parents");
               } else if(this.currentVersion == "parents" && this.user.pin == 0) {
                    this.parentauth = true;
                    this.$router.push("parents");
               } else {
                this.$router.push("kids");
               }

                this.thisData.push(this.currentVersion);
            },

            setMediatype(mediatype) {
                this.currentMediatype = mediatype;
               // this.newView = "decade-select";
                mediatype = mediatype.toLowerCase();
                this.$router.push(mediatype);
                this.thisData.push(this.currentMediatype);
            },
            setDecade(filtered) {
                this.currentDecade = filtered.dec;
               // this.newView = "item-select";
                this.$router.push(this.currentDecade);
                this.thisData.push(this.currentDecade);
                this.thisData.push(this.max_year);
                this.thisData.push(this.min_year);

                this.loadMedia(filtered.list);
            },

            setItem(item) {
                //this.newView = "player";
                this.$router.push("player");
                this.thisData.push(item);
            },

            toggleSettings() {
                this.newView = "settings";
            },

            toggleProfile() {
                this.$router.push("profile");
            },

            updateView(event) {
                let view = event.target.name;
                this.thisData.length = 1;
                let version = capitalize(view);
                function capitalize(view) {
                    if(view == "tv") {
                        let v = view.toUpperCase();
                        return v;
                    } else {
                        let firstLetter = view.charAt(0).toUpperCase();
                        let rest = view.slice(1);
                        let v = `${firstLetter}${rest}`;
                        return v;
                    }
                }
                this.thisData.push(version);
                this.$router.push(view);

               // this.newView = view;

                if(view == "home") {
                    document.querySelector(".home_title").style.display = "block";
                    this.thisData.splice(0, this.thisData.length);
                } else {
                    document.querySelector(".home_title").style.display = "none";
                }
            },

            loadMedia(list) {
                this.thisData.push(list);
            },

            setUser(user) {
                this.user = user;
                this.authenticated = true;
                //this.newView = "mainmenu";
                this.$router.push('home');
            },

            parentVersion() {
                this.parentauth = true;
                this.$router.push("parents");
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
            "login": LoginComponent,
            "player": Player,
            "pin": Pin
        },
        router: router
    })
    .$mount("#app"); // also connects Vue to your wrapper in HTML

    // add some router security here
    router.beforeEach((to, from, next) => {
        // if the Vue authenticated property is set to false, then
        // push the user back to the login screen (cuz they're not logged in)

        if (vm.authenticated == false) {
        next("/login");
        } else {
        next();
        }
    })
})();