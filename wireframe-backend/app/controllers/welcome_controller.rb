class WelcomeController < ApplicationController
  def index
    to = Todo.all
    render json: to.to_json
  end
end
