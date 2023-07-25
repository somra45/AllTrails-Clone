class ChangeTrails < ActiveRecord::Migration[7.0]
  def change
    add_column :trails, :string, :name, null: false
  end
end
