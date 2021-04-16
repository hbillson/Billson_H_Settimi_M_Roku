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
        routes
    });

    var auth = false;
    router.beforeEach((to, from, next) => {
        // if the Vue authenticated property is set to false, then
        // push the user back to the login screen (cuz they're not logged in)

        if (auth == false && to.path !== '/login') {
        next({name: 'login'});
        } else {
        next();
        }
    })

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
            parentauth: false,
            max_year: "0",
            min_year: "0",
            user: {}
             },


            mounted: function() {   
            console.log("Vue is mounted, trying a fetch for the initial data");
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
                this.thisData.length = 0;
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
                if(this.thisData.length = 7) {
                    this.thisData.length = 6;
                    this.thisData.push(item);
                } else {
                    this.thisData.push(item);
                }
                this.$router.push("player");

            },

            toggleProfile() {
                if(this.$router.currentRoute.path != "/profile") {
                    let sidebar = document.querySelector(".sidebar")
                    sidebar.style.backgroundColor = "#d30924";
                    this.$router.push("profile");
                } else {
                    this.$router.go(-1);
                }

            },

            updateView(event) {
                let view = event.target.name;
                let capsView = capitalize(view);
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
                //this.thisData.push(version);
                //this.$router.push(view);
                if(view == "home") {
                    this.thisData.length = 0;
                    this.$router.push(view);
                } if(view == "parents" || view == "kids") {
                    this.thisData.length = 0;
                    this.setVersion(view);
                } if(view == "movies" || view == "tv" || view == "music") {
                    this.thisData.length = 1;
                    this.setMediatype(capsView);
                } if(view == "fifties" ||view ==  "sixties" ||view ==  "seventies" ||view ==  "eighties" ||view ==  "nineties") {
                    this.thisData.length = 2
                    this.setDecade(view);
                } 
            },

            loadMedia(list) {
                this.thisData.push(list);
            },

            setUser(user) {
                this.user = user;
                auth = true;
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


})();