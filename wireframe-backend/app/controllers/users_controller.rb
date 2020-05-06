class UsersController < ApplicationController
  def index
    render json: User.all
  end
  def show
    user = User.find_by(id: params[:id])
    render json: user,methods: :user_notes
  end
end
