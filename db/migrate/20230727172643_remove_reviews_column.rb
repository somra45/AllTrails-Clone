class RemoveReviewsColumn < ActiveRecord::Migration[7.0]
  def change
    remove_column :reviews, :comment
  end
end
