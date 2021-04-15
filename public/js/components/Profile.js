export default {
    name: "Profile",

    props: ["parent-data"],

    data() {
        return {
            currentdata: this.parentData
        };
    },

    template: 
    `<div class="menu_container">
        <div class="profile-container">
            <h2 class="profile-heading">USERNAME</h2>
            <h3 class="profile-text">username</h3>
            <h2 class="profile-heading">NAME</h2>
            <h3 class="profile-text">name</h3>
            <h2 class="profile-heading">EMAIL ADDRESS</h2>
            <h3 class="profile-text">email</h3>
        </div>
    </div>`,

    computed: {
    },

    components: {

    },

    methods: {
        
    }

}