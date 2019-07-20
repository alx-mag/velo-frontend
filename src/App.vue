<template>
    <div id="app">
        <Map :coords="coords"/>
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
                coords: [54.82796654088306, 39.831893822753904]
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
</style>
