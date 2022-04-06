class Day < ApplicationRecord
  belongs_to :trip
  belongs_to :accommodation, optional:true

  validates :mileage, numericality: { only_integer: true }
end
