class CreateTodos < ActiveRecord::Migration[6.0]
  def change
    create_table :todos do |t|
      t.string :category
      t.string :description
      t.date :due_date
    end
  end
end
