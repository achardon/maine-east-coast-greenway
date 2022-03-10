class TripSerializer < ActiveModel::Serializer
  attributes :id, :name, :start_date, :end_date
  has_one :user
end
