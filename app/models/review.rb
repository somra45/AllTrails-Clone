# == Schema Information
#
# Table name: reviews
#
#  id         :bigint           not null, primary key
#  body       :string           not null
#  trail_id   :bigint           not null
#  author_id  :integer          not null
#  comment    :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class Review < ApplicationRecord
    validates :body, :trail_id, :author_id, presence: true
    validates :author_id, uniqueness: { scope: :trail_id}
    
    belongs_to :trail,
        class_name: :Trail,
        foreign_key: :trail_id
    belongs_to :author,
        class_name: :Member,
        foreign_key: :author_id

end
