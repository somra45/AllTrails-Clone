class Like < ApplicationRecord
    validates :likes, presence: { in: [true, false]}
    validates :user_id, uniqueness: { scope: :review_id }

    belongs_to :user,
        class_name: :User, 
        foreign_key: :user_id

    belongs_to :trail,
        class_name: :Trail,
        foreign_key: :trail_id

end
