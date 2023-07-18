class CreateComments < ActiveRecord::Migration[7.0]
  def change
    create_table :comments do |t|
      t.string :body, null: false
      t.references :trail, null: false, foreign_key: true, null: false
      t.integer :author_id, null: false
      t.references :review, null: false, foreign_key: true, null: false

      t.timestamps
    end
    add_foreign_key :comments, :users, column: :author_id
  end
end
