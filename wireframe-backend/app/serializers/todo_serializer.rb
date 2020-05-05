class TodoSerializer < ActiveModel::Serializer
  attributes :category, :description, :due_date
end
