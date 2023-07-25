class EditTrailsColumn < ActiveRecord::Migration[7.0]
  def change
    remove_column :trails, :string
    add_column :trails, :name, :string, null: false
  end
end
