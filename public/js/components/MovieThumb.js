export default {
    name: "MediaThumb",

    props: ["media"],

    template: `
        <div class="media-thumb">
            <img @click="loadPlayer(media)" :src=media.Poster alt="movie thumb">
        </div>
        `,

    methods: {
        loadPlayer(media) {
            debugger;
            this.$emit("setitem", media);
        }
    }

}