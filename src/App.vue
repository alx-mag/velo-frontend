<template>
    <div id="app" v-cloak>
        <Map :coords="coords"/>
        <b-container fluid>
            <b-row>
                <b-col cols="4">
                    <div class="menuColumn">
                        <b-row class="logo">
                            <b-col>
                                VELO <br>
                                RIDER
                            </b-col>
                        </b-row>
                        <b-row>
                            <b-col>
                                <b-button class="backButton">
                                    <span> <img src="./assets/back.svg" width="13" height="22"> Назад </span>
                                </b-button>
                            </b-col>
                        </b-row>
                        <b-row class="description">
                            <b-col>
                                Вы можете предложить адреса, которые хотели бы соеденить велодорожкой.
                            </b-col>
                        </b-row>
                    </div>
                </b-col>
                <b-col>

                </b-col>

            </b-row>
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
                coords: [51.534907, 46.035188]
            };
        }
    }
</script>

<style>

    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }

    #app {
        width: 1000px;
        height: 600px;
    }

    .ymap-container {
        height: 100%;
    }
    .menuColumn {

        width: 480px;
        height: 900px;
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
        margin-top: 89px;
        margin-left: 60px;
        margin-right: 220px;
    }

    .backButton {
        width: 83px;
        height: 20px;
        font-family: Montserrat;
        font-style: normal;
        font-weight: bold;
        font-size: 16px;
        line-height: 20px;

        color: #9381FF;
        background: #FFFFFF;

        margin-top: 37px;
        margin-left: 60px;
        margin-right: 313px;
        border-color: #FFFFFF;
        box-shadow: #FFFFFF;
        border: 0px;
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


    @import url(http://fonts.googleapis.com/css?family=Montserrat:700,300,600,800,400&subset=cyrillic,cyrillic-ext,latin);


</style>
