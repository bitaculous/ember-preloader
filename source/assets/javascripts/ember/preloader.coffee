# This is a manifest file that'll be compiled into `preloader.js`.

#= require ./preloader/prerequisites

class @Preloader
  # === Constants ===

  STATES:
    INITIALIZED: 'initialized'
    ACTIVE:      'active'
    LOADING:     'loading'
    COMPLETE:    'complete'

  # === Variables ===

  preloader: null

  manifest: null

  options: null

  classList: null

  loader: null

  progress: null

  logo: null

  defaults:
    loader:
      # The types which the loader supports.
      types: ['css', 'image', 'javascript']

      # The maxium of connections to use.
      maxConnections: 5

    progress:
      # Turn off progress by setting it to `false`.
      enabled: true

      # Changes the minimum percentage used upon starting, the default is `0.08`.
      # minimum: 0.08

      # Adjust animation settings using `easing` (a CSS easing string) and `speed` (in ms), the defaults are `ease` and
      # `200`.
      # easing: 'ease'
      # speed:  200

      # Turn off the automatic incrementing behavior by setting this to `false`, the default is `true`.
      # trickle: true

      # You can adjust the trickle rate (how much to increase per trickle) and the trickle speed (how often to trickle,
      # in ms), the defaults are `0.02` and `800`.
      # trickleRate:  0.02
      # trickleSpeed: 800

      # Turn off loading spinner by setting it to `false`, the default is `true`.
      # showSpinner: true

      # The position using
      # positionUsing: ''

      # The bar selector, the default is `[role="bar"]`.
      # barSelector: '[role="bar"]'

      # The spinner selector, the default is `[role="spinner"]`.
      # spinnerSelector: '[role="spinner"]'

      # Specify this to change the parent container, the default is `body`.
      # parent: 'body'

      # Markup for progress. To keep the progress bar working, keep an element with `role='bar'` in there. See the
      # default NProgress template for reference.
      # template: '''
      # <div class="bar" role="bar">
      #   <div class="peg"></div>
      # </div>
      #
      # <div class="spinner" role="spinner">
      #   <div class="spinner-icon"></div>
      # </div>
      # '''

    logo:
      # Turn off logo by setting it to `false`.
      enabled: true

      # Markup for logo.
      template: '<figure class="logo animated"></figure>'

    cooling:
      # The cooling time in ms.
      time: 1000

    # Before callback
    before: ->
      return

    # Complete callback, all files are loaded.
    complete: ->
      return

    logging: false

  # === Public ===

  constructor: (selector, manifest, options = {}) ->
    @preloader = document.querySelector selector
    @manifest  = manifest
    @options   = extend.call @, @defaults, options

    if @preloader
      initialize.call @

      @load @manifest if @manifest

    return

  load: (manifest) ->
    manifest = buildManifest.call @, manifest

    if manifest and manifest.length > 0
      loading.call @

      log.call @, "Loading manifest with #{manifest.length} files..."

      @loader.loadManifest manifest

    return

  stop: ->
    do @loader.close if @loader

    do @progress.done if @progress

    @classList.remove @STATES.LOADING

    setTimeout (=>
      @classList.remove @STATES.ACTIVE

      return
    ), @options.cooling.time

    return

  # === Events ===

  onFileLoaded: (event) =>
    item   = event.item
    id     = item.id
    result = event.result

    log.call @, "File (`#{id}`) loaded."

    return

  onProgress: (event) =>
    log.call @, 'On progress...', 'debug'

    do @progress.inc if @progress

    return

  onFileProgress: (event) =>
    log.call @, 'On file progress...', 'debug'

    return

  onComplete: (event) =>
    log.call @, 'All files loaded.'

    complete.call @

    return

  onError: (event) =>
    item = event.data
    id   = item.id

    log.call @, "The file (`#{id}`) failed to load."

    return

  # === Private ===

  initialize = ->
    @classList = @preloader.classList

    setupProgress.call @

    setupLogo.call @

    setupLoader.call @

    before.call @

    return

  setupProgress = ->
    if @options.progress.enabled
      @progress = NProgress.configure @options.progress

    return

  setupLogo = ->
    if @options.logo.enabled
      @logo = @preloader.insertAdjacentHTML 'beforeend', @options.logo.template

    return

  setupLoader = ->
    @loader = new createjs.LoadQueue true
    @loader.on 'fileload',     @onFileLoaded
    @loader.on 'progress',     @onProgress
    @loader.on 'complete',     @onComplete
    @loader.on 'fileprogress', @onFileProgress
    @loader.on 'error',        @onError

    @loader.setMaxConnections @options.loader.maxConnections

    return

  before = ->
    @classList.add @STATES.INITIALIZED
    @classList.add @STATES.ACTIVE

    do @options.before

    do @progress.start if @progress

    return

  loading = ->
    @classList.add @STATES.LOADING

    return

  complete = ->
    do @options.complete

    do @progress.done if @progress

    @classList.add @STATES.COMPLETE
    @classList.remove @STATES.LOADING

    setTimeout (=>
      @classList.remove @STATES.ACTIVE

      return
    ), @options.cooling.time

    return

  buildManifest = (manifest) ->
    result = []

    if manifest.files
      manifest.files.forEach (file) =>
        type = file.type

        result.push file if type and type in @options.loader.types

        return

    if manifest.media
      manifest.media.forEach (medium) =>
        query = medium.query
        files = medium.files

        if query and files
          if verge.mq query
            files.forEach (file) =>
              type = file.type

              result.push file if type and type in @options.loader.types

        return

    result

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