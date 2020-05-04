class WelcomeController < ApplicationController
  def index
    render json: "Welcome to the API#{4 + 4}".to_json
  end
end
