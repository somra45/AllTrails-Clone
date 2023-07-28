class AddRatingsToTrails < ActiveRecord::Migration[7.0]
  def change
    add_column :trails, :total_rating, :bigint
    add_column :trails, :average_rating, :bigint
    add_index :trails, :total_rating
    add_index :trails, :average_rating
  end
end
