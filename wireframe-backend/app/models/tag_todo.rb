class Tag_todo < ApplicationRecord
  belongs_to :Todo
  belongs_to :Tag
end
