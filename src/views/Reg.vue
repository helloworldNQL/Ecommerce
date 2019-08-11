<template>
    <div>
        <!-- header头部 -->
        <Header/>
        <div class="md-box">
            <div class="center rel">
                <div class=" md-register bg-fff">
                    <div class="line title rel lh1 clear"><b class="fl f24">注册礼无忧账号</b><span class="fr f16 f-666">已有账号<router-link to="/login" class="f-b28850">现在登录</router-link></span></div>
                    <!-- ##手机号正则验证 -->
                    <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
                        <el-form-item class="m-t-28 " label="手机号" prop="username">
                            <el-input v-model.number="ruleForm.username" autocomplete="on"></el-input>
                        </el-form-item>
                        <el-form-item label="密码" prop="password">
                            <el-input type="password" v-model="ruleForm.password" autocomplete="off"></el-input>
                        </el-form-item>
                        <el-form-item label="确认密码" prop="checkPass">
                            <el-input type="password" v-model="ruleForm.checkPass" autocomplete="off"></el-input>
                        </el-form-item>
                        
                        <el-form-item>
                            <el-button type="primary" @click="submitForm('ruleForm')">注册</el-button>
                            <el-button @click="resetForm('ruleForm')">重置</el-button>
                        </el-form-item>
                    </el-form>
                </div>
            </div>
        </div>
        <router-view/>
        <!-- footer脚部 -->
        <Footer/>
    </div>
</template>
<script>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
export default {
    components: {
        Footer,
        Header
    },
/*     data(){
        return {
            username : "",
            password : "",
        }
    },
    methods :{
       async regist() {
           console.log(this.username);
            if (this.password.trim() != "" && this.username.trim() != "") {
                let status = await this.getData(
                "get",
                `//10.3.132.12:1945/regist?username=${this.username}`
                );
                if (status.data == 1) {
                let msg = await this.getData(
                    "post",
                    "//10.3.132.12:1945/regist",
                    {
                    uname: this.username,
                    pwd: this.password,
                    order:''
                    }
                );
                //   console.log('这里查看是否成功',msg.data)
                if (msg.data == 1) {
                    alert("注册成功！请登录！");
                    // console.log(window.location.href);
                    console.log(this.$route.path);
                }
                } else if (status.data == 0) {
                alert("帐号已存在，请重新注册");
                }
            } else {
                alert("请输入帐号或者密码");
            }
        }
    }    */
     data() {
        let validateUsername = (rule, value, callback) => {
            if (value == "") {
                callback(new Error("请输入手机号"));
            } else if (!this.isCellPhone(value)) {//引入methods中封装的检查手机格式的方法
                callback(new Error("请输入正确的手机号!"));
            } else {//10.3.132.12:1945/reg
                this.$axios.get('http://localhost:1945/reg/check',{
                    params:{
                        username:value
                    }
                }).then(({data})=>{
                    // console.log(data);
                    if(data.code == 250){
                        callback(new Error('用户名已存在'));
                    }else{
                        callback()
                    }
                })
            }
        };
      var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        } else {
          if (this.ruleForm.checkPass !== '') {
            this.$refs.ruleForm.validateField('checkPass');
          }
          callback();
        }
      };
      var validatePass2 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入密码'));
        } else if (value !== this.ruleForm.password) {
          callback(new Error('两次输入密码不一致!'));
        } else {
          callback();
        }
      };
      return {
        ruleForm: {
            password: '',
            checkPass: '',
            username: "",
        },
        rules: {
            password: [
                { validator: validatePass, trigger: 'blur' }
            ],
            checkPass: [
                { validator: validatePass2, trigger: 'blur' }
            ],
            username: [
                { validator: validateUsername, trigger: "blur" }
            ]
        }
      };
    },
    methods: {
        submitForm(formName) {
            this.$refs[formName].validate((valid) => {
                if (valid) {
                    let {username,password} = this.ruleForm;
                    this.$axios.post('http://localhost:1945/reg',{
                        username,
                        password
                    }).then(({data})=>{
                        if(data.code == 200){
                            alert("注册成功");
                            let targetPath = this.$route.query.redirectTo;
                            this.$router.replace(targetPath?targetPath:'/login');
                            // console.log(this.$router);
                        }
                    })
                } else {
                    // console.log('error submit!!');
                    return false;
                }
            });
        },
        isCellPhone(val) {
            if (!/^1(3|4|5|6|7|8)\d{9}$/.test(val)) {
                return false;
            } else {
                return true;
            }
        },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
}
</script>
<style lang="scss" scoped>
a, a:active, a:focus, a:hover {
    text-decoration: none;
    outline: 0;
    color: #333;
    cursor: pointer;
}
.fr {
    float: right;
}
.fl {
    float: left;
}
.md-box {
    width: 100%;
    height: 766px;
    background: url(../assets/login_bg.jpg) #f5f5f5 top center no-repeat;
    font: 14px/1.5 Arial,'Microsoft Yahei',STHeiti,sans-serif;
    color: #333;
}
.center {
    width: 1200px;
    margin: 0 auto;
}
.rel {
    position: relative;
    .md-register {
        width: 410px;
        padding: 70px 90px 110px;
        position: absolute;
        right: 50px;
        top: 50px;
        .lh1 {
            line-height: 1;
        }
        .rel {
            position: relative;
            .f24 {
                font-size: 24px;
            }
            .f-666 {
                color: #666;
                .f-b28850 {
                    color: #b28850;
                }
            }
            .f16 {
                font-size: 16px;
            }
        }
        .clear {
            zoom: 1;
        }
        .clear:after {
            content: '';
            clear: both;
            display: block;
        }
        .m-t-28 {
            margin-top: 28px;
        }
        .text {
            width: 388px;
            padding: 0 10px;
            border: 1px solid #eee;
            margin: 0;
            height: 40px;
            line-height: 40px;
        }
        .db {
            display: block;
        }
        .btn-form {
            display: inline-block;
            height: 48px;
            line-height: 48px;
            background: #d93732;
            border-radius: 3px;
        }
        .full {
            width: 100%;
        }
        .f-fff {
            color: #fff;
        }
        .tc {
            text-align: center;
        }
        .m-t-20 {
            margin-top: 20px;
        }
        .p-l-10 {
            float: left;
            height: 34px;
            padding-left: 10px;
            .f-b28850 {
                color: #b28850;
            }
        }
    }
    .bg-fff {
        background: #fff;
    }
}


</style>

