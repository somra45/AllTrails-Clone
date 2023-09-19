# == Schema Information
#
# Table name: favorites
#
#  id         :bigint           not null, primary key
#  favorites  :boolean
#  trail_id   :bigint           not null
#  member_id  :bigint           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class Favorite < ApplicationRecord
    validates :member_id, :trail_id, presence: true
    validates :favorites, inclusion: { in: [true, false] }
    validates :member_id, uniqueness: { scope: :trail_id }

    belongs_to :member,
        class_name: :Member, 
        foreign_key: :member_id

    belongs_to :trail,
        class_name: :Trail,
        foreign_key: :trail_id

end
