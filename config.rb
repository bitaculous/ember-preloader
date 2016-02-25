# === Variables ===

# configuration = Confstruct::Configuration.new(
#   build: {
#     asset_host: '/'
#   }
# )

# === Settings ===

set :build_dir, 'dist'

set :environment, ENV['ENVIRONMENT'] || config[:environment]

set :css_dir,    'assets/stylesheets'
set :fonts_dir,  'assets/fonts'
set :images_dir, 'assets/images'
set :js_dir,     'assets/javascripts'

page '*', layout: 'default'

# === Extensions ===

activate :autoprefixer do |config|
  config.browsers = ['last 2 versions', 'IE >= 10']
  config.add      = true
  config.remove   = true
  config.cascade  = true
  config.inline   = false
  config.ignore   = []
end

activate :bower

activate :wundertuete

# === Development ===

configure :development do
  set :logging,      true
  set :debug_assets, true

  activate :livereload, host: '0.0.0.0', port: '35729' unless config[:environment] == 'deployment'
end

# === Build ===

configure :build do
  # activate :directory_indexes

  # activate :relative_assets
  # activate :asset_hash, ignore: %r{^*fonts/*}
  activate :minify_css
  activate :minify_javascript
  # activate :gzip

  # activate :asset_host

  # set :asset_host, configuration.build.asset_host

  # set :asset_host do |asset|
  #  configuration.build.asset_host % (asset.hash % 4)
  # end

  # Ignore Preloader sources
  ignore 'assets/javascripts/ember/preloader/*'

  # Ignore Application sources
  ignore 'assets/*/ember/app*'
end

# === Misc ===

after_configuration do
  set :haml, format: :xhtml, attr_wrapper: '"', ugly: false
end