class CreateTrails < ActiveRecord::Migration[7.0]
  def change
    create_table :trails do |t|
      t.integer :trail_id, null: false
      t.string :location, null: false
      t.string :length, null: false
      t.string :route_type, null: false
      t.integer :elevation_gain, null: false
      t.string :description, null: false
      t.string :difficulty, null: false

      t.timestamps
    end
    add_index :trails, :trail_id, unique: true
    add_index :trails, :location, unique: true
    add_index :trails, :length
    add_index :trails, :route_type
    add_index :trails, :elevation_gain
    add_index :trails, :difficulty
  end
end
