<template>
    <div id="app" v-cloak>
        <b-container fluid>
            <b-row>
                <b-col cols="4" >
                    <div class="menuColumn">
                        <b-row>
                            <b-col>
                                <div class="logo">
                                    VELO <br>
                                    RIDER
                                </div>
                            </b-col>
                        </b-row>
                        <b-row>
                            <b-col>
                                <b-button class="backButton">
                                    <span> <img src="./assets/back.svg" width="13" height="22" class="backImg"> Назад </span>
                                </b-button>
                            </b-col>
                        </b-row>
                        <b-row>
                            <b-col >
                                <div class="description">
                                    Вы можете предложить адреса, которые хотели бы соеденить велодорожкой.
                                </div>

                            </b-col>
                        </b-row>

                        <b-row>
                            <b-col>
                                <input class="inputPoint" placeholder="Точка А" id="pointA">
                            </b-col>
                        </b-row>

                        <b-row>
                            <b-col>
                                <input class="inputPoint" placeholder="Точка B" id="pointA">
                            </b-col>
                        </b-row>

                        <b-row>
                            <b-col>
                                <div class="lineDone">
                                    <img src="./assets/doneLine.svg" class="imgLine"> Готовые маршруты
                                </div>
                            </b-col>
                        </b-row>

                        <b-row>
                            <b-col>
                                <div class="lineBuild">
                                    <img src="./assets/buildLine.svg" class="imgLine"> Cтроящиеся маршруты
                                </div>
                            </b-col>
                        </b-row>

                        <b-row>
                            <b-col>
                                <b-button class="sendButton" @click="showModal">
                                    Отправить
                                </b-button>
                            </b-col>
                        </b-row>
                    </div>
                </b-col>
                <b-col cols="8">
                    <div class="block">
                        <b-row>
                            <b-col cols="6">
                                <div class="map">
                                    <div class="topMap">
                                        <img src="./assets/map.svg">
                                    </div>
                                    <div class="bottomMap">
                                        <b-row>
                                            <b-col cols="2">
                                                <img src="./assets/subwayLine.svg" class="subway">
                                            </b-col>
                                            <b-col cols="4">
                                                <div class="placePoint">
                                                    <b-row class="rowFromPoint">
                                                        <b-col >
                                                            Площадь Ленина
                                                        </b-col>
                                                    </b-row>
                                                    <b-row>
                                                        <b-col class="rowToPoint">
                                                            Детский парк
                                                        </b-col>
                                                    </b-row>
                                                </div>

                                            </b-col>
                                            <b-col cols="3">
                                                <b-button class="route">
                                                    <img class="likeImg" v-on:click="likeIt();" src="./assets/like.svg">
                                                </b-button>
                                            </b-col>
                                            <b-col cols="3">
                                                <b-button class="route">
                                                    <img src="./assets/comment.svg" class="commentImg">
                                                </b-button>
                                            </b-col>
                                        </b-row>
                                    </div>
                                </div>
                            </b-col>
                            <b-col cols="6">
                                <div class="map">
                                    <div class="topMap">
                                        <img src="./assets/map.svg">
                                    </div>
                                    <div class="bottomMap">
                                        <b-row>
                                            <b-col cols="2">
                                                <img src="./assets/subwayLine.svg" class="subway">
                                            </b-col>
                                            <b-col cols="4">
                                                <div class="placePoint">
                                                    <b-row class="rowFromPoint">
                                                        <b-col >
                                                            Площадь Ленина
                                                        </b-col>
                                                    </b-row>
                                                    <b-row>
                                                        <b-col class="rowToPoint">
                                                            Детский парк
                                                        </b-col>
                                                    </b-row>
                                                </div>

                                            </b-col>
                                            <b-col cols="3">
                                                <b-button class="route">
                                                    <img class="likeImg" v-on:click="likeIt();" src="./assets/noLike.svg">
                                                </b-button>
                                            </b-col>
                                            <b-col cols="3">
                                                <b-button class="route">
                                                    <img src="./assets/comment.svg" class="commentImg">
                                                </b-button>
                                            </b-col>
                                        </b-row>
                                    </div>
                                </div>
                            </b-col>
                        </b-row>
                        <b-row>
                            <b-col cols="6">
                                <div class="mapDown">
                                    <div class="topMap">
                                        <img src="./assets/map.svg">
                                    </div>
                                    <div class="bottomMap">
                                        <b-row>
                                            <b-col cols="2">
                                                <img src="./assets/subwayLine.svg" class="subway">
                                            </b-col>
                                            <b-col cols="4">
                                                <div class="placePoint">
                                                    <b-row class="rowFromPoint">
                                                        <b-col >
                                                            Площадь Ленина
                                                        </b-col>
                                                    </b-row>
                                                    <b-row>
                                                        <b-col class="rowToPoint">
                                                            Детский парк
                                                        </b-col>
                                                    </b-row>
                                                </div>

                                            </b-col>
                                            <b-col cols="3">
                                                <b-button class="route">
                                                    <img class="likeImg" v-on:click="likeIt();" src="./assets/like.svg">
                                                </b-button>
                                            </b-col>
                                            <b-col cols="3">
                                                <b-button class="route">
                                                    <img src="./assets/comment.svg" class="commentImg">
                                                </b-button>
                                            </b-col>
                                        </b-row>
                                    </div>
                                </div>
                            </b-col>
                            <b-col cols="6">
                                <div class="mapDown">
                                    <div class="topMap">
                                        <img src="./assets/map.svg" >
                                    </div>
                                    <div class="bottomMap">
                                        <b-row>
                                            <b-col cols="2">
                                                <img src="./assets/subwayLine.svg" class="subway">
                                            </b-col>
                                            <b-col cols="4">
                                                <div class="placePoint">
                                                    <b-row class="rowFromPoint">
                                                        <b-col >
                                                            Площадь Ленина
                                                        </b-col>
                                                    </b-row>
                                                    <b-row>
                                                        <b-col class="rowToPoint">
                                                            Детский парк
                                                        </b-col>
                                                    </b-row>
                                                </div>

                                            </b-col>
                                            <b-col cols="3">
                                                <b-button class="route">
                                                    <img class="likeImg" v-on:click="likeIt();" src="./assets/like.svg">
                                                </b-button>
                                            </b-col>
                                            <b-col cols="3">
                                                <b-button class="route">
                                                    <img src="./assets/comment.svg" class="commentImg">
                                                </b-button>
                                            </b-col>
                                        </b-row>
                                    </div>
                                </div>
                            </b-col>
                        </b-row>
                    </div>
                </b-col>

            </b-row>

            <b-modal id="vote" hide-footer hide-header ref="vote" >
                <div class="voteWindow">
                    <div class="titleVote">
                        СПАСИБО ЗА ПРЕДЛОЖЕННЫЙ МАРШРУТ!
                    </div>
                    <b-button class="newRoute sendButton"  @click="hideModal">
                        Добавить новый
                    </b-button>
                    <div class="subTitleVote">
                        Вы можете посмотреть предложения всех пользователей
                    </div>
                    <b-button class="openMap" @click="hideModal">
                        Открыть карту
                    </b-button>
                </div>
            </b-modal>
        </b-container fluid>
    </div>
</template>

<script>
    import Map from "./components/Map";

    export default {
        name: 'app',
        components: {
            Map
        },

        data: function () {
            return {
                coords: [51.534907, 46.035188],
                like: false,
                likePath: './assets/like.svg'
            };

        },
        methods: {
            likeIt()
            {
                this.like = (this.likePath == './assets/like.svg' ? ',/assets/noLike.svg' : './assets/like.svg');
            },
            showModal() {
                this.$refs['vote'].show()
            },
            hideModal() {
                this.$refs['vote'].hide()
                let input = $(div).find("input[type='file']");
                input.replaceWith(input.val('').clone(true));
            },
        }
    }
</script>

<style>

    body {
        background-color: #F5F6F7;
    }
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
    }

    #app {
        width: 100%;
        height: 100%;
        background-color: #F5F6F7;

    }

    .ymap-container {
        height: 100%;
    }
    .menuColumn {

        width: 480px;
        height: 100%;
        left: 0px;
        top: 0px;

        background: #FFFFFF;
        box-shadow: 7px 4px 7px rgba(60, 51, 117, 0.15);
    }
    .logo {
        width: 170px;
        height: 99px;
        left: 60px;
        top: 89px;

        font-family: Montserrat;
        font-style: normal;
        font-weight: 900;
        font-size: 42px;
        line-height: 115.5%;
        /* or 49px */

        letter-spacing: 0.13em;

        color: #9381FF;
        padding-top: 89px;
        margin-left: 60px;
        margin-right: 220px;
        margin-bottom: 70px;
    }

    .backButton, .backButton.btn, .backButton.btn-secondary:not(:disabled):not(.disabled).active, .backButton.btn-secondary:not(:disabled):not(.disabled):active, .backButton.show>.btn-secondary.dropdown-toggle, .backButton.btn:hover,.backButton.btn:active, .backButton.btn:focus {
        text-transform: none;
        height: 20px;
        font-family: Montserrat;
        font-style: normal;
        font-weight: bold;
        font-size: 16px;
        line-height: 20px;

        color: #9381FF;
        background: #FFFFFF;

        margin-top: 50px;
        margin-left: 60px;
        margin-right: 313px;
        border-color: #FFFFFF;

        box-shadow: none;
        outline: none;
        border: 0;
        background: transparent;
        cursor: pointer;


    }
    .description {
        width: 315px;
        height: 116px;
        left: 60px;
        top: 296px;

        font-family: Montserrat;
        font-style: normal;
        font-weight: bold;
        font-size: 24px;
        line-height: 29px;

        color: #9381FF;

        margin-left: 60px;
        margin-top: 46px;
        text-align: left;
    }
    .sendButton, .sendButton.btn, .sendButton.btn-secondary:not(:disabled):not(.disabled).active, .sendButton.btn-secondary:not(:disabled):not(.disabled):active, .sendButton.show>.btn-secondary.dropdown-toggle, .sendButton.btn:hover,.sendButton.btn:active, .sendButton.btn:focus {
        width: 151px;
        height: 43px;
        background: #9381FF;
        border-radius: 35px;
        border-color: #9381FF;
        box-shadow: none;
        font-family: Montserrat;
        font-style: normal;
        font-weight: 600;
        font-size: 14px;
        line-height: 17px;
        /* identical to box height */

        text-align: center;
        margin-top: 35px;
        margin-left: 45px;
        margin-right: 240px;
        cursor: pointer;

        color: #FFFFFF;
    }

    .inputPoint {
        width: 330px;
        height: 50px;
        left: 60px;
        top: 445px;

        background: #FFFFFF;
        border: 2px solid #9381FF;
        box-sizing: border-box;
        border-radius: 33px;
        margin-left: 36px;
        margin-right: 60px;
        margin-top: 33px;

        font-family: Montserrat;
        font-style: normal;
        font-weight: 500;
        font-size: 16px;
        line-height: 20px;
        color: #9381FF;


        padding-left: 34px;
        padding-top: 15px;
        padding-bottom: 15px;
    }
    .backImg {
        margin-right: 12px;
    }
    .inputPoint::placeholder {
        color: #9381FF;
    }

    .lineDone {
        margin-left: 50px;
        margin-right: 169px;
        margin-top: 78px;

        font-family: Montserrat;
        font-style: normal;
        font-weight: 300;
        font-size: 16px;
        line-height: 20px;

        color: #5F5696;
    }
    .imgLine {
        padding-right: 26px;
    }

    .lineBuild {
        margin-left: 49px;
        margin-right: 132px;
        margin-top: 17px;

        font-family: Montserrat;
        font-style: normal;
        font-weight: 300;
        font-size: 16px;
        line-height: 20px;

        color: #5F5696;
    }

    .map {
        width: 420px;
        height: 335px;
        border-radius: 6px;
        margin-left: 60px;
        margin-top: 60px;
        margin-right: 14px;
        margin-bottom: 80px;
    }
    .mapDown {
        width: 420px;
        height: 335px;
        border-radius: 6px;
        margin-left: 60px;
        margin-top: 20px;
        margin-right: 14px;
        margin-bottom: 100px;
    }
    .topMap {
        width: 420px;
        height: 262px;
        border-radius: 6px;
    }
    .bottomMap {
        width: 420px;
        height: 73px;
        background-color: #FFFFFF;
        border-radius: 6px;
    }
    .block {
        margin-left: 60px;
    }
    .subway {
        margin-top: 27px;
        margin-left: 33px;

    }
    .placePoint {
        font-family: Montserrat;
        font-style: normal;
        font-weight: bold;
        font-size: 12px;
        line-height: 15px;

        color: #9381FF;
        text-align: left;
    }
    .rowFromPoint {
        margin-top: 20px;
        margin-left: 11px;
        margin-right: 88px;
    }
    .rowToPoint {
        margin-top: 5px;
    }
    .likeImg {
        margin-top: 20px;
        margin-right: 24px;
    }
    .commentImg {
        margin-top: 20px;
        margin-right: 36px;
    }
    .route, .route.btn, .route.btn-secondary:not(:disabled):not(.disabled).active, .route.btn-secondary:not(:disabled):not(.disabled):active, .route.show>.btn-secondary.dropdown-toggle, .route.btn:hover,.route.btn:active, .route.btn:focus {
        box-shadow: none;
        outline: none;
        border: 0;
        background: transparent;
        cursor: pointer;
        text-transform: none;
        background: #FFFFFF;
        border: 0px;
        padding: 0px;

    }

    button:focus, div:focus {
        box-shadow: none !important;
        border: none !important;
        outline: none !important;
    }

    .voteWindow {
        width: 420px;
        height: 348px;


    }
    .titleVote {
        width: 303px;
        height: 81px;

        font-family: Montserrat;
        font-style: normal;
        font-weight: 800;
        font-size: 22px;
        line-height: 27px;
        text-align: center;
        letter-spacing: 0.05em;

        color: #9381FF;

        margin-left: 79px;
        margin-right: 58px;
        margin-top: 43px;


    }
    .subTitleVote {
        width: 335px;
        height: 44px;

        font-family: Montserrat;
        font-style: normal;
        font-weight: 600;
        font-size: 18px;
        line-height: 22px;
        text-align: center;

        color: #9381FF;
        margin-top: 48px;
        margin-left: 53px;
        margin-right: 42px;
    }
    .newRoute, .newRoute.btn, .newRoute.btn-secondary:not(:disabled):not(.disabled).active, .newRoute.btn-secondary:not(:disabled):not(.disabled):active, .newRoute.show>.btn-secondary.dropdown-toggle, .newRoute.btn:hover,.newRoute.btn:active, .newRoute.btn:focus {
        width: 239px;
        height: 43px;
        margin-left: 111px;
        margin-top: 30px;
        margin-right: 90px;

        background: #9381FF;
        border-radius: 35px;
        border-color: #9381FF;
        box-shadow: none;
        font-family: Montserrat;
        font-style: normal;
        font-weight: 600;
        font-size: 14px;
        line-height: 17px;
        /* identical to box height */

        text-align: center;
        cursor: pointer;

        color: #FFFFFF;

    }
    .openMap, .openMap.btn, .openMap.btn-secondary:not(:disabled):not(.disabled).active, .openMap.btn-secondary:not(:disabled):not(.disabled):active, .openMap.show>.btn-secondary.dropdown-toggle, .openMap.btn:hover,.openMap.btn:active, .openMap.btn:focus {
        width: 239px;
        height: 43px;

        font-family: Montserrat;
        font-style: normal;
        font-weight: 600;
        font-size: 14px;
        line-height: 17px;
        /* identical to box height */

        text-align: center;

        color: #9381FF;
        border: 2px solid #9381FF;
        box-sizing: border-box;
        border-radius: 35px;

        cursor: pointer;
        background-color: #FFFFFF;

        margin-left: 111px;
        margin-top: 30px;
        margin-right: 90px;

    }
    @import url(http://fonts.googleapis.com/css?family=Montserrat:700,300,600,800,400&subset=cyrillic,cyrillic-ext,latin);


</style>
