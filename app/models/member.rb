class Member < ApplicationRecord
    attr_reader :password
    before_validation :ensure_session_token
    validates :username, presence: true, uniqueness: { case_sensitive: true }, 
        length: {in: 3..66} 
    validates :email, presence: true, uniqueness: { case_sensitive: true }
    validates :password, presence: true, uniqueness: { case_sensitive: true }, 
        length: { in: 3..66}
    validates :session_token, presence: true, uniqueness: { case_sensitive: true }
    validates :password_digest, presence: true, uniqueness: { case_sensitive: true }

    has_many :reviews, 
        class_name: :Review,
        foreign_key: :author_id, 
        dependent: :destroy
    has_many :favorited_trails,
        class_name: :Favorite, 
        foreign_key: :member_id,
        dependent: :destroy
    

    def is_password?(password)
        password_object = BCrypt::Password.new(password_digest)
        password_object.is_password?(password)
    end

    def password=(password)
        @password = BCrypt::Password.create(password_digest)
        @password = password
    end

    def generate_unique_session_token
        while true
            token = SecureRandom.urlsafe_base64
            return token unless User.exists?(session_token: token)
        end
        
    end

    def ensure_session_token
        session_token ||= generate_unique_session_token
    end

    def reset_session_token!
        self.session_token = generate_unique_session_token
        self.save!
        session_token
    end

    def self.find_by_credentials(username, password)
        member = Member.find_by(username: username)

        if member && member.is_password?(password)
            member
        else
            nil
        end
    end
end
