class Trail < ApplicationRecord
    validates :trail_id, :location, :length, :elevation_gain, :route_type,
        :description, :difficulty, presence: true
    validates :trail_id, :location, uniqueness: true
    
    has_many :reviews, 
        foreign_key: :trail_id,
        class_name: :Review,
        dependent: :destroy
    
    has_many :comments,
        through: :reviews,
        source: :comments, 
        dependent: :destroy
    
    has_many :likes,
        foreign_key: :trail_id, 
        class_name: :Like,
        dependent: :destroy
end
