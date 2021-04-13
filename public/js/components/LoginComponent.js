
export default {
    template: `
        <div class="login_container">
            <div class="login_contents">
                <h3>Your favourite oldies are waiting for you!</h3>
                <h4 v-model="message">{{message}}</h4>

   
                <div class="form-container">
                    <form @submit.prevent="login" v-show="isLogin">
                        <input v-model="input.username" type="text" class="form-text" name="username" placeholder="username" required>

                        <input v-model="input.password" type="password" class="form-control" name="password" placeholder="password" required>

                        <button type="submit" class="login-button">Go!</button>
                    </form>       
                    <h5 @click="signup" v-show="isLogin">Don't have an account yet? Click here</a> to sign up now!</h5>

                    <form @submit.prevent="create" v-show="isSignup">
                        <input v-model="input.newusername" type="text" class="form-text" name="newusername" placeholder="create username" required>

                        <input v-model="input.newpassword" type="password" class="form-control" name="newpassword" placeholder="create password" required>

                        <input v-model="input.newname" type="text" class="form-control" name="newname" placeholder="your name" required>

                        <input v-model="input.newemail" type="email" class="form-control" name="newemail" placeholder="your email" required>

                        <input v-model="input.newpin" type="password" class="form-control" name="newpin"  placeholder="4-digit pin for parents" required>

                    <button type="submit" class="login-button">SIGN UP</button>
                </form>    
                <h5 @click="goToLogin" v-show="isSignup">Already have an account? Click here</a> to log in!</h5>

                </div>   
            </div>
        </div>
     `,

    data() {
        return {
            input: {
                username: "",
                password: "",
                newusername: "",
                newpassword: "",
                newname: "",
                newemail: "",
                newpin: ""
            },
            currentUser: {},
            message: "But first you'll have to login.",
            isLogin: true,
            isSignup: false

        }
    },

    methods: {
        goToLogin() {
            this.isSignup = false;
            this.isLogin = true;
        },
        login() {
            //console.log(this.$parent.mockAccount.username);
            // debugger;
            if (this.input.username != "" && this.input.password != "") {
                // use the FormData object to collect and send our params
            //     let formData = new FormData();

            //    formData.append("username", this.input.username);
            //    formData.append("password", this.input.password);

            //     //formData["username"] = this.input.username;
            //     for(var pair of formData.entries()) {
            //         console.log(pair[0]+ ', '+ pair[1]);
            //      };
                 let url = "admin/index.php?user=true";
            //    // console.log(this.input.username);
            //     //console.log(formData.get("username"));
                fetch(url
                //     , {
                //     method: "POST",
                //     headers: { 'Accept': 'application/json','Content-Type': 'application/json'},
                //     body: formData
                // }
                )  
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    this.checkCreds(data);
                    // tell the app that we have a successful login
                    // and store the user object that we retrieved

                    // true below means that authentication worked
                    // data is the user we retrieved from the DB
                   // this.$emit("authenticated", true, data[0]);

                    // push the user to the users page
                   // this.$router.replace({name: "users"});                    
                })
                .catch((err) => console.log(err));

            } else {
                console.error("inputs can't be blank!");
            }

            
 
        },
        checkCreds(data) {
            debugger;
            let userExists = false;

            for(var i = 0; i < data.length; i++) {
                if(data[i]["uname"] == this.input.username) {
                    console.log("found user! checking user data...");
                    userExists = true;

                    if(data[i]["pword"] == this.input.password) {
                        this.message = "Logged in successfully.";
                        console.log("user authenticated!");
                        this.currentUser = data[i];
                        this.$emit("authenticated", this.currentUser);
                    } else {
                        this.message = "Incorrect password. Please try again."
                       // console.log("sorry, wrong password...");
                    }
                }
            }
            if(!userExists) {
                this.message = "Oops! Looks like we don't have any records under that username. Please check your spelling and try again."
                //console.log("user doesn't exist...");
            }
        },

        signup() {
            this.message = "Please fill out the forms below to signup with Roku Flashback. Leave 'Pin' as '0000' if you don't need parental controls."
            this.isLogin = false;
            this.isSignup = true;
        },

        create() {
            if (this.input.newusername != "" && this.input.newpassword != "" && this.input.newname != "" && this.input.newemail != "" && this.input.newpin != "") {
                 let url = `admin/index.php?create=true&uname=${this.input.newusername}&pword=${this.input.newpassword}&nickname=${this.input.newname}&email=${this.input.newemail}&pin=${this.input.newpin}`;
                 //let url = `/api/media/${this.version}/${this.type}/${decade}`;
                fetch(url)  
                .then(res => res.text())
                .then(data => {
                    console.log(data);
                    this.message = "Creation successful! Please log in."
                    this.isSignup = false;
                    this.isLogin = true;
                })
                .catch((err) => console.log(err));

            } else {
                console.error("inputs can't be blank!");
            }
        }

    }
}