class AddColumnsToTrails < ActiveRecord::Migration[7.0]
  def change
    add_column :trails, :lat, :bigint
    add_column :trails, :lng, :bigint
  end
end
