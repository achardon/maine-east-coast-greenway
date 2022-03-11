class Trip < ApplicationRecord
  belongs_to :user
  has_many :days

  validates :name, presence: true, uniqueness: true
end
