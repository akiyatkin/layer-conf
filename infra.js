import { Event } from '/vendor/infrajs/event/Event.js'
import { Template } from '/vendor/infrajs/template/Template.js'
import { Config } from '/vendor/infrajs/config/Config.js'	

Event.one('Controller.oninit', function () {
	Template.scope['~conf'] = Config.get();
});

Event.handler('Layer.oninit', function (layer) {
	var conf = Layer.pop(layer, 'conf');
	if (typeof(conf) == 'string') conf = Config.get(conf);
	layer['conf'] = conf;
}, 'conf');