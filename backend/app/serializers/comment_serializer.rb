class CommentSerializer < ActiveModel::Serializer
  attributes :id, :content, :user_id, :post_id, :commenter_id
end
