class ChangeLikes < ActiveRecord::Migration[7.0]
  def change
    rename_column :likes, :likes, :favorites
    rename_column :likes , :user_id, :member_id
    rename_table :likes, :Favorites
    rename_table :users, :Members
    drop_table :comments
  end
end
