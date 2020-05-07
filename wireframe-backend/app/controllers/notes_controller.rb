class NotesController < ApplicationController
  skip_before_action :verify_authenticity_token
  def index
    render json: Note.all
  end
  def show
    note = Note.find_by(id: params[:id])
    render json: note,methods: :tags
  end
  def create
    render json:Note.all
  end

   def destroy
     note = Note.find_by(id: params[:id])
     render json: note
   end
end
