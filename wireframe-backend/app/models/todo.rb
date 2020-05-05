class Todo < ApplicationRecord
  has_many :TagTodos
  has_many :Tags, through: :TagTodos
  belongs_to :user
end
