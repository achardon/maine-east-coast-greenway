class CreateDays < ActiveRecord::Migration[7.0]
  def change
    create_table :days do |t|
      t.belongs_to :trip, null: false, foreign_key: true
      t.date :day
      t.integer :mileage
      t.string :notes
      t.string :start_point
      t.string :end_point

      t.timestamps
    end
  end
end
