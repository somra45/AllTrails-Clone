class CreateTagJoins < ActiveRecord::Migration[7.0]
  def change
    create_table :tag_joins do |t|
      t.integer :trail_id, null: false
      t.integer :tag_id, null: false
      t.timestamps
    end

    add_foreign_key :tag_joins, :tags, column: :tag_id
    add_foreign_key :tag_joins, :trails, column: :trail_id
    add_index :tag_joins, :trail_id
    add_index :tag_joins, :tag_id
  end
end
