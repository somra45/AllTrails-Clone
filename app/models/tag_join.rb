# == Schema Information
#
# Table name: tag_joins
#
#  id         :bigint           not null, primary key
#  trail_id   :integer          not null
#  tag_id     :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class TagJoin < ApplicationRecord
    validates :tag_id, :trail_id, presence: true
    validates :trail_id, uniqueness: {scope: :tag_id}

    belongs_to :trail,
        class_name: :Trail,
        foreign_key: :trail_id

    belongs_to :tag,
        class_name: :Tag,
        foreign_key: :tag_id
end
