export default {
    name: "MediaThumb",

    props: ["media"],

    template: `
        <div class="media-thumb">
            <img @click="loadPlayer(media)" :src=media.thumb alt="movie thumb">
        </div>
        `,

    methods: {
        loadPlayer(media) {
            debugger;
        }
    }

}