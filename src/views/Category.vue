<template>
<div>
    <Header/>
    <div class="query-box query-box-list">
        <div class="center">
            <div class="clear">
                <div class="query fl rel">
                    <dl class="clear">
                        <dt class="fl p-l-20 p-y-20">分类&nbsp;:</dt>
                        <dd class="fl p-y-20">
                            <a class="focus">全部</a><a @click="cate('音乐枕')">音乐枕</a><a>创意灯</a><a>抱枕</a> <a>打火机</a> <a>创意杯</a><a>时钟</a><a>按摩仪器</a> <a>毛绒公仔</a>                            <a>其他</a> </dd>
                    </dl>
                    <dl class="clear b-t-1">
                        <dt class="fl p-l-20 p-y-20">价格&nbsp;:</dt>
                        <dd class="fl p-y-20">
                            <a class="focus">全部</a><a >100以下</a> <a>100-300</a><a>300-500</a> <a>500-1000</a>  <a>1000以上</a> </dd>
                    </dl>
                </div>

            </div>
        </div>
    </div>
    <div class="cat-box">
        <div class="center">
            <div class="cat-title clear p-y-20">
                <div class="sorts fl">
                    <a class="dib  focus ">畅销</a><span class="dib f-d4d4c7">｜</span>
                    <a  class="dib ">最新</a><span class="dib f-d4d4c7">｜</span>
                    <a>价格从低到高</a><span class="dib f-d4d4c7">｜</span>
                    <a>价格从高到低</a>
                </div>
                <div class="filters fr"><a class="dib m-r-5 tc f12 filter-special dn" data-param="special" ></a><span class="dib m-r-40 dn">仅显示特价商品</span><a class="dib m-r-5 tc f12 filter-diy"  data-param="diy"></a><span class="dib">仅显示可定制商品</span></div>
            </div>
            <ul class="cat-list clear">
                <!-- 数据渲染 -->
                <li class="fl p-30 m-t-20 ani-bd-shadow  rel " v-for="(all,index) in goodslist" :key="index" >
                    <router-link :to="{ path: 'Goods', query: { id: all.id }}" class="img-link"><img :src="all.image"  class="normalpic focus"></router-link>
                    <p class="overtxt m-t-20 cat-name"><a v-text="all.name"></a></p>
                    <p v-text="`￥${all.price}`"></p>
                    <p class="f12 f-666 tr m-t-20 clear com-diy"><span class="fr" v-text="`￥${all.sale}人评价`"></span></p>
                </li>
            </ul>
            <!-- 分页 -->
            <!-- <div class="pages tc p-y-40">
                <a class="prev icon-bgr icon-pagamp;min=0&amp;max=0&amp;page=1">3</a>
                <a class="next iamp;min=0&amp;max=0&amp;page=2"></a>
            </div> -->
        </div>
    </div>
    <Footer/>
</div>
</template>

<script>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
export default {
    data(){
        return {
            goodslist:[],
        }
    },
    computed : {

    },
    methods : {
        cate(title){
            return title;
            console.log(title);
        }
    },
    async created(){
        //   获取宫格数据
        let list = await this.$axios(
        "https://www.easy-mock.com/mock/5d402dbd99acfe0359e018a1/elema/goodslist"
        );
        this.goodslist = list.data;
        console.log(list.data);   
    },
    components: {
        Footer,
        Header
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
</style>