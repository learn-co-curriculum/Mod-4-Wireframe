class UsersController < ApplicationController
  def index
    render json: User.all
  end

  def create
    user = User.find_by(username: params[:username])
    render json: user, methods: :user_notes
    # user = User.find_by(username: params[:username])
    # if(user)
    #   render json: user
    # else
    #   render json: { error: 'user not found'}
    # end
  end

  def show
    user = User.find_by(id: params[:id])
    render json: user,methods: :user_notes
  end
end
