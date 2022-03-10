class RenameColumnInAccommodations < ActiveRecord::Migration[7.0]
  rename_column :accommodations, :type, :category
end
