export default {
    name: "Profile",

    props: ["parent-data", "user"],

    data() {
        return {
            currentdata: this.parentData
        };
    },

    template: 
    `<div class="menu_container">
        <div class="profile-container">
            <h2 class="profile-heading">USERNAME</h2>
            <h3 class="profile-text">{{user.uname}}</h3>
            <h2 class="profile-heading">NAME</h2>
            <h3 class="profile-text">{{user.nickname}}</h3>
            <h2 class="profile-heading">EMAIL ADDRESS</h2>
            <h3 class="profile-text">{{user.email}}</h3>
        </div>
    </div>`,

    computed: {
    },

    components: {

    },

    methods: {
        
    }

}