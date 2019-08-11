<template>
<div class="header">
	<div class="center">
    	<div class="logo icon-bgr icon-logo ani-bg fl m-t-17"><a href="/">礼无忧首页</a></div>
        <div class="category tc fl" id="category">
        	<a href="#" class="f16 lh2">礼物分类<i class="icon-bgr icon-list m-l-5"></i></a>
        	<div id="category_pop" class="category-pop tc dn">
                <router-link to="/category">少女心饰</router-link>
                <router-link to="/category">萌萌美物</router-link>
                <router-link to="/category">为爱停留</router-link>
                <router-link to="/category">潮流时尚</router-link>
                <router-link to="/category">科技达人</router-link>
                <router-link to="/category">幸福烙印</router-link>
                <router-link to="/category">爱情保鲜</router-link>
                <a class="last">&nbsp;</a>
            </div>
        </div>
        <div class="nav fl f16 lh2 m-t-28 rel">
        <a class="fst" id="gift_guide">送礼导航</a><!--
        --><a href="/category.php?id=234">创意礼物</a><!--
        --><a href="/search.php?page=1&amp;sort=goods_id&amp;order=DESC#goods_list">新品上架</a><!--
        --><a href="/category.php?id=127">七夕情人节</a><!--
        <img src="themes/pc/images/christ_icon.png?v20170106" class="dib christ-icon">--></div>     
        <div class="operate fr m-t-31 rel" id="user_operate">
            <!-- 判断登录状态  -->
        	<router-link to="/login" class="f-b28850" v-if="goto === 'login'">登录</router-link>
            <el-button type="text" v-else @click="logout" v-text="`${username}退出登录`"></el-button>
            <router-link to="/cart" class="m-l-5"><i class="icon-bgr icon-cart ani-bg" style="background-position: -164px 0px;"></i><span class="cart-count" id="cart_count">1</span></router-link>
            <div class="user-box user-cart dn nav_cart_box"><i class="icon-bgr icon-operate"></i><table class="f12"><tbody><tr class="gds"><td width="25%"><a href="goods.php?id=3888"><img width="60px" src="http://img3.liwuyou.com/images/201811/source_img/3888_P_1541475290472.jpg!list115.jpg"></a></td><td class="overtxt" width="50%"><a href="goods.php?id=3888">BeeFo小唱机</a><br>礼物颜色:奶酪白<br>个性定制:直接购买</td><td class="tr" width="25%">X1<br>￥399.0<br><a class="remove_item" data-rec-id="1351788" href="javascript:void(0)">删除</a></td></tr><tr><td colspan="3"><div class="clear m-t-10"><span class="fl">共计1件商品<br><b>合计：<span class="f-d93732">￥399.0</span></b></span><a href="flow.php" class="fr btn-red-sml ani-bg">去购物车结算</a></div></td></tr></tbody></table></div>
        </div>
        <div class="search fr m-t-31">
        <input type="text" name="search" id="head-search"><a class="icon-bgr icon-search m-l-5" id="head-searchbtn"></a>
        </div>
    </div>
</div>
</template>
<script>
export default {
    data(){
        return{
            goto:'out',
            username:'',
        }
    },
    //获取localhoststronge的登录信息
    created(){
        if(localStorage.getItem('Authorization')){
            this.goto = 'out'
            this.username = localStorage.getItem('username');
        }else{
            this.goto = 'login'
        }
        // console.log(localStorage.getItem('Authorization'));
    },
    methods :{
        logout(){
            this.$confirm('是否确定退出登录?', '提示', {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            type: 'warning'
            }).then(() => {
                this.$message({
                    type: 'success',
                    message: '退出登录成功!'
                });
                localStorage.removeItem('Authorization')
                localStorage.removeItem('username');
                this.goto = 'login';
            }).catch(() => {
                // this.$message({
                //     type: 'info',
                //     message: '已取消退出登录'
                // });          
            });                 
        }
    }
}
</script>

<style lang="scss" scoped>
.header{
    width: 100%;
}
.m-t-17 {
    margin-top: 17px;
}
.fl {
    float: left;
}
.tc {
    text-align: center;
}
.m-t-28 {
    margin-top: 28px;
}
.m-t-10 {
    margin-top: 10px;
}
.lh2 {
    line-height: 2;
}
.f16 {
    font-size: 16px;
}
.rel {
    position: relative;
}
.m-t-31 {
    margin-top: 31px;
}
.fr {
    float: right;
}
.f12 {
    font-size: 12px;
}
a, a:active, a:focus, a:hover {
    text-decoration: none;
    outline: 0;
}
a{
    color: #333;
}
.m-l-5 {
    margin-left: 5px;
}
.icon-bgr {
        display: inline-block;
        vertical-align: middle;
        margin-top: -3px;
        background: url(../assets/bgr.png);
}
.f-b28850 {
    color: #b28850;
}
.tr {
    text-align: right;
}
abbr, acronym, fieldset, img {
    border: 0 none;
}
.clear {
    zoom: 1;
}
.f-d93732 {
    color: #d93732;
}
.header {
    position: absolute;
    top: 0;
    height: 93px;
    border-top: 5px solid #484442;
    background: #fff;
    font: 14px/1.5 Arial,'Microsoft Yahei',STHeiti,sans-serif;
    color: #333;
    margin: 0;
    // overflow-x: hidden;
    .center {
        width: 1200px;
        margin: 0 auto;
        .icon-logo {
            width: 57px;
            height: 57px;
            border-radius: 57px;
            background-color: #d93732;
            a {
                display: inline-block;
                width: 57px;
                height: 57px;
                text-indent: -10000px;
                overflow: hidden;
            } 
        }
        .category {
            width: 133px;
            margin: 0 0 0 17px;
            padding-top: 28px;
            height: 65px;
            border-top: 5px solid #484442;
            position: relative;
            top: -5px;
            .category-pop {
                position: absolute;
                top: 93px;
                left: 0;
                width: 133px;
                border-top: 2px solid #f1ea8b;
                background: #fff9aa;
                z-index: 100;
                box-shadow: 2px 2px 4px 1px #e2e2e2;
                border-radius: 2px;
                display: none;
                a {
                    display: block;
                    line-height: 1;
                    padding: 15px 0;
                    border-top: 1px solid #f7f19d;
                }
            }  
        }
        .category:hover .category-pop{
            display: block;
        }
        .category>a {
            display: inline-block;
            padding: 0 10px;
            .icon-list {
                width: 14px;
                height: 12px;
                background-position: -205px 0;
            }
        }
        .nav {
            a.fst {
                margin-left: 21px;
                cursor: pointer;
            }
            a {
                display: inline-block;
                margin-left: 45px;
            }
        }
        .operate {
            margin-left: 84px;
            margin-right: 16px;
            .icon-operate {
                width: 14px;
                height: 6px;
                background-position: -118px 0;
                dt {
                    margin-bottom: 10px;
                }
            }
            .user-signin {
                width: 152px;
                left: -60px;
                i.icon-operate {
                    position: absolute;
                    left: 50%;
                    top: -3px;
                    margin-left: -7px;
                }
            }
            .user-box {
                position: absolute;
                top: 48px;
                border: 1px solid #ececec;
                z-index: 99;
                background: #fff;
                padding: 30px 0;
            }
            
            .user-cart {
                // display: none;
                width: 296px;
                padding: 20px 30px;
                right: -18px;
                i.icon-operate {
                    position: absolute;
                    right: 25px;
                    top: -3px;
                }
                table {
                    width: 100%;
                    border-collapse: collapse;
                    border-spacing: 0;
                    td {
                        border-bottom: 1px solid #ebebeb;
                        padding: 15px 0;
                        img {
                            vertical-align: middle;
                        }
                        .btn-red-sml {
                            padding: 7px 23px;
                            font-size: 12px;
                            color: #fff;
                            background: #d93732;
                            border-radius: 3px;
                            display: inline-block;
                        }
                    }
                    .overtxt {
                        overflow: hidden;
                        text-overflow: ellipsis;
                        white-space: nowrap;
                    }
                }
            }
        }
        .operate>a {
            display: inline-block;
            border: 2px solid #e9e9e9;
            width: 28px;
            height: 28px;
            border-radius: 32px;
        }
        .search {
            width: 237px;
            height: 31px;
            border: 1px solid #e6e6e6;
            border-radius: 31px;
            input {
                display: inline-block;
                border: none;
                width: 186px;
                height: 29px;
                line-height: 29px;
                padding: 0;
                margin: 0;
                margin-left: 15px;
            }
            .icon-search {
                width: 15px;
                height: 14px;
                background-position: -133px 0;
            }
        }
    }
}
</style>

