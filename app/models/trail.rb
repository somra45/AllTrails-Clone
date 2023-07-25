class Trail < ApplicationRecord
    validates :trail_id, :location, :length, :name, :elevation_gain, :route_type,
        :description, :difficulty, presence: true
    validates :trail_id, uniqueness: true
    
    # has_many :reviews, 
    #     foreign_key: :trail_id,
    #     class_name: :Review,
    #     dependent: :destroy
    
    # has_many :favorites,
    #     foreign_key: :trail_id, 
    #     class_name: :Favorite,
    #     dependent: :destroy

    # has_many :members_favorited, 
    #     through: :favorites, 
    #     source: :author,
    #     dependent: :destroy
    
    # has_many :members_reviewed,
    #     through: :reviews, 
    #     source: :author, 
    #     dependent: :destroy
end
