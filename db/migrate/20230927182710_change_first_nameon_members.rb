class ChangeFirstNameonMembers < ActiveRecord::Migration[7.0]
  def change
    remove_index :members, name: 'index_members_on_firstname'
  end
end
