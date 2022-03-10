class RenameColumnInAttractions < ActiveRecord::Migration[7.0]
    rename_column :attractions, :type, :category
end
