class Note < ApplicationRecord
  has_many :tagnotes
  has_many :tags, through: :tagnotes
  belongs_to :user
end
