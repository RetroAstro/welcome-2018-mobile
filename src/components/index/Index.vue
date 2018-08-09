<template>
    <div class="index-wrapper bg-cover-all">
        <div class="banner bg-cover-all">
            <div class="hand bg-cover-all"></div>
            <div class="coin bg-cover-all"></div>
            <div class="coin-box bg-cover-all"></div>
            <div class="train bg-cover-all"></div>
            <div class="go bg-cover-all"></div>
            <div class="flag bg-cover-all"></div>
            <div class="right-pipe bg-cover-all"></div>
            <div class="left-pipe bg-cover-all"></div>
            <div class="topic-wrapper">
                <div class="pipe-one bg-cover-all"></div>
                <div class="pipe-two bg-cover-all"></div>
                <div class="pipe-three bg-cover-all"></div>
                <div class="pipe-four bg-cover-all"></div>
                <div class="logo bg-cover-all"></div>
                <div class="map-box">
                    <div class="title bg-cover-all"></div>
                    <div class="content bg-cover-all"></div>
                </div>
                <div class="activity-box">
                    <div class="title bg-cover-all"></div>
                    <div class="content-box">
                        <div class="help bg-cover-all"></div>
                        <div class="smile bg-cover-all"></div>
                    </div>
                </div>
                <div class="similar-box">
                    <div class="training">
                        <div class="title bg-cover-all"></div>
                        <div class="content bg-cover-all"></div>
                    </div>
                    <div class="tips">
                        <div class="title bg-cover-all"></div>
                        <div class="content bg-cover-all"></div>
                    </div>
                    <div class="mien">
                        <div class="title bg-cover-all"></div>
                        <div class="content bg-cover-all"></div>
                    </div>
                    <div class="about">
                        <div class="title bg-cover-all"></div>
                        <div class="content bg-cover-all"></div>
                    </div>
                </div>
                <div class="qrcode-box">
                    <div class="qrcode-wrap flex-between">
                        <div class="app bg-cover-all"><img class="qr-weixin bg-cover-all" src="../../assets/qr_app.png"></div>
                        <div class="weixin bg-cover-all"><img class="qr-weixin bg-cover-all" src="../../assets/qr_weixin.png"></div>
                    </div>
                    <div class="long-save bg-cover-all"></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

export default {

}
</script>

<style lang="stylus" scoped>
.index-wrapper {
    height rem(3550)
    .banner {
        position relative
        width 100%
        height rem(1100)
        background-image url('../../assets/banner.png')
        .hand {
            position absolute
            top rem(24)
            right rem(15)
            width rem(54)
            height rem(66)
            background-image url('../../assets/hand.png')
            z-index 6
        }
        .coin {
            position absolute
            top rem(85)
            right rem(30)
            width rem(28)
            height rem(23)
            background-image url('../../assets/coin.png')
            z-index 5
        }
        .coin-box {
            position absolute
            top rem(104)
            right rem(23)
            width rem(40)
            height rem(86)
            background-image url('../../assets/coin_box.png')
            z-index 4
        }
        .train {
            position absolute
            top rem(135)
            right rem(66)
            width rem(44)
            height rem(30)
            background-image url('../../assets/train.png')
        }
        .go {
            position absolute
            top rem(110)
            left rem(70)
            width rem(28)
            height rem(35)
            background-image url('../../assets/go.png')
        }
        .flag {
            position absolute
            top rem(142)
            left rem(86)
            width rem(33)
            height rem(31)
            background-image url('../../assets/flag.png')
        }
        .right-pipe {
            position absolute
            width rem(45)
            height rem(1670)
            top rem(260)
            right 0
            background-image url('../../assets/right_pipe.png')
            z-index 6
        }
        .left-pipe {
            position absolute
            width rem(20)
            height rem(1930)
            top rem(1100)
            left rem(8)
            background-image url('../../assets/left_pipe.png')
            z-index 6
        }
        .topic-wrapper {
            position relative
            width 100%
            padding-top rem(250)
            z-index 20
            .pipe-one {
                position absolute
                width rem(45)
                height rem(193)
                top rem(436)
                right rem(2)
                background-image url('../../assets/pipe_one.png')
                z-index 21
            }
            .pipe-two {
                position absolute
                width rem(80)
                height rem(184)
                top rem(1840)
                left rem(5)
                background-image url('../../assets/pipe_two.png')
                z-index 22
            }
            .pipe-three {
                position absolute
                width rem(80)
                height rem(184)
                top rem(2274)
                right rem(2)
                background-image url('../../assets/pipe_three.png')
                z-index 24
            }
            .pipe-four {
                position absolute
                width rem(80)
                height rem(184)
                top rem(2708)
                left rem(5)
                background-image url('../../assets/pipe_two.png')
                z-index 26
            }
            .logo {
                position absolute
                width rem(50)
                height rem(46)
                top rem(1420)
                left rem(8)
                background-image url('../../assets/logo.png')
                z-index 24
            }
            .map-box {
                text-align center
                & > div {
                    display inline-block
                }
                .title {
                    width rem(120)
                    height rem(48)
                    background-image url('../../assets/title_map.png')
                    margin-bottom rem(-20)
                    margin-top rem(20)
                }
                .content {
                    width rem(348)
                    height rem(226)
                    background-image url('../../assets/map_box.png')
                }
            }
            .activity-box {
                text-align center
                margin-top rem(36)
                z-index 22
                position relative
                & > div {
                    display inline-block
                }
                .title {
                    width rem(120)
                    height rem(48)
                    background-image url('../../assets/title_activity.png')
                }
                .content-box {
                    margin auto
                    width rem(355)
                    display flex
                    flex-direction column
                    & > div {
                        height rem(386)
                    }
                    .help {
                        background-image url('../../assets/help.png')
                        transform translateX(rem(7))
                    }
                    .smile {
                        margin-top rem(16)
                        background-image url('../../assets/smile.png')
                        transform translateX(rem(-6.5))
                    }
                }
            }
            .similar-box {
                margin-top rem(30)
                display flex
                flex-direction column
                & > div {
                    display inline-block
                    width rem(340)
                    margin auto
                    transform translateX(rem(1))
                    margin-top rem(22)
                    &:nth-of-type(1) {
                        margin-top 0
                    }
                }
                & .title {
                    width rem(120)
                    height rem(48)
                    margin auto
                    margin-bottom rem(5)
                }
                .training .content {
                    height rem(360)
                    background-image url('../../assets/left_box.png')
                }
                .tips .content {
                    height rem(360)
                    background-image url('../../assets/right_box.png')
                }
                .mien .content {
                    height rem(360)
                    background-image url('../../assets/left_box.png')
                }
                .about .content {
                    height rem(360)
                    background-image url('../../assets/end_box.png')
                }
                .tips {
                    z-index 23
                }
                .mien {
                    z-index 25
                }
                .about {
                    z-index 28
                }
                .mien .title {
                    background-image url('../../assets/title_train.png')
                }
                .tips .title {
                    background-image url('../../assets/title_train.png')
                }
                .about .title {
                    background-image url('../../assets/title_train.png')
                }
                .training .title {
                    background-image url('../../assets/title_train.png')
                }
            }
            .qrcode-box {
                margin-top rem(60)
                & > div {
                    margin auto
                }
                .qrcode-wrap {
                    width rem(320)
                    height rem(160)
                    & > div {
                        width rem(155)
                        height rem(180)
                        position relative
                        background-image url('../../assets/qrcode_wrap.png')
                        & > img {
                            position absolute
                            top 30%
                            left 21%
                            width rem(93)
                            height rem(93)
                        }
                    }
                }
                .long-save {
                    margin-top rem(30)
                    width rem(250)
                    height rem(95)
                    background-image url('../../assets/save.png')
                }
            }
        }
    }
}
</style>