class DaySerializer < ActiveModel::Serializer
  attributes :id, :day, :mileage, :notes, :start_point, :end_point, :accommodations
  belongs_to :trip
  # belongs_to :accommodation
end
