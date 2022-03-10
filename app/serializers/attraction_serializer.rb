class AttractionSerializer < ActiveModel::Serializer
  attributes :id, :name, :category, :address, :distance_from_route, :description
  belongs_to :place
end
