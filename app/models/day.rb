class Day < ApplicationRecord
  belongs_to :trip
  belongs_to :accommodation, optional:true
end
