class AddColumnToMembers < ActiveRecord::Migration[7.0]
  def change
    add_column :members, :location, :string 
  end
end
