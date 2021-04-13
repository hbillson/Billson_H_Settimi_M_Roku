
export default {
    props: ['user'],
    template: `
        <div class="login_container">
            <div class="login_contents">
                <h3>Content Restricted</h3>
                <h4>Enter your 4-digit pin to access restricted content.</h4>

                <div class="form-container">
                    <form @submit.prevent="check">
                        <input v-model="input.pin" type="text" class="form-text" name="pin" placeholder="####" required>

                        <button type="submit" class="login-button">Submit</button>
                        <button class="login-button" @click="goBack">Go Back</button>
                    </form>       

                </div>   
            </div>
        </div>
     `,

    data() {
        return {
            pin: this.user.pin,
            input: {
                pin: ""
            }
        }
    },

    methods: {
        check() {
            if(this.input.pin == this.pin) {
                console.log("parent authenticated!");
                this.$emit("update-view", "home");
                this.$emit("parents");
            } else {
                console.log("parent pin wrong")
            }
        },
        goBack() {
            this.$emit("update-view", "home")
        }
    }
}