export default {
    name: "MediaThumb",

    props: ["media", "type"],

    data() {
        return {
            mediatype: this.type
        }
    },

    template: `
        <div class="media-thumb">
            <img v-show="isMovie" @click="loadPlayer(media)" :src=media.Poster alt="movie thumb">
            <img v-show="isMusic" @click="loadPlayer(media)" :src=media.cover alt="music thumb">
        </div>
        `,

    computed: {
        isMovie() {
            if(this.mediatype == "Movies") {
                return true;
            } else if(this.mediatype == "TV") {
                return true;
            } else { 
                return false;
            } 
        },
        isMusic() {
            if(this.mediatype == "Music") {
                return true;
            } else { 
                return false;
            }
        }
    },

    methods: {
        loadPlayer(media) {
            debugger;
            this.$emit("setitem", media);
        }
    }

}