/*
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
'use strict';

(function () {
    var Marzipano = window.Marzipano;
    var data = window.APP_DATA;

    // Grab elements from DOM.
    var panoElement = document.querySelector('#pano');
    var autorotateToggleElement = document.querySelector('#autorotateToggle');

    // Detect desktop or mobile mode.
    if (window.matchMedia) {
        var setMode = function () {
            if (mql.matches) {
                document.body.classList.remove('desktop');
                document.body.classList.add('mobile');
            } else {
                document.body.classList.remove('mobile');
                document.body.classList.add('desktop');
            }
        };
        var mql = matchMedia("(max-width: 500px), (max-height: 500px)");
        setMode();
        mql.addListener(setMode);
    } else {
        document.body.classList.add('desktop');
    }

    // Detect whether we are on a touch device.
    document.body.classList.add('no-touch');
    window.addEventListener('touchstart', function () {
        document.body.classList.remove('no-touch');
        document.body.classList.add('touch');
    });

    // Viewer options.
    var viewerOpts = {
        controls: {
            mouseViewMode: data.settings.mouseViewMode
        }
    };

    // Initialize viewer.
    var viewer = new Marzipano.Viewer(panoElement, viewerOpts);

    // Create scenes.
    var scenes = data.scenes.map(function (data) {
        var urlPrefix = "tiles";
        var source = Marzipano.ImageUrlSource.fromString(
            urlPrefix + "/" + data.id + "/{z}/{f}/{y}/{x}.jpg",
            { cubeMapPreviewUrl: urlPrefix + "/" + data.id + "/preview.jpg" });
        var geometry = new Marzipano.CubeGeometry(data.levels);

        var limiter = Marzipano.RectilinearView.limit.traditional(data.faceSize, 100 * Math.PI / 180, 120 * Math.PI / 180);
        var view = new Marzipano.RectilinearView(data.initialViewParameters, limiter);

        var scene = viewer.createScene({
            source: source,
            geometry: geometry,
            view: view,
            pinFirstLevel: true
        });

        // Create link hotspots.
        createHotSpot();

        createCoundown();

        function createHotSpot() {

            var container = scene.hotspotContainer();

            container.createHotspot(document.getElementById('iframespot'), { yaw: 0.019, pitch: 0.001 },
                { perspective: { radius: 1640, extraTransforms: "rotateX(0deg)" } });

            container.createHotspot(document.getElementById('post_sanculy'),
                {
                    yaw: 0.8070847551061515,
                    pitch: -0.027256885630091432
                },
                { perspective: { radius: 1640, extraTransforms: "rotateX(0deg)" } }
            );
            container.createHotspot(document.getElementById('post_mash_sanculy'),
                {
                    yaw: 0.8070847551061515,
                    pitch: -0.14
                },
                { perspective: { radius: 1640, extraTransforms: "rotateX(0deg)" } }
            );

            container.createHotspot(document.getElementById('post_hengapnhanvat'),
                {
                    yaw: 2.114847835387857,
                    pitch: 0.2857104762354936
                },
                { perspective: { radius: 1640, extraTransforms: "rotateX(0deg)" } }
            );

            container.createHotspot(document.getElementById('post_mash_hengapnhanvat'),
                {
                    yaw: 2.014847835387857,
                    pitch: 0.1
                },
                { perspective: { radius: 1640, extraTransforms: "rotateX(0deg)" } }
            );

            container.createHotspot(document.getElementById('post_batphithuong'),
                {
                    yaw: -1.9901161654922355,
                    pitch: 0.2896509815751038
                },
                { perspective: { radius: 1640, extraTransforms: "rotateX(0deg)" } }
            );
            container.createHotspot(document.getElementById('post_mash_batphithuong'),
                {
                    yaw: -1.9501161654922355,
                    pitch: 0.1
                },
                { perspective: { radius: 1640, extraTransforms: "rotateX(0deg)" } }
            );

            container.createHotspot(document.getElementById('post_chinhphucsondoong'),
                {
                    yaw: -0.7940957204397172,
                    pitch: -0.025453026482100682
                },
                { perspective: { radius: 1640, extraTransforms: "rotateX(0deg)" } }
            );
            container.createHotspot(document.getElementById('post_mash_chinhphucsondoong'),
                {
                    yaw: -0.82,
                    pitch: -0.165453026482100682
                },
                { perspective: { radius: 1640, extraTransforms: "rotateX(0deg)" } }
            );


            container.createHotspot(document.getElementById('post_butpha'),
                {
                    yaw: 1.2345634512482508,
                    pitch: 0.29340376702986504
                },
                { perspective: { radius: 1640, extraTransforms: "rotateX(0deg)" } }
            );
            container.createHotspot(document.getElementById('post_mash_butpha'),
                {
                    yaw: 1.2445634512482508,
                    pitch: 0.12
                },
                { perspective: { radius: 1640, extraTransforms: "rotateX(0deg)" } }
            );


            container.createHotspot(document.getElementById('post_santhuongsieudam'),
                {
                    yaw: 1.5776088847435146,
                    pitch: -0.03743764739566657
                },
                { perspective: { radius: 1640, extraTransforms: "rotateX(0deg)" } }
            );
            container.createHotspot(document.getElementById('post_mash_santhuongsieudam'),
                {
                    yaw: 1.5776088847435146,
                    pitch: -0.23
                },
                { perspective: { radius: 1640, extraTransforms: "rotateX(0deg)" } }
            );


            container.createHotspot(document.getElementById('post_goikhoetronven'),
                {
                    yaw: -1.2186677998517936,
                    pitch: 0.30996865213952063
                },
                { perspective: { radius: 1640, extraTransforms: "rotateX(0deg)" } }
            );
            container.createHotspot(document.getElementById('post_mash_goikhoetronven'),
                {
                    yaw: -1.2186677998517936,
                    pitch: 0.18
                },
                { perspective: { radius: 1640, extraTransforms: "rotateX(0deg)" } }
            );

            container.createHotspot(document.getElementById('post_goidocquyen'),
                {
                    yaw: -1.5659582704509383,
                    pitch: -0.031816659526256785
                },
                { perspective: { radius: 1640, extraTransforms: "rotateX(0deg)" } }
            );
            container.createHotspot(document.getElementById('post_mash_goidocquyen'),
                {
                    yaw: -1.5659582704509383,
                    pitch: -0.2
                },
                { perspective: { radius: 1640, extraTransforms: "rotateX(0deg)" } }
            );


            container.createHotspot(document.getElementById('clock'),
                { yaw: 0.004, pitch: 0.14 },
                { perspective: { radius: 1640, extraTransforms: "rotateX(0deg)" } }
            );



        }

        function createCoundown() {
            //var dateEnd = '2022/02/05' + ' 9:36:00';
            var dateEnd = '2022/02/22' + ' 18:00:00';
            var today = new Date();

            var timeNow = today.getTime(),
                timeEnd = Date.parse(dateEnd),
                timeClock = timeEnd - timeNow;

            // Iframe FB
            if (timeClock > 0) {
                var deadline = new Date(Date.parse(new Date()) + timeClock);
                var clock = new Clock(deadline, function () {
                    // Coundown finished --> show video
                    var hotspotHtml = `<video width="1540" height="866" muted playsInline="playsinline" loop controls autoplay>
                    <source src="https://ui.techable.vn/video-lt-aia/video-live-aia.mp4" type="video/mp4"> </video>`;
                    var wrapper = document.getElementById('iframespot');
                    wrapper.innerHTML = hotspotHtml;
                    stopTouchAndScrollEventPropagation(wrapper);
                });
                document.querySelector('.clock').appendChild(clock.el);
            } else {
                var hotspotHtml = `<video width="1540" height="866" muted playsInline="playsinline" loop controls autoplay>
                <source src="https://ui.techable.vn/video-lt-aia/video-live-aia.mp4" type="video/mp4"></video>`;
                var wrapper = document.getElementById('iframespot');
                wrapper.innerHTML = hotspotHtml;
                stopTouchAndScrollEventPropagation(wrapper);
            }

            // Iframe YT

            // if (timeClock > 0) {
            //     var deadline = new Date(Date.parse(new Date()) + timeClock);
            //     var clock = new Clock(deadline, function () {
            //         // Coundown finished --> show video
            //         var hotspotHtml = `<iframe id="youtube" width="1540" height="866" 
            //         src="https://www.youtube.com/embed/cAi03m4NdiE?rel=0&amp;controls=0&amp;showinfo=0&amp;"
            //         frameborder="0" allowfullscreen></iframe>`;
            //         var wrapper = document.getElementById('iframespot');
            //         wrapper.innerHTML = hotspotHtml;
            //         stopTouchAndScrollEventPropagation(wrapper);
            //     });
            //     document.querySelector('.clock').appendChild(clock.el);
            // } else {
            //     var hotspotHtml = `<iframe id="youtube" width="1540" height="866" 
            //         src="https://www.youtube.com/embed/cAi03m4NdiE?rel=0&amp;controls=0&amp;showinfo=0&amp;"
            //         frameborder="0" allowfullscreen></iframe>`;
            //     var wrapper = document.getElementById('iframespot');
            //     wrapper.innerHTML = hotspotHtml;
            //     stopTouchAndScrollEventPropagation(wrapper);
            // }

        }

        return {
            data: data,
            scene: scene,
            view: view
        };

    });


    // Set up autorotate, if enabled.
    var autorotate = Marzipano.autorotate({
        yawSpeed: 0.03,
        targetPitch: 0,
        targetFov: Math.PI / 2
    });
    if (data.settings.autorotateEnabled) {
        autorotateToggleElement.classList.add('enabled');
    }

    // Set handler for autorotate toggle.
    autorotateToggleElement.addEventListener('click', toggleAutorotate);


    var viewUpElement = document.querySelector('#viewUp');
    var viewDownElement = document.querySelector('#viewDown');
    var viewLeftElement = document.querySelector('#viewLeft');
    var viewRightElement = document.querySelector('#viewRight');

    // Dynamic parameters for controls.
    var velocity = 0.7;
    var friction = 3;

    // Associate view controls with elements.
    var controls = viewer.controls();
    controls.registerMethod('upElement', new Marzipano.ElementPressControlMethod(viewUpElement, 'y', -velocity, friction), true);
    controls.registerMethod('downElement', new Marzipano.ElementPressControlMethod(viewDownElement, 'y', velocity, friction), true);
    controls.registerMethod('leftElement', new Marzipano.ElementPressControlMethod(viewLeftElement, 'x', -velocity, friction), true);
    controls.registerMethod('rightElement', new Marzipano.ElementPressControlMethod(viewRightElement, 'x', velocity, friction), true);
    //controls.registerMethod('inElement',    new Marzipano.ElementPressControlMethod(viewInElement,  'zoom', -velocity, friction), true);
    //controls.registerMethod('outElement',   new Marzipano.ElementPressControlMethod(viewOutElement, 'zoom',  velocity, friction), true);


    function switchScene(scene) {
        stopAutorotate();
        scene.view.setParameters(scene.data.initialViewParameters);
        scene.scene.switchTo();
        startAutorotate();
    }

    function startAutorotate() {
        if (!autorotateToggleElement.classList.contains('enabled')) {
            return;
        }
        viewer.startMovement(autorotate);
        viewer.setIdleMovement(3000, autorotate);
    }

    function stopAutorotate() {
        viewer.stopMovement();
        viewer.setIdleMovement(Infinity);
    }

    function toggleAutorotate() {
        if (autorotateToggleElement.classList.contains('enabled')) {
            autorotateToggleElement.classList.remove('enabled');
            stopAutorotate();
        } else {
            autorotateToggleElement.classList.add('enabled');
            startAutorotate();
        }
    }


    // Prevent touch and scroll events from reaching the parent element.
    function stopTouchAndScrollEventPropagation(element, eventList) {
        var eventList = ['touchstart', 'touchmove', 'touchend', 'touchcancel',
            'wheel', 'mousewheel'];
        for (var i = 0; i < eventList.length; i++) {
            element.addEventListener(eventList[i], function (event) {
                event.stopPropagation();
            });
        }
    }

    // Display the initial scene.
    switchScene(scenes[0]);

})();


