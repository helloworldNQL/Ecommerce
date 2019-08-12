<template>
    <div>
        <!-- header头部 -->
        <Header/>
        <div class="md-box">
            <div class="center rel">
                <div class="md-login bg-fff">
                    <div class="line title rel lh1 clear"><b class="fl f24">欢迎回来</b><span class="fr f16 f-666">还没有账号？ <router-link to="/reg" class="f-b28850">现在注册</router-link></span></div>
                    <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px">
                        <el-form-item class="line m-t-28" label="用户名" prop="username">
                            <el-input type="tel" v-model="ruleForm.username" autocomplete="on"></el-input>
                        </el-form-item>
                        <el-form-item class="line m-t-28" label="密码" prop="password">
                            <el-input type="password" v-model="ruleForm.password"></el-input>
                        </el-form-item>
                        <el-form-item>
                            <el-button type="success" class="btn-form text " @click="submitForm">登录</el-button>
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
  data() {
    //   自定义校验规则
    let validatePass = (rule, value, callback) => {
      callback();
    };
    let validateUsername = (rule, value, callback) => {
      if (value == "") {
        callback(new Error("请输入手机号"));
        } else if (!this.isCellPhone(value)) {//引入methods中封装的检查手机格式的方法
        callback(new Error("请输入正确的手机号!"));
        } else {
        callback();
        }
    };
    return {
      ruleForm: {
        username: "",
        password: ""
      },
      rules: {
        password: [{ validator: validatePass, trigger: "blur" }],
        username: [{ validator: validateUsername, trigger: "blur" }]
      }
    };
  },
  methods: {
     submitForm() {
        this.$refs['ruleForm'].validate(valid => {
            if (valid) {
                let {username,password} = this.ruleForm;
                this.$axios.post('http://localhost:1945/login',{   
                    username,
                    password       
            }).then((res)=>{
                // console.log(res)
                let {data} = res
                // console.log(res);
                if(data.code == 250){
                    alert('用户名或密码错误！')
                }else if(data.code === 200){
                    // 保存登录信息
                    localStorage.setItem('Authorization',data.data);
                    // console.log(username.slice(0,3));
                    localStorage.setItem('username',username);
                    // 获取目标路径
                    let targetPath = this.$route.query.redirectTo;
                    
                    this.$router.replace(targetPath?targetPath:'/home')
                }
            })
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
  },
  created() {
    // console.log("Login:", this.$route);
  }
}
</script>

<style lang="scss" scoped>
a, a:active, a:focus, a:hover {
    text-decoration: none;
    outline: 0;
    color: #333;
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
    .md-login {
        width: 410px;
        padding: 70px 90px;
        position: absolute;
        right: 50px;
        top: 150px;
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
            width: 312px;
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
            border: none;
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
    }
    .bg-fff {
        background: #fff;
    }
}


</style>

