<template>
<div class="footer">
    <div class="top">
    	<div class="center clear">
            <div class="top-box1 fl">
            	<i class="icon-bgr icon-logo-bt fl m-r-60 m-l-20"></i>
            </div>
            <div class="top-box2 fl">
            	<img src="../assets/slogan.png">
            </div>
            <div class="top-box3 fl">
            <p class="fb f16">关注我们</p>
            <p class="m-t-10">
            <a href="##" target="_blank" class="icon-bgr icon-sina"></a>
            <a href="##" target="_blank" class="icon-bgr icon-tencent m-l-10"></a>
            <a href="##" target="_blank" class="icon-bgr icon-wechat m-l-10 rel"></a>
            </p>
            </div>
            <div class="top-box4 fl tc">
            <p class="f24 lh1 fb">0755-86380505</p>
            <p class="f12">周一至周日 8:00-24:00</p>
            <a href="http://crm2.qq.com/page/portalpage/wpa.php?uin=4006112156&amp;cref=http://www.liwuyou.com/&amp;ref=&amp;f=1&amp;ty=1&amp;ap=&amp;as=" class="qqbtn lh1 m-t-10 dib">QQ在线交谈</a>
            </div>
        </div>
    </div>
    <div class="bottom clear f-e7e7e7">
    
        <ul class="center clear icons f18 fb">
            <li class="fl fst"><i class="icon-bgr1 icon-ft1 m-r-16"></i>30天免费退换货</li>
            <li class="fl"><i class="icon-bgr1 icon-ft2 m-r-16"></i>100%正品保证</li>
            <li class="fl"><i class="icon-bgr1 icon-ft3 m-r-16"></i>全场免运费</li>
            <li class="fl"><i class="icon-bgr1 icon-ft4 m-r-16"></i>提供礼品级包装</li>
        </ul>
    	<div class="center links clear">
            <div class="fl">           
            <p class="f-c3c3c3"><span class="m-r-16">© liwuyou.com</span><span><a href="http://www.miitbeian.gov.cn/" rel="nofollow" target="_blank">粤ICP备10222238号-1</a></span></p>
            </div>
            <div class="fr">
             <p class="f-f5f5f5 f0">
             <a href="article.php?id=5" target="_blank" class="f-f5f5f5">关于我们</a><span>|</span>
             <a href="article.php?id=85" target="_blank" class="f-f5f5f5">帮助中心</a><span>|</span>
             <a href="article.php?id=44" target="_blank" class="f-f5f5f5">人才招聘</a><span>|</span>
             <a href="article.php?id=82" target="_blank" class="f-f5f5f5">售后服务</a><span>|</span>
             <a href="article.php?id=76" target="_blank" class="f-f5f5f5">配送与验收</a><span>|</span>
             <a href="article.php?id=4" target="_blank" class="f-f5f5f5">联系我们</a><!-- <span>|</span> -->
             <!-- <a href="javascript:void(0)" target="_blank" class="f-f5f5f5">投诉建议</a></p> -->
            </p></div>
        </div>
    </div>
</div>
</template>
<style lang="scss" scoped>
.fl {
    float: left;
}
.fr{
    float: right;
}
.f16 {
    font-size: 16px;
}
.f12 {
    font-size: 12px;
}
.fb {
    font-weight: 700;
}
.lh1 {
    line-height: 1;
}
.f24 {
    font-size: 24px;
}
.f18 {
    font-size: 18px;
}
.f-e7e7e7 {
    color: #e7e7e7;
}
.f-f5f5f5 {
    color: #f5f5f5;
}
.m-r-16 {
    margin-right: 16px;
}
a, a:active, a:focus, a:hover {
    text-decoration: none;
    outline: 0;
    color: #333;
}
ul,li{
    list-style: none;
}
.footer{
    font: 14px/1.5 Arial,'Microsoft Yahei',STHeiti,sans-serif;
    color: #333;
    margin: 0;
    overflow-x: hidden;
    .center {
            width: 1200px;
            margin: 0 auto;
    }
    .top {
        padding: 60px 0;
        background: #fff;
        .icon-bgr {
                display: inline-block;
                vertical-align: middle;
                margin-top: -3px;
                background: url(../assets/bgr.png);
        }
        .top-box1 {
            width: 207px;
            height: 67px;
            padding: 13px 0 0 27px;
            border-right: 1px solid #e2e2e2;
            .m-r-60 {
                margin-right: 60px;
            }
            .m-l-20 {
                margin-left: 20px;
            }
            .icon-logo-bt {
                width: 152px;
                height: 59px;
                background-position: 0 -58px !important;
            }   
        }
        .top-box2 {
            width: 394px;
            height: 75px;
            padding: 5px 30px 0;
            border-right: 1px solid #e2e2e2;
        }
        .top-box3 {
            width: 135px;
            height: 75px;
            padding: 5px 60px 0;
            border-right: 1px solid #e2e2e2;
            .m-t-10 {
                margin-top: 10px;
                .icon-sina {
                    width: 28px;
                    height: 24px;
                    background-position: 0 -276px;
                }
                .icon-tencent {
                    width: 24px;
                    height: 24px;
                    background-position: -29px -276px;
                }
                .m-l-10 {
                    margin-left: 10px;
                }
                .icon-wechat {
                    width: 30px;
                    height: 24px;
                    background-position: -54px -276px;
                }
            }
        }
        .top-box4 {
            width: 254px;
            height: 80px;
            a.qqbtn {
                padding: 5px 30px;
                border: 2px solid #ebebeb;
                border-radius: 30px;
                width: 86px;
                height: 18px;
                line-height: 18px;
            }
        }
        .tc {
            text-align: center;
        }
    }
    .bottom {
        background: #484442;
        .icons {
            padding: 45px 0;
            li {
                width: 230px;
                padding-left: 30px;
                margin-left: 53px;
                .icon-ft1 {
                    background-position: 0 0;
                }
                .icon-ft2 {
                    background-position: -53px 0;
                }
                .icon-ft3 {
                    background-position: -106px 0;
                }
                .icon-ft4 {
                    background-position: -159px 0;
                }
                .icon-ft1, .icon-ft2, .icon-ft3, .icon-ft4, .icon-top1, .icon-top2, .icon-top3, .icon-top4 {
                    width: 52px;
                    height: 52px;
                }
                .icon-bgr1 {
                    display: inline-block;
                    vertical-align: middle;
                    margin-top: -3px;
                    background: url(../assets/bgr1.png);
                }
            }
            li.fst {
                margin-left: 0;
            }
        }
        .links {
            padding: 40px 30px;
            width: 1140px;
            border-top: 2px solid #666;
            a, span {
                display: inline-block;
                font-size: 12px;
                color: #c3c3c3;
                float: right;
            }
            .fr span {
                width: 25px;
                text-align: center;
            }
        }
    }
    .f-e7e7e7 {
        color: #e7e7e7;
    }
    .clear {
        zoom: 1;
    }
    .clear:after {
        content: '';
        clear: both;
        display: block;
    }
}
</style>

