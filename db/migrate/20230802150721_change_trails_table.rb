class ChangeTrailsTable < ActiveRecord::Migration[7.0]
  def change
    change_column :trails, :lat, :float
    change_column :trails, :lng, :float
  end
end
