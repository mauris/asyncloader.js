#asyncloader.js

The Ultimate Blockbuster Asynchronous JavaScript Loader, period.

##What does it do?

Asyncloader is a mini tiny JavaScript library that allows you to load JavaScript libraries asynchronously, with simplified and effective dependency resolution engine. It's a dead simple and no-hassle alternative to `requirejs` without the need to write more code or modify your libraries.

[Read why](http://javascriptplayground.com/blog/2013/06/think-async/) [you should](http://www.mobl-lang.org/283/reducing-the-pain-synchronous-asynchronous-programming/) [go async.](http://blog.ometer.com/2011/07/24/callbacks-synchronous-and-asynchronous/)

##How do I use it?

1. First you load `asyncloader.js` up on your page in a `<script>` tag like this:

        <script src="scripts/asyncloader.js"></script>

2.  Then start including your libraries using the `add()` method:

        <script>
    		AsyncLoader.add('//cdnjs.cloudflare.com/ajax/libs/jquery/2.0.3/jquery.min.js', 'jquery');
        </script>

3. If you are using a dependency that requires another dependency, simply use the `depend()` method and declare its dependencies. It will be asynchronously loaded after its dependencies are loaded. 

		<script>
	 		// doesn't need to be in order
	        AsyncLoader.depends(['jquery'], '//cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.0.2/js/bootstrap.min.js', 'bootstrap');
	        AsyncLoader.add('//cdnjs.cloudflare.com/ajax/libs/jquery/2.0.3/jquery.min.js', 'jquery');
	    </script>

##What can I use it with?

- jQuery and other JavaScript frameworks

        AsyncLoader.add('//cdnjs.cloudflare.com/ajax/libs/jquery/2.0.3/jquery.min.js', 'jquery');

- Google Analytics or other JavaScript analytics

        var _gaq = _gaq || [['_setAccount', 'UA-XXXXXXXX-Y'], ['_setDomainName', 'example.com'], ['_trackPageview']];
        AsyncLoader.add(('https:' == document.location.protocol ? 'https://' : 'http://') + 'stats.g.doubleclick.net/dc.js', 'ga');

- Twitter Bootstrap and other UI frameworks

        AsyncLoader.depends(['jquery'], '//cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.0.2/js/bootstrap.min.js', 'bootstrap');

- Social Media plugins like Facebook like buttons, Twitter tweet buttons, Google Plus buttons etc.

        AsyncLoader.add('https://apis.google.com/js/plusone.js', 'gplus');
        AsyncLoader.add('//connect.facebook.net/en_US/all.js#xfbml=1&appId=XXXXXXXX', 'fb-sdk');
        AsyncLoader.add('//platform.twitter.com/widgets.js', 'twitter-wjs');

- other JavaScript plugins you want use to make fanciful websites. (such as your own scripts)

		AsyncLoader.depends(
			['bootstrap', 'jquery'],
			'scripts/mysite.js',
			function () {
				console.log('mysite.js has loaded');
			}
		);

##Which sites are using it now?

- [HeartCode's website](http://heartcode.sg)
- [HeartCode's blog](http://blog.heartcode.sg)

##License

Copyright (C) 2013, Sam-Mauris Yong. All rights reserved.

`asyncloader.js` is released under New BSD 3-Clause license. See file LICENSE or visit [http://opensource.org/licenses/BSD-3-Clause](http://opensource.org/licenses/BSD-3-Clause) for full license details.