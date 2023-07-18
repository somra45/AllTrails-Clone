class Comment < ApplicationRecord
  validates :body, :trail_id, :review_id, :author_id, presence: true
  
  belongs_to :trail,
    class_name: :Trail,
    foreign_key: :trail_id

  belongs_to :review, 
    class_name: :Review,
    foreign_key: :review_id

  belongs_to :author, 
    class_name: :User,
    foreign_key: :author_id
end
