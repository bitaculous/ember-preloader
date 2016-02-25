# This is a manifest file that'll be compiled into `app.js`.

#= require jquery

class @App
  # === Variables ===

  defaults:
    logging: false

  # === Public ===

  constructor: (element, options = {}) ->
    @app     = document.querySelector element
    @options = extend.call @, @defaults, options

    log.call @, 'Application successfully launched.'

    @app.insertAdjacentHTML 'beforeend', '<main class="content"></main>'

    content = document.querySelector '.app .content'
    content.insertAdjacentHTML 'beforeend', '<h1>Ember Preloader</h1>'
    content.insertAdjacentHTML 'beforeend', '<h2>A Preloader for ambitious web applications.</h2>'

    return

  # === Private ===

  log = (message, level = 'info') ->
    if @options.logging
      switch level
        when 'info'
          console.info message
        when 'warning'
          console.warn message
        when 'error'
          console.error message
        when 'debug'
          console.debug message

    return

  extend = (destination, source) ->
    Object.keys(source).forEach (key) ->
      destination[key] = source[key]

      return

    destination