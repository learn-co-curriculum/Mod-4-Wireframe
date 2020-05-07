class NotesController < ApplicationController
  def index
    render json: Note.all
  end
  def show
    note = Note.find_by(id: params[:id])
    render json: note
  end
  def create
  end
end
