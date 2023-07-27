# == Schema Information
#
# Table name: tags
#
#  id         :bigint           not null, primary key
#  trail_tag  :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class Tag < ApplicationRecord
    validates :trail_tag, presence: true

    has_many :tag_joins,
        foreign_key: :tag_id,
        class_name: :TagJoin,
        dependent: :destroy
    
    has_many :trails,
        through: :tag_joins,
        source: :trail
end
