class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :email, :posts, :comments
end
