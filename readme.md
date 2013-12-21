#asyncloader.js

The Ultimate Blockbuster Asynchronous JavaScript Loader, period.

##What does it do?

Asyncloader is a mini tiny JavaScript library that allows you to load JavaScript libraries asynchronously, with simplified and effective dependency resolution engine.

##How do I use it?

1. First you load `asyncloader.js` up on your page in a `<script>` tag like this:

        <script src="scripts/asyncloader.js"></script>

2.  Then start including your libraries using the `asyncloader.js` API:

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
 - Google Analytics or other JavaScript analytics
 - Twitter Bootstrap and other UI frameworks
 - Social Media plugins like Facebook like buttons, Twitter tweet buttons, Google Plus buttons etc.
 - other JavaScript plugins you want use to make fanciful websites.

##Which sites are using it now?

- [HeartCode's website](http://heartcode.sg)
- [HeartCode's blog](http://blog.heartcode.sg)

##License

Copyright (C) 2013, Sam-Mauris Yong. All rights reserved.

`asyncloader.js` is released under New BSD 3-Clause license. See file LICENSE or visit [http://opensource.org/licenses/BSD-3-Clause](http://opensource.org/licenses/BSD-3-Clause) for full license details.