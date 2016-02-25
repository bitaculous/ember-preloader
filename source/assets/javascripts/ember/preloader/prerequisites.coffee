# This is a manifest file that'll be compiled into `prerequisites.js`.

# === Feature detection ====

#= require modernizr
#= require verge/verge

# === NProgress ====

#= require nprogress/nprogress

# === PreloadJS ====

# Taken from `https://github.com/CreateJS/PreloadJS/blob/master/build/config.json`.

#= require preloadjs/version

#= require createjs/utils/extend
#= require createjs/utils/promote
#= require createjs/utils/proxy
#= require createjs/utils/indexOf
#= require createjs/events/Event
#= require createjs/events/ErrorEvent
#= require createjs/events/EventDispatcher

#= require preloadjs/events/ProgressEvent
#= require preloadjs/utils/json3
#= require preloadjs/utils/DomUtils
#= require preloadjs/utils/DataUtils
#= require preloadjs/data/LoadItem
#= require preloadjs/utils/RequestUtils
#= require preloadjs/loaders/AbstractLoader
#= require preloadjs/loaders/AbstractMediaLoader
#= require preloadjs/net/AbstractRequest
#= require preloadjs/net/TagRequest
#= require preloadjs/net/MediaTagRequest
#= require preloadjs/net/XHRRequest
#= require preloadjs/LoadQueue

#= require preloadjs/loaders/CSSLoader
#= require preloadjs/loaders/ImageLoader
#= require preloadjs/loaders/JavaScriptLoader
#= require preloadjs/loaders/ManifestLoader

# --- Available loaders ---

# require preloadjs/loaders/BinaryLoader
# require preloadjs/loaders/JSONLoader
# require preloadjs/loaders/JSONPLoader
# require preloadjs/loaders/SoundLoader
# require preloadjs/loaders/SpriteSheetLoader
# require preloadjs/loaders/SVGLoader
# require preloadjs/loaders/TextLoader
# require preloadjs/loaders/VideoLoader
# require preloadjs/loaders/XMLLoader