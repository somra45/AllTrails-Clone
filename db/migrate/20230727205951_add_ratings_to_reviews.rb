class AddRatingsToReviews < ActiveRecord::Migration[7.0]
  def change
    add_column :reviews, :rating, :integer
    add_index :reviews, :rating
  end

end
