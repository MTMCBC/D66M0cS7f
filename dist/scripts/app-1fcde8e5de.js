!function(){"use strict";angular.module("cbc",["ngCookies","ngTouch","ngSanitize","ngMessages","ui.router","ui.bootstrap","toastr","material.components.gridList","slickCarousel"])}(),function(){"use strict";function e(e){}e.$inject=["$scope"],angular.module("cbc").controller("NewsViewerController",e)}(),function(){"use strict";function e(e){}e.$inject=["$scope"],angular.module("cbc").controller("NewsListController",e)}(),function(){"use strict";function e(){}angular.module("cbc").controller("MainController",e)}(),function(){"use strict";function e(e,i,s){switch(e.right=!1,e.left=!1,i.channel){case"cbc":e.link=s.trustAsResourceUrl("https://www.youtube.com/embed/1yEMLzYzE1g");break;case"extra":e.link=s.trustAsResourceUrl("https://www.youtube.com/embed/1yEMLzYzE1g");break;case"drama":e.link=s.trustAsResourceUrl("https://www.youtube.com/embed/uMvhnVugCjo");break;case"sofra":e.link=s.trustAsResourceUrl("https://www.youtube.com/embed/K8XaIiikpAo")}e.rightClick=function(){e.right=!e.right},e.leftClick=function(){e.left=!e.left}}e.$inject=["$scope","$stateParams","$sce"],angular.module("cbc").controller("LiveStreamingController",e)}(),function(){"use strict";function e(e){}e.$inject=["$scope"],angular.module("cbc").controller("DramaController",e)}(),function(){"use strict";function e(){function e(e,i){e.logo="cbc.png",e.live=function(e){i.go("live",{channel:e})}}e.$inject=["$scope","$state"];var i={restrict:"AE",templateUrl:"app/components/topBar/topBar.html",controller:e,controllerAs:"vm",bindToController:!0};return i}angular.module("cbc").directive("topBar",e)}(),function(){"use strict";function e(e,i){}e.$inject=["$scope","$modalInstance"],angular.module("cbc").controller("SignInController",e)}(),function(){"use strict";function e(){function e(){}var i={restrict:"AE",templateUrl:"app/components/seriesSearch/seriesSearch.html",controller:e,controllerAs:"vm",bindToController:!0};return i}angular.module("cbc").directive("seriesSearch",e)}(),function(){"use strict";function e(){function e(){}var i={restrict:"AE",templateUrl:"app/components/schedule/schedule.html",controller:e,controllerAs:"vm",bindToController:!0};return i}angular.module("cbc").directive("schedule",e)}(),function(){"use strict";function e(){function e(){}var i={restrict:"AE",templateUrl:"app/components/newsListSm/newsListSm.html",controller:e,controllerAs:"vm",bindToController:!0};return i}angular.module("cbc").directive("newsListSm",e)}(),function(){"use strict";function e(){function e(){}var i={restrict:"AE",templateUrl:"app/components/newsListLg/newsListLg.html",controller:e,controllerAs:"vm",bindToController:!0};return i}angular.module("cbc").directive("newsListLg",e)}(),function(){"use strict";function e(){function e(){}var i={restrict:"AE",templateUrl:"app/components/newsHeader/newsHeader.html",controller:e,controllerAs:"vm",bindToController:!0};return i}angular.module("cbc").directive("newsHeader",e)}(),function(){"use strict";function e(){function e(e){var i=this;i.relativeDate=e(i.creationDate).fromNow()}e.$inject=["moment"];var i={restrict:"E",templateUrl:"app/components/navbar/navbar.html",scope:{creationDate:"="},controller:e,controllerAs:"vm",bindToController:!0};return i}angular.module("cbc").directive("acmeNavbar",e)}(),function(){"use strict";function e(){function e(e,i){e.logo="cbc.png",e.innerLogo="cbc-drama-logo-color.png",e.open=function(){i.open({templateUrl:"app/components/signIn/signIn.html",controller:"SignInController",size:"lg","class":"login-container"})}}var i={restrict:"AE",templateUrl:"app/components/innerTopBar/innerTopBar.html",controller:e,controllerAs:"vm",bindToController:!0};return i}angular.module("cbc").directive("innerTopBar",e)}(),function(){"use strict";function e(){function e(){}var i={restrict:"AE",templateUrl:"app/components/innerLive/innerLive.html",controller:e,controllerAs:"vm",bindToController:!0};return i}angular.module("cbc").directive("innerLive",e)}(),function(){"use strict";function e(){function e(e){var i=this;e.$on("createPlayer",function(){i.playerOn=!0}),i.closePlayer=function(){i.playerOn=!1}}var i={restrict:"AE",scope:{},templateUrl:"app/components/individualPlayer/individualPlayer.html",controller:e,controllerAs:"vm",bindToController:!0};return i}angular.module("cbc").directive("individualPlayer",e)}(),function(){"use strict";function e(){function e(e,i){var s=this;s.slides=[{image:"http://lorempixel.com/720/480/abstract"},{image:"http://lorempixel.com/720/480/animals"},{image:"http://lorempixel.com/720/480/business"},{image:"http://lorempixel.com/720/480/cats"},{image:"http://lorempixel.com/720/480/city"},{image:"http://lorempixel.com/720/480/nightlife"},{image:"http://lorempixel.com/720/480/fashion"},{image:"http://lorempixel.com/720/480/people/2"}],s.slickConfig={enabled:!0,autoplay:!1,draggable:!1,infinit:!0,method:{},event:{beforeChange:function(e,i,s,a){},afterChange:function(e,i,s,a){}},responsive:[{breakpoint:1024,settings:{slidesToShow:s.slidesNumber-1>1?s.slidesNumber-1:1,slidesToScroll:Math.floor((s.slidesNumber-1)/2)>1?Math.floor((s.slidesNumber-1)/2):1,infinit:!0}},{breakpoint:860,settings:{slidesToShow:s.slidesNumber-2>1?s.slidesNumber-2:1,slidesToScroll:Math.floor((s.slidesNumber-2)/2)>1?Math.floor((s.slidesNumber-2)/2):1,infinit:!0}},{breakpoint:760,settings:{slidesToShow:s.slidesNumber-3>1?s.slidesNumber-3:1,slidesToScroll:Math.floor((s.slidesNumber-3)/2)>1?Math.floor((s.slidesNumber-3)/2):1,infinit:!0}},{breakpoint:400,settings:{slidesToShow:s.slidesNumber-4>1?s.slidesNumber-4:1,slidesToScroll:Math.floor((s.slidesNumber-4)/2)>1?Math.floor((s.slidesNumber-4)/2):1,infinit:!0}}]},s.slideClick=function(i){e.$broadcast("createPlayer")}}var i={restrict:"AE",scope:{slidesNumber:"="},templateUrl:"app/components/hubItemsCarousel/hubItemsCarousel.html",controller:e,controllerAs:"vm",bindToController:!0};return i}angular.module("cbc").directive("hubItemsCarousel",e)}(),function(){"use strict";function e(){function e(){}var i={restrict:"AE",templateUrl:"app/components/hubGrid/hubGrid.html",controller:e,controllerAs:"vm",bindToController:!0};return i}angular.module("cbc").directive("hubGrid",e)}(),function(){"use strict";function e(){function e(){}var i={restrict:"AE",templateUrl:"app/components/hubFooter/hubFooter.html",controller:e,controllerAs:"vm",bindToController:!0};return i}angular.module("cbc").directive("hubFooter",e)}(),function(){"use strict";function e(){function e(e){e.myInterval=3e3,e.slides=[{image:"http://lorempixel.com/1280/720/"},{image:"http://lorempixel.com/1280/720/food"},{image:"http://lorempixel.com/1280/720/sports"},{image:"http://lorempixel.com/1280/720/people"}],e.currentSlide=-1,e.channelsProgrammes=[[{id:"progName",color:"red",description:""},{id:"progName",color:"green",description:""},{id:"progName",color:"blue",description:""},{id:"progName",color:"white",description:""},{id:"progName",color:"black",description:""},{id:"progName",color:"rebeccapurple",description:""},{id:"progName",color:"yellow",description:""}],[{id:"progName",color:"white",description:""},{id:"progName",color:"red",description:""},{id:"progName",color:"yellow",description:""},{id:"progName",color:"brown",description:""},{id:"progName",color:"black",description:""},{id:"progName",color:"green",description:""},{id:"progName",color:"gray",description:""}],[{id:"progName",color:"red",description:""},{id:"progName",color:"green",description:""},{id:"progName",color:"blue",description:""},{id:"progName",color:"white",description:""},{id:"progName",color:"black",description:""},{id:"progName",color:"rebeccapurple",description:""},{id:"progName",color:"yellow",description:""}],[{id:"progName",color:"red",description:""},{id:"progName",color:"green",description:""},{id:"progName",color:"blue",description:""},{id:"progName",color:"white",description:""},{id:"progName",color:"black",description:""},{id:"progName",color:"rebeccapurple",description:""},{id:"progName",color:"yellow",description:""}]],e.channels=[{id:"",logo:"assets/images/cbc-extra-logo-color.png"},{id:"",logo:"assets/images/cbc-sofra-logo-color.png"},{id:"",logo:"assets/images/cbc-drama-logo-color.png"},{id:"",logo:"assets/images/cbc-color.png"}],e.live=[{title:"shabaka w senara"},{title:"shabaka w senara"},{title:"shabaka w senara"},{title:"shabaka w senara"}],e.hoverItem=function(i){e.hovered=!0,e.myInterval=-1,void 0!=i?(e.currentSlide=i,e.slides[i].active=!0):(e.currentSlide=0,e.slides[0].active=!0)},e.leaved=function(){}}var i={restrict:"AE",templateUrl:"app/components/hubCarousel/hubCarousel.html",controller:e,controllerAs:"vm",bindToController:!0};return i}angular.module("cbc").directive("hubCarousel",e)}(),function(){"use strict";function e(){function e(e){}var i={restrict:"AE",templateUrl:"app/components/dramaElasticGrid/dramaElasticGrid.html",controller:e,scope:{},controllerAs:"vm",bindToController:!0};return i}angular.module("cbc").directive("dramaElasticGrid",e)}(),function(){"use strict";function e(){function e(e){e.myInterval=3e3,e.slides=[{image:"http://lorempixel.com/1280/720/"},{image:"http://lorempixel.com/1280/720/food"},{image:"http://lorempixel.com/1280/720/sports"},{image:"http://lorempixel.com/1280/720/people"}]}var i={restrict:"AE",templateUrl:"app/components/dramaCarousel/dramaCarousel.html",controller:e,controllerAs:"vm",bindToController:!0};return i}angular.module("cbc").directive("dramaCarousel",e)}(),function(){"use strict";function e(e){e.debug("runBlock end")}e.$inject=["$log"],angular.module("cbc").run(e)}(),function(){"use strict";function e(e,i){e.state("home",{url:"/",templateUrl:"app/pages/main/main.html",controller:"MainController",controllerAs:"vm"}),e.state("drama",{url:"/drama",templateUrl:"app/pages/drama/drama.html",controller:"DramaController",controllerAs:"vm"}),e.state("live",{url:"/live/:channel",templateUrl:"app/pages/liveStreaming/liveStreaming.html",controller:"LiveStreamingController",controllerAs:"vm"}),e.state("news",{url:"/news",templateUrl:"app/pages/newsViewer/newsViewer.html",controller:"NewsViewerController",controllerAs:"vm"}),e.state("newsList",{url:"/newsList",templateUrl:"app/pages/newsList/newsList.html",controller:"NewsListController",controllerAs:"vm"}),i.otherwise("/")}e.$inject=["$stateProvider","$urlRouterProvider"],angular.module("cbc").config(e)}(),function(){"use strict";angular.module("cbc").constant("malarkey",malarkey).constant("moment",moment)}(),function(){"use strict";function e(e,i){e.debugEnabled(!0),i.allowHtml=!0,i.timeOut=3e3,i.positionClass="toast-top-right",i.preventDuplicates=!0,i.progressBar=!0}e.$inject=["$logProvider","toastrConfig"],angular.module("cbc").config(e)}(),angular.module("cbc").run(["$templateCache",function(e){e.put("app/components/dramaElasticGrid/dramaElasticGrid.html",""),e.put("app/components/hubFooter/hubFooter.html",'<div class="hubFooter-main-container"><div class="hubFooter-container"><div class="hubFooter-right"><div class="extra-info">معلومات إضافية</div><div class="right-list"><div>عن مجموعة سي بي سي</div><div>سياسة الإستخدام</div><div>سياسة الخصوصية</div></div></div><div class="hubFooter-middle-right"><div class="channels">القنوات</div><div class="channels-list"><div class="cbc-logo" style="background-image: url(\'assets/images/cbc.png\')"></div><div class="drama-logo" style="background-image: url(\'assets/images/cbc-drama-logo.png\')"></div><div class="sofra-logo" style="background-image: url(\'assets/images/cbc-sofra-logo.png\')"></div><div class="extra-logo" style="background-image: url(\'assets/images/cbc-extra-logo.png\')"></div></div></div><div class="hubFooter-middle-left"><div class="stay-conected">ابق علي اتصال</div><div class="stay-conected-list"><div class="fb">Like us on Facebook<span class="footer-social-logo fb-logo"></span></div><div class="twitter">Follow us on twitter<span class="footer-social-logo twitter-logo"></span></div><div class="plus">Add us on Google Plus<span class="footer-social-logo plus-logo"></span></div></div></div><div class="hubFooter-left"><div class="stay-conected">معلومات الإتصال</div><div class="left-list"><div>للإعلان معنا</div><div>وظائف</div><div>اتصل بنا</div></div></div><div class="footer-footer"><div>جميع الحقوق محفوظة لسي بي سي احدى شركات مجموعة المستقبل.</div></div></div></div>'),e.put("app/components/dramaCarousel/dramaCarousel.html",'<div class="drama-carousel-container"><div class="drama-carousel"><carousel interval="myInterval"><slide ng-repeat="slide in slides" active="slide.active" class="cbc-hub-carousel-element"><div style="background-image:url({{slide.image}}); width: 100%; height: 100%;"></div></slide></carousel></div><div class="right"></div><div class="left"></div></div>'),e.put("app/components/hubCarousel/hubCarousel.html",'<div class="hub-carousel-container"><div class="hub-carousel"><carousel interval="myInterval"><slide ng-repeat="slide in slides track by $index" active="slide.active" class="cbc-hub-carousel-element"><div style="background-image:url({{slide.image}})" class="div-with-bg"></div><div class="descrip" ng-class="{\'animate-desc\' : currentSlide == $index}"><img class="pg-logo" src="/assets/images/sahebatElSa3ada.jpg"></div><div class="carousel-caption"></div></slide></carousel></div><div class="live-now-container"><div class="live-now"><div class="logos"><div class="ind" style="right:0%" ng-class="{\'full-height\': hovered}"></div><div class="live-title"></div><span ng-repeat="channel in channels track by $index"><div class="ind" style="{{ \'right: \' + (($index * 20) + 10) + \'%\'}}" ng-class="{\'selected-ind\': currentSlide == $index, \'full-height\': currentSlide != undefined && hovered}"></div><div class="hub-carousel-strip-strip" ng-class="{\'hub-carousel-strip-container-selected\': (currentSlide == $index && hovered)}" ng-mouseleave="leaved()"><div class="hub-carousel-strip-container"><div class="hub-carousel-strip-element" ng-repeat="prog in channelsProgrammes[$index]"><div class="desc-hover">asdsadad</div><div class="hub-carousel-strip-element-bg" style="background-color: {{prog.color}}"></div></div></div></div><div class="live-now-cbc-logo" style="background-image: url({{channel.logo}})" ng-mouseover="hoverItem($index)"></div></span><div class="ind" style="right:90%" ng-class="{\'full-height\': currentSlide != undefined && hovered}"></div><div class="live-title"></div></div><div class="live"><div class="live-title">يعرض الأن</div><div ng-repeat="progName in live"><div class="prog-name">{{progName.title}}</div></div><div class="live-title"></div></div></div></div></div>'),e.put("app/components/hubGrid/hubGrid.html",'<div class="hub-grid-container-all"><div class="hub-grid-container"><md-grid-list md-cols-xs="1" md-cols-gt-xs="2" md-cols-sm="2" md-cols-md="4" md-cols-gt-md="4" md-row-height="2:1" md-gutter="12px" md-gutter-gt-sm="8px"><md-grid-tile class="gray" md-rowspan="2" md-colspan="2" md-colspan-xs="1" md-rowspan-xs="1"><md-grid-tile-footer><h3>#1: (3r x 2c)</h3></md-grid-tile-footer></md-grid-tile><md-grid-tile class="green"><md-grid-tile-footer><h3>#2: (1r x 1c)</h3></md-grid-tile-footer></md-grid-tile><md-grid-tile class="yellow"><md-grid-tile-footer><h3>#3: (1r x 1c)</h3></md-grid-tile-footer></md-grid-tile><md-grid-tile class="red"><md-grid-tile-footer><h3>#5: (1r x 1c)</h3></md-grid-tile-footer></md-grid-tile><md-grid-tile class="red"><md-grid-tile-footer><h3>#5: (1r x 1c)</h3></md-grid-tile-footer></md-grid-tile></md-grid-list></div></div>'),e.put("app/components/hubItemsCarousel/hubItemsCarousel.html",'<div class="items-carousel-component-all"><div class="items-carousel-component-container"><slick settings="vm.slickConfig" infinite="true" slides-to-show="{{vm.slidesNumber}}" slides-to-scroll="3" class="slick-element"><div ng-repeat="slide in vm.slides"><div id="bt-menu-trigger-out" class="slick-item bt-menu-trigger-out" ng-click="vm.slideClick()" style="background-image:url({{slide.image}})"><footer class="footer"></footer></div></div></slick></div></div>'),e.put("app/components/innerLive/innerLive.html",'<div class="inner-live"><div class="icon-cal-container"><div class="icon-cal"></div></div><div class="prog-div prog-now"><span class="time">الأن</span><div class="title">مع سبق الاصرار</div></div><div class="prog-div prog-next"><span class="time">PM 6:00</span><div class="title">موعد مع الوحوش</div></div><div class="prog-div prog-later"><span class="time">PM 6:00</span><div class="title">موعد مع الوحوش</div></div></div>'),e.put("app/components/individualPlayer/individualPlayer.html",'<nav id="bt-menu" class="bt-menu" ng-class="{\'bt-menu-open\': vm.playerOn}"><a class="bt-menu-trigger" ng-click="vm.closePlayer()"><span>Menu</span></a><ul class="bt-menu-top"><li><a href="#" class="bt-icon-alt icon-step-backward">Start</a></li><li><a href="#" class="bt-icon-alt icon-backward">Fast Backward</a></li><li><a href="#" class="bt-icon-alt icon-pause">Pause</a></li><li><a href="#" class="bt-icon-alt icon-forward">Fast Forward</a></li><li><a href="#" class="bt-icon-alt icon-step-forward">Next</a></li></ul><ul class="bt-menu-bottom"><li></li><li></li><li></li><li></li><li></li><li></li></ul></nav>'),e.put("app/components/newsListSm/newsListSm.html",'<ul class="list-container"><h2 class="h2">Top stories</h2><article class="article"><div><div><a href="/2016/01/18/tennis/australian-open-match-fixing-tennis/index.html"><img src="http://i2.cdn.turner.com/cnnnext/dam/assets/151121094825-djokovic-focused-medium-tease.jpg"></a></div><div><h3><a href="/2016/01/18/tennis/australian-open-match-fixing-tennis/index.html"><span class="span">Tennis racket: I was offered $200K to lose, Djokovic says</span></a></h3></div></div></article><article class="article"><div><div><h3><a href="/2016/01/18/tennis/australian-open-novak-djokovic-serena-williams/index.html"><span class="span">Ex-No. 1 crashes out of Open on first day</span></a></h3></div></div></article><article class="article"><div><div><h3><a href="/2016/01/18/tennis/australian-open-novak-djokovic-serena-williams/index.html"><span class="span">Ex-No. 1 crashes out of Open on first day</span></a></h3></div></div></article><article class="article"><div><div><h3><a href="/2016/01/18/tennis/australian-open-novak-djokovic-serena-williams/index.html"><span class="span">Ex-No. 1 crashes out of Open on first day</span></a></h3></div></div></article><article class="article"><div><div><h3><a href="/2016/01/18/tennis/australian-open-novak-djokovic-serena-williams/index.html"><span class="span">Ex-No. 1 crashes out of Open on first day</span></a></h3></div></div></article></ul>'),e.put("app/components/schedule/schedule.html",'<table class="table table-striped"><thead></thead><tbody><tr><td>موعد مع الوحوش</td></tr><tr><td>مع سبق الأصرار</td></tr><tr><td>موعد مع الوحوش</td></tr><tr><td>مع سبق الأصرار</td></tr><tr><td>موعد مع الوحوش</td></tr><tr><td>مع سبق الأصرار</td></tr></tbody></table>'),e.put("app/components/newsHeader/newsHeader.html",'<div class="news-header-container"><h3 class="header">سيناشلن شسنتلي ن لنتشسلين نالسني</h3><div class="graphic"><div class="left-gp"></div><div class="main-gp"></div><div class="right-gp"></div></div></div>'),e.put("app/components/seriesSearch/seriesSearch.html",'<div class="series-search-container"><div class="series-title">المسلسلات</div><div class="search-box"><span><button type="submit"><span class="glyphicon glyphicon-search"></span></button></span> <input type="text" placeholder="بحث"></div></div>'),e.put("app/components/newsListLg/newsListLg.html",'<ul class="list-container-lg"><h2 class="h2">Top stories</h2><article class="article"><div><div><a href="/2016/01/18/tennis/australian-open-match-fixing-tennis/index.html"><img src="http://i2.cdn.turner.com/cnnnext/dam/assets/150811230203-chinas-abandoned-children-pkg-ripley-ns-00023125-large-tease.jpg"></a></div><div class="title-container"><h3><a href="/2016/01/18/tennis/australian-open-match-fixing-tennis/index.html"><span class="span">Tennis racket: I was offered $200K to lose, Djokovic says</span></a></h3></div></div></article><article class="article"><div><div><img class="small-image" src="http://i2.cdn.turner.com/cnnnext/dam/assets/150811080024-03-chinese-orphans-small-tease.jpg"><h3><a href="/2016/01/18/tennis/australian-open-novak-djokovic-serena-williams/index.html"><span class="span">Ex-No. 1 crashes out of Open on first day</span></a></h3></div></div></article><article class="article"><div><div><img class="small-image" src="http://i2.cdn.turner.com/cnnnext/dam/assets/150811080024-03-chinese-orphans-small-tease.jpg"><h3><a href="/2016/01/18/tennis/australian-open-novak-djokovic-serena-williams/index.html"><span class="span">Ex-No. 1 crashes out of Open on first day</span></a></h3></div></div></article><article class="article"><div><div><img class="small-image" src="http://i2.cdn.turner.com/cnnnext/dam/assets/150811080024-03-chinese-orphans-small-tease.jpg"><h3><a href="/2016/01/18/tennis/australian-open-novak-djokovic-serena-williams/index.html"><span class="span">Ex-No. 1 crashes out of Open on first day</span></a></h3></div></div></article><article class="article"><div><div><img class="small-image" src="http://i2.cdn.turner.com/cnnnext/dam/assets/150811080024-03-chinese-orphans-small-tease.jpg"><h3><a href="/2016/01/18/tennis/australian-open-novak-djokovic-serena-williams/index.html"><span class="span">Ex-No. 1 crashes out of Open on first day</span></a></h3></div></div></article></ul>'),e.put("app/components/topBar/topBar.html",'<div class="my-topbar"><div class="cbc-topbar-logo" style="background-image:url(\'assets/images/{{logo}}\')"></div><div class="cbc-topbar-list"><div class="cbc-topbar-title">مواعيد البرامج</div><div class="cbc-topbar-title">ترددات القنوات</div><div class="cbc-topbar-title-live"><div class="live-btn"><div class="cbc-live-title">بث مباشر</div><div class="cbc-topbar-live-select"><img src="assets/images/cbc-extra-logo.png" ng-click="live(\'extra\')"> <img src="assets/images/cbc-sofra-logo.png" ng-click="live(\'sofra\')"> <img src="assets/images/cbc-drama-logo.png" ng-click="live(\'drama\')"> <img src="assets/images/cbc.png" ng-click="live(\'cbc\')"></div></div></div></div></div>'),e.put("app/components/signIn/signIn.html",'<div class="modal-body sign-in"><div class="right"><div class="dummy-usr"></div><section class="login-section"><div class="section-part"><label class="user-name-lbl">البريد الإلكتروني</label> <input class="user-name-input" type="email"></div><div class="section-part"><label class="password-lbl">كلمة المرور</label> <input class="password-input" type="password"></div><div><button class="btn btn-primary">دخول مستخدم</button></div></section></div><div class="left"><label>تسجيل بواسطة</label><div class="social-container"><span class="login-FB"></span> <span class="login-TW"></span> <span class="login-GP"></span></div></div></div>'),e.put("app/components/navbar/navbar.html",'<nav class="navbar navbar-static-top navbar-inverse"><div class="container-fluid"><div class="navbar-header"><a class="navbar-brand" href="https://github.com/Swiip/generator-gulp-angular"><span class="glyphicon glyphicon-home"></span> Gulp Angular</a></div><div class="collapse navbar-collapse" id="bs-example-navbar-collapse-6"><ul class="nav navbar-nav"><li class="active"><a ng-href="#">Home</a></li><li><a ng-href="#">About</a></li><li><a ng-href="#">Contact</a></li></ul><ul class="nav navbar-nav navbar-right acme-navbar-text"><li>Application was created {{ vm.relativeDate }}.</li></ul></div></div></nav>'),e.put("app/components/innerTopBar/innerTopBar.html",'<div class="my-topbar inner-toolbar"><div class="cbc-topbar-logo" style="background-image:url(\'../assets/images/{{logo}}\')"></div><div class="cbc-inner-topbar-logo" ng-click="open()" style="background-image:url(\'../assets/images/{{innerLogo}}\')"></div></div>'),e.put("app/pages/drama/drama.html",'<div class="drama-page"><div class="ads"><div class="top"></div><div class="right"></div><div class="left"></div></div><inner-top-bar></inner-top-bar><div style="width: 768px; margin: auto;padding-top: 180px;"><drama-carousel></drama-carousel><inner-live></inner-live><div class="after-live"><div class="schedule-container"><schedule></schedule></div><div class="most-watched"><div class="title">الأكثر مشاهدة</div><hub-items-carousel slides-number="2"></hub-items-carousel><div class="add">AD</div></div></div><series-search></series-search><drama-elastic-grid></drama-elastic-grid></div></div><hub-footer></hub-footer>'),e.put("app/pages/liveStreaming/liveStreaming.html",'<div class="live-streaming"><inner-top-bar></inner-top-bar><div style="background-color: green; width: 10%; height: 360px; float: right; margin-top: 77px;"></div><div class="channels-list"><div class="channels"><div style="background-image: url(\'/assets/images/cbc.png\')"></div><div style="background-image: url(\'/assets/images/cbc-drama-logo.png\')"></div><div style="background-image: url(\'/assets/images/cbc-sofra-logo.png\')"></div><div style="background-image: url(\'/assets/images/cbc-extra-logo.png\')"></div></div></div><iframe width="40%" height="360" ng-src="{{link}}" frameborder="0" allowfullscreen="" style="float: right; margin-top: 77px"></iframe><div style="width: 20%; padding-right: 10px; padding-left: 10px; box-sizing: border-box;margin-top: 77px; float: right" news-list-lg=""></div><div style="background-color: green; width: 10%; height: 360px; float: right; margin-top: 77px;"></div><div class="bottom-carousel"><div class="ad"></div><hub-items-carousel></hub-items-carousel></div><hub-footer></hub-footer></div>'),e.put("app/pages/newsList/newsList.html","<div><inner-top-bar></inner-top-bar><news-list-sm></news-list-sm><news-list-lg></news-list-lg></div>"),e.put("app/pages/newsViewer/newsViewer.html",'<inner-top-bar></inner-top-bar><div class="news-viewr-container"><div class="left"><div class="back"></div><div class="next">Next</div></div><div class="middle"><news-header></news-header><div style="margin-top: 20px; direction: rtl">شسيتاشسا اتنشاسيتن ا شتس اي شسنيتا شتسيا شستنيانس شيناشس يناشسين اشسا اتنشاسيتن ا شتس اي شسنيتا شتسيا شستنيانس شيناشس يناشسين اشسا اتنشاسيتن ا شتس اي شسنيتا شتسيا شستنيانس شيناشس يناشسين اشسا اتنشاسيتن ا شتس اي شسنيتا شتسيا شستنيانس شيناشس يناشسين اشسا اتنشاسيتن ا شتس اي شسنيتا شتسيا شستنيانس شيناشس يناشسين اشسا اتنشاسيتن ا شتس اي شسنيتا شتسيا شستنيانس شيناشس يناشسين اشسا اتنشاسيتن ا شتس اي شسنيتا شتسيا شستنيانس شيناشس يناشسين اشسا اتنشاسيتن ا شتس اي شسنيتا شتسيا شستنيانس شيناشس يناشسين</div></div><div class="right"><div class="prev">Previous</div></div></div>'),e.put("app/pages/main/main.html",'<div><top-bar></top-bar><hub-carousel style="height:100%"></hub-carousel><hub-grid></hub-grid><hub-items-carousel slides-number="5"></hub-items-carousel><hub-items-carousel slides-number="5"></hub-items-carousel><hub-footer></hub-footer><individual-player></individual-player></div>')}]);
//# sourceMappingURL=../maps/scripts/app-1fcde8e5de.js.map