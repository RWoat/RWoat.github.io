(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
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


(lib.path = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("ADNtvQAHACAIAEQAhAKA/AKQAxAJAmADQAXACATAAADXtbQgGEQhoDiQgWAxhJCIQg+B1ggBPQhCCihoDUQhWCwhYChQgCADgCAEQgBgEgBgEQADAAADABQAXACAfAQQAUAKAoAVAGVtbQgBAJgBAJQg2GnilGZQgzB/hjDUQhXC9gsBkQgCAFgBAEQgDAGgCAGQgCAEgCAEQAAAAAAABQgDAFgCAGIAAAUQADgYACgHAmwLiQgGALgGALAheJ2QACCOgvA7QgoAxhVAAQgqAAg6gzQg2gvgOgs");
	this.shape.setTransform(0,-88);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AldM6Qg2gvgOgsIAEgHQBYihBWiwQBojUBCiiQAghPA9h0QBJiJAXgxQBojiAGkQIAFgOQAhAKA/ALQAxAIAmADQg3GnikGZQg0B/hjDUQhWC9gsBkIgDAJIgFAMIgEAIIAAABIAAgBIAEgIIAFgMIAGACQACCOgvA7QgoAxhVAAQgqAAg6gzgAlnLqIA8AfIg8gfQgfgQgXgCQAXACAfAQgAhjKRIAAAUQADgYACgHIgFALg");
	this.shape_1.setTransform(-1.475,-87.725);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.path, new cjs.Rectangle(-45.5,-177,91,178), null);


(lib.paperPlane = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#CC0099").ss(5,1,1).p("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");
	this.shape.setTransform(-840.35,258.1909);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#660000").s().p("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");
	this.shape_1.setTransform(-834.825,259.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#CC0099").ss(1,1,1).p("ABl0NQgBAAAAAAQgKAFgJAEQgCAAgCABQgaAMgLAGQAGALAFAFQAGAEAPAFQAIADAKACABl0NIgBAAIAAAAIAAASADS0tQgOAFgoAXQgUAMgYgFQgFgBgGgCADm1JQgKAGgQAIQAAAAAAAAQgIAEgJAEQgVAKgeANQgUAIgPAHAjlSgQgCA2AhAkQANAPATAMQABAAACABQAQAKAgAMQABABACAAQAlAOA4AP");
	this.shape_2.setTransform(-1805.7584,128.575);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#0099FF").ss(1,1,1).p("Ag7g/QAGAOALAOQAQAWAYAWQAIAIAIAGQAGAGAGAFQAIAGAGAGQAFAFAFAEQAGAFAEAE");
	this.shape_3.setTransform(-16.85,3.575);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#CC0099").ss(5,1,1).p("ECO5gY/IjBAAMkTTAAAIgUAAEh8rAMgQA3DRASDtQAFA8AGBkQAGBPAKArQAZBsBcApQBiArD1AAUALIAAAA2dgMIQHwhufenMQThkdEbgxQLOh/WCjuQYQkGKih2QOGieL3iRQAAAAAAAAQUDj2NqjRQAOgEAOgDQAQgEAPgEQAEAAAEgBQAHgCAIgCECMTgYaIgKADIldAAQsXESvyDEQiQAdiVAaQu1Co0vCGQnZAwqyA8QmEAisCBDQ1lB7tPB5QjVAdtUBxQrABfm+BAQ1fDKtSDYQnTB3qDA2QjqAUlPATQi/AKl8AUQpQAgmSA4QAAAAgBAAQhDAJg/AKQnYBLmCCIIBxAAECONgXSQA8gOA7gPEiJLga3QgHA6gJBCEiJfgYWQAAAAAAABQgDAVgDAWQg1GhhgKzQhuMghAICQgGAvgFAtIA/AAIBoAAQglANgjANQgKAEgJAEQgcAKgbALQgfAMgeANIgoAA");
	this.shape_4.setTransform(-918,156);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#660000").s().p("Eh5EAZYQhcgogZhtQgKgrgGhPIgKigQgSjtg4jRIgEgeQGSg3JQghII7geQFPgTDqgUQKEg2HSh3QNSjXVgjKQG9hBLBheQNUhxDUgeQNPh4Vlh7ISGhlQKyg8HZgwQUviGO1ipQCVgaCQgcQPzjEMWkTIFdAAQAPAWAZAXIAQAOIghAlQtqDR0DD2IAAAAQr3CRuGCeQqiB24QEGQ2CDurOCAQkbAxzhEcQ/eHMnwBuUg2dAMIgLIAAAQj1AAhigrgEiNmAOzQghgkADg2IgWgCQBAoCBvsgQBfqzA2mhIAFgrIAEgBIATgJIAAAAIAAAAIAAAAIAAAAIgTAJIgEAAIAAAAIgSACQgKgJAFgNQAEgMANgDIALgBIAJgCQAMgBAFgGQAGgJADABIADAAIACgBIgBgBIAwABQAMABADADIADADQACADAAADIAAABQAAAGgEAEQgEAEgKABQgbAEgPABQABAHgIAEQgEACgGABQAXAFAVgMQAogXAOgFMETSAAAIAAAMQAGAOALAOIldAAQsWETvzDEQiQAciVAaQu1Cp0vCGQnZAwqyA8IyGBlQ1lB7tPB4QjUAetUBxQrBBem9BBQ1gDKtSDXQnSB3qEA2QjqAUlPATIo7AeQpQAhmSA3IAAAAIiDATQnYBLmCCIgEiJEgYaIgSgFIASAFgEiI6gZUIAAASIAAgSIAAAAIAAAAgEiIugZRIgMgDIAjgPIA0gXIg0AXIgjAPIAMADgECODgX9IgDgDIgEgFIgEgHIgkhGIgDgIIAAgGQACgLATgDQAIAEAHAPIAgBBQAFAKABAGIAAAEQgBAIgGADQgDACgDAAQgFAAgGgEgECMXgZMgEiI6gZUIAAAAg");
	this.shape_5.setTransform(-919.4077,161.275);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#CC0099").ss(5,1,1).p("EiJLga3QgGA1gIA8Qg2GuhrMCQh5NqhAIUICnAAIBxAAECO5gY/MkXcAAAEh8rAMgQA3DRASDtQAFA8AGBkQAGBPAKArQAZBsBcApQBiArD1AAUALIAAAA2dgMIQHwhufenMQThkdEbgxQLOh/WCjuQYQkGKih2QOGieL3iRQAAAAABgBQUJj2NtjTQABAAAAAAQBUgUBRgUQAAAAABAAQAagHAZgGECMUgYXIloAAQsWESvyDEIgBAAQiQAdiVAaQu1Co0vCGQnZAwqyA8QmEAisCBDQ1lB7tPB5QjVAdtUBxQrABfm+BAQ1fDKtSDYQnTB3qDA2QjqAUlPATQi/AKl8AUQpQAgmSA4QAAAAgBAAQhDAJg/AKQnYBLmCCIQhKAahHAdQgfAMgfANIgoAA");
	this.shape_6.setTransform(-918,156);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#660000").s().p("Eh5gAZUQhcgogZhtQgKgrgGhPIgKigQgSjtg4jRIgEgeQGSg3JQghII7geQFPgTDqgUQKEg2HSh3QNSjXVgjKQG9hBLBheQNUhxDUgeQNPh4Vlh7ISGhlQKyg8HZgwQUviGO1ipQCVgaCQgcIABAAQPyjEMWkTIFoAAIloAAQsWETvyDEIgBAAQiQAciVAaQu1Cp0vCGQnZAwqyA8IyGBlQ1lB7tPB4QjUAetUBxQrBBem9BBQ1gDKtSDXQnSB3qEA2QjqAUlPATIo7AeQpQAhmSA3IAAAAIiDATQnYBLmCCIIinAAQBBoUB5tqQBqsCA2mtIA2AGMEXcAAAIAXBdIilAoIgBABQtsDS0KD3IgBAAQr3CRuGCeQqiB24QEGQ2CDurOCAQkbAxzhEcQ/eHMnwBuUg2dAMIgLIAAAQj1AAhigrg");
	this.shape_7.setTransform(-916.625,161.6625);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2}]},6).to({state:[{t:this.shape_7},{t:this.shape_6}]},6).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1842.5,-18.5,1849,537.4);


(lib.graves = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#323232").ss(1,1,1).p("AEbAFIDDAAIAADDIjDAAgAhhjvIDSAAIAAHVIjSAAgAndgJID6AAIAAD5Ij6AAg");
	this.shape.setTransform(0,-24);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#666666").s().p("AndDwIAAj5ID6AAIAAD5gAhgDmIAAnVIDRAAIAAHVgAEbDIIAAjDIDDAAIAADDg");
	this.shape_1.setTransform(0,-24);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.graves, new cjs.Rectangle(-48.7,-49,97.5,50), null);


(lib.clockTower = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// door
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#323232").ss(1,1,1).p("AhPiuICfAAIAAFdIifAAg");
	this.shape.setTransform(27,-17.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#330000").s().p("AhPCvIAAldICfAAIAAFdg");
	this.shape_1.setTransform(27,-17.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(95));

	// bigHand
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#323232").ss(1,1,1).p("AizAAIFnAA");
	this.shape_2.setTransform(18,-248);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(95));

	// smallHand
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#323232").ss(1,1,1).p("AhFhZICLCz");
	this.shape_3.setTransform(7,-239);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(95));

	// elevator
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(1,1,1).p("AhFiuICLAAIAAFdIiLAAg");
	this.shape_4.setTransform(68,-17.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#33CCFF").s().p("AhFCvIAAldICLAAIAAFdg");
	this.shape_5.setTransform(68,-17.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5,p:{y:-17.5}},{t:this.shape_4,p:{y:-17.5}}]}).to({state:[{t:this.shape_5,p:{y:-24.85}},{t:this.shape_4,p:{y:-24.85}}]},1).to({state:[{t:this.shape_5,p:{y:-32.2}},{t:this.shape_4,p:{y:-32.2}}]},1).to({state:[{t:this.shape_5,p:{y:-39.5}},{t:this.shape_4,p:{y:-39.5}}]},1).to({state:[{t:this.shape_5,p:{y:-46.85}},{t:this.shape_4,p:{y:-46.85}}]},1).to({state:[{t:this.shape_5,p:{y:-54.2}},{t:this.shape_4,p:{y:-54.2}}]},1).to({state:[{t:this.shape_5,p:{y:-61.55}},{t:this.shape_4,p:{y:-61.55}}]},1).to({state:[{t:this.shape_5,p:{y:-68.9}},{t:this.shape_4,p:{y:-68.9}}]},1).to({state:[{t:this.shape_5,p:{y:-76.25}},{t:this.shape_4,p:{y:-76.25}}]},1).to({state:[{t:this.shape_5,p:{y:-83.55}},{t:this.shape_4,p:{y:-83.55}}]},1).to({state:[{t:this.shape_5,p:{y:-90.9}},{t:this.shape_4,p:{y:-90.9}}]},1).to({state:[{t:this.shape_5,p:{y:-98.25}},{t:this.shape_4,p:{y:-98.25}}]},1).to({state:[{t:this.shape_5,p:{y:-105.6}},{t:this.shape_4,p:{y:-105.6}}]},1).to({state:[{t:this.shape_5,p:{y:-112.95}},{t:this.shape_4,p:{y:-112.95}}]},1).to({state:[{t:this.shape_5,p:{y:-120.25}},{t:this.shape_4,p:{y:-120.25}}]},1).to({state:[{t:this.shape_5,p:{y:-127.6}},{t:this.shape_4,p:{y:-127.6}}]},1).to({state:[{t:this.shape_5,p:{y:-134.95}},{t:this.shape_4,p:{y:-134.95}}]},1).to({state:[{t:this.shape_5,p:{y:-142.3}},{t:this.shape_4,p:{y:-142.3}}]},1).to({state:[{t:this.shape_5,p:{y:-149.65}},{t:this.shape_4,p:{y:-149.65}}]},1).to({state:[{t:this.shape_5,p:{y:-156.95}},{t:this.shape_4,p:{y:-156.95}}]},1).to({state:[{t:this.shape_5,p:{y:-164.3}},{t:this.shape_4,p:{y:-164.3}}]},1).to({state:[{t:this.shape_5,p:{y:-171.65}},{t:this.shape_4,p:{y:-171.65}}]},1).to({state:[{t:this.shape_5,p:{y:-179}},{t:this.shape_4,p:{y:-179}}]},1).to({state:[{t:this.shape_5,p:{y:-186.35}},{t:this.shape_4,p:{y:-186.35}}]},1).to({state:[{t:this.shape_5,p:{y:-193.7}},{t:this.shape_4,p:{y:-193.7}}]},1).to({state:[{t:this.shape_5,p:{y:-201}},{t:this.shape_4,p:{y:-201}}]},1).to({state:[{t:this.shape_5,p:{y:-208.35}},{t:this.shape_4,p:{y:-208.35}}]},1).to({state:[{t:this.shape_5,p:{y:-215.7}},{t:this.shape_4,p:{y:-215.7}}]},1).to({state:[{t:this.shape_5,p:{y:-223.05}},{t:this.shape_4,p:{y:-223.05}}]},1).to({state:[{t:this.shape_5,p:{y:-230.4}},{t:this.shape_4,p:{y:-230.4}}]},1).to({state:[{t:this.shape_5,p:{y:-237.7}},{t:this.shape_4,p:{y:-237.7}}]},1).to({state:[{t:this.shape_5,p:{y:-245.05}},{t:this.shape_4,p:{y:-245.05}}]},1).to({state:[{t:this.shape_5,p:{y:-252.4}},{t:this.shape_4,p:{y:-252.4}}]},1).to({state:[{t:this.shape_5,p:{y:-259.75}},{t:this.shape_4,p:{y:-259.75}}]},1).to({state:[{t:this.shape_5,p:{y:-267.1}},{t:this.shape_4,p:{y:-267.1}}]},1).to({state:[{t:this.shape_5,p:{y:-274.45}},{t:this.shape_4,p:{y:-274.45}}]},1).to({state:[{t:this.shape_5,p:{y:-281.75}},{t:this.shape_4,p:{y:-281.75}}]},1).to({state:[{t:this.shape_5,p:{y:-289.1}},{t:this.shape_4,p:{y:-289.1}}]},1).to({state:[{t:this.shape_5,p:{y:-296.45}},{t:this.shape_4,p:{y:-296.45}}]},1).to({state:[{t:this.shape_5,p:{y:-296.45}},{t:this.shape_4,p:{y:-296.45}}]},1).to({state:[{t:this.shape_5,p:{y:-296.45}},{t:this.shape_4,p:{y:-296.45}}]},1).to({state:[{t:this.shape_5,p:{y:-296.45}},{t:this.shape_4,p:{y:-296.45}}]},1).to({state:[{t:this.shape_5,p:{y:-296.45}},{t:this.shape_4,p:{y:-296.45}}]},1).to({state:[{t:this.shape_5,p:{y:-296.45}},{t:this.shape_4,p:{y:-296.45}}]},1).to({state:[{t:this.shape_5,p:{y:-296.45}},{t:this.shape_4,p:{y:-296.45}}]},1).to({state:[{t:this.shape_5,p:{y:-296.45}},{t:this.shape_4,p:{y:-296.45}}]},1).to({state:[{t:this.shape_5,p:{y:-296.45}},{t:this.shape_4,p:{y:-296.45}}]},1).to({state:[{t:this.shape_5,p:{y:-289.5}},{t:this.shape_4,p:{y:-289.5}}]},1).to({state:[{t:this.shape_5,p:{y:-282.5}},{t:this.shape_4,p:{y:-282.5}}]},1).to({state:[{t:this.shape_5,p:{y:-275.55}},{t:this.shape_4,p:{y:-275.55}}]},1).to({state:[{t:this.shape_5,p:{y:-268.55}},{t:this.shape_4,p:{y:-268.55}}]},1).to({state:[{t:this.shape_5,p:{y:-261.6}},{t:this.shape_4,p:{y:-261.6}}]},1).to({state:[{t:this.shape_5,p:{y:-254.6}},{t:this.shape_4,p:{y:-254.6}}]},1).to({state:[{t:this.shape_5,p:{y:-247.65}},{t:this.shape_4,p:{y:-247.65}}]},1).to({state:[{t:this.shape_5,p:{y:-240.65}},{t:this.shape_4,p:{y:-240.65}}]},1).to({state:[{t:this.shape_5,p:{y:-233.7}},{t:this.shape_4,p:{y:-233.7}}]},1).to({state:[{t:this.shape_5,p:{y:-226.7}},{t:this.shape_4,p:{y:-226.7}}]},1).to({state:[{t:this.shape_5,p:{y:-219.75}},{t:this.shape_4,p:{y:-219.75}}]},1).to({state:[{t:this.shape_5,p:{y:-212.75}},{t:this.shape_4,p:{y:-212.75}}]},1).to({state:[{t:this.shape_5,p:{y:-205.8}},{t:this.shape_4,p:{y:-205.8}}]},1).to({state:[{t:this.shape_5,p:{y:-198.8}},{t:this.shape_4,p:{y:-198.8}}]},1).to({state:[{t:this.shape_5,p:{y:-191.85}},{t:this.shape_4,p:{y:-191.85}}]},1).to({state:[{t:this.shape_5,p:{y:-184.85}},{t:this.shape_4,p:{y:-184.85}}]},1).to({state:[{t:this.shape_5,p:{y:-177.9}},{t:this.shape_4,p:{y:-177.9}}]},1).to({state:[{t:this.shape_5,p:{y:-170.9}},{t:this.shape_4,p:{y:-170.9}}]},1).to({state:[{t:this.shape_5,p:{y:-163.95}},{t:this.shape_4,p:{y:-163.95}}]},1).to({state:[{t:this.shape_5,p:{y:-156.95}},{t:this.shape_4,p:{y:-156.95}}]},1).to({state:[{t:this.shape_5,p:{y:-150}},{t:this.shape_4,p:{y:-150}}]},1).to({state:[{t:this.shape_5,p:{y:-143.05}},{t:this.shape_4,p:{y:-143.05}}]},1).to({state:[{t:this.shape_5,p:{y:-136.05}},{t:this.shape_4,p:{y:-136.05}}]},1).to({state:[{t:this.shape_5,p:{y:-129.1}},{t:this.shape_4,p:{y:-129.1}}]},1).to({state:[{t:this.shape_5,p:{y:-122.1}},{t:this.shape_4,p:{y:-122.1}}]},1).to({state:[{t:this.shape_5,p:{y:-115.15}},{t:this.shape_4,p:{y:-115.15}}]},1).to({state:[{t:this.shape_5,p:{y:-108.15}},{t:this.shape_4,p:{y:-108.15}}]},1).to({state:[{t:this.shape_5,p:{y:-101.2}},{t:this.shape_4,p:{y:-101.2}}]},1).to({state:[{t:this.shape_5,p:{y:-94.2}},{t:this.shape_4,p:{y:-94.2}}]},1).to({state:[{t:this.shape_5,p:{y:-87.25}},{t:this.shape_4,p:{y:-87.25}}]},1).to({state:[{t:this.shape_5,p:{y:-80.25}},{t:this.shape_4,p:{y:-80.25}}]},1).to({state:[{t:this.shape_5,p:{y:-73.3}},{t:this.shape_4,p:{y:-73.3}}]},1).to({state:[{t:this.shape_5,p:{y:-66.3}},{t:this.shape_4,p:{y:-66.3}}]},1).to({state:[{t:this.shape_5,p:{y:-59.35}},{t:this.shape_4,p:{y:-59.35}}]},1).to({state:[{t:this.shape_5,p:{y:-52.35}},{t:this.shape_4,p:{y:-52.35}}]},1).to({state:[{t:this.shape_5,p:{y:-45.4}},{t:this.shape_4,p:{y:-45.4}}]},1).to({state:[{t:this.shape_5,p:{y:-38.4}},{t:this.shape_4,p:{y:-38.4}}]},1).to({state:[{t:this.shape_5,p:{y:-31.45}},{t:this.shape_4,p:{y:-31.45}}]},1).to({state:[{t:this.shape_5,p:{y:-24.45}},{t:this.shape_4,p:{y:-24.45}}]},1).to({state:[{t:this.shape_5,p:{y:-17.5}},{t:this.shape_4,p:{y:-17.5}}]},1).to({state:[{t:this.shape_5,p:{y:-17.5}},{t:this.shape_4,p:{y:-17.5}}]},1).to({state:[{t:this.shape_5,p:{y:-17.5}},{t:this.shape_4,p:{y:-17.5}}]},1).to({state:[{t:this.shape_5,p:{y:-17.5}},{t:this.shape_4,p:{y:-17.5}}]},1).to({state:[{t:this.shape_5,p:{y:-17.5}},{t:this.shape_4,p:{y:-17.5}}]},1).to({state:[{t:this.shape_5,p:{y:-17.5}},{t:this.shape_4,p:{y:-17.5}}]},1).to({state:[{t:this.shape_5,p:{y:-17.5}},{t:this.shape_4,p:{y:-17.5}}]},1).to({state:[{t:this.shape_5,p:{y:-17.5}},{t:this.shape_4,p:{y:-17.5}}]},1).to({state:[{t:this.shape_5,p:{y:-17.5}},{t:this.shape_4,p:{y:-17.5}}]},1).wait(1));

	// base
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#323232").ss(1,1,1).p("AF9tfQAVDCgbETQgcESj4jWQj3jXhqhpQhphqAAiVQAAiVBphpQBqhqCUAAQCVAABqBqQBpBpAVDDgAph4hITDAAMAAAAxDIzDAAg");
	this.shape_6.setTransform(0,-156.975);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("ABUGkQj3jWhqhqQhphoAAiVQAAiVBphqQBqhpCVAAQCUAABpBpQBqBqAVDCQAVDCgcESQgPCahVAAQhCAAhtheg");
	this.shape_7.setTransform(1.5064,-232.5242);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#999999").s().p("AphYiMAAAgxDITDAAMAAAAxDgAj+yLQhpBpAACVQAACVBpBqQBqBpD3DXQD4DWAbkSQAckTgVjCQgVjDhphpQhqhqiVAAQiUAAhqBqg");
	this.shape_8.setTransform(0,-156.975);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6}]}).wait(95));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-62,-314.9,138,315.9);


(lib.backdrop = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#009900").ss(1,1,1).p("EBRGAAAQAADpkmDKQl3ECtTDRUgXwAF1ghmAAAUghlAAAgXwgF1QtTjRl3kCQkmjKAAjpQAAoPXwl2UAXwgF1AhlAAAUAhmAAAAXwAF1QXwF2AAIPg");
	this.shape.setTransform(4.05,-127.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#323232").ss(1,1,1).p("EBQKgDqIDIAAMAAAA4FImKAAEhTRgDqMAAAgwwMCjbAAAMAAAAwwgEhL2A0bInbAAMAAAg4F");
	this.shape_1.setTransform(0.025,-419.475);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#333333").s().p("EBNIAcDQEmjLAAjoQAAoQ3wl2UgXwgF1ghmAAAUghlAAAgXwAF1Q3wF2AAIQQAADoEnDLInbAAMAAAg4FMCjbAAAIDIAAMAAAA4Fg");
	this.shape_2.setTransform(0.025,-263.475);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#003300").s().p("Eg5VAOFQtTjQl2kCQknjKAAjpQAAoPXwl1UAXwgF2AhlAAAUAhmAAAAXwAF2QXwF1AAIPQAADpknDKQl2ECtTDQUgXwAF2ghmAAAUghlAAAgXwgF2g");
	this.shape_3.setTransform(4.05,-127.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000033").s().p("EhRtAYYMAAAgwvMCjbAAAMAAAAwvg");
	this.shape_4.setTransform(-9.975,-598.95);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.backdrop, new cjs.Rectangle(-533.9,-755.9,1067.9,756.9), null);


(lib.paperPlane_flying = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.paperPlane();
	this.instance.setTransform(-1775.45,847.85,1,1,0,0,0,-840.4,258.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:-918,regY:250.2,rotation:2.707,x:-1589.7,y:704.05},0).wait(1).to({rotation:5.5527,x:-1327.4,y:584.45},0).wait(1).to({rotation:8.4702,x:-1066,y:480.6},0).wait(1).to({rotation:11.4449,x:-805.6,y:392.25},0).wait(1).to({rotation:14.4601,x:-546.05,y:318.95},0).wait(1).to({rotation:17.4977,x:-287.45,y:260.4},0).wait(1).to({rotation:20.5385,x:-29.85,y:216.25},0).wait(1).to({rotation:23.5632,x:226.9,y:186.15},0).wait(1).to({rotation:26.5531,x:482.6,y:169.6},0).wait(1).to({rotation:29.4902,x:737.4,y:166.45},0).wait(1).to({rotation:32.3586,x:991.15,y:176.25},0).wait(1).to({rotation:35.1441,x:1243.85,y:198.6},0).wait(1).to({rotation:37.835,x:1495.55,y:233.1},0).wait(1).to({rotation:40.4222,x:1746.1,y:279.5},0).wait(1).to({rotation:42.8988,x:1995.6,y:337.35},0).wait(1).to({rotation:45.2602,x:2244.05,y:406.25},0).wait(1).to({rotation:47.5038,x:2491.25,y:485.75},0).wait(1).to({rotation:49.6291,x:2737.45,y:575.6},0).wait(1).to({rotation:51.6367,x:2982.4,y:675.35},0).wait(1).to({rotation:53.5285,x:3226.2,y:784.6},0).wait(1).to({rotation:55.3074,x:3468.95,y:902.95},0).wait(1).to({rotation:56.9769,x:3710.45,y:1030.05},0).wait(1).to({rotation:58.541,x:3950.9,y:1165.5},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2613.9,-317.1,7253.799999999999,2136.2);


// stage content:
(lib.Green_background = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// path
	this.instance = new lib.path();
	this.instance.setTransform(474.5,571,1,1,0,0,0,0,-88);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// graves
	this.instance_1 = new lib.graves();
	this.instance_1.setTransform(796.95,595,1,1,0,0,0,0,-24);

	this.instance_2 = new lib.graves();
	this.instance_2.setTransform(730.95,519,1,1,0,0,0,0,-24);

	this.instance_3 = new lib.graves();
	this.instance_3.setTransform(637.95,591,1,1,0,0,0,0,-24);

	this.instance_4 = new lib.graves();
	this.instance_4.setTransform(570,519,1,1,0,0,0,0,-24);

	this.instance_5 = new lib.graves();
	this.instance_5.setTransform(412,519,1,1,0,0,0,0,-24);

	this.instance_6 = new lib.graves();
	this.instance_6.setTransform(330,594,1,1,0,0,0,0,-24);

	this.instance_7 = new lib.graves();
	this.instance_7.setTransform(253,519,1,1,0,0,0,0,-24);

	this.instance_8 = new lib.graves();
	this.instance_8.setTransform(143.75,567,1,1,0,0,0,0,-24);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1}]}).wait(1));

	// paperplane
	this.instance_9 = new lib.paperPlane_flying();
	this.instance_9.setTransform(474.25,257.75,0.0526,0.0526,0,0,0,685,912.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(1));

	// clockTower
	this.instance_10 = new lib.clockTower();
	this.instance_10.setTransform(480,327,1,1,0,0,0,0,-157);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(1));

	// backdrop
	this.instance_11 = new lib.backdrop();
	this.instance_11.setTransform(477.95,348.5,1,1,0,0,0,0,-377.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(424.5,290.6,587,435.9);
// library properties:
lib.properties = {
	id: 'FEB0C32BF0E3E149A5FA820038FF0128',
	width: 960,
	height: 640,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['FEB0C32BF0E3E149A5FA820038FF0128'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;