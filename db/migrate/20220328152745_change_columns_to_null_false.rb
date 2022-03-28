class ChangeColumnsToNullFalse < ActiveRecord::Migration[7.0]
  def change
    change_column_null(:days, :start_point, false, "")

    change_column_null(:days, :end_point, false, "")

    change_column_null(:days, :mileage, false, "")

  end
end
