export default {
    name: "Player",

    props: ["parent-data"],

    data() {
        return {
           media: this.parentData[6],
           source: "",
           type: this.parentData[1]
        };
    },

    template: `
        <div class="media-player">
            <div class="vid-container">
                <div class="media-desc">
                    <h3>{{media.Title}} ({{media.Year}})</h3>
                    <p>{{media.Plot}} </p>
                    <p>Starring: {{media.Actors}}</p>
                    <p>Rated: {{media.Rated}}</p>
                </div>
                <iframe @mouseenter="showDesc" @mouseleave="hideDesc" width="1080" height="720" 
                :src="setSource" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
           </div>
        `,

        computed: {
            setSource() {
                let src = this.source;
                return src;
            }
        },

        mounted: async function() {
            if(this.type == "Movies" || this.type == "TV") {
                let q = this.media.Title;
                let url = `/api/videos/${q}`;
                document.querySelector(".loading").style.display = "flex";
                var response = await fetch(url)
                .then(res => res.json())
                .then(data => {
                    return data;
                })
                .catch(err => console.error(err));
                this.source = response;
                console.log(this.source);
                document.querySelector(".loading").style.display = "none";
            } else if(this.type == "Music") {
                this.source = `https://www.youtube.com/embed/${this.media.id}`;
            }
        },

    methods: {
        showDesc() {
           console.log("toggling desc");
            document.querySelector(".media-desc").style.display = "block";
        },

        hideDesc() {
            document.querySelector(".media-desc").style.display = "none";
        },
        
    }

}