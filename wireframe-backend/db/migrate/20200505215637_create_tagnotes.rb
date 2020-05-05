class CreateTagnotes < ActiveRecord::Migration[6.0]
  def change
    create_table :tagnotes do |t|
      t.integer :note_id
      t.integer :tag_id
    end
  end
end
