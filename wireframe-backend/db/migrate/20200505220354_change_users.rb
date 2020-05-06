class ChangeUsers < ActiveRecord::Migration[6.0]
  def change
    change_table :users do |t|
      t.remove :password
    end
  end
end
