class Note < ApplicationRecord
  has_many :tagnotes
  has_many :tags, through: :tagnotes
  belongs_to :user

  def self.create_with_user(title,description,user)
    user_id = user.id
    self.create(title: title,description: description, user_id: user_id)
  end

  def add_tag(tag)
    TagNote.create(note: self.id ,tag: tag.id)
  end

  def add_tags(tags)
    tags.each do |tag|
      self.add_tag(tag)
    end
  end
end
