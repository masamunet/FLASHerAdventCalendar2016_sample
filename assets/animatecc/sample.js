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


(lib.astronaut_about_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー 1
	this.instance = new lib.astronaut_about();
	this.instance.parent = this;
	this.instance.setTransform(-172,-163);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-172,-163,279,326);


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


(lib.宇宙飛行士１ = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー 1
	this.instance = new lib.astronaut_top_1("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(-63.3,-73.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.宇宙飛行士１, new cjs.Rectangle(-125.3,-143.4,123,140), null);


(lib.宇宙飛行士１のアニメーション = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー 1
	this.instance = new lib.宇宙飛行士１();
	this.instance.parent = this;
	this.instance.setTransform(-17.5,-3.4,1,1,0,0,0,61.5,70);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:-63.8,regY:-73.4,rotation:1.6,x:-138.9,y:-150.1},0).wait(1).to({rotation:3.1,x:-134.9,y:-153.3},0).wait(1).to({rotation:4.7,x:-130.8,y:-156.5},0).wait(1).to({rotation:6.2,x:-126.6,y:-159.4},0).wait(1).to({rotation:7.8,x:-122.3,y:-162.4},0).wait(1).to({rotation:9.3,x:-118,y:-165.1},0).wait(1).to({rotation:10.9,x:-113.5,y:-167.8},0).wait(1).to({rotation:12.4,x:-109,y:-170.3},0).wait(1).to({rotation:14,x:-104.5,y:-172.8},0).wait(1).to({rotation:15.5,x:-99.8,y:-175},0).wait(1).to({rotation:17.1,x:-95.2,y:-177.2},0).wait(1).to({rotation:18.6,x:-90.4,y:-179.2},0).wait(1).to({rotation:20.2,x:-85.7,y:-181.2},0).wait(1).to({rotation:21.7,x:-80.8,y:-182.9},0).wait(1).to({rotation:23.3,x:-75.9,y:-184.6},0).wait(1).to({rotation:24.8,x:-71,y:-186.1},0).wait(1).to({rotation:26.4,x:-66,y:-187.5},0).wait(1).to({rotation:27.9,x:-61,y:-188.8},0).wait(1).to({rotation:29.5,x:-56,y:-189.9},0).wait(1).to({rotation:31,x:-50.9,y:-190.8},0).wait(1).to({rotation:32.6,x:-45.8,y:-191.7},0).wait(1).to({rotation:34.1,x:-40.7,y:-192.4},0).wait(1).to({rotation:35.7,x:-35.6,y:-192.9},0).wait(1).to({rotation:37.2,x:-30.5,y:-193.3},0).wait(1).to({rotation:38.8,x:-25.3,y:-193.6},0).wait(1).to({rotation:40.3,x:-20.2,y:-193.8},0).wait(1).to({rotation:41.9,x:-15},0).wait(1).to({rotation:43.4,x:-9.8,y:-193.7},0).wait(1).to({rotation:45,x:-4.7,y:-193.3},0).wait(1).to({rotation:46.6,x:0.4,y:-192.9},0).wait(1).to({rotation:48.1,x:5.6,y:-192.4},0).wait(1).to({rotation:49.7,x:10.7,y:-191.7},0).wait(1).to({rotation:51.2,x:15.8,y:-190.9},0).wait(1).to({rotation:52.8,x:20.8,y:-189.9},0).wait(1).to({rotation:54.3,x:25.8,y:-188.7},0).wait(1).to({rotation:55.9,x:30.8,y:-187.5},0).wait(1).to({rotation:57.4,x:35.8,y:-186.2},0).wait(1).to({rotation:59,x:40.7,y:-184.6},0).wait(1).to({rotation:60.5,x:45.6,y:-183},0).wait(1).to({rotation:62.1,x:50.4,y:-181.2},0).wait(1).to({rotation:63.6,x:55.2,y:-179.3},0).wait(1).to({rotation:65.2,x:60,y:-177.3},0).wait(1).to({rotation:66.7,x:64.7,y:-175.1},0).wait(1).to({rotation:68.3,x:69.3,y:-172.8},0).wait(1).to({rotation:69.8,x:73.8,y:-170.4},0).wait(1).to({rotation:71.4,x:78.3,y:-167.9},0).wait(1).to({rotation:72.9,x:82.7,y:-165.2},0).wait(1).to({rotation:74.5,x:87.1,y:-162.4},0).wait(1).to({rotation:76,x:91.4,y:-159.5},0).wait(1).to({rotation:77.6,x:95.6,y:-156.6},0).wait(1).to({rotation:79.1,x:99.7,y:-153.4},0).wait(1).to({rotation:80.7,x:103.7,y:-150.2},0).wait(1).to({rotation:82.2,x:107.7,y:-146.8},0).wait(1).to({rotation:83.8,x:111.4,y:-143.5},0).wait(1).to({rotation:85.3,x:115.2,y:-139.9},0).wait(1).to({rotation:86.9,x:118.9,y:-136.2},0).wait(1).to({rotation:88.4,x:122.4,y:-132.5},0).wait(1).to({rotation:90,x:125.9,y:-128.7},0).wait(1).to({rotation:91.6,x:129.2,y:-124.7},0).wait(1).to({rotation:93.1,x:132.4,y:-120.7},0).wait(1).to({rotation:94.7,x:135.6,y:-116.6},0).wait(1).to({rotation:96.2,x:138.5,y:-112.4},0).wait(1).to({rotation:97.8,x:141.5,y:-108.1},0).wait(1).to({rotation:99.3,x:144.2,y:-103.8},0).wait(1).to({rotation:100.9,x:146.9,y:-99.4},0).wait(1).to({rotation:102.4,x:149.4,y:-94.9},0).wait(1).to({rotation:104,x:151.9,y:-90.3},0).wait(1).to({rotation:105.5,x:154.1,y:-85.7},0).wait(1).to({rotation:107.1,x:156.3,y:-81},0).wait(1).to({rotation:108.6,x:158.3,y:-76.3},0).wait(1).to({rotation:110.2,x:160.3,y:-71.5},0).wait(1).to({rotation:111.7,x:162,y:-66.7},0).wait(1).to({rotation:113.3,x:163.7,y:-61.8},0).wait(1).to({rotation:114.8,x:165.2,y:-56.9},0).wait(1).to({rotation:116.4,x:166.6,y:-51.9},0).wait(1).to({rotation:117.9,x:167.9,y:-46.8},0).wait(1).to({rotation:119.5,x:169,y:-41.9},0).wait(1).to({rotation:121,x:169.9,y:-36.8},0).wait(1).to({rotation:122.6,x:170.8,y:-31.7},0).wait(1).to({rotation:124.1,x:171.5,y:-26.6},0).wait(1).to({rotation:125.7,x:172,y:-21.5},0).wait(1).to({rotation:127.2,x:172.4,y:-16.3},0).wait(1).to({rotation:128.8,x:172.7,y:-11.2},0).wait(1).to({rotation:130.3,x:172.9,y:-6.1},0).wait(1).to({rotation:131.9,y:-0.9},0).wait(1).to({rotation:133.4,x:172.8,y:4.3},0).wait(1).to({rotation:135,x:172.4,y:9.4},0).wait(1).to({rotation:136.6,x:172,y:14.5},0).wait(1).to({rotation:138.1,x:171.5,y:19.7},0).wait(1).to({rotation:139.7,x:170.8,y:24.8},0).wait(1).to({rotation:141.2,x:170,y:29.9},0).wait(1).to({rotation:142.8,x:169,y:35},0).wait(1).to({rotation:144.3,x:167.8,y:40},0).wait(1).to({rotation:145.9,x:166.6,y:45},0).wait(1).to({rotation:147.4,x:165.3,y:50},0).wait(1).to({rotation:149,x:163.7,y:54.9},0).wait(1).to({rotation:150.5,x:162.1,y:59.8},0).wait(1).to({rotation:152.1,x:160.3,y:64.6},0).wait(1).to({rotation:153.6,x:158.4,y:69.4},0).wait(1).to({rotation:155.2,x:156.4,y:74.1},0).wait(1).to({rotation:156.7,x:154.2,y:78.9},0).wait(1).to({rotation:158.3,x:151.9,y:83.5},0).wait(1).to({rotation:159.8,x:149.5,y:88},0).wait(1).to({rotation:161.4,x:147,y:92.5},0).wait(1).to({rotation:162.9,x:144.3,y:96.9},0).wait(1).to({rotation:164.5,x:141.5,y:101.2},0).wait(1).to({rotation:166,x:138.6,y:105.5},0).wait(1).to({rotation:167.6,x:135.7,y:109.7},0).wait(1).to({rotation:169.1,x:132.5,y:113.9},0).wait(1).to({rotation:170.7,x:129.3,y:117.9},0).wait(1).to({rotation:172.2,x:125.9,y:121.8},0).wait(1).to({rotation:173.8,x:122.6,y:125.6},0).wait(1).to({rotation:175.3,x:119,y:129.3},0).wait(1).to({rotation:176.9,x:115.3,y:133},0).wait(1).to({rotation:178.4,x:111.6,y:136.5},0).wait(1).to({rotation:180,x:107.8,y:140},0).wait(1).to({rotation:181.6,x:103.8,y:143.3},0).wait(1).to({rotation:183.1,x:99.8,y:146.6},0).wait(1).to({rotation:184.7,x:95.7,y:149.7},0).wait(1).to({rotation:186.2,x:91.5,y:152.7},0).wait(1).to({rotation:187.8,x:87.2,y:155.6},0).wait(1).to({rotation:189.3,x:82.9,y:158.4},0).wait(1).to({rotation:190.9,x:78.5,y:161},0).wait(1).to({rotation:192.4,x:74,y:163.6},0).wait(1).to({rotation:194,x:69.4,y:166},0).wait(1).to({rotation:195.5,x:64.8,y:168.3},0).wait(1).to({rotation:197.1,x:60.1,y:170.5},0).wait(1).to({rotation:198.6,x:55.4,y:172.5},0).wait(1).to({rotation:200.2,x:50.6,y:174.4},0).wait(1).to({rotation:201.7,x:45.8,y:176.2},0).wait(1).to({rotation:203.3,x:40.9,y:177.9},0).wait(1).to({rotation:204.8,x:36,y:179.4},0).wait(1).to({rotation:206.4,x:31,y:180.7},0).wait(1).to({rotation:207.9,x:25.9,y:182},0).wait(1).to({rotation:209.5,x:21,y:183.1},0).wait(1).to({rotation:211,x:15.9,y:184.1},0).wait(1).to({rotation:212.6,x:10.8,y:184.9},0).wait(1).to({rotation:214.1,x:5.7,y:185.6},0).wait(1).to({rotation:215.7,x:0.6,y:186.1},0).wait(1).to({rotation:217.2,x:-4.5,y:186.6},0).wait(1).to({rotation:218.8,x:-9.7,y:186.8},0).wait(1).to({rotation:220.3,x:-14.8,y:187},0).wait(1).to({rotation:221.9,x:-20},0).wait(1).to({rotation:223.4,x:-25.2,y:186.9},0).wait(1).to({rotation:225,x:-30.3,y:186.6},0).wait(1).to({rotation:226.6,x:-35.4,y:186.2},0).wait(1).to({rotation:228.1,x:-40.6,y:185.6},0).wait(1).to({rotation:229.7,x:-45.7,y:184.9},0).wait(1).to({rotation:231.2,x:-50.8,y:184.1},0).wait(1).to({rotation:232.8,x:-55.9,y:183.1},0).wait(1).to({rotation:234.3,x:-60.9,y:182},0).wait(1).to({rotation:235.9,x:-65.9,y:180.8},0).wait(1).to({rotation:237.4,x:-70.9,y:179.4},0).wait(1).to({rotation:239,x:-75.8,y:177.9},0).wait(1).to({rotation:240.5,x:-80.7,y:176.2},0).wait(1).to({rotation:242.1,x:-85.5,y:174.5},0).wait(1).to({rotation:243.6,x:-90.3,y:172.5},0).wait(1).to({rotation:245.2,x:-95,y:170.5},0).wait(1).to({rotation:246.7,x:-99.8,y:168.4},0).wait(1).to({rotation:248.3,x:-104.4,y:166},0).wait(1).to({rotation:249.8,x:-108.9,y:163.7},0).wait(1).to({rotation:251.4,x:-113.4,y:161.1},0).wait(1).to({rotation:252.9,x:-117.8,y:158.5},0).wait(1).to({rotation:254.5,x:-122.1,y:155.7},0).wait(1).to({rotation:256,x:-126.4,y:152.8},0).wait(1).to({rotation:257.6,x:-130.6,y:149.8},0).wait(1).to({rotation:259.1,x:-134.8,y:146.7},0).wait(1).to({rotation:260.7,x:-138.8,y:143.4},0).wait(1).to({rotation:262.2,x:-142.7,y:140.1},0).wait(1).to({rotation:263.8,x:-146.5,y:136.7},0).wait(1).to({rotation:265.3,x:-150.2,y:133.1},0).wait(1).to({rotation:266.9,x:-153.9,y:129.4},0).wait(1).to({rotation:268.4,x:-157.4,y:125.8},0).wait(1).to({rotation:270,x:-160.9,y:121.9},0).wait(1).to({rotation:271.6,x:-164.2,y:118},0).wait(1).to({rotation:273.1,x:-167.5,y:114},0).wait(1).to({rotation:274.7,x:-170.6,y:109.9},0).wait(1).to({rotation:276.2,x:-173.6,y:105.7},0).wait(1).to({rotation:277.8,x:-176.5,y:101.4},0).wait(1).to({rotation:279.3,x:-179.3,y:97.1},0).wait(1).to({rotation:280.9,x:-181.9,y:92.6},0).wait(1).to({rotation:282.4,x:-184.5,y:88.1},0).wait(1).to({rotation:284,x:-186.9,y:83.6},0).wait(1).to({rotation:285.5,x:-189.2,y:78.9},0).wait(1).to({rotation:287.1,x:-191.4,y:74.3},0).wait(1).to({rotation:288.6,x:-193.4,y:69.5},0).wait(1).to({rotation:290.2,x:-195.3,y:64.8},0).wait(1).to({rotation:291.7,x:-197.1,y:59.9},0).wait(1).to({rotation:293.3,x:-198.8,y:55},0).wait(1).to({rotation:294.8,x:-200.3,y:50.1},0).wait(1).to({rotation:296.4,x:-201.6,y:45.1},0).wait(1).to({rotation:297.9,x:-202.9,y:40.1},0).wait(1).to({rotation:299.5,x:-204,y:35.1},0).wait(1).to({rotation:301,x:-205,y:30},0).wait(1).to({rotation:302.6,x:-205.8,y:24.9},0).wait(1).to({rotation:304.1,x:-206.5,y:19.8},0).wait(1).to({rotation:305.7,x:-207,y:14.7},0).wait(1).to({rotation:307.2,x:-207.5,y:9.6},0).wait(1).to({rotation:308.8,x:-207.7,y:4.4},0).wait(1).to({rotation:310.3,x:-207.9,y:-0.6},0).wait(1).to({rotation:311.9,y:-5.8},0).wait(1).to({rotation:313.4,x:-207.8,y:-11},0).wait(1).to({rotation:315,x:-207.5,y:-16.2},0).wait(1).to({rotation:316.6,x:-207.1,y:-21.3},0).wait(1).to({rotation:318.1,x:-206.5,y:-26.4},0).wait(1).to({rotation:319.7,x:-205.8,y:-31.5},0).wait(1).to({rotation:321.2,x:-205,y:-36.6},0).wait(1).to({rotation:322.8,x:-204,y:-41.7},0).wait(1).to({rotation:324.3,x:-202.9,y:-46.7},0).wait(1).to({rotation:325.9,x:-201.7,y:-51.7},0).wait(1).to({rotation:327.4,x:-200.3,y:-56.7},0).wait(1).to({rotation:329,x:-198.8,y:-61.6},0).wait(1).to({rotation:330.5,x:-197.1,y:-66.5},0).wait(1).to({rotation:332.1,x:-195.4,y:-71.3},0).wait(1).to({rotation:333.6,x:-193.4,y:-76.1},0).wait(1).to({rotation:335.2,x:-191.4,y:-80.9},0).wait(1).to({rotation:336.7,x:-189.3,y:-85.6},0).wait(1).to({rotation:338.3,x:-186.9,y:-90.2},0).wait(1).to({rotation:339.8,x:-184.6,y:-94.7},0).wait(1).to({rotation:341.4,x:-182,y:-99.2},0).wait(1).to({rotation:342.9,x:-179.4,y:-103.6},0).wait(1).to({rotation:344.5,x:-176.6,y:-108},0).wait(1).to({rotation:346,x:-173.7,y:-112.3},0).wait(1).to({rotation:347.6,x:-170.7,y:-116.5},0).wait(1).to({rotation:349.1,x:-167.6,y:-120.6},0).wait(1).to({rotation:350.7,x:-164.3,y:-124.6},0).wait(1).to({rotation:352.2,x:-161,y:-128.6},0).wait(1).to({rotation:353.8,x:-157.6,y:-132.3},0).wait(1).to({rotation:355.3,x:-154,y:-136.1},0).wait(1).to({rotation:356.9,x:-150.3,y:-139.8},0).wait(1).to({rotation:358.4,x:-146.7,y:-143.3},0).wait(1).to({rotation:360,x:-142.8,y:-146.8},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-204.4,-216.8,123,140);


(lib.main = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー 2
	this.instance = new lib.宇宙飛行士１のアニメーション();
	this.instance.parent = this;
	this.instance.setTransform(608.3,814.9,1,1,0,0,0,124.5,125.4);

	this.instance_1 = new lib.astronaut_about_1("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(1280.6,526.7,1,1,110.3);

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
	this.instance_4.setTransform(514,694,1,1,-81,0,0,142,165);

	this.instance_5 = new lib.about_txt_1("synched",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(1402.4,876,1,1,120,0,0,261.1,55.4);

	this.instance_6 = new lib.about_icon_1("synched",0);
	this.instance_6.parent = this;
	this.instance_6.setTransform(1627.8,479.5,1,1,120,0,0,160,160.5);

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
	this.initialize(mode,startPosition,loop,{TOP:0,TO_ABOUT:1,ABOUT:9,TO_CONTACT:10,CONTACT:19,TO_TOP:20,LAST:29});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_9 = function() {
		this.stop();
	}
	this.frame_19 = function() {
		this.stop();
	}
	this.frame_29 = function() {
		this.gotoAndStop('TOP');
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(9).call(this.frame_9).wait(10).call(this.frame_19).wait(10).call(this.frame_29).wait(1));

	// レイヤー 3
	this.instance = new lib.main();
	this.instance.parent = this;
	this.instance.setTransform(155.1,1268.2,1.574,1.574,80.5,0,0,989.3,983.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:1000,regY:1000,scaleX:1.52,scaleY:1.52,rotation:58.4,x:239.7,y:1220.7},0).wait(1).to({scaleX:1.47,scaleY:1.47,rotation:36.3,x:347.7,y:1148.1},0).wait(1).to({scaleX:1.41,scaleY:1.41,rotation:14.1,x:455.2,y:1071.2},0).wait(1).to({scaleX:1.36,scaleY:1.36,rotation:-8,x:560.5,y:990.9},0).wait(1).to({scaleX:1.3,scaleY:1.3,rotation:-30.1,x:662.7,y:908.1},0).wait(1).to({scaleX:1.25,scaleY:1.25,rotation:-52.2,x:761.2,y:824.5},0).wait(1).to({scaleX:1.19,scaleY:1.19,rotation:-74.3,x:856.1,y:741.3},0).wait(1).to({scaleX:1.14,scaleY:1.14,rotation:-96.4,x:948,y:660},0).wait(1).to({scaleX:1.08,scaleY:1.08,rotation:-118.5,x:1037.9,y:581.3},0).wait(1).to({scaleX:1.05,scaleY:1.05,rotation:-106.7,x:996.5,y:525.4},0).wait(1).to({scaleX:1.01,scaleY:1.01,rotation:-94.8,x:954.4,y:470.1},0).wait(1).to({scaleX:0.98,scaleY:0.98,rotation:-83,x:911.5,y:414.9},0).wait(1).to({scaleX:0.95,scaleY:0.95,rotation:-71.1,x:867.6,y:360},0).wait(1).to({scaleX:0.92,scaleY:0.92,rotation:-59.3,x:823,y:305},0).wait(1).to({scaleX:0.89,scaleY:0.89,rotation:-47.4,x:777.6,y:249.7},0).wait(1).to({scaleX:0.85,scaleY:0.85,rotation:-35.6,x:731.5,y:194.2},0).wait(1).to({scaleX:0.82,scaleY:0.82,rotation:-23.7,x:684.9,y:138.1},0).wait(1).to({scaleX:0.79,scaleY:0.79,rotation:-11.9,x:637.7,y:81.4},0).wait(1).to({scaleX:0.76,scaleY:0.76,rotation:0,x:590.4,y:24.1},0).wait(1).to({scaleX:0.84,scaleY:0.84,rotation:8,x:546.6,y:152.1},0).wait(1).to({scaleX:0.92,scaleY:0.92,rotation:16.1,x:502.3,y:280.1},0).wait(1).to({scaleX:1,scaleY:1,rotation:24.1,x:457.5,y:407.9},0).wait(1).to({scaleX:1.08,scaleY:1.08,rotation:32.2,x:412.1,y:535.4},0).wait(1).to({scaleX:1.17,scaleY:1.17,rotation:40.2,x:366.3,y:662.5},0).wait(1).to({scaleX:1.25,scaleY:1.25,rotation:48.3,x:320.2,y:789.1},0).wait(1).to({scaleX:1.33,scaleY:1.33,rotation:56.3,x:273.7,y:915.1},0).wait(1).to({scaleX:1.41,scaleY:1.41,rotation:64.4,x:227,y:1040.4},0).wait(1).to({scaleX:1.49,scaleY:1.49,rotation:72.4,x:180.2,y:1165.1},0).wait(1).to({scaleX:1.57,scaleY:1.57,rotation:80.5,x:133.4,y:1289},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1167.1,-139,3623.9,3623.9);
// library properties:
lib.properties = {
	width: 1024,
	height: 768,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/sample_atlas_.png?1481015235449", id:"sample_atlas_"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;