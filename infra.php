<?php
use infrajs\event\Event;
use infrajs\config\Config;
use infrajs\controller\Layer;

Event::handler('Layer.oninit', function (&$layer) {
	$conf = &Layer::pop($layer, 'conf');
	if (is_string($conf)) $conf = &Config::pub($conf);
	$layer['conf'] = &$conf;
}, 'conf');
