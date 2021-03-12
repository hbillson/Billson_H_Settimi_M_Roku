export default {
    name: "Items",

    props: ["main-menu"],

    data() {
        return {
            hover: false
        };
    },

    template: 
    `<div class="items_container">
     <h3>this is where the interactive gallery of movies/tv/music thumbnails will go</h3>
        <div id="Example" class="thumb_container" @mouseover="showInfo" @mouseleave="hideInfo" @click="loadItem">  
            <div class="info">
                <p class="thumb-title">Movie Title Here</p>
                <p class="thumb-info">Movie Description Here</p>
            </div>
        </div>
    </div>`,

    computed: {
        currentComponent: function() {
        }
    },

    components: {

    },

    methods: {

        showInfo(event) {
            console.log("hovered!");
            document.querySelector(".info").style.display = "inline-block";
        },

        hideInfo(event) {
            console.log("left!");
            document.querySelector(".info").style.display = "none";
        },

        loadItem(event) {
            var thisBox = event.target.id;
            console.log(thisBox);
         }
    }

}