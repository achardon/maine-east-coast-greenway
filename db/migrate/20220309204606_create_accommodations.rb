class CreateAccommodations < ActiveRecord::Migration[7.0]
  def change
    create_table :accommodations do |t|
      t.string :name
      t.string :type
      t.string :address
      t.string :distance_from_route
      t.string :description
      t.belongs_to :place, null: false, foreign_key: true

      t.timestamps
    end
  end
end
