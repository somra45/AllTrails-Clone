# == Schema Information
#
# Table name: members
#
#  id              :bigint           not null, primary key
#  firstname       :string           not null
#  email           :string           not null
#  session_token   :string           not null
#  password_digest :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#  lastname        :string
#
class Member < ApplicationRecord
    attr_reader :password
    before_validation :ensure_session_token
    validates :firstname, presence: true, length: {in: 3..66} 
    validates :lastname, presence: true, length: {in: 3..66} 
    validates :email, presence: true, uniqueness: { case_sensitive: true }
    validates :password, presence: true, length: { in: 3..66}, allow_nil: true
    validates :session_token, presence: true, uniqueness: { case_sensitive: true }
    validates :password_digest, presence: true, uniqueness: { case_sensitive: true }

    has_one_attached :photo

    has_many :reviews, 
        class_name: :Review,
        foreign_key: :author_id, 
        dependent: :destroy
    has_many :favorites,
        class_name: :Favorite, 
        foreign_key: :member_id,
        dependent: :destroy
    has_many :favorited_trails,
        through: :favorites,
        source: :trail
    

    def is_password?(password)
        password_object = BCrypt::Password.new(password_digest)
        password_object.is_password?(password)
    end

    def password=(password)
        self.password_digest = BCrypt::Password.create(password)
        @password = password
    end

    def generate_unique_session_token
        while true
            token = SecureRandom.urlsafe_base64
            return token unless Member.exists?(session_token: token)
        end
        
    end

    def ensure_session_token
        self.session_token ||= generate_unique_session_token
    end

    def reset_session_token!
        self.session_token = generate_unique_session_token
        self.save!
        session_token
    end

    def self.find_by_credentials(email, password)
        member = Member.find_by(email: email)

        if member && member.is_password?(password)
            member
        else
            nil
        end
    end
end
