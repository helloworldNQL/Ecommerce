<template>
  <div>
    <Header />
    <div class="bg-f5f5f5 p-b-10">
      <div class="currentloc bg-f5f5f5 clear">
        <div class="center f12">
          <div class="fl">
            <a href="/">首页</a>
            <span>/</span>BeeFo小唱机
          </div>
          <a
            href="http://crm2.qq.com/page/portalpage/wpa.php?uin=4006112156&amp;cref=http://www.liwuyou.com/&amp;ref=&amp;f=1&amp;ty=1&amp;ap=&amp;as="
            class="fr qqbtn tc f-666"
            target="_blank"
          >QQ在线交谈</a>
          <span class="fr f-666">服务热线：0755-86380505&nbsp;(8:00－24:00)</span>
          <span class="fr m-r-100 f-a5937d">
            <!-- 节日名称  <i class="icon-bgr icon-gift m-l-10"></i>-->
          </span>
        </div>
      </div>
      <div class="goods-info bg-fff overhide">
        <div class="center clear m-t-60">
          <div class="img-sm fl m-r-60" id="goods_img_list">
            <img
                style="width: 68px;border: 1px solid #e6e6e6;
    height: 68px;"
                v-for="imgs in this.goods.img" :key="imgs"
                :src="imgs"
              class="m-t-16 img_id_16943"
              @click="chang(imgs)"
            />
          </div>
          <div class="img-single fl rel" id="goods_single_list">
            <span class="loading f16" style="display: none;">
              <img src="themes/pc/images/ajax-loader.gif" />
            </span>
            <img
        
              :src="this.bigimg"
              class="cloudzoom"
              style="width: 100%;"
              data-cloudzoom="zoomImage: 'http://img3.liwuyou.com/images/201811/source_img/3888_P_1541475290472.jpg'"
            />
          </div>
          <div class="goods-attr fr">
            <h2 class="lh1 f30" v-text="this.goods.goodsname"></h2>
            <h3
              class="fn f14 m-t-20 f-666"
              v-text="this.goods.content"
            ></h3>
            <div class="clear m-t-20 price-box lh1">
              <span
                class="fl f-d93732 f24 fb price-show"
                data-base-price="399.00"
                data-discount="100"
                v-text="`${this.goods.goodsprice}元`"
              ></span>
              <span class="fr f-666">有现货</span>
            </div>

            <div class="p-y-20">
              <div class="attr-box clear">
                <span class="fl pro-title dib f-666"></span>
                <span class="fl">
                  <a
                    href="javascript:void(0)"
                    class="select_attr dib m-r-8 s_228"
                    data-attr="228-0c72389fe999eb3038e7e7523c454c6c"
                    data-spec-key="228"
                    data-spec="0c72389fe999eb3038e7e7523c454c6c"
                  >直接购买</a>
                  <input type="hidden" class="attr_selected" name="attr_list[]" id="attr_228" />
                </span>
              </div>
              <input type="hidden" id="goodsAttrListCount" value="2" />
              <div class="attr-box clear">
                <span class="fl pro-title dib f-666">礼物颜色：</span>
                <span class="fl">
                  <a v-for="size in this.goods.sizes" :key="size" 
                  v-text="size"
                  class="select_attr dib m-r-8 s_225"></a>

                  <input type="hidden" class="attr_selected" name="attr_list[]" id="attr_225" />
                </span>
              </div>
              <input type="hidden" id="goodsAttrListCount" value="2" />
              <input type="hidden" class="spec_selected" name="spec_list" id="spec_selected" />
            </div>
            <div class="btn-box clear m-t-20 lh1">
              <a
                @click="addcart()"
                
                class="btn-red-single m-r-10 fl ani-bg"
              >直接购买</a>
              <a
                href="javascript:void(0)"
                id="product_diy"
                class="btn-red-single m-r-10 fl ani-bg"
                style="display:none"
              >定制购买</a>
              <a href="javascript:void(0)" class="collect fl ani-bg">
                <i class="icon-bgr icon-heart"></i>
              </a>
            </div>
            <div class="btn-others">
              <a>
                <i class="icon-bgr icon-item m-r-10"></i>查看更多同类商品
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>
<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
export default {
  //获取传过来的id
  data(){
      return {
          goods : '',
          bigimg:'',
      }
  },
  async created() {
    let { id } = this.$route.query;
    // 发起ajax请求，获取商品信息
    // let {data} = await this.$axios.get('/goods',{id});
    let { data } = await this.$axios.get("http://localhost:1945/goods/" + id);
    this.goods = data[0];
    // console.log(this.goods);
    this.bigimg=data[0].img[0];
    // this.goodsid = data[0].goodsid;
  },
  methods:{
      chang(imgs){
          this.bigimg=imgs;
      },
      //加入购物车
      addcart(){
        //获取用户名发起请求添加购物车商品
        let username = localStorage.getItem('username');
        // console.log(username);
        // console.log(this.$route.query.id);
        // console.log(this.goods);
        let number = 1;
        let {goodsid,goodsname,goodsprice,img,sizes} =this.goods;
        let total = goodsprice;
        img = img[0];
        sizes =sizes[0];
        // console.log(goodsid,goodsname,goodsprice,img,sizes)
        this.$axios.post('http://localhost:1945/goods/addcart',{
            username,
            goodsid,
            goodsname,
            number,
            sizes,
            goodsprice,
            total,
            img,
            sizes
        }).then(({data})=>{
            if(data.code == 200){
                alert("加入购物车成功");
                let targetPath = this.$route.query.redirectTo;
                this.$router.replace(targetPath?targetPath:'/cart');
                // console.log(this.$router);
            }
        })
      }

  },
  components: {
    Footer,
    Header
  }
};
</script>
<style lang="scss" scoped>
@import "../assets/base.css";
@import "../assets/style.css";
@import "../assets/idialog.css";
.img-sm {
  width: 80px;
}
.img-single {
  width: 500px;
}
.goods-attr {
  width: 485px;
  .price-box {
    padding: 20px 0;
    border-width: 1px 0;
    border-style: solid;
    border-color: #e6e6e6;
  }
  .attr-box {
    line-height: 34px;
    margin-top: 20px;
    span {
      border: 1px solid #fff;
      a {
        border: 1px solid #e8e8e8;
        padding: 0 20px;
        margin-bottom: 10px;
      }
    }
  }
  .btn-box {
    border-bottom: 1px solid #e6e6e6;
    padding-bottom: 30px;
    .btn-red-single {
      padding: 15px 180px;
    }
    .collect {
      display: inline-block;
      height: 44px;
      width: 44px;
      background: #e2e2e2;
      border-radius: 3px;
      i.icon-heart {
        margin: 14px 13px;
      }
    }
  }
}
</style>

