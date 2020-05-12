import { Event } from '/vendor/infrajs/event/Event.js'
import { Config } from '/vendor/infrajs/config/Config.js'	

Event.handler('Layer.oninit', function (layer) {
	let conf = Layer.pop(layer, 'conf');
	if (typeof(conf) == 'string') conf = Config.get(conf);
	layer['conf'] = conf;
}, 'conf');