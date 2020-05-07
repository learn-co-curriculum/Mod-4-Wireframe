class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :user_notes
  def user_notes
    self.object.notes
  end
end
