class ChangeMembers < ActiveRecord::Migration[7.0]
  def change
    add_column :members, :lastname, :string
    rename_column :members, :username, :firstname
  end
end
