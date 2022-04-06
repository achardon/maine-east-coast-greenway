class Trip < ApplicationRecord

  belongs_to :user
  has_many :days, dependent: :destroy

  validates :name, presence: true, uniqueness: true
  validates_date_of :start_date, before: :end_date, message: "must be before end date." 
  validates_date_of :start_date, after_or_equal_to: Time.now, message: "must be today or later."

  accepts_nested_attributes_for :days

end


