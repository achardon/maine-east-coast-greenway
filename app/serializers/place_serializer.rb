class PlaceSerializer < ActiveModel::Serializer
  attributes :id, :name, :location, :description, :image
end
