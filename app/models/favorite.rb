class Favorite < ApplicationRecord
    validates :member_id, :trail_id, presence: true
    validates :favorites, inclusion: { in: [true, false] }
    validates :member_id, uniqueness: { scope: :review_id }

    belongs_to :member,
        class_name: :Member, 
        foreign_key: :member_id

    belongs_to :trail,
        class_name: :Trail,
        foreign_key: :trail_id

end
