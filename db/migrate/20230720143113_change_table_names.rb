class ChangeTableNames < ActiveRecord::Migration[7.0]
  def change
    rename_table :Members, :members
    rename_table :Favorites, :favorites
  end
end
