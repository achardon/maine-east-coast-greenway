class Place < ApplicationRecord
    has_many :accommodations
    has_many :attractions
end
