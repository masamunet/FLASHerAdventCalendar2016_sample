(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.ssMetadata = [
		{name:"sample_atlas_", frames: [[1650,2365,320,321],[281,2805,522,111],[0,2805,279,326],[0,2002,1648,801],[1235,2805,123,140],[0,0,2000,2000],[1650,2002,361,361],[805,2805,428,76],[1650,2688,284,330]]}
];


// symbols:



(lib.about_icon = function() {
	this.spriteSheet = ss["sample_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.about_txt = function() {
	this.spriteSheet = ss["sample_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.astronaut_about = function() {
	this.spriteSheet = ss["sample_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.astronaut_contact = function() {
	this.spriteSheet = ss["sample_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.astronaut_top = function() {
	this.spriteSheet = ss["sample_atlas_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.bg = function() {
	this.spriteSheet = ss["sample_atlas_"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.contact_icon = function() {
	this.spriteSheet = ss["sample_atlas_"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.contact_txt = function() {
	this.spriteSheet = ss["sample_atlas_"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.top_icontxt = function() {
	this.spriteSheet = ss["sample_atlas_"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.top_icontxt_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー 1
	this.instance = new lib.top_icontxt();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,284,330);


(lib.man1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー 1
	this.instance = new lib.astronaut_about();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.man1, new cjs.Rectangle(0,0,279,326), null);


(lib.contact_txt_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー 1
	this.instance = new lib.contact_txt();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,428,76);


(lib.contact_icon_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー 1
	this.instance = new lib.contact_icon();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,361,361);


(lib.bg_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー 1
	this.instance = new lib.bg();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,2000,2000);


(lib.astronaut_top_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー 1
	this.instance = new lib.astronaut_top();
	this.instance.parent = this;
	this.instance.setTransform(-62,-70);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-62,-70,123,140);


(lib.astronaut_contact_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー 1
	this.instance = new lib.astronaut_contact();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1648,801);


(lib.about_txt_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー 1
	this.instance = new lib.about_txt();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,522,111);


(lib.about_icon_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー 1
	this.instance = new lib.about_icon();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,320,321);


(lib.man0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー 1
	this.instance = new lib.astronaut_top_1("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(-63.3,-73.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.man0, new cjs.Rectangle(-125.3,-143.4,123,140), null);


(lib.astronaut_about_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー 1
	this.instance = new lib.man1();
	this.instance.parent = this;
	this.instance.setTransform(-32.5,0,1,1,0,0,0,139.5,163);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({x:-31.4,y:-0.9},0).wait(1).to({x:-30.3,y:-1.8},0).wait(1).to({x:-29.3,y:-2.8},0).wait(1).to({x:-28.3,y:-3.7},0).wait(1).to({x:-27.3,y:-4.7},0).wait(1).to({x:-26.4,y:-5.6},0).wait(1).to({x:-25.6,y:-6.5},0).wait(1).to({x:-24.7,y:-7.5},0).wait(1).to({x:-23.9,y:-8.4},0).wait(1).to({x:-23.1,y:-9.4},0).wait(1).to({x:-22.3,y:-10.3},0).wait(1).to({x:-21.6,y:-11.2},0).wait(1).to({x:-20.9,y:-12.2},0).wait(1).to({x:-20.2,y:-13.1},0).wait(1).to({x:-19.6,y:-14.1},0).wait(1).to({x:-19,y:-15},0).wait(1).to({x:-18.4,y:-15.9},0).wait(1).to({x:-17.8,y:-16.9},0).wait(1).to({x:-17.2,y:-17.8},0).wait(1).to({x:-16.7,y:-18.8},0).wait(1).to({x:-16.2,y:-19.7},0).wait(1).to({x:-15.7,y:-20.7},0).wait(1).to({x:-15.2,y:-21.6},0).wait(1).to({x:-14.7,y:-22.5},0).wait(1).to({x:-14.3,y:-23.5},0).wait(1).to({x:-13.8,y:-24.4},0).wait(1).to({x:-13.4,y:-25.4},0).wait(1).to({x:-13,y:-26.3},0).wait(1).to({x:-12.6,y:-27.2},0).wait(1).to({x:-12.2,y:-28.2},0).wait(1).to({x:-11.9,y:-29.1},0).wait(1).to({x:-11.5,y:-30.1},0).wait(1).to({x:-11.2,y:-31},0).wait(1).to({x:-10.8,y:-31.9},0).wait(1).to({x:-10.5,y:-32.9},0).wait(1).to({x:-10.2,y:-33.8},0).wait(1).to({x:-9.9,y:-34.8},0).wait(1).to({x:-9.6,y:-35.7},0).wait(1).to({x:-9.3,y:-36.6},0).wait(1).to({x:-9,y:-37.6},0).wait(1).to({x:-8.7,y:-38.5},0).wait(1).to({x:-8.5,y:-39.5},0).wait(1).to({x:-8.2,y:-40.4},0).wait(1).to({x:-8,y:-41.4},0).wait(1).to({x:-7.7,y:-42.3},0).wait(1).to({x:-7.5,y:-43.2},0).wait(1).to({x:-7.2,y:-44.2},0).wait(1).to({x:-7,y:-45.1},0).wait(1).to({x:-6.8,y:-46.1},0).wait(1).to({x:-6.5,y:-47},0).wait(1).to({x:-6.3,y:-47.9},0).wait(1).to({x:-6.1,y:-48.9},0).wait(1).to({x:-5.9,y:-49.8},0).wait(1).to({x:-5.7,y:-50.8},0).wait(1).to({x:-5.5,y:-51.7},0).wait(1).to({x:-5.3,y:-52.6},0).wait(1).to({x:-5.1,y:-53.6},0).wait(1).to({x:-4.9,y:-54.5},0).wait(1).to({x:-4.7,y:-55.5},0).wait(1).to({x:-4.5,y:-56.4},0).wait(1).to({x:-4.3,y:-57.4},0).wait(1).to({x:-4.1,y:-58.3},0).wait(1).to({x:-3.9,y:-59.2},0).wait(1).to({x:-3.7,y:-60.2},0).wait(1).to({x:-3.5,y:-61.1},0).wait(1).to({x:-3.3,y:-62.1},0).wait(1).to({x:-3.1,y:-63},0).wait(1).to({x:-2.9,y:-63.9},0).wait(1).to({x:-2.7,y:-64.9},0).wait(1).to({x:-2.5,y:-65.8},0).wait(1).to({x:-2.3,y:-66.8},0).wait(1).to({x:-2.1,y:-67.7},0).wait(1).to({x:-2,y:-68.6},0).wait(1).to({x:-1.8,y:-69.6},0).wait(1).to({x:-1.6,y:-70.5},0).wait(1).to({x:-1.4,y:-71.5},0).wait(1).to({x:-1.2,y:-72.4},0).wait(1).to({x:-1,y:-73.3},0).wait(1).to({x:-0.8,y:-74.3},0).wait(1).to({x:-0.6,y:-75.2},0).wait(1).to({x:-0.5,y:-76.2},0).wait(1).to({x:-0.3,y:-77.1},0).wait(1).to({x:-0.1,y:-78.1},0).wait(1).to({x:0.1,y:-79},0).wait(1).to({x:0.3,y:-79.9},0).wait(1).to({x:0.5,y:-80.9},0).wait(1).to({x:0.7,y:-81.8},0).wait(1).to({y:-82.8},0).wait(1).to({x:0.5,y:-83.7},0).wait(1).to({x:0.3,y:-82.8},0).wait(1).to({x:0.1,y:-81.9},0).wait(1).to({x:-0.1,y:-81},0).wait(1).to({x:-0.2,y:-80.1},0).wait(1).to({x:-0.4,y:-79.1},0).wait(1).to({x:-0.6,y:-78.2},0).wait(1).to({x:-0.8,y:-77.3},0).wait(1).to({x:-1,y:-76.4},0).wait(1).to({x:-1.1,y:-75.5},0).wait(1).to({x:-1.3,y:-74.6},0).wait(1).to({x:-1.5,y:-73.7},0).wait(1).to({x:-1.7,y:-72.8},0).wait(1).to({x:-1.9,y:-71.9},0).wait(1).to({x:-2,y:-71},0).wait(1).to({x:-2.2,y:-70},0).wait(1).to({x:-2.4,y:-69.1},0).wait(1).to({x:-2.6,y:-68.2},0).wait(1).to({x:-2.8,y:-67.3},0).wait(1).to({x:-3,y:-66.4},0).wait(1).to({x:-3.1,y:-65.5},0).wait(1).to({x:-3.3,y:-64.6},0).wait(1).to({x:-3.5,y:-63.7},0).wait(1).to({x:-3.7,y:-62.8},0).wait(1).to({x:-3.9,y:-61.9},0).wait(1).to({x:-4.1,y:-60.9},0).wait(1).to({x:-4.2,y:-60},0).wait(1).to({x:-4.4,y:-59.1},0).wait(1).to({x:-4.6,y:-58.2},0).wait(1).to({x:-4.8,y:-57.3},0).wait(1).to({x:-5,y:-56.4},0).wait(1).to({x:-5.2,y:-55.5},0).wait(1).to({x:-5.4,y:-54.6},0).wait(1).to({x:-5.6,y:-53.7},0).wait(1).to({x:-5.8,y:-52.7},0).wait(1).to({x:-5.9,y:-51.8},0).wait(1).to({x:-6.1,y:-50.9},0).wait(1).to({x:-6.3,y:-50},0).wait(1).to({x:-6.6,y:-49.1},0).wait(1).to({x:-6.8,y:-48.2},0).wait(1).to({x:-7,y:-47.3},0).wait(1).to({x:-7.2,y:-46.4},0).wait(1).to({x:-7.4,y:-45.5},0).wait(1).to({x:-7.6,y:-44.6},0).wait(1).to({x:-7.8,y:-43.6},0).wait(1).to({x:-8.1,y:-42.7},0).wait(1).to({x:-8.3,y:-41.8},0).wait(1).to({x:-8.5,y:-40.9},0).wait(1).to({x:-8.8,y:-40},0).wait(1).to({x:-9,y:-39.1},0).wait(1).to({x:-9.3,y:-38.2},0).wait(1).to({x:-9.5,y:-37.3},0).wait(1).to({x:-9.8,y:-36.4},0).wait(1).to({x:-10.1,y:-35.5},0).wait(1).to({x:-10.3,y:-34.5},0).wait(1).to({x:-10.6,y:-33.6},0).wait(1).to({x:-10.9,y:-32.7},0).wait(1).to({x:-11.2,y:-31.8},0).wait(1).to({x:-11.5,y:-30.9},0).wait(1).to({x:-11.9,y:-30},0).wait(1).to({x:-12.2,y:-29.1},0).wait(1).to({x:-12.5,y:-28.2},0).wait(1).to({x:-12.9,y:-27.3},0).wait(1).to({x:-13.3,y:-26.3},0).wait(1).to({x:-13.6,y:-25.4},0).wait(1).to({x:-14,y:-24.5},0).wait(1).to({x:-14.4,y:-23.6},0).wait(1).to({x:-14.9,y:-22.7},0).wait(1).to({x:-15.3,y:-21.8},0).wait(1).to({x:-15.7,y:-20.9},0).wait(1).to({x:-16.2,y:-20},0).wait(1).to({x:-16.7,y:-19.1},0).wait(1).to({x:-17.2,y:-18.2},0).wait(1).to({x:-17.7,y:-17.2},0).wait(1).to({x:-18.3,y:-16.3},0).wait(1).to({x:-18.8,y:-15.4},0).wait(1).to({x:-19.4,y:-14.5},0).wait(1).to({x:-20,y:-13.6},0).wait(1).to({x:-20.6,y:-12.7},0).wait(1).to({x:-21.3,y:-11.8},0).wait(1).to({x:-22,y:-10.9},0).wait(1).to({x:-22.7,y:-10},0).wait(1).to({x:-23.4,y:-9.1},0).wait(1).to({x:-24.2,y:-8.1},0).wait(1).to({x:-25,y:-7.2},0).wait(1).to({x:-25.8,y:-6.3},0).wait(1).to({x:-26.6,y:-5.4},0).wait(1).to({x:-27.5,y:-4.5},0).wait(1).to({x:-28.4,y:-3.6},0).wait(1).to({x:-29.4,y:-2.7},0).wait(1).to({x:-30.4,y:-1.8},0).wait(1).to({x:-31.4,y:-0.9},0).wait(1).to({x:-32.5,y:0},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-172,-163,279,326);


(lib.man0_ani = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー 1
	this.instance = new lib.man0();
	this.instance.parent = this;
	this.instance.setTransform(-17.5,-3.4,1,1,0,0,0,61.5,70);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:-63.8,regY:-73.4,rotation:0.6,x:-141.3,y:-148},0).wait(1).to({rotation:1.2,x:-139.8,y:-149.4},0).wait(1).to({rotation:1.8,x:-138.2,y:-150.6},0).wait(1).to({rotation:2.4,x:-136.7,y:-151.9},0).wait(1).to({rotation:3,x:-135.1,y:-153.1},0).wait(1).to({rotation:3.6,x:-133.5,y:-154.3},0).wait(1).to({rotation:4.2,x:-131.9,y:-155.6},0).wait(1).to({rotation:4.8,x:-130.4,y:-156.8},0).wait(1).to({rotation:5.4,x:-128.7,y:-157.9},0).wait(1).to({rotation:6,x:-127.1,y:-159.1},0).wait(1).to({rotation:6.6,x:-125.5,y:-160.2},0).wait(1).to({rotation:7.2,x:-123.8,y:-161.3},0).wait(1).to({rotation:7.8,x:-122.1,y:-162.4},0).wait(1).to({rotation:8.4,x:-120.4,y:-163.5},0).wait(1).to({rotation:9,x:-118.8,y:-164.6},0).wait(1).to({rotation:9.6,x:-117.1,y:-165.6},0).wait(1).to({rotation:10.2,x:-115.4,y:-166.7},0).wait(1).to({rotation:10.8,x:-113.6,y:-167.7},0).wait(1).to({rotation:11.4,x:-111.9,y:-168.7},0).wait(1).to({rotation:12,x:-110.2,y:-169.7},0).wait(1).to({rotation:12.6,x:-108.4,y:-170.7},0).wait(1).to({rotation:13.2,x:-106.7,y:-171.6},0).wait(1).to({rotation:13.8,x:-104.9,y:-172.5},0).wait(1).to({rotation:14.4,x:-103.1,y:-173.5},0).wait(1).to({rotation:15,x:-101.3,y:-174.4},0).wait(1).to({rotation:15.6,x:-99.6,y:-175.2},0).wait(1).to({rotation:16.2,x:-97.7,y:-176.1},0).wait(1).to({rotation:16.8,x:-95.9,y:-176.9},0).wait(1).to({rotation:17.4,x:-94.1,y:-177.7},0).wait(1).to({rotation:18,x:-92.3,y:-178.5},0).wait(1).to({rotation:18.6,x:-90.4,y:-179.3},0).wait(1).to({rotation:19.2,x:-88.6,y:-180},0).wait(1).to({rotation:19.8,x:-86.7,y:-180.8},0).wait(1).to({rotation:20.4,x:-84.8,y:-181.5},0).wait(1).to({rotation:21,x:-83,y:-182.2},0).wait(1).to({rotation:21.6,x:-81.1,y:-182.8},0).wait(1).to({rotation:22.2,x:-79.2,y:-183.5},0).wait(1).to({rotation:22.8,x:-77.3,y:-184.1},0).wait(1).to({rotation:23.4,x:-75.4,y:-184.8},0).wait(1).to({rotation:24,x:-73.5,y:-185.4},0).wait(1).to({rotation:24.6,x:-71.6,y:-185.9},0).wait(1).to({rotation:25.2,x:-69.7,y:-186.5},0).wait(1).to({rotation:25.8,x:-67.7,y:-187},0).wait(1).to({rotation:26.4,x:-65.8,y:-187.5},0).wait(1).to({rotation:27,x:-63.9,y:-188},0).wait(1).to({rotation:27.6,x:-61.9,y:-188.5},0).wait(1).to({rotation:28.2,x:-60,y:-189},0).wait(1).to({rotation:28.8,x:-58.1,y:-189.4},0).wait(1).to({rotation:29.4,x:-56.1,y:-189.8},0).wait(1).to({rotation:30.1,x:-54.1,y:-190.2},0).wait(1).to({rotation:30.7,x:-52.2,y:-190.6},0).wait(1).to({rotation:31.3,x:-50.2,y:-190.9},0).wait(1).to({rotation:31.9,x:-48.2,y:-191.3},0).wait(1).to({rotation:32.5,x:-46.3,y:-191.6},0).wait(1).to({rotation:33.1,x:-44.3,y:-191.9},0).wait(1).to({rotation:33.7,x:-42.3,y:-192.2},0).wait(1).to({rotation:34.3,x:-40.4,y:-192.4},0).wait(1).to({rotation:34.9,x:-38.4,y:-192.6},0).wait(1).to({rotation:35.5,x:-36.3,y:-192.8},0).wait(1).to({rotation:36.1,x:-34.4,y:-193},0).wait(1).to({rotation:36.7,x:-32.4,y:-193.2},0).wait(1).to({rotation:37.3,x:-30.4,y:-193.3},0).wait(1).to({rotation:37.9,x:-28.4,y:-193.5},0).wait(1).to({rotation:38.5,x:-26.4,y:-193.6},0).wait(1).to({rotation:39.1,x:-24.4,y:-193.7},0).wait(1).to({rotation:39.7,x:-22.4},0).wait(1).to({rotation:40.3,x:-20.4,y:-193.8},0).wait(1).to({rotation:40.9,x:-18.4},0).wait(1).to({rotation:41.5,x:-16.4},0).wait(1).to({rotation:42.1,x:-14.4},0).wait(1).to({rotation:42.7,x:-12.4,y:-193.7},0).wait(1).to({rotation:43.3,x:-10.4},0).wait(1).to({rotation:43.9,x:-8.5,y:-193.5},0).wait(1).to({rotation:44.5,x:-6.5},0).wait(1).to({rotation:45.1,x:-4.5,y:-193.3},0).wait(1).to({rotation:45.7,x:-2.5,y:-193.2},0).wait(1).to({rotation:46.3,x:-0.5,y:-193},0).wait(1).to({rotation:46.9,x:1.5,y:-192.8},0).wait(1).to({rotation:47.5,x:3.5,y:-192.6},0).wait(1).to({rotation:48.1,x:5.5,y:-192.4},0).wait(1).to({rotation:48.7,x:7.5,y:-192.1},0).wait(1).to({rotation:49.3,x:9.5,y:-191.9},0).wait(1).to({rotation:49.9,x:11.5,y:-191.6},0).wait(1).to({rotation:50.5,x:13.4,y:-191.2},0).wait(1).to({rotation:51.1,x:15.3,y:-190.9},0).wait(1).to({rotation:51.7,x:17.3,y:-190.6},0).wait(1).to({rotation:52.3,x:19.2,y:-190.2},0).wait(1).to({rotation:52.9,x:21.2,y:-189.8},0).wait(1).to({rotation:53.5,x:23.2,y:-189.4},0).wait(1).to({rotation:54.1,x:25.1,y:-188.9},0).wait(1).to({rotation:54.7,x:27.1,y:-188.4},0).wait(1).to({rotation:55.3,x:29,y:-188},0).wait(1).to({rotation:55.9,x:30.9,y:-187.5},0).wait(1).to({rotation:56.5,x:32.9,y:-187},0).wait(1).to({rotation:57.1,x:34.8,y:-186.4},0).wait(1).to({rotation:57.7,x:36.7,y:-185.9},0).wait(1).to({rotation:58.3,x:38.6,y:-185.3},0).wait(1).to({rotation:58.9,x:40.5,y:-184.7},0).wait(1).to({rotation:59.5,x:42.4,y:-184.1},0).wait(1).to({rotation:60.1,x:44.3,y:-183.5},0).wait(1).to({rotation:60.7,x:46.2,y:-182.8},0).wait(1).to({rotation:61.3,x:48.1,y:-182.1},0).wait(1).to({rotation:61.9,x:49.9,y:-181.4},0).wait(1).to({rotation:62.5,x:51.8,y:-180.7},0).wait(1).to({rotation:63.1,x:53.7,y:-180},0).wait(1).to({rotation:63.7,x:55.5,y:-179.2},0).wait(1).to({rotation:64.3,x:57.4,y:-178.4},0).wait(1).to({rotation:64.9,x:59.2,y:-177.7},0).wait(1).to({rotation:65.5,x:61,y:-176.8},0).wait(1).to({rotation:66.1,x:62.8,y:-176},0).wait(1).to({rotation:66.7,x:64.6,y:-175.1},0).wait(1).to({rotation:67.3,x:66.4,y:-174.2},0).wait(1).to({rotation:67.9,x:68.2,y:-173.4},0).wait(1).to({rotation:68.5,x:70,y:-172.5},0).wait(1).to({rotation:69.1,x:71.8,y:-171.5},0).wait(1).to({rotation:69.7,x:73.5,y:-170.6},0).wait(1).to({rotation:70.3,x:75.2,y:-169.6},0).wait(1).to({rotation:70.9,x:77,y:-168.7},0).wait(1).to({rotation:71.5,x:78.7,y:-167.6},0).wait(1).to({rotation:72.1,x:80.4,y:-166.6},0).wait(1).to({rotation:72.7,x:82.2,y:-165.6},0).wait(1).to({rotation:73.3,x:83.9,y:-164.5},0).wait(1).to({rotation:73.9,x:85.6,y:-163.5},0).wait(1).to({rotation:74.5,x:87.3,y:-162.4},0).wait(1).to({rotation:75.1,x:88.9,y:-161.3},0).wait(1).to({rotation:75.7,x:90.5,y:-160.2},0).wait(1).to({rotation:76.3,x:92.1,y:-159},0).wait(1).to({rotation:76.9,x:93.8,y:-157.8},0).wait(1).to({rotation:77.5,x:95.4,y:-156.7},0).wait(1).to({rotation:78.1,x:97.1,y:-155.5},0).wait(1).to({rotation:78.7,x:98.6,y:-154.2},0).wait(1).to({rotation:79.3,x:100.2,y:-153},0).wait(1).to({rotation:79.9,x:101.7,y:-151.8},0).wait(1).to({rotation:80.5,x:103.3,y:-150.5},0).wait(1).to({rotation:81.1,x:104.8,y:-149.3},0).wait(1).to({rotation:81.7,x:106.4,y:-148},0).wait(1).to({rotation:82.3,x:107.9,y:-146.7},0).wait(1).to({rotation:82.9,x:109.4,y:-145.3},0).wait(1).to({rotation:83.5,x:110.8,y:-144},0).wait(1).to({rotation:84.1,x:112.3,y:-142.6},0).wait(1).to({rotation:84.7,x:113.8,y:-141.3},0).wait(1).to({rotation:85.3,x:115.2,y:-139.9},0).wait(1).to({rotation:85.9,x:116.6,y:-138.5},0).wait(1).to({rotation:86.5,x:118,y:-137.1},0).wait(1).to({rotation:87.1,x:119.4,y:-135.6},0).wait(1).to({rotation:87.7,x:120.8,y:-134.2},0).wait(1).to({rotation:88.3,x:122.1,y:-132.7},0).wait(1).to({rotation:88.9,x:123.6,y:-131.3},0).wait(1).to({rotation:89.5,x:124.9,y:-129.8},0).wait(1).to({rotation:90.2,x:126.2,y:-128.3},0).wait(1).to({rotation:90.8,x:127.5,y:-126.8},0).wait(1).to({rotation:91.4,x:128.8,y:-125.2},0).wait(1).to({rotation:92,x:130,y:-123.7},0).wait(1).to({rotation:92.6,x:131.3,y:-122.2},0).wait(1).to({rotation:93.2,x:132.5,y:-120.6},0).wait(1).to({rotation:93.8,x:133.8,y:-119},0).wait(1).to({rotation:94.4,x:135,y:-117.4},0).wait(1).to({rotation:95,x:136.1,y:-115.8},0).wait(1).to({rotation:95.6,x:137.3,y:-114.2},0).wait(1).to({rotation:96.2,x:138.5,y:-112.5},0).wait(1).to({rotation:96.8,x:139.6,y:-110.9},0).wait(1).to({rotation:97.4,x:140.7,y:-109.2},0).wait(1).to({rotation:98,x:141.8,y:-107.6},0).wait(1).to({rotation:98.6,x:142.9,y:-105.9},0).wait(1).to({rotation:99.2,x:144,y:-104.2},0).wait(1).to({rotation:99.8,x:145,y:-102.5},0).wait(1).to({rotation:100.4,x:146.1,y:-100.8},0).wait(1).to({rotation:101,x:147.1,y:-99.1},0).wait(1).to({rotation:101.6,x:148.1,y:-97.4},0).wait(1).to({rotation:102.2,x:149,y:-95.6},0).wait(1).to({rotation:102.8,x:150,y:-93.8},0).wait(1).to({rotation:103.4,x:150.9,y:-92.1},0).wait(1).to({rotation:104,x:151.9,y:-90.3},0).wait(1).to({rotation:104.6,x:152.8,y:-88.6},0).wait(1).to({rotation:105.2,x:153.7,y:-86.7},0).wait(1).to({rotation:105.8,x:154.5,y:-85},0).wait(1).to({rotation:106.4,x:155.4,y:-83.1},0).wait(1).to({rotation:107,x:156.2,y:-81.3},0).wait(1).to({rotation:107.6,x:157,y:-79.5},0).wait(1).to({rotation:108.2,x:157.8,y:-77.6},0).wait(1).to({rotation:108.8,x:158.6,y:-75.8},0).wait(1).to({rotation:109.4,x:159.3,y:-74},0).wait(1).to({rotation:110,x:160.1,y:-72.1},0).wait(1).to({rotation:110.6,x:160.8,y:-70.3},0).wait(1).to({rotation:111.2,x:161.4,y:-68.4},0).wait(1).to({rotation:111.8,x:162.1,y:-66.5},0).wait(1).to({rotation:112.4,x:162.7,y:-64.6},0).wait(1).to({rotation:113,x:163.4,y:-62.7},0).wait(1).to({rotation:113.6,x:164,y:-60.8},0).wait(1).to({rotation:114.2,x:164.6,y:-58.9},0).wait(1).to({rotation:114.8,x:165.2,y:-56.9},0).wait(1).to({rotation:115.4,x:165.7,y:-55.1},0).wait(1).to({rotation:116,x:166.2,y:-53.2},0).wait(1).to({rotation:116.6,x:166.8,y:-51.2},0).wait(1).to({rotation:117.2,x:167.3,y:-49.3},0).wait(1).to({rotation:117.8,x:167.8,y:-47.3},0).wait(1).to({rotation:118.4,x:168.2,y:-45.4},0).wait(1).to({rotation:119,x:168.6,y:-43.4},0).wait(1).to({rotation:119.6,x:169,y:-41.4},0).wait(1).to({rotation:120.2,x:169.4,y:-39.5},0).wait(1).to({rotation:120.8,x:169.8,y:-37.5},0).wait(1).to({rotation:121.4,x:170.1,y:-35.6},0).wait(1).to({rotation:122,x:170.5,y:-33.6},0).wait(1).to({rotation:122.6,x:170.8,y:-31.6},0).wait(1).to({rotation:123.2,x:171,y:-29.7},0).wait(1).to({rotation:123.8,x:171.3,y:-27.7},0).wait(1).to({rotation:124.4,x:171.6,y:-25.7},0).wait(1).to({rotation:125,x:171.8,y:-23.7},0).wait(1).to({rotation:125.6,x:172,y:-21.7},0).wait(1).to({rotation:126.2,x:172.2,y:-19.8},0).wait(1).to({rotation:126.8,x:172.3,y:-17.7},0).wait(1).to({rotation:127.4,x:172.5,y:-15.8},0).wait(1).to({rotation:128,x:172.6,y:-13.7},0).wait(1).to({rotation:128.6,x:172.7,y:-11.8},0).wait(1).to({rotation:129.2,x:172.8,y:-9.8},0).wait(1).to({rotation:129.8,y:-7.8},0).wait(1).to({rotation:130.4,x:172.9,y:-5.7},0).wait(1).to({rotation:131,y:-3.8},0).wait(1).to({rotation:131.6,x:172.8,y:-1.8},0).wait(1).to({rotation:132.2,y:0.2},0).wait(1).to({rotation:132.8,y:2.2},0).wait(1).to({rotation:133.4,x:172.7,y:4.1},0).wait(1).to({rotation:134,y:6.1},0).wait(1).to({rotation:134.6,x:172.5,y:8.2},0).wait(1).to({rotation:135.2,x:172.4,y:10.1},0).wait(1).to({rotation:135.8,x:172.2,y:12.2},0).wait(1).to({rotation:136.4,x:172.1,y:14.1},0).wait(1).to({rotation:137,x:171.9,y:16.1},0).wait(1).to({rotation:137.6,x:171.7,y:18.1},0).wait(1).to({rotation:138.2,x:171.4,y:20.1},0).wait(1).to({rotation:138.8,x:171.2,y:22.1},0).wait(1).to({rotation:139.4,x:170.9,y:24},0).wait(1).to({rotation:140,x:170.6,y:26},0).wait(1).to({rotation:140.6,x:170.2,y:28},0).wait(1).to({rotation:141.2,x:169.9,y:30},0).wait(1).to({rotation:141.8,x:169.6,y:31.9},0).wait(1).to({rotation:142.4,x:169.2,y:33.9},0).wait(1).to({rotation:143,x:168.8,y:35.9},0).wait(1).to({rotation:143.6,x:168.4,y:37.8},0).wait(1).to({rotation:144.2,x:167.9,y:39.7},0).wait(1).to({rotation:144.8,x:167.4,y:41.7},0).wait(1).to({rotation:145.4,x:167,y:43.6},0).wait(1).to({rotation:146,x:166.5,y:45.6},0).wait(1).to({rotation:146.6,x:166,y:47.5},0).wait(1).to({rotation:147.2,x:165.4,y:49.4},0).wait(1).to({rotation:147.8,x:164.8,y:51.3},0).wait(1).to({rotation:148.4,x:164.2,y:53.2},0).wait(1).to({rotation:149,x:163.6,y:55.2},0).wait(1).to({rotation:149.6,x:163,y:57},0).wait(1).to({rotation:150.3,x:162.4,y:59},0).wait(1).to({rotation:150.9,x:161.7,y:60.8},0).wait(1).to({rotation:151.5,x:161.1,y:62.7},0).wait(1).to({rotation:152.1,x:160.3,y:64.6},0).wait(1).to({rotation:152.7,x:159.6,y:66.4},0).wait(1).to({rotation:153.3,x:158.9,y:68.3},0).wait(1).to({rotation:153.9,x:158.1,y:70.1},0).wait(1).to({rotation:154.5,x:157.3,y:72},0).wait(1).to({rotation:155.1,x:156.5,y:73.8},0).wait(1).to({rotation:155.7,x:155.7,y:75.6},0).wait(1).to({rotation:156.3,x:154.9,y:77.4},0).wait(1).to({rotation:156.9,x:154,y:79.3},0).wait(1).to({rotation:157.5,x:153.2,y:81},0).wait(1).to({rotation:158.1,x:152.2,y:82.8},0).wait(1).to({rotation:158.7,x:151.4,y:84.6},0).wait(1).to({rotation:159.3,x:150.4,y:86.3},0).wait(1).to({rotation:159.9,x:149.4,y:88.1},0).wait(1).to({rotation:160.5,x:148.5,y:89.9},0).wait(1).to({rotation:161.1,x:147.5,y:91.6},0).wait(1).to({rotation:161.7,x:146.5,y:93.3},0).wait(1).to({rotation:162.3,x:145.4,y:95},0).wait(1).to({rotation:162.9,x:144.4,y:96.7},0).wait(1).to({rotation:163.5,x:143.4,y:98.4},0).wait(1).to({rotation:164.1,x:142.3,y:100.1},0).wait(1).to({rotation:164.7,x:141.2,y:101.8},0).wait(1).to({rotation:165.3,x:140.1,y:103.5},0).wait(1).to({rotation:165.9,x:138.9,y:105.1},0).wait(1).to({rotation:166.5,x:137.8,y:106.7},0).wait(1).to({rotation:167.1,x:136.6,y:108.4},0).wait(1).to({rotation:167.7,x:135.5,y:110},0).wait(1).to({rotation:168.3,x:134.2,y:111.5},0).wait(1).to({rotation:168.9,x:133,y:113.1},0).wait(1).to({rotation:169.5,x:131.8,y:114.7},0).wait(1).to({rotation:170.1,x:130.6,y:116.3},0).wait(1).to({rotation:170.7,x:129.3,y:117.8},0).wait(1).to({rotation:171.3,x:128,y:119.4},0).wait(1).to({rotation:171.9,x:126.7,y:120.9},0).wait(1).to({rotation:172.5,x:125.4,y:122.4},0).wait(1).to({rotation:173.1,x:124.1,y:123.8},0).wait(1).to({rotation:173.7,x:122.7,y:125.4},0).wait(1).to({rotation:174.3,x:121.4,y:126.8},0).wait(1).to({rotation:174.9,x:120,y:128.2},0).wait(1).to({rotation:175.5,x:118.6,y:129.7},0).wait(1).to({rotation:176.1,x:117.2,y:131.1},0).wait(1).to({rotation:176.7,x:115.8,y:132.5},0).wait(1).to({rotation:177.3,x:114.4,y:133.9},0).wait(1).to({rotation:177.9,x:112.9,y:135.3},0).wait(1).to({rotation:178.5,x:111.5,y:136.7},0).wait(1).to({rotation:179.1,x:110,y:138},0).wait(1).to({rotation:179.7,x:108.5,y:139.3},0).wait(1).to({rotation:180.3,x:107,y:140.7},0).wait(1).to({rotation:180.9,x:105.5,y:142},0).wait(1).to({rotation:181.5,x:104,y:143.2},0).wait(1).to({rotation:182.1,x:102.4,y:144.5},0).wait(1).to({rotation:182.7,x:100.9,y:145.7},0).wait(1).to({rotation:183.3,x:99.3,y:147},0).wait(1).to({rotation:183.9,x:97.7,y:148.2},0).wait(1).to({rotation:184.5,x:96.1,y:149.4},0).wait(1).to({rotation:185.1,x:94.5,y:150.6},0).wait(1).to({rotation:185.7,x:92.9,y:151.8},0).wait(1).to({rotation:186.3,x:91.2,y:152.9},0).wait(1).to({rotation:186.9,x:89.6,y:154},0).wait(1).to({rotation:187.5,x:87.9,y:155.1},0).wait(1).to({rotation:188.1,x:86.3,y:156.2},0).wait(1).to({rotation:188.7,x:84.6,y:157.3},0).wait(1).to({rotation:189.3,x:82.9,y:158.4},0).wait(1).to({rotation:189.9,x:81.2,y:159.4},0).wait(1).to({rotation:190.5,x:79.5,y:160.4},0).wait(1).to({rotation:191.1,x:77.7,y:161.4},0).wait(1).to({rotation:191.7,x:76,y:162.4},0).wait(1).to({rotation:192.3,x:74.3,y:163.4},0).wait(1).to({rotation:192.9,x:72.5,y:164.4},0).wait(1).to({rotation:193.5,x:70.8,y:165.3},0).wait(1).to({rotation:194.1,x:69,y:166.2},0).wait(1).to({rotation:194.7,x:67.2,y:167.1},0).wait(1).to({rotation:195.3,x:65.4,y:168},0).wait(1).to({rotation:195.9,x:63.6,y:168.9},0).wait(1).to({rotation:196.5,x:61.7,y:169.7},0).wait(1).to({rotation:197.1,x:60,y:170.6},0).wait(1).to({rotation:197.7,x:58.1,y:171.4},0).wait(1).to({rotation:198.3,x:56.3,y:172.1},0).wait(1).to({rotation:198.9,x:54.5,y:172.9},0).wait(1).to({rotation:199.5,x:52.6,y:173.7},0).wait(1).to({rotation:200.1,x:50.7,y:174.3},0).wait(1).to({rotation:200.7,x:48.8,y:175.1},0).wait(1).to({rotation:201.3,x:47,y:175.7},0).wait(1).to({rotation:201.9,x:45.1,y:176.5},0).wait(1).to({rotation:202.5,x:43.2,y:177.1},0).wait(1).to({rotation:203.1,x:41.3,y:177.7},0).wait(1).to({rotation:203.7,x:39.4,y:178.3},0).wait(1).to({rotation:204.3,x:37.5,y:178.9},0).wait(1).to({rotation:204.9,x:35.6,y:179.5},0).wait(1).to({rotation:205.5,x:33.7,y:180},0).wait(1).to({rotation:206.1,x:31.7,y:180.5},0).wait(1).to({rotation:206.7,x:29.8,y:181},0).wait(1).to({rotation:207.3,x:27.9,y:181.5},0).wait(1).to({rotation:207.9,x:25.9,y:182},0).wait(1).to({rotation:208.5,x:24,y:182.5},0).wait(1).to({rotation:209.1,x:22,y:182.9},0).wait(1).to({rotation:209.7,x:20.1,y:183.3},0).wait(1).to({rotation:210.4,x:18.1,y:183.7},0).wait(1).to({rotation:211,x:16.2,y:184},0).wait(1).to({rotation:211.6,x:14.2,y:184.4},0).wait(1).to({rotation:212.2,x:12.3,y:184.7},0).wait(1).to({rotation:212.8,x:10.3,y:185},0).wait(1).to({rotation:213.4,x:8.3,y:185.3},0).wait(1).to({rotation:214,x:6.3,y:185.6},0).wait(1).to({rotation:214.6,x:4.3,y:185.8},0).wait(1).to({rotation:215.2,x:2.4,y:186},0).wait(1).to({rotation:215.8,x:0.3,y:186.2},0).wait(1).to({rotation:216.4,x:-1.6,y:186.3},0).wait(1).to({rotation:217,x:-3.6,y:186.5},0).wait(1).to({rotation:217.6,x:-5.6,y:186.7},0).wait(1).to({rotation:218.2,x:-7.6},0).wait(1).to({rotation:218.8,x:-9.6,y:186.9},0).wait(1).to({rotation:219.4,x:-11.6},0).wait(1).to({rotation:220,x:-13.6,y:187},0).wait(1).to({rotation:220.6,x:-15.6},0).wait(1).to({rotation:221.2,x:-17.5},0).wait(1).to({rotation:221.8,x:-19.6},0).wait(1).to({rotation:222.4,x:-21.5},0).wait(1).to({rotation:223,x:-23.6,y:186.9},0).wait(1).to({rotation:223.6,x:-25.6},0).wait(1).to({rotation:224.2,x:-27.6,y:186.8},0).wait(1).to({rotation:224.8,x:-29.5,y:186.7},0).wait(1).to({rotation:225.4,x:-31.6,y:186.5},0).wait(1).to({rotation:226,x:-33.5,y:186.4},0).wait(1).to({rotation:226.6,x:-35.5,y:186.2},0).wait(1).to({rotation:227.2,x:-37.5,y:186},0).wait(1).to({rotation:227.8,x:-39.5,y:185.7},0).wait(1).to({rotation:228.4,x:-41.5,y:185.5},0).wait(1).to({rotation:229,x:-43.5,y:185.2},0).wait(1).to({rotation:229.6,x:-45.5,y:185},0).wait(1).to({rotation:230.2,x:-47.4,y:184.7},0).wait(1).to({rotation:230.8,x:-49.4,y:184.4},0).wait(1).to({rotation:231.4,x:-51.4,y:184},0).wait(1).to({rotation:232,x:-53.3,y:183.6},0).wait(1).to({rotation:232.6,x:-55.3,y:183.3},0).wait(1).to({rotation:233.2,x:-57.2,y:182.9},0).wait(1).to({rotation:233.8,x:-59.1,y:182.4},0).wait(1).to({rotation:234.4,x:-61.1,y:182},0).wait(1).to({rotation:235,x:-63.1,y:181.5},0).wait(1).to({rotation:235.6,x:-65,y:181},0).wait(1).to({rotation:236.2,x:-66.9,y:180.5},0).wait(1).to({rotation:236.8,x:-68.8,y:180},0).wait(1).to({rotation:237.4,x:-70.8,y:179.4},0).wait(1).to({rotation:238,x:-72.7,y:178.9},0).wait(1).to({rotation:238.6,x:-74.6,y:178.3},0).wait(1).to({rotation:239.2,x:-76.5,y:177.7},0).wait(1).to({rotation:239.8,x:-78.4,y:177},0).wait(1).to({rotation:240.4,x:-80.3,y:176.3},0).wait(1).to({rotation:241,x:-82.2,y:175.7},0).wait(1).to({rotation:241.6,x:-84,y:175},0).wait(1).to({rotation:242.2,x:-85.9,y:174.3},0).wait(1).to({rotation:242.8,x:-87.8,y:173.6},0).wait(1).to({rotation:243.4,x:-89.7,y:172.8},0).wait(1).to({rotation:244,x:-91.5,y:172.1},0).wait(1).to({rotation:244.6,x:-93.3,y:171.3},0).wait(1).to({rotation:245.2,x:-95.2,y:170.5},0).wait(1).to({rotation:245.8,x:-97,y:169.7},0).wait(1).to({rotation:246.4,x:-98.7,y:168.8},0).wait(1).to({rotation:247,x:-100.6,y:168},0).wait(1).to({rotation:247.6,x:-102.4,y:167.1},0).wait(1).to({rotation:248.2,x:-104.1,y:166.2},0).wait(1).to({rotation:248.8,x:-105.9,y:165.2},0).wait(1).to({rotation:249.4,x:-107.7,y:164.3},0).wait(1).to({rotation:250,x:-109.5,y:163.4},0).wait(1).to({rotation:250.6,x:-111.2,y:162.4},0).wait(1).to({rotation:251.2,x:-112.9,y:161.4},0).wait(1).to({rotation:251.8,x:-114.7,y:160.4},0).wait(1).to({rotation:252.4,x:-116.4,y:159.3},0).wait(1).to({rotation:253,x:-118,y:158.3},0).wait(1).to({rotation:253.6,x:-119.7,y:157.2},0).wait(1).to({rotation:254.2,x:-121.4,y:156.2},0).wait(1).to({rotation:254.8,x:-123.1,y:155},0).wait(1).to({rotation:255.4,x:-124.8,y:153.9},0).wait(1).to({rotation:256,x:-126.4,y:152.8},0).wait(1).to({rotation:256.6,x:-128,y:151.6},0).wait(1).to({rotation:257.2,x:-129.7,y:150.5},0).wait(1).to({rotation:257.8,x:-131.3,y:149.3},0).wait(1).to({rotation:258.4,x:-132.8,y:148.1},0).wait(1).to({rotation:259,x:-134.4,y:146.9},0).wait(1).to({rotation:259.6,x:-136,y:145.6},0).wait(1).to({rotation:260.2,x:-137.6,y:144.4},0).wait(1).to({rotation:260.8,x:-139.1,y:143.2},0).wait(1).to({rotation:261.4,x:-140.7,y:141.9},0).wait(1).to({rotation:262,x:-142.2,y:140.6},0).wait(1).to({rotation:262.6,x:-143.7,y:139.2},0).wait(1).to({rotation:263.2,x:-145.2,y:137.9},0).wait(1).to({rotation:263.8,x:-146.6,y:136.6},0).wait(1).to({rotation:264.4,x:-148.1,y:135.2},0).wait(1).to({rotation:265,x:-149.5,y:133.8},0).wait(1).to({rotation:265.6,x:-151,y:132.4},0).wait(1).to({rotation:266.2,x:-152.4,y:131},0).wait(1).to({rotation:266.8,x:-153.8,y:129.6},0).wait(1).to({rotation:267.4,x:-155.2,y:128.2},0).wait(1).to({rotation:268,x:-156.6,y:126.7},0).wait(1).to({rotation:268.6,x:-157.9,y:125.3},0).wait(1).to({rotation:269.2,x:-159.2,y:123.8},0).wait(1).to({rotation:269.8,x:-160.6,y:122.3},0).wait(1).to({rotation:270.5,x:-161.9,y:120.7},0).wait(1).to({rotation:271.1,x:-163.2,y:119.3},0).wait(1).to({rotation:271.7,x:-164.4,y:117.7},0).wait(1).to({rotation:272.3,x:-165.7,y:116.1},0).wait(1).to({rotation:272.9,x:-167,y:114.6},0).wait(1).to({rotation:273.5,x:-168.2,y:113.1},0).wait(1).to({rotation:274.1,x:-169.4,y:111.4},0).wait(1).to({rotation:274.7,x:-170.6,y:109.9},0).wait(1).to({rotation:275.3,x:-171.8,y:108.2},0).wait(1).to({rotation:275.9,x:-172.9,y:106.6},0).wait(1).to({rotation:276.5,x:-174.1,y:105},0).wait(1).to({rotation:277.1,x:-175.2,y:103.3},0).wait(1).to({rotation:277.7,x:-176.3,y:101.7},0).wait(1).to({rotation:278.3,x:-177.4,y:100},0).wait(1).to({rotation:278.9,x:-178.5,y:98.3},0).wait(1).to({rotation:279.5,x:-179.6,y:96.7},0).wait(1).to({rotation:280.1,x:-180.6,y:94.9},0).wait(1).to({rotation:280.7,x:-181.6,y:93.2},0).wait(1).to({rotation:281.3,x:-182.6,y:91.4},0).wait(1).to({rotation:281.9,x:-183.6,y:89.7},0).wait(1).to({rotation:282.5,x:-184.6,y:88},0).wait(1).to({rotation:283.1,x:-185.5,y:86.2},0).wait(1).to({rotation:283.7,x:-186.5,y:84.5},0).wait(1).to({rotation:284.3,x:-187.4,y:82.7},0).wait(1).to({rotation:284.9,x:-188.3,y:80.9},0).wait(1).to({rotation:285.5,x:-189.1,y:79.1},0).wait(1).to({rotation:286.1,x:-190,y:77.3},0).wait(1).to({rotation:286.7,x:-190.8,y:75.5},0).wait(1).to({rotation:287.3,x:-191.7,y:73.6},0).wait(1).to({rotation:287.9,x:-192.5,y:71.8},0).wait(1).to({rotation:288.5,x:-193.2,y:70},0).wait(1).to({rotation:289.1,x:-194,y:68.1},0).wait(1).to({rotation:289.7,x:-194.7,y:66.3},0).wait(1).to({rotation:290.3,x:-195.4,y:64.4},0).wait(1).to({rotation:290.9,x:-196.2,y:62.6},0).wait(1).to({rotation:291.5,x:-196.8,y:60.6},0).wait(1).to({rotation:292.1,x:-197.5,y:58.8},0).wait(1).to({rotation:292.7,x:-198.1,y:56.9},0).wait(1).to({rotation:293.3,x:-198.7,y:55},0).wait(1).to({rotation:293.9,x:-199.4,y:53.1},0).wait(1).to({rotation:294.5,x:-199.9,y:51.1},0).wait(1).to({rotation:295.1,x:-200.5,y:49.3},0).wait(1).to({rotation:295.7,x:-201,y:47.4},0).wait(1).to({rotation:296.3,x:-201.6,y:45.4},0).wait(1).to({rotation:296.9,x:-202,y:43.5},0).wait(1).to({rotation:297.5,x:-202.5,y:41.5},0).wait(1).to({rotation:298.1,x:-203,y:39.6},0).wait(1).to({rotation:298.7,x:-203.5,y:37.6},0).wait(1).to({rotation:299.3,x:-203.8,y:35.7},0).wait(1).to({rotation:299.9,x:-204.3,y:33.7},0).wait(1).to({rotation:300.5,x:-204.7,y:31.8},0).wait(1).to({rotation:301.1,x:-205,y:29.9},0).wait(1).to({rotation:301.7,x:-205.4,y:27.9},0).wait(1).to({rotation:302.3,x:-205.7,y:25.8},0).wait(1).to({rotation:302.9,x:-205.9,y:23.9},0).wait(1).to({rotation:303.5,x:-206.2,y:21.9},0).wait(1).to({rotation:304.1,x:-206.4,y:20},0).wait(1).to({rotation:304.7,x:-206.8,y:17.9},0).wait(1).to({rotation:305.3,x:-206.9,y:16},0).wait(1).to({rotation:305.9,x:-207.1,y:14},0).wait(1).to({rotation:306.5,x:-207.3,y:12},0).wait(1).to({rotation:307.1,x:-207.5,y:10},0).wait(1).to({rotation:307.7,x:-207.6,y:8},0).wait(1).to({rotation:308.3,x:-207.7,y:6},0).wait(1).to({rotation:308.9,x:-207.8,y:4},0).wait(1).to({rotation:309.5,y:2.1},0).wait(1).to({rotation:310.1,x:-207.9,y:0.1},0).wait(1).to({rotation:310.7,y:-2},0).wait(1).to({rotation:311.3,y:-3.9},0).wait(1).to({rotation:311.9,y:-6},0).wait(1).to({rotation:312.5,y:-7.9},0).wait(1).to({rotation:313.1,x:-207.8,y:-9.9},0).wait(1).to({rotation:313.7,x:-207.7,y:-11.9},0).wait(1).to({rotation:314.3,x:-207.6,y:-13.9},0).wait(1).to({rotation:314.9,x:-207.5,y:-15.9},0).wait(1).to({rotation:315.5,x:-207.4,y:-17.9},0).wait(1).to({rotation:316.1,x:-207.2,y:-19.9},0).wait(1).to({rotation:316.7,x:-207,y:-21.9},0).wait(1).to({rotation:317.3,x:-206.8,y:-23.8},0).wait(1).to({rotation:317.9,x:-206.6,y:-25.9},0).wait(1).to({rotation:318.5,x:-206.3,y:-27.8},0).wait(1).to({rotation:319.1,x:-206.1,y:-29.8},0).wait(1).to({rotation:319.7,x:-205.8,y:-31.8},0).wait(1).to({rotation:320.3,x:-205.5,y:-33.8},0).wait(1).to({rotation:320.9,x:-205.2,y:-35.7},0).wait(1).to({rotation:321.5,x:-204.8,y:-37.7},0).wait(1).to({rotation:322.1,x:-204.4,y:-39.7},0).wait(1).to({rotation:322.7,x:-204.1,y:-41.6},0).wait(1).to({rotation:323.3,x:-203.7,y:-43.6},0).wait(1).to({rotation:323.9,x:-203.2,y:-45.5},0).wait(1).to({rotation:324.5,x:-202.8,y:-47.5},0).wait(1).to({rotation:325.1,x:-202.3,y:-49.4},0).wait(1).to({rotation:325.7,x:-201.8,y:-51.3},0).wait(1).to({rotation:326.3,x:-201.3,y:-53.3},0).wait(1).to({rotation:326.9,x:-200.7,y:-55.2},0).wait(1).to({rotation:327.5,x:-200.2,y:-57.1},0).wait(1).to({rotation:328.1,x:-199.6,y:-59.1},0).wait(1).to({rotation:328.7,x:-199,y:-60.9},0).wait(1).to({rotation:329.3,x:-198.4,y:-62.9},0).wait(1).to({rotation:329.9,x:-197.7,y:-64.7},0).wait(1).to({rotation:330.6,x:-197.1,y:-66.6},0).wait(1).to({rotation:331.2,x:-196.4,y:-68.5},0).wait(1).to({rotation:331.8,x:-195.8,y:-70.4},0).wait(1).to({rotation:332.4,x:-195,y:-72.2},0).wait(1).to({rotation:333,x:-194.3,y:-74.1},0).wait(1).to({rotation:333.6,x:-193.5,y:-75.9},0).wait(1).to({rotation:334.2,x:-192.8,y:-77.8},0).wait(1).to({rotation:334.8,x:-192,y:-79.6},0).wait(1).to({rotation:335.4,x:-191.2,y:-81.4},0).wait(1).to({rotation:336,x:-190.3,y:-83.3},0).wait(1).to({rotation:336.6,x:-189.5,y:-85.1},0).wait(1).to({rotation:337.2,x:-188.6,y:-86.9},0).wait(1).to({rotation:337.8,x:-187.8,y:-88.7},0).wait(1).to({rotation:338.4,x:-186.8,y:-90.5},0).wait(1).to({rotation:339,x:-185.9,y:-92.2},0).wait(1).to({rotation:339.6,x:-185,y:-94},0).wait(1).to({rotation:340.2,x:-184,y:-95.7},0).wait(1).to({rotation:340.8,x:-183.1,y:-97.5},0).wait(1).to({rotation:341.4,x:-182,y:-99.2},0).wait(1).to({rotation:342,x:-181,y:-100.9},0).wait(1).to({rotation:342.6,x:-180,y:-102.7},0).wait(1).to({rotation:343.2,x:-178.9,y:-104.3},0).wait(1).to({rotation:343.8,x:-177.9,y:-106},0).wait(1).to({rotation:344.4,x:-176.8,y:-107.7},0).wait(1).to({rotation:345,x:-175.7,y:-109.4},0).wait(1).to({rotation:345.6,x:-174.6,y:-111},0).wait(1).to({rotation:346.2,x:-173.4,y:-112.6},0).wait(1).to({rotation:346.8,x:-172.3,y:-114.3},0).wait(1).to({rotation:347.4,x:-171.1,y:-115.9},0).wait(1).to({rotation:348,x:-169.9,y:-117.5},0).wait(1).to({rotation:348.6,x:-168.7,y:-119.1},0).wait(1).to({rotation:349.2,x:-167.5,y:-120.7},0).wait(1).to({rotation:349.8,x:-166.2,y:-122.3},0).wait(1).to({rotation:350.4,x:-165,y:-123.8},0).wait(1).to({rotation:351,x:-163.7,y:-125.3},0).wait(1).to({rotation:351.6,x:-162.4,y:-126.8},0).wait(1).to({rotation:352.2,x:-161.1,y:-128.4},0).wait(1).to({rotation:352.8,x:-159.8,y:-129.9},0).wait(1).to({rotation:353.4,x:-158.5,y:-131.4},0).wait(1).to({rotation:354,x:-157.1,y:-132.8},0).wait(1).to({rotation:354.6,x:-155.7,y:-134.3},0).wait(1).to({rotation:355.2,x:-154.4,y:-135.7},0).wait(1).to({rotation:355.8,x:-153,y:-137.1},0).wait(1).to({rotation:356.4,x:-151.5,y:-138.6},0).wait(1).to({rotation:357,x:-150.1,y:-140},0).wait(1).to({rotation:357.6,x:-148.7,y:-141.4},0).wait(1).to({rotation:358.2,x:-147.2,y:-142.7},0).wait(1).to({rotation:358.8,x:-145.8,y:-144.1},0).wait(1).to({rotation:359.4,x:-144.3,y:-145.5},0).wait(1).to({rotation:360,x:-142.8,y:-146.8},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-204.4,-216.8,123,140);


(lib.main = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー 2
	this.instance = new lib.man0_ani();
	this.instance.parent = this;
	this.instance.setTransform(574.7,639,1,1,0,0,0,124.5,125.4);

	this.instance_1 = new lib.astronaut_about_1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(1217.4,704.5,1,1,110.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	// レイヤー 1
	this.instance_2 = new lib.contact_txt_1("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(1408,1400,1,1,0,0,0,214,38);

	this.instance_3 = new lib.contact_icon_1("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(998.5,1400.5,1,1,0,0,0,180.5,180.5);

	this.instance_4 = new lib.top_icontxt_1("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(480.3,518.1,1,1,-81,0,0,142,165);

	this.instance_5 = new lib.about_txt_1("synched",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(1339.2,1053.8,1,1,120,0,0,261.1,55.4);

	this.instance_6 = new lib.about_icon_1("synched",0);
	this.instance_6.parent = this;
	this.instance_6.setTransform(1564.6,657.3,1,1,120,0,0,160,160.5);

	this.instance_7 = new lib.astronaut_contact_1("synched",0);
	this.instance_7.parent = this;
	this.instance_7.setTransform(824,1599.5,1,1,0,0,0,824,400.5);

	this.instance_8 = new lib.bg_mc("synched",0);
	this.instance_8.parent = this;
	this.instance_8.setTransform(1000,1000,1,1,0,0,0,1000,1000);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.main, new cjs.Rectangle(0,0,2000,2000), null);


// stage content:
(lib.sample = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{TOP:0,TO_ABOUT:1,ABOUT:50,TO_CONTACT:51,CONTACT:100,TO_TOP:101,LAST:149});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_50 = function() {
		this.stop();
	}
	this.frame_100 = function() {
		this.stop();
	}
	this.frame_149 = function() {
		this.gotoAndStop('TOP');
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(50).call(this.frame_50).wait(50).call(this.frame_100).wait(49).call(this.frame_149).wait(1));

	// レイヤー 3
	this.instance = new lib.main();
	this.instance.parent = this;
	this.instance.setTransform(-105.9,1345.4,1.574,1.574,80.5,0,0,989.3,983.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:989.1,regY:983.7,scaleX:0.94,scaleY:0.94,rotation:240.7,x:732,y:560.4},50,cjs.Ease.get(1)).to({regX:989.2,regY:983.8,scaleX:1.14,scaleY:1.14,rotation:360.5,x:283.4,y:-214.1},50,cjs.Ease.get(1)).to({regX:989.3,regY:983.9,scaleX:1.57,scaleY:1.57,rotation:440.5,x:-105.9,y:1345.4},49,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1428,-61.7,3623.9,3623.9);
// library properties:
lib.properties = {
	width: 1024,
	height: 768,
	fps: 60,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/sample_atlas_.png?1481038129954", id:"sample_atlas_"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;