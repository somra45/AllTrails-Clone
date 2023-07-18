class Comment < ApplicationRecord
  belongs_to :trail,
    class_name: :Trail,
    foreign_key: :trail_id,
    dependent: :destroy

  belongs_to :review, 
    class_name: :Review,
    foreign_key: :review_id,
    dependent: :destroy

  belongs_to :author, 
    class_name: :User,
    foreign_key: :author_id,
    dependent: :destroy
end
