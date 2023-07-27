class CreateTags < ActiveRecord::Migration[7.0]
  def change
    create_table :tags do |t|
      t.string :trail_tag, null: false

      t.timestamps
    end
    add_index :tags, :trail_tag
  end
end
