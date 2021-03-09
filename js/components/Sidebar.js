export default {
    name: "Sidebar",

    props: [],

    data() {
        return {
        };
    },

    template: 
    `<div class="sidebar">
    <div @click="slideOut" class="sidebar_button">
         ☰
    </div>
        <div class="sidebar_contents">
            <div class="sidebar_wrapper">
                <div class="sidebar_links">
                    <a @click="clickedLink" name="mainmenu" class="sidebar_link">HOME</a>
                    <a @click="clickedLink" name="profile" class="sidebar_link">PROFILE</a>
                    <a @click="clickedLink" name="decade-select" class="sidebar_link">MOVIES</a>
                    <a @click="clickedLink" name="decade-select" class="sidebar_link">TV</a>
                    <a @click="clickedLink" name="decade-select" class="sidebar_link">MUSIC</a>
                </div>
                <div class="sidebar_footer">
                    <div class="socials">
                        <a class="social_link"><i class="fa fa-twitter faa-shake animated-hover" @mouseover="emphasizeIcon"></i></a>
                        <a class="social_link"><i class="fa fa-facebook-f faa-shake animated-hover"></i></a>
                        <a class="social_link"><i class="fab fa-instagram faa-shake animated-hover"></i></a>
                        <a class="social_link"><i class="fab fa-linkedin-in faa-shake animated-hover"></i></a>
                        <a class="social_link"><i class="fab fa-pinterest-p faa-shake animated-hover"></i></a>
                        <a class="social_link"><i class="fab fa-youtube faa-shake animated-hover"></i></a>
                    </div>
                    <div class="copyright">
                        LIMITED LEGAL COPYRIGHT
                </div>
            </div>
        </div>
    </div>
    </div>
    `,

    computed: {
    },

    components: {

    },

    methods: {
        slideOut(event) {
            let sidebar = document.querySelector(".sidebar");
            let sidebarContents = document.querySelector(".sidebar_contents");
            if (sidebar.classList.contains("open")) {
                sidebarContents.style.left = "-50vw";
                sidebar.style.left = "-50vw";
                sidebar.classList.remove("open");
            } else if (!sidebar.classList.contains("open")) {
                sidebar.style.left = "0";
                sidebarContents.style.left = "0";
                sidebar.classList.add("open");
            }
        },
        emphasizeIcon(event) {
            event.target.classList.add("fa-4x");
        },
        
        clickedLink(event) {
            debugger;
            let sidebar = document.querySelector(".sidebar");
            let sidebarContents = document.querySelector(".sidebar_contents");
            sidebarContents.style.left = "-50vw";
            sidebar.style.left = "-50vw";
            sidebar.classList.remove("open");
            this.$emit("update-view", event);
        }
    }

}