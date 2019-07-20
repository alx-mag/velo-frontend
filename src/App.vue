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

</style>
