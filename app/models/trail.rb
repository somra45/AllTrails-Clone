# == Schema Information
#
# Table name: trails
#
#  id             :bigint           not null, primary key
#  trail_id       :integer          not null
#  location       :string           not null
#  length         :string           not null
#  route_type     :string           not null
#  elevation_gain :integer          not null
#  description    :string           not null
#  difficulty     :string           not null
#  created_at     :datetime         not null
#  updated_at     :datetime         not null
#  name           :string           not null
#
class Trail < ApplicationRecord
    validates :trail_id, :location, :length, :name, :elevation_gain, :route_type,
        :description, :difficulty, presence: true
    validates :trail_id, uniqueness: true
    
    has_many_attached :images

    has_many :tag_joins,
        foreign_key: :trail_id,
        class_name: :TagJoin,
        dependent: :destroy
    
    has_many :tags,
        through: :tag_joins,
        source: :tag

    has_many :reviews, 
        foreign_key: :trail_id,
        class_name: :Review,
        dependent: :destroy
    
    # has_many :favorites,
    #     foreign_key: :trail_id, 
    #     class_name: :Favorite,
    #     dependent: :destroy

    # has_many :members_favorited, 
    #     through: :favorites, 
    #     source: :author,
    #     dependent: :destroy
    
    has_many :members_reviewed,
        through: :reviews, 
        source: :author, 
        dependent: :destroy
end
