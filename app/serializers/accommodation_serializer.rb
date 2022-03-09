class AccommodationSerializer < ActiveModel::Serializer
  attributes :id, :name, :type, :address, :distance_from_route, :description
  has_one :place
end
