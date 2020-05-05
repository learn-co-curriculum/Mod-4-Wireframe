class ChangeTodosToNotes < ActiveRecord::Migration[6.0]
  def change
    rename_table :todos, :notes
  end
end
