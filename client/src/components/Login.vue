<template>
    <div class="pt-5">
        <div class="global-container">
            <div class="card login-form">
                <div class="card-body">
                    <h3 class="card-title text-center"> Đăng Nhập </h3>
                    <div class="card-text">
                        <form enctype="application/x-www-form-urlencoded">
                            <div class="form-group">
                                <label for="exampleInputEmail1"> Username </label>
                                <input type="email" class="form-control form-control-sm" id="exampleInputEmail1"
                                    aria-describedby="emailHelp" v-model="username">
                            </div>
                            <div class="form-group">
                                <label for="exampleInputPassword1">Password </label>
                                <input type="password" class="form-control form-control-sm" id="exampleInputPassword1" v-model="password">
                                <a href="#" style="float:right;font-size:12px;"> Quên mật khẩu? </a>
                            </div>
                            <button type="submit" class="btn btn-primary btn-block" @click="login"> Sign in </button>
                            {{ error }}
                            <div class="sign-up">
                                Chưa có tài khoản? <a href="#"> Tạo ngay </a>
                            </div>
                            <p>{{ message }}</p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>

<script>
import UserService from "@/services/user.service";
export default {
    name: 'Login',
    data() {
        return {
            user: {
                username: '',
                password: '',
            },
            message: "",
        }
    },
    methods: {
        async login(data) {
            try {
                this.contact = await UserService.create(data);
                this.message = "Liên hệ được thêm thành công!"
            } catch (error) {
                console.log(error);
            }
        },
    },
    created() {
        this.message = "";
    },
}
</script>



<style scoped>
.global-container {  
    height: 100%;
    display: flex;  
    align-items: center;  
    justify-content: center;  
    
}  

.card-title {   
font-weight: 300;  
 }  
.btn {  
    font-size: 14px;  
    margin-top: 20px;  
}  
.login-form {   
    width: 50vw;  
    margin: 20px;  
}  
.sign-up {  
    text-align: center;  
    padding: 20px 0 0;  
}  
.alert {  
    margin-bottom: -30px;  
    font-size: 13px;  
    margin-top: 20px;  
}  
</style>