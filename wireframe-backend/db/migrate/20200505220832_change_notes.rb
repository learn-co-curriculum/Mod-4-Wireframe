class ChangeNotes < ActiveRecord::Migration[6.0]
  def change
    change_table :notes do |t|
      t.remove :due_date
      t.rename :category, :title
    end
  end
end
