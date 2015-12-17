angular.module('app.famous', ['ngSanitize'])
        .controller('famousController', function($scope, $http, $location, $famous, $sce, YT_event) {
            $scope.cubeSize = 100;
            $scope.distanceToNextCube = 30;
            $scope.distanceToHead = $scope.cubeSize / 3;
            $scope.youtubeHeight = 600;
            $scope.youtubeWidth = 300;
            $scope.daten = {name: 'misko', gender: 'male'};
//            $scope.youtubeSource = "https://www.youtube.com/embed/-YGDyPAwQz0";

            $scope.trustSrc = function(src) {
                return $sce.trustAsResourceUrl(src);
            }

            $http.get('profil.json').
                    success(function(data, status, headers, config) {
                        $scope.daten = data;
                    })
                    
            $scope.ausgabe = function(wert){
                console.log(wert);
            }
            


            var EventHandler = $famous['famous/core/EventHandler'];

            var data = [];
            data.push({id: 0, ueberschrift: "Youtube", content: 'http://www.daswallpaper.de/wallpaper/original/Technology-Wallpaper-6_2.jpg', name: 'zero', position: [$scope.distanceToNextCube, $scope.distanceToHead], height: $scope.cubeSize, width: $scope.cubeSize, handler: new EventHandler()});
            data.push({id: 1, ueberschrift: "Modeln", content: 'http://www.daswallpaper.de/wallpaper/original/man-in-fire-1920x1080-wallpaper-2310.jpg', name: 'one', position: [$scope.distanceToNextCube, $scope.distanceToHead], height: $scope.cubeSize, width: $scope.cubeSize, handler: new EventHandler()});
            data.push({id: 2, ueberschrift: "Programmieren", content: 'http://www.daswallpaper.de/wallpaper/original/lines-and-lights-1920x1080-wallpaper-11672.jpg', name: 'two', position: [$scope.distanceToNextCube, $scope.distanceToHead], height: $scope.cubeSize, width: $scope.cubeSize, handler: new EventHandler()});
            data.push({id: 3, ueberschrift: "Schreiben", content: 'http://www.daswallpaper.de/wallpaper/original/Technology-Wallpaper-6_2.jpg', name: 'three', position: [$scope.distanceToNextCube, $scope.distanceToHead], height: $scope.cubeSize, width: $scope.cubeSize, handler: new EventHandler()});
            data.push({id: 4, ueberschrift: "social medias ", content: 'http://www.daswallpaper.de/wallpaper/original/man-in-fire-1920x1080-wallpaper-2310.jpg', name: 'four', position: [$scope.distanceToNextCube, $scope.distanceToHead], height: $scope.cubeSize, width: $scope.cubeSize, handler: new EventHandler()});
//            data.push({id: 5, content: 'http://www.daswallpaper.de/wallpaper/original/lines-and-lights-1920x1080-wallpaper-11672.jpg', name: 'five', position: [100, 120], height: $scope.cubeSize, width: $scope.cubeSize, handler: new EventHandler()});
//            data.push({id: 6, content: 'http://www.daswallpaper.de/wallpaper/original/Technology-Wallpaper-6_2.jpg', name: 'six', position: [100, 120], height: $scope.cubeSize, width: $scope.cubeSize, handler: new EventHandler()});
//            data.push({id: 7, content: 'http://www.daswallpaper.de/wallpaper/original/man-in-fire-1920x1080-wallpaper-2310.jpg', name: 'seven', position: [100, 120], height: $scope.cubeSize, width: $scope.cubeSize, handler: new EventHandler()});
//            data.push({id: 8, content: 'http://www.daswallpaper.de/wallpaper/original/lines-and-lights-1920x1080-wallpaper-11672.jpg', name: 'eight', position: [100, 120], height: $scope.cubeSize, width: $scope.cubeSize, handler: new EventHandler()});
////    data.push( {id: 9, content: 'http://www.daswallpaper.de/wallpaper/original/lines-and-lights-1920x1080-wallpaper-11672.jpg', name: 'nine',  position: [100, 120], height: 160, width: 160, handler: new EventHandler() } );
            data.push()
//            var data = [];
//            data.push({id: 0, content: 'http://www.daswallpaper.de/wallpaper/original/Technology-Wallpaper-6_2.jpg', name: 'zero', position: [150, 120], height: $scope.cubeSize, width: $scope.cubeSize, handler: new EventHandler()});
//            data.push({id: 1, content: 'http://www.daswallpaper.de/wallpaper/original/man-in-fire-1920x1080-wallpaper-2310.jpg', name: 'one', position: [325, 120], height: $scope.cubeSize, width: $scope.cubeSize, handler: new EventHandler()});
//            data.push({id: 2, content: 'http://www.daswallpaper.de/wallpaper/original/lines-and-lights-1920x1080-wallpaper-11672.jpg', name: 'two', position: [150, 295], height: $scope.cubeSize, width: $scope.cubeSize, handler: new EventHandler()});
//            data.push({id: 3, content: 'http://www.daswallpaper.de/wallpaper/original/Technology-Wallpaper-6_2.jpg', name: 'three', position: [325, 295], height: $scope.cubeSize, width: $scope.cubeSize, handler: new EventHandler()});
//            data.push({id: 4, content: 'http://www.daswallpaper.de/wallpaper/original/man-in-fire-1920x1080-wallpaper-2310.jpg', name: 'four', position: [150, 470], height: $scope.cubeSize, width: $scope.cubeSize, handler: new EventHandler()});
//            data.push({id: 5, content: 'http://www.daswallpaper.de/wallpaper/original/lines-and-lights-1920x1080-wallpaper-11672.jpg', name: 'five', position: [325, 470], height: $scope.cubeSize, width: $scope.cubeSize, handler: new EventHandler()});
//            data.push({id: 6, content: 'http://www.daswallpaper.de/wallpaper/original/Technology-Wallpaper-6_2.jpg', name: 'six', position: [150, 645], height: $scope.cubeSize, width: $scope.cubeSize, handler: new EventHandler()});
//            data.push({id: 7, content: 'http://www.daswallpaper.de/wallpaper/original/man-in-fire-1920x1080-wallpaper-2310.jpg', name: 'seven', position: [325, 645], height: $scope.cubeSize, width: $scope.cubeSize, handler: new EventHandler()});
//            data.push({id: 8, content: 'http://www.daswallpaper.de/wallpaper/original/lines-and-lights-1920x1080-wallpaper-11672.jpg', name: 'eight', position: [150, 820], height: $scope.cubeSize, width: $scope.cubeSize, handler: new EventHandler()});
//            data.push({id: 9, content: 'http://www.daswallpaper.de/wallpaper/original/Technology-Wallpaper-6_2.jpg', name: 'nine',  position: [325, 820],height: $scope.cubeSize, width: $scope.cubeSize, handler: new EventHandler() } );
//            data.push()

            var videos = [];
            $scope.show = false;
            $scope.pushTheItems = function() {
                $scope.show = true;
                $scope.distanceToNextVideo = 30;
                $scope.distanceToOverVideo = 30;
                $scope.videoSize = 300;
                $scope.daten.youtube.forEach(function(video) {
                    videos.push({id: video.id, beschreibung: video.beschreibung, ueberschrift: video.title, url: video.url, datum: video.datum, position: [$scope.distanceToNextVideo, $scope.distanceToOverVideo], height: $scope.videoSize, width: $scope.videoSize / 2, handler: new EventHandler()});
                });
                videos.push()
                
            };
            $scope.youtubeVideos = videos;
            $scope.nodes = data;
            //console.log($scope.nodes);

            $scope.remove = function() {
                $scope.nodes.splice(0, 1);
                console.log($scope.nodes);
            }

            $scope.gridAreaOptions = {
//                dimensions: [1, 10]
                dimensions: [5, 1]
            }
            $scope.gridYoutubeOption = {
//                dimensions: [1, 10]
                dimensions: [3, 2]
            }

            $scope.gridLine = {
//                dimensions: [1, 10]
                dimensions: [1, 1]
            }


////            Youtube einbindung
            $scope.yt = {
                width: 500,
                height: 300,
                videoid: "-YGDyPAwQz0",
                playerStatus: "NOT PLAYING"
            };




            $scope.YT_event = YT_event;

            $scope.sendControlEvent = function(ctrlEvent) {
                this.$broadcast(ctrlEvent);
            }

            $scope.$on(YT_event.STATUS_CHANGE, function(event, data) {
                $scope.yt.playerStatus = data;
            });


        })

        .constant('YT_event', {
            STOP: 0,
            PLAY: 1,
            PAUSE: 2,
            STATUS_CHANGE: 3
        })

        .directive('youtube', function($window, YT_event) {
            return {
                restrict: "E",
                scope: {
                    height: "@",
                    width: "@",
                    videoid: "@"
                },
                template: '<div></div>',
                link: function(scope, element, attrs, $rootScope) {
                    var tag = document.createElement('script');
                    tag.src = "https://www.youtube.com/iframe_api";
                    var firstScriptTag = document.getElementsByTagName('script')[0];
                    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

                    var player;

                    $window.onYouTubeIframeAPIReady = function() {

                        player = new YT.Player(element.children()[0], {
                            playerVars: {
                                autoplay: 0,
                                html5: 1,
                                theme: "light",
                                modesbranding: 0,
                                color: "white",
                                iv_load_policy: 3,
                                showinfo: 1,
                                controls: 1
                            },
                            height: scope.height,
                            width: scope.width,
                            videoId: scope.videoid,
                            events: {
                                'onStateChange': function(event) {

                                    var message = {
                                        event: YT_event.STATUS_CHANGE,
                                        data: ""
                                    };

                                    switch (event.data) {
                                        case YT.PlayerState.PLAYING:
                                            message.data = "PLAYING";
                                            break;
                                        case YT.PlayerState.ENDED:
                                            message.data = "ENDED";
                                            break;
                                        case YT.PlayerState.UNSTARTED:
                                            message.data = "NOT PLAYING";
                                            break;
                                        case YT.PlayerState.PAUSED:
                                            message.data = "PAUSED";
                                            break;
                                    }

                                    scope.$apply(function() {
                                        scope.$emit(message.event, message.data);
                                    });
                                }
                            }
                        });
                    };

                    scope.$watch('height + width', function(newValue, oldValue) {
                        if (newValue == oldValue) {
                            return;
                        }

                        player.setSize(scope.width, scope.height);

                    });

                    scope.$watch('videoid', function(newValue, oldValue) {
                        if (newValue == oldValue) {
                            return;
                        }

                        player.cueVideoById(scope.videoid);

                    });

                    scope.$on(YT_event.STOP, function() {
                        player.seekTo(0);
                        player.stopVideo();
                    });

                    scope.$on(YT_event.PLAY, function() {
                        player.playVideo();
                    });

                    scope.$on(YT_event.PAUSE, function() {
                        player.pauseVideo();
                    });

                }
            };
        });
