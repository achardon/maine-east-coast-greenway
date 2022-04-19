class TripSerializer < ActiveModel::Serializer
  attributes :id, :name, :start_date, :end_date
  belongs_to :user
  has_many :days

  def days
    object.days.order(id: :asc)
  end
end
