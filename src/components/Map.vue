<template>
    <div id="map">
        <div class="hero-unit">
            <div class="container">
                <div id="YMapsID"></div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Map",
        // props: {
        //     coords: Array
        // },
        created() {
          this.showMap()
        },
        methods: {
            showMap() {
                ymaps.ready(function () {
                    var map = new ymaps.Map('YMapsID', {
                            center: [51.53360977972205, 46.01979527258292],
                            controls: ['zoomControl', 'typeSelector',  'fullscreenControl'],
                            zoom: 13, type: 'yandex#map',

                        }),

                        buttons = {
                            dissipating: new ymaps.control.Button({
                                data: {
                                    content: 'Toggle dissipating'
                                },
                                options: {
                                    selectOnClick: false,
                                    maxWidth: 150
                                }
                            }),
                            opacity: new ymaps.control.Button({
                                data: {
                                    content: 'Change opacity'
                                },
                                options: {
                                    selectOnClick: false,
                                    maxWidth: 150
                                }
                            }),
                            radius: new ymaps.control.Button({
                                data: {
                                    content: 'Change radius'
                                },
                                options: {
                                    selectOnClick: false,
                                    maxWidth: 150
                                }
                            }),
                            gradient: new ymaps.control.Button({
                                data: {
                                    content: 'Reverse gradient'
                                },
                                options: {
                                    selectOnClick: false,
                                    maxWidth: 150
                                }
                            }),
                            heatmap: new ymaps.control.Button({
                                data: {
                                    content: 'Toggle Heatmap'
                                },
                                options: {
                                    selectOnClick: false,
                                    maxWidth: 150
                                }
                            })
                        },

                        gradients = [{
                            0.1: 'rgba(128, 255, 0, 0.7)',
                            0.2: 'rgba(255, 255, 0, 0.8)',
                            0.7: 'rgba(234, 72, 58, 0.9)',
                            1.0: 'rgba(162, 36, 25, 1)'
                        }, {
                            0.1: 'rgba(162, 36, 25, 0.7)',
                            0.2: 'rgba(234, 72, 58, 0.8)',
                            0.7: 'rgba(255, 255, 0, 0.9)',
                            1.0: 'rgba(128, 255, 0, 1)'
                        }],
                        radiuses = [5, 10, 20, 30],

                        opacities = [0.4, 0.6, 0.8, 1];


                    ymaps.modules.require(['Heatmap'], function (Heatmap) {
                        var heatmap = new Heatmap(data, {
                            gradient: gradients[0],
                            radius: radiuses[1],
                            opacity: opacities[2]
                        });
                        heatmap.setMap(map);

                        buttons.dissipating.events.add('press', function () {
                            heatmap.options.set(
                                'dissipating', !heatmap.options.get('dissipating')
                            );
                        });
                        buttons.opacity.events.add('press', function () {
                            var current = heatmap.options.get('opacity'),
                                index = opacities.indexOf(current);
                            heatmap.options.set(
                                'opacity', opacities[++index == opacities.length ? 0 : index]
                            );
                        });
                        buttons.radius.events.add('press', function () {
                            var current = heatmap.options.get('radius'),
                                index = radiuses.indexOf(current);
                            heatmap.options.set(
                                'radius', radiuses[++index == radiuses.length ? 0 : index]
                            );
                        });
                        buttons.gradient.events.add('press', function () {
                            var current = heatmap.options.get('gradient');
                            heatmap.options.set(
                                'gradient', current == gradients[0] ? gradients[1] : gradients[0]
                            );
                        });
                        buttons.heatmap.events.add('press', function () {
                            heatmap.setMap(
                                heatmap.getMap() ? null : map
                            );
                        });

                        for (var key in buttons) {
                            if (buttons.hasOwnProperty(key)) {
                                map.controls.add(buttons[key]);
                            }
                        }
                    });
                });
            }
        }
    }
</script>

<style scoped>

.ymap-container {
    height: 100%;
}

.hero-unit {
    min-height: 100%;
    height: 900px;
    margin: 0px;
}
#YMapsID {
    width: 1400px;
    height: 900px;
}
#YMapsCode {
    width: 1400px;
}
</style>