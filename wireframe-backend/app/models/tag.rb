class Tag < ApplicationRecord
  has_many :TagTodos
  has_many :Todos, through: :TagTodos
end
