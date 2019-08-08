<template>
<div>
    <Header />
    <div class="bg-f5f5f5 p-b-40" style="padding-top: 62px;">
        <div class="shopping-cart center bg-fff tc">
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
                    <tr data-rec-id="1351794">
                        <td class="info tl">
                            <a href="goods.php?id=3888"><img src="http://img3.liwuyou.com/images/201811/source_img/3888_P_1541475290472.jpg!list115.jpg" class="dib m-r-5"></a>
                            <div class="dib">
                                <p><a href="goods.php?id=3888">BeeFo小唱机</a></p>
                                <p class="f12"><span class="f-666">礼物颜色:奶酪白<br>个性定制:直接购买</span>
                                    <!-- <a href="javascript:void(0)" class="f-666">预览定制效果</a> --></p>
                            </div>
                        </td>
                        <td>￥399.0</td>
                        <td>
                            <div class="dib count-box"><a href="javascript:void(0)" class="icon-bgr icon-sub dib"></a><input type="text" value="1" class="dib tc icon-number" data-rec_id="1351794"><a href="javascript:void(0)" class="icon-bgr icon-add dib"></a></div>
                        </td>
                        <td>
                            有库存
                        </td>
                        <td id="sub_total_1351794">￥399.0</td>
                        <td><a href="javascript:void(0)" class="icon-bgr icon-delete" data-rec_id="1351794"></a></td>
                    </tr>
                    <tr data-rec-id="1351791">
                        <td class="info tl">
                            <a href="goods.php?id=3920"><img src="http://img2.liwuyou.com/images/201901/source_img/3920_P_1548127516986.jpg!list115.jpg" class="dib m-r-5"></a>
                            <div class="dib">
                                <p><a href="goods.php?id=3920">时光沙漏</a></p>
                                <p class="f12"><span class="f-666">礼物款式:风水版(-200)</span>
                                    <!-- <a href="javascript:void(0)" class="f-666">预览定制效果</a> --></p>
                            </div>
                        </td>
                        <td>￥499.0</td>
                        <td>
                            <div class="dib count-box"><a href="javascript:void(0)" class="icon-bgr icon-sub dib"></a><input type="text" value="1" class="dib tc icon-number" data-rec_id="1351791"><a href="javascript:void(0)" class="icon-bgr icon-add dib"></a></div>
                        </td>
                        <td>
                            有库存
                        </td>
                        <td id="sub_total_1351791">￥499.0</td>
                        <td><a href="javascript:void(0)" class="icon-bgr icon-delete" data-rec_id="1351791"></a></td>
                    </tr>
                </tbody>
            </table>
            <div class="cart-btm clear f16">
                <div class="fl tl"><a href="/" class="dib m-t-5"><i class="icon-bgr icon-page-l m-r-10"></i>继续购物</a></div>
                <div class="fr tr"><span>共2件商品</span><span class="m-l-20">合计：<b class="f18 f-d93732" id="goods-total">￥898.0</b></span><a href="flow.php?step=checkout" class="btn-red-sml f14 m-l-80 ani-bg">去结账</a></div>
            </div>
        </div>
    </div>
    <Footer />
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
@import '../assets/base.css';
@import '../assets/style.css';
@import '../assets/idialog.css';
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