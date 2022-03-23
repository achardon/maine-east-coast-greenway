class TripSerializer < ActiveModel::Serializer
  attributes :id, :name, :start_date, :end_date
  belongs_to :user
  has_many :days

  def days
    # eventually change to date instead of id
    object.days.order(id: :asc)
  end
end
