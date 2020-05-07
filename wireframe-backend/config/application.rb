require_relative 'boot'

require 'rails/all'

# Require the gems listed in Gemfile, including any gems
# you've limited to :test, :development, or :production.
Bundler.require(*Rails.groups)

module WireframeBackend
  class Application < Rails::Application
    # Initialize configuration defaults for originally generated Rails version.
    config.load_defaults 6.0

    config.middleware.insert_before 0, Rack::Cors do
      allow do
        origins 'http://localhost:3000', 'https://arcane-journey-88268.herokuapp.com/' #replace this url with that of your own heroku client app
        resource '*', :headers => :any, :methods => [:get, :post, :delete, :patch]
      end
    end

    # Settings in config/environments/* take precedence over those specified here.
    # Application configuration can go into files in config/initializers
    # -- all .rb files in that directory are automatically loaded after loading
    # the framework and any gems in your application.
  end
end
