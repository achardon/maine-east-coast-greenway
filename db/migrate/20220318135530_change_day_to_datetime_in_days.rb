class ChangeDayToDatetimeInDays < ActiveRecord::Migration[7.0]
  def change
    change_column :days, :day, :datetime
  end
end
