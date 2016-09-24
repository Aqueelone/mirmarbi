source 'https://rubygems.org'
gem 'bundler', '>= 1.8.4'
# Bundle edge Rails instead: gem 'rails', github: 'rails/rails'
gem 'rails', '4.2.7'
# load enveronmets
gem 'dotenv-rails', :groups => [:development, :test]
#gem "browserify-rails"
# Use postgresql9.4 as the database for Active Record
gem 'pg'
# fix for attr_accessible and attr_protected
gem 'protected_attributes'
# Authentication
gem 'devise'
gem 'oauth2'
gem 'omniauth'
gem 'omniauth-twitter'
gem 'omniauth-facebook'
gem 'omniauth-vkontakte'
gem 'omniauth-instagram'
gem 'omniauth-linkedin'
gem 'omniauth-google-oauth2'
gem 'devise_lastseenable'
gem 'devise-token_authenticatable'
# Background processing
gem 'sidekiq'
gem 'sinatra'
# Scheduled processing
gem 'sidetiq'
# CSS and around it
gem 'bootstrap-sass'
gem 'compass-rails'
gem 'sass-rails'
gem 'less-rails'
gem 'therubyracer'
gem 'less-rails-bootstrap'
gem 'autoprefixer-rails'
gem 'bootstrap-switch-rails'
gem 'bootstrap-generators'
gem "font-awesome-rails"
# Use Uglifier as compressor for JavaScript assets
gem 'uglifier', '>= 1.3.0'
# Use CoffeeScript for .js.coffee assets and views
gem 'coffee-rails'
# GUID generation
gem 'uuid'
# Icons
gem 'entypo-rails'
# Internationalization (aka i18n)
gem 'rails-i18n'
gem 'http_accept_language'
gem 'globalize'
gem 'jsonb_translate'
gem 'route_translator'
gem 'to_lang'
# JavaScript
gem 'bower-rails'
gem 'backbone-on-rails'
gem 'handlebars_assets'
#gem 'sprockets-rails', :require => 'sprockets/railtie'
gem 'jquery-rails'
gem 'jquery-ui-rails'
gem 'jquery-turbolinks'
gem 'js_image_paths'
gem 'js-routes'

source 'https://rails-assets.org' do
  gem 'rails-assets-jquery'
  gem 'rails-assets-bootstrap'
  gem 'rails-assets-angular'
  gem 'rails-assets-leaflet'
  # Should be kept in sync with jquery-rails
  gem 'rails-assets-markdown-it'
  gem 'rails-assets-markdown-it-hashtag'
  gem 'rails-assets-markdown-it-sanitizer'
  gem 'rails-assets-markdown-it--markdown-it-for-inline'
  gem 'rails-assets-markdown-it-sub'
  gem 'rails-assets-markdown-it-sup'
  gem 'rails-assets-highlightjs'
  gem 'rails-assets-typeahead.js'
  # jQuery plugins
  gem 'rails-assets-jquery.documentsize'
  gem 'rails-assets-jquery.isinview'
  gem 'rails-assets-animate-css'
  gem 'rails-assets-wow'
  gem 'rails-assets-jquery-mousewheel'
  gem 'rails-assets-jquery-placeholder'
  gem 'rails-assets-jquery-textchange'
  gem 'rails-assets-jakobmattsson--jquery-elastic'
  gem 'rails-assets-autosize'
end

gem 'bootstrap-wysihtml5-rails'
gem 'tinymce-rails'
# file uploads + S3
gem "refile", require: "refile/rails"
gem "refile-mini_magick"
gem "refile-s3"
# Turbolinks makes following links in your web application faster.
# Read more: https://github.com/rails/turbolinks
gem 'turbolinks'
# Build JSON APIs with ease. Read more: https://github.com/rails/jbuilder
gem 'jbuilder', '~> 2.0'
# URIs and HTTP
gem 'addressable', require: 'addressable/uri'
gem 'faraday'
gem 'faraday_middleware'
gem 'faraday-cookie_jar'
gem 'typhoeus'
# Views
gem 'haml'
gem 'haml-rails'
gem 'haml-contrib'
gem 'simple_form'
gem 'jquery-minicolors-rails'
# Mail
gem 'markerb'
gem 'messagebus_ruby_api'
# Parsing
gem 'nokogiri'
gem 'redcarpet'
gem 'twitter-text'
gem 'roxml'
gem 'ruby-oembed'
gem 'open_graph_reader'
gem 'gravtastic'
# bundle exec rake doc:rails generates the API under doc/api.
gem 'sdoc', group: :doc
gem 'annotate', :groups => [:development]
gem 'kramdown', :groups => [:development], :require => false
gem 'railroady', :groups => [:development, :test]
# SEO
gem 'acts_as_opengraph'
gem "dynamic_sitemaps"
# Server
gem 'puma'
# gem 'passenger', '~> 5.0', '>= 5.0.26', require: "phusion_passenger/rack_handler"
# Prevent occasions where minitest is not bundled in
# packaged versions of ruby. See following issues/prs:
# https://github.com/gitlabhq/gitlabhq/issues/3826
# https://github.com/gitlabhq/gitlabhq/pull/3852
# https://github.com/discourse/discourse/pull/238
gem 'minitest'

group :development do
  # Automatic test runs
  gem 'guard-cucumber'
  gem 'guard-jshintrb'
  gem 'guard-rspec'
  gem 'guard-jasmine'
  gem 'guard-rubocop'
  gem 'guard-bundler', require: false
  gem 'guard', require: false
  gem 'rb-fsevent', require: false
  gem 'rb-inotify', require: false
  # Linters
  gem 'jshintrb'
  gem 'rubocop'
  gem 'haml_lint'
  gem 'pronto'
  gem 'pronto-jshint'
  gem 'pronto-rubocop'
  gem 'pronto-haml'
  gem 'pronto-scss', require: false
  # Preloading environment
  gem 'spring'
  gem 'spring-commands-rspec'
  gem 'spring-commands-cucumber'
  # Debugging
  gem 'pry'
  gem 'pry-debundle'
  gem 'pry-byebug'
  # test coverage
  gem 'simplecov', require: false
end
group :test do
  # RSpec (unit tests, some integration tests)
  gem 'fixture_builder'
  gem 'fuubar'
  gem 'rspec-instafail', require: false
  gem 'test_after_commit'
  # Cucumber (integration tests)
  gem 'cucumber-rails'
  gem 'capybara'
  gem 'database_cleaner'
  gem 'selenium-webdriver'
  gem "chromedriver-helper"
  # General helpers
  gem 'factory_girl_rails'
  gem 'timecop'
  gem 'webmock', require: false
  gem 'shoulda-matchers'
  gem 'email_spec'
end
group :development, :test do
  # RSpec (unit tests, some integration tests)
  gem 'rspec-rails'
  # Jasmine (client side application tests (JS))
  gem 'jasmine'
  gem 'jasmine-jquery-rails'
  gem 'rails-assets-jasmine-ajax'
  gem 'sinon-rails'
  # silence assets
  gem 'quiet_assets'
end
