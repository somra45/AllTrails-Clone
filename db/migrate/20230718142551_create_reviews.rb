class CreateReviews < ActiveRecord::Migration[7.0]
  def change
    create_table :reviews do |t|
      t.string :body, null: false
      t.references :trail, foreign_key: :true, null: false
      t.integer :author_id, null: false
      t.string :comment, null: false

      t.timestamps
    end

      add_foreign_key :reviews, :users, column: :author_id
  end
end
