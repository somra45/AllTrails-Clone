class Review < ApplicationRecord
    validates :body, :trail_id, :author_id, presence: true
    
    belongs_to :trail,
        class_name: :Trail,
        foreign_key: :trail_id
    belongs_to :author,
        class_name: :Member,
        foreign_key: :author_id

end
