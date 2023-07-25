class RemoveUniqueLocation < ActiveRecord::Migration[7.0]
  def change
    remove_index :trails, :location
    add_index :trails, :location
  end
end
