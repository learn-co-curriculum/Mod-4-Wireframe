class UserSerializer < ActiveModel::Serializer
  attributes :username, :user_notes
  def user_notes
    self.object.notes
  end
end
