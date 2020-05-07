class NotesController < ApplicationController
  skip_before_action :verify_authenticity_token
  def index
    render json: Note.all
  end
  def show
    note = Note.find_by(id: params[:id])
    render json: note
  end
  def create
    render json:Note.all
    # Note.create({title: params[:title],description: params[:description], user_id: 19})
    puts '===========create======'
  end

  # def destroy
  #   # note.destroy(params[:id])
  # end
end
