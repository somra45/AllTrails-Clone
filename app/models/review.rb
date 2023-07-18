class Review < ApplicationRecord
    validates :body, :trail_id, :author_id, presence: true
    
    belongs_to :trail,
        class_name: :Trail,
        foreign_key: :trail_id
    has_many :comments, 
        class_name: :Comment, 
        foreign_key: :review_id,
        dependent: :destroy
    belongs_to :author,
        class_name: :user_id,
        foreign_key: :author_id

end
