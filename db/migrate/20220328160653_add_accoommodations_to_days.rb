class AddAccoommodationsToDays < ActiveRecord::Migration[7.0]
  def change
    add_column :days, :accommodations, :string, default: "", null:false
  end
end
