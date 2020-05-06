class Tag < ApplicationRecord
  has_many :tagnotes
  has_many :notes, through: :tagnotes
end
