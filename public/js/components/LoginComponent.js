
export default {
    template: `
        <div class="login_container">
            <div class="login_contents">
                <h3>Your favourite oldies are waiting for you, but first you have to login with your username and password.</h3>
                <div class="form-container">
                    <form>
                        <input v-model="input.username" type="text" class="form-text" id="inlineFormInputName" placeholder="username" required>

                        <input v-model="input.password" type="password" class="form-control" id="inlineFormPassword" placeholder="password" required>

                        <button @click="storeCreds" class="login-button">Go!</button>
                        
                    </form>         
                </div>   
            </div>
        </div>
     `,

    data() {
        return {
            input: {
                username: "",
                password: ""
            },

        }
    },

    methods: {
        storeCreds(e) {
            e.preventDefault();
            window.localStorage.setItem("creds", JSON.stringify({name: this.input.username, pword: this.input.password}));
        }
    }
}