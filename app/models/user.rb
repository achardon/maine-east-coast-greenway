class User < ApplicationRecord
    has_secure_password
    has_many :trips

    validates :username, presence: true, uniqueness: true
end
