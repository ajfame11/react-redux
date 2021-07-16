class PostSerializer < ActiveModel::Serializer
  attributes :id, :title, :body, :image, :user_id
end
