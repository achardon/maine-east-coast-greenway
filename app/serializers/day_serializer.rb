class DaySerializer < ActiveModel::Serializer
  attributes :id, :day, :mileage, :notes, :start_point, :end_point
  has_one :trip
  has_one :accommodation
end
