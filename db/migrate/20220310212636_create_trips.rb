class CreateTrips < ActiveRecord::Migration[7.0]
  def change
    create_table :trips do |t|
      t.belongs_to :user, null: false, foreign_key: true
      t.string :name
      t.date :start_date
      t.date :end_date

      t.timestamps
    end
  end
end
