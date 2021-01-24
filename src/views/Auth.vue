<template>
    <!--    <div class="auth">-->
    <!--        <input type="email" v-model="user.email" value="re@re.re"/><br/>-->
    <!--        <input type="password" v-model="user.password" value="rerere"/><br/>-->
    <!--        <button v-if="isLogin" @click="onLogin">login</button>-->
    <!--        <button v-if="!isLogin">resister</button>-->
    <!--        <button @click="isLogin = !isLogin">change</button>-->

    <!--        <div>-->
    <!--            {{ getToken }}-->
    <!--        </div>-->
    <!--    </div>-->
    <!--    <form ref="form"-->
    <!--          v-model="valid"-->
    <!--          lazy-validation>-->
    <!--        <v-text-field-->
    <!--                v-model="user.email"-->
    <!--                :rules="emailRules"-->
    <!--                label="E-mail"-->
    <!--                type="email"-->
    <!--                required-->
    <!--        ></v-text-field>-->

    <!--        <v-text-field-->
    <!--                v-model="user.password"-->
    <!--                :counter="10"-->
    <!--                :rules="passwordRules"-->
    <!--                label="password"-->
    <!--                type="password"-->
    <!--                required-->
    <!--        ></v-text-field>-->

    <!--        <v-btn-->

    <!--                color="success"-->
    <!--                @click="onLogin"-->
    <!--                dark-->
    <!--        >-->
    <!--            login-->
    <!--        </v-btn>-->

    <!--    </form>-->
    <v-app>

        <v-form
                ref="form"
                v-model="valid"
                lazy-validation
        >


            <v-text-field
                    v-model="user.email"
                    :rules="emailRules"
                    label="E-mail"
                    required
                    type="email"
            ></v-text-field>

            <v-text-field
                    v-model="user.password"
                    :rules="passwordRules"
                    label="password"
                    type="password"
                    required
            ></v-text-field>


            <v-btn
                    :disabled="!valid"
                    color="success"
                    @click="onLogin"
                    success
                    class="success"
                    v-if="isLogin"
            >
                Login
            </v-btn>


            <v-btn
                    :disabled="!valid"
                    color="warning"
                    @click="onRegister"
                    success
                    class="success"
                    v-if="!isLogin"
            >
                Register
            </v-btn>




            <v-btn dark @click="isLogin=!isLogin">
                <span>to> </span>
                <span v-if="isLogin">Signup</span>
                <span v-if="!isLogin">Signin</span>
            </v-btn>


            <div v-if="getAuthErrors.length">
                <div v-if="getAuthErrors[0][0]">
                    {{getAuthErrors[0][0]}}
                </div>


                <div v-if="getAuthErrors[0]['error']">
                    email is used
                </div>
            </div>





        </v-form>
    </v-app>
</template>

<script>

    import {mapActions, mapGetters} from "vuex";

    export default {

        name: "Auth",

        data() {
            return {
                isLogin: true,
                user: {
                    email: "",
                    password: ""
                },
                valid: false,
                emailRules: [
                    v => !!v || 'E-mail is required',
                    v => /.+@.+/.test(v) || 'E-mail must be valid'
                ],
                passwordRules: [
                    v => !!v || 'password is required',
                    v => (v && v.length <= 10) || 'password must be less than 10 characters'
                ],
            };
        },
        methods: {
            ...mapActions(["login","register"]),
            onLogin() {
                if (this.$refs.form.validate()) {
                    this.login(this.user);
                }


            },
            onRegister() {
                if (this.$refs.form.validate()) {
                    this.register(this.user);
                }
            },
            reset() {
                this.$refs.form.reset()
            },
            resetValidation() {
                this.$refs.form.resetValidation()
            },
            validate() {
                if (this.$refs.form.validate()) {
                    this.snackbar = true
                }
            },
        },
        computed: {
            ...mapGetters(["getToken","getAuthErrors"])
        }
    };
</script>

<style scoped>
    form {
        width: 65vw;
        padding-top: 50px;
        margin: 0 auto;
    }
</style>
