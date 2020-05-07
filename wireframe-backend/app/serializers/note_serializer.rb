class NoteSerializer < ActiveModel::Serializer
  attributes :id, :title, :description, :tags

  def tags
    self.object.tags
  end
end
