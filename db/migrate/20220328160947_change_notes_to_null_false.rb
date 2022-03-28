class ChangeNotesToNullFalse < ActiveRecord::Migration[7.0]
  def change
    change_column_null(:days, :notes, false, "")
  end
end
