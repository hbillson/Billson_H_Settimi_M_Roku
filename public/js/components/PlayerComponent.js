export default {
    name: "Player",

    props: ["parent-data"],

    data() {
        return {
           media: this.parentData[6],
           source: "",
           type: this.parentData[1],
           decade: this.parentData[2],
           title: "",
           artist: "",
           isMusic: true
        };
    },

    template: `
        <div class="media-player">
            <div class="vid-container">
                    <iframe width="1080" height="720" 
                    :src="setSource" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                <h2 @click="goBack">BACK</h2>
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
                document.querySelector(".loading").style.display = "none";
            } else if(this.type == "Music") {
                this.source = `https://www.youtube.com/embed/${this.media.id}`;
            }
        },

    methods: {
       goBack() {
        this.$router.go(-1);
       }
        
    }

}