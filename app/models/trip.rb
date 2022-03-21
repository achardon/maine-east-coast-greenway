class Trip < ApplicationRecord
  belongs_to :user
  has_many :days, dependent: :destroy

  validates :name, presence: true, uniqueness: true

  accepts_nested_attributes_for :days

  # def create_trip_with_days(start_date, end_date)
  #   #create days for each day here
  # end

end
