<template>
    <div>
        <!-- header头部 -->
        <Header/>
        <div class="md-box">
            <div class="center rel">
                <div class="md-login bg-fff">
                    <form name="formLogin">
                        <div class="line title rel lh1 clear"><b class="fl f24">欢迎回来</b><span class="fr f16 f-666">还没有账号？ <router-link to="/reg" class="f-b28850">现在注册</router-link></span></div>
                        <div class="line m-t-28"><input type="text" name="username" placeholder="请输入手机号／邮箱" class="db text"></div>
                        <div class="line error-tips f12 f-d93732">&nbsp;</div>
                        <div class="line"><input type="password" name="password" placeholder="请输入密码" class="db text"></div>
                        <div class="line error-tips f12 f-d93732">&nbsp;</div>
                        <div class="line"><a class="btn-form f-fff tc full ani-bg">立即登录</a></div>
                        <div class="line clear m-t-20"><label class="fl"><input type="checkbox" value="1" checked="checked" name="remember" id="remember"> 30天内免登录</label><a href="###" class="fr">忘记密码？</a></div>
                    </form>
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
    }
    .bg-fff {
        background: #fff;
    }
}


</style>

