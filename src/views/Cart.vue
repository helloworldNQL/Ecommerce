<template>
<div>
    <Header />
    <div class="bg-f5f5f5 p-b-40" style="padding-top: 62px;">
        <div v-if="status == 'yes'" class="shopping-cart center bg-fff tc">
            <table>
                <thead>
                    <tr>
                        <td width="50%" class="info tl">商品信息</td>
                        <td width="10%">单价</td>
                        <td width="10%">数量</td>
                        <td width="10%">库存</td>
                        <td width="10%">小计</td>
                        <td width="10%">操作</td>
                    </tr>
                </thead>
                <tbody id="cart_list">
                    <tr v-for="(goods,index) in this.goodslist" :key="index">
                        <td class="info tl">
                            <a><img :src="goods.img" class="dib m-r-5"></a>
                            <div class="dib">
                                <p><a v-text="goods.goodsname"></a></p>
                                <p class="f12"><span class="f-666"  v-text="`礼物颜色:${goods.sizes}`"><br>个性定制:直接购买</span></p>
                            </div>
                        </td>
                        <td  v-text="`￥${goods.goodsprice}`"></td>
                        <td>
                            <div class="dib count-box"><a  class="icon-bgr icon-sub dib" @click="sub(goods.goodsid,goods.number,goods.goodsprice)"></a><input type="text" v-model="goods.number" @input="update(goods.goodsid,goods.goodsprice,goods.kucun)"  class="dib tc icon-number"  id="goodsnum"><a  @click="sup(goods.goodsid,goods.number,goods.goodsprice,goods.kucun)" class="icon-bgr icon-add dib"></a></div>
                        </td>
                        <td>
                            有库存
                        </td>
                        <td id="sub_total_1351794" v-text="goods.total"></td>
                        <td><a class="icon-bgr icon-delete" @click="del(goods.goodsid)"></a></td>
                    </tr>
                </tbody>  
            </table>

            <div class="cart-btm clear f16">
                <div class="fl tl"><a href="/" class="dib m-t-5"><i class="icon-bgr icon-page-l m-r-10"></i>继续购物</a></div>
                <div class="fr tr"><span  v-text="`共${this.totalnum}件商品`" ></span><span class="m-l-20">合计：<b class="f18 f-d93732" id="goods-total"  v-text="`￥${this.total}`" ></b></span><a class="btn-red-sml f14 m-l-80 ani-bg">去结账</a></div>
            </div>

        </div>
        <div v-else-if="status == 'no'" style="line-height: 150px;
        padding: 75px 0px;font-size:28px;" class="center bg-fff tc">
            <p>登录后才可以加入购物车，您还未登录 &nbsp;&nbsp;<router-link to="/login" >请先登录</router-link></p>
            
        </div>
    </div>
    <Footer />
</div>
</template>

<script>
//1.判断用户是否登录 2.判断用户购物车是否有商品 3.渲染用户购物车商品
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
export default {
    data(){
        return{
            status:'',
            goodslist:'',
            totalnum:0,
            total:0
        }
    },
    created(){
        //判断是否登录
        if(localStorage.getItem('Authorization')){
            this.status = 'yes'
        }else{
            this.status = 'no'
        }
        //发送请求查看用户购物车是否有商品
        let username = localStorage.getItem('username');
        // console.log(username);
        this.$axios.post('http://localhost:1945/goods/cart',{
            username
        }).then(({data})=>{
            if(data.code == 200){
                //没有商品快去购物吧
                alert("购物车没有商品,快去购物吧:)");
                let targetPath = this.$route.query.redirectTo;
                this.$router.replace(targetPath?targetPath:'/home');
            }else{
                this.goodslist = data;
                // console.log(data);
                for(let i = 0;i< data.length;i++){
                    this.totalnum += (data[i].number * 1);
                    this.total += (data[i].total * 1);
                    // console.log(data[i].number);
                }
                
            }
        })
        
    },
    methods:{
        //修改数量，减
        sub(goodsid,num,goodsprice){
            let username = localStorage.getItem('username');
            let number = num - 1;
            if(number <= 0){
                number = 1
                alert('不能再减了');
            }else{
                // console.log(number);
                this.$axios.post('http://localhost:1945/goods/update',{
                    username,
                    number,
                    goodsid,
                    goodsprice
                }).then(({data})=>{
                    if(data.code != 250){
                        this.goodslist = data;
                        // console.log(data);
                        let sum = 0;
                        let sumtotal = 0;
                        for(let i = 0;i< data.length;i++){                    
                            sum += (data[i].number * 1);                    
                            sumtotal += (data[i].total * 1);                     
                        }
                        this.totalnum = sum;
                        this.total = sumtotal;
                    }
                })
            }   
        },
        //增
        sup(goodsid,num,goodsprice,ku){
            let username = localStorage.getItem('username');
            let number = num*1 + 1;
            if(number > ku){
                number = ku
            }else{
                // console.log(number);
                this.$axios.post('http://localhost:1945/goods/update',{
                    username,
                    number,
                    goodsid,
                    goodsprice
                }).then(({data})=>{
                    if(data.code != 250){
                        this.goodslist = data;
                        let sum = 0;
                        let sumtotal = 0;
                        for(let i = 0;i< data.length;i++){                    
                            sum += (data[i].number * 1);                    
                            sumtotal += (data[i].total * 1);                     
                        }
                        this.totalnum = sum;
                        this.total = sumtotal;
                    }
                })
            }   
        },
        //输入框修改数量
        update(goodsid,goodsprice,ku){
            //不允许输入框为空
            let number = document.getElementById("goodsnum").value ;
            // console.log(typeof(number));
            // console.log(isNaN(number*1));
            // console.log(number === NaN);
            if(!document.getElementById("goodsnum").value || isNaN(number)){
                number =1
                console.log('空');
            }
            if(number < 0){
                alert('不能再减了')
                number = 1;
                // console.log('小于1')
            }
            // console.log(ku);
            // console.log(typeof(number)+number);
            if(number * 1 > ku){
                // console.log('大于库存');
                // console.log(ku,document.getElementById("goodsnum").value);
                alert('商品没库存啦，最大可买'+ku+'件')
                number = ku;
            }
            // console.log('qqqqqqvalue'+document.getElementById("goodsnum").value);
            // document.getElementById("goodsnum").value = number;
            // number = document.getElementById("goodsnum").value;
            // console.log('value'+ document.getElementById("goodsnum").value + 'number'+number);
            // console.log(number);
            let username = localStorage.getItem('username');
            this.$axios.post('http://localhost:1945/goods/update',{
                username,
                number,
                goodsid,
                goodsprice
            }).then(({data})=>{
                if(data.code != 250){
                    this.goodslist = data;
                    let sum = 0;
                    let sumtotal = 0;
                    for(let i = 0;i< data.length;i++){                    
                        sum += (data[i].number * 1);                    
                        sumtotal += (data[i].total * 1);                     
                    }
                    this.totalnum = sum;
                    this.total = sumtotal;
                }
            })
        },
        //删除
        del(goodsid){
            let username = localStorage.getItem('username');
            // console.log(number);
            this.$axios.post('http://localhost:1945/goods/del',{
                username,
                goodsid,
            }).then(({data})=>{
                console.log(data);
                alert('删除成功');
                this.goodslist = data;
                if(data.code != 250){
                    console.log(data+'!250');
                }else{
                    console.log(data)
                }
            })
        }
    },
    components: {
        Footer,
        Header,
    }
}
</script>
<style lang="scss" scoped>
@import '../assets/base.css';
@import '../assets/style.css';
@import '../assets/idialog.css';
a{
    cursor: pointer;
}
.shopping-cart {
    thead {
        border-bottom: 2px solid #f5f5f5;
        line-height: 67px;
        .info {
            padding-left: 50px;
        }
    }
    tbody{
        .info {
            padding-left: 40px;
        }
        td {
            border-bottom: 2px solid #f5f5f5;
            padding: 20px 0;
            .count-box {
                width: 112px;
                height: 38px;
                border: 1px solid #e2e2e2;
                 a {
                    margin: 12px;
                }
                input {
                    width: 36px;
                    border: none;
                    padding: 0;
                    margin: 0;
                    height: 38px;
                    line-height: 38px;
                }
            }
        }
    }
    .cart-btm {
        padding: 20px 40px;
    }
}
</style>