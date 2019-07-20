<template>
    <div id="map">
        <h1>Map</h1>
        <yandex-map :coords="this.coords" zoom="10"></yandex-map>
    </div>
</template>

<script>
    export default {
        name: "Map",
        props: {
            coords: Array
        }
    }
</script>

<style scoped>
#map {
    width: 1000px;
    height: 600px;
}

.ymap-container {
    height: 100%;
}
</style>