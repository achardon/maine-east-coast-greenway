class ChangeColumnInAccommodations < ActiveRecord::Migration[7.0]
  change_column :accommodations, :distance_from_route, 'integer USING CAST(distance_from_route AS integer)'
end
