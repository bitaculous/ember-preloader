[Ember Preloader]
=================

[![Gemnasium Status][Gemnasium Status]][Gemnasium]

**A Preloader for ambitious web applications.**

Installation
------------

### [Bower]

Run `bower install bitaculous/ember-preloader`.

### [npm]

Run `npm install bitaculous/ember-preloader`.

Usage
-----

1. Include Ember Preloader Cascading Style Sheets

2. Include Ember Preloader JavaScript

3. Create a manifest, which specifies what and when to load

    ```coffeescript
    manifest =
      files: [
        {
          'id': 'ambitious.css'
          'type': 'css'
          'src': '/assets/stylesheets/ambitious.css'
        }

        {
          'id': 'ambitious.png'
          'type': 'image'
          'src': '/assets/images/ambitious.png'
        }

        {
          'id': 'ambitious.js'
          'type': 'javascript'
          'src': '/assets/javascripts/ambitious.js'
        }
      ]

      media: [
        {
          # Small, beginning at 320 until 480px
          slug: 'small'
          query: '(min-width: 320px) and (max-width: 480px)'
          files: [
            {
              'id': 'ambitious.png'
              'type': 'image'
              'src': '/assets/images/small/ambitious.png'
            }
          ]
        }

        {
          # Large, beginning at 1024px
          slug: 'large'
          query: '(min-width: 1024px)'
          files: [
            {
              'id': 'ambitious.png'
              'type': 'image'
              'src': '/assets/images/large/ambitious.png'
            }
          ]
        }
      ]
    ```

4. Configure and launch Ember Preloader

    ```coffeescript
    selector = '.preloader'

    preloader = new Preloader selector, manifest,
      before: ->
        console.info 'Before...'

        return
      complete: ->
        console.info 'Complete...'

        return
      logging: true
    ```

    or

    ```coffeescript
    selector = '.preloader'

    preloader = new Preloader selector, null,
      before: ->
        console.info 'Before...'

        return
      complete: ->
        console.info 'Complete...'

        return
      logging: true

    preloader.load manifest
    ```

Development
-----------

### Prerequisites

* [Ruby]
* [Node.js]

### Installation

1. Run `bundle` to install all dependencies with [Bundler]

2. Run `bower install` to install all dependencies with [Bower]

### Usage

1. Boot up [Middleman]

  ```
  $ ./bin/middleman/server
  ```

  or

  ```
  $ middleman --verbose
  ```

2. Open your Web browser at [http://0.0.0.0:4567] and start hacking

### Building Ember Preloader

Run `middleman build` or `middleman build --verbose`.

Bug Reports
-----------

Github Issues are used for managing bug reports and feature requests. If you run into issues, please search the issues
and submit new problems [here].

Versioning
----------

This library aims to adhere to [Semantic Versioning 2.0.0]. Violations of this scheme should be reported as bugs.
Specifically, if a minor or patch version is released that breaks backward compatibility, that version should be
immediately yanked and / or a new version should be immediately released that restores compatibility.

Credits
-------

### Ember Preloader uses the following libraries:

* [Assetify]

#### JavaScript

* [Modernizr]
* [NProgress.js]
* [PreloadJS]
* [verge]

License
-------

Ember Preloader is released under the [MIT License (MIT)], see [LICENSE].

[Assetify]: https://bitaculous.github.io/assetify/ "Assets used by Bitaculous, packaged for Bower, npm, Sass, Sprockets and Thor."
[Bower]: http://bower.io "A package manager for the web"
[Bundler]: http://bundler.io "The best way to manage a Ruby application's gems"
[Ember Preloader]: https://bitaculous.github.io/ember-preloader/ "A Preloader for ambitious web applications."
[Gemnasium]: https://gemnasium.com/bitaculous/ember-preloader "Ember Preloader at Gemnasium"
[Gemnasium Status]: https://img.shields.io/gemnasium/bitaculous/ember-preloader.svg?style=flat "Gemnasium Status"
[here]: https://github.com/bitaculous/ember-preloader/issues "Github Issues"
[http://0.0.0.0:4567]: http://0.0.0.0:4567 "Ember Preloader running on localhost"
[LICENSE]: https://raw.githubusercontent.com/bitaculous/ember-preloader/master/LICENSE "License"
[Middleman]: http://middlemanapp.com "Hand-crafted frontend development"
[MIT License (MIT)]: http://opensource.org/licenses/MIT "The MIT License (MIT)"
[Modernizr]: https://modernizr.com "The feature detection library for HTML5/CSS3"
[Node.js]: https://nodejs.org "An event-driven I/O server-side JavaScript environment based on V8."
[npm]: https://www.npmjs.com "A package manager for JavaScript"
[NProgress.js]: http://ricostacruz.com/nprogress/ "A nanoscopic progress bar. Featuring realistic trickle animations to convince your users that something is happening!"
[PreloadJS]: https://github.com/CreateJS/PreloadJS "Makes preloading assets & getting aggregate progress events easier in JavaScript."
[Ruby]: https://www.ruby-lang.org "A dynamic, open source programming language with a focus on simplicity and productivity."
[Semantic Versioning 2.0.0]: http://semver.org "Semantic Versioning 2.0.0"
[verge]: https://github.com/ryanve/verge "Viewport utilities modul"