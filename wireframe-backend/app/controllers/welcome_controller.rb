class WelcomeController < ApplicationController
  def index
    render json: Todo.all
  end
end
