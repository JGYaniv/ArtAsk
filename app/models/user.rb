class User < ApplicationRecord
    validates :email, :session_token, presence: true, uniqueness: true
    validates :password, length: {minimum: 6, allow_nil: true}
    validates :password_digest, presence: true
    attr_reader :password
    after_initialize :ensure_session_token
    has_one_attached :photo
    has_many :artist_tasks,
        foreign_key: :artist_id,
        class_name: :Task
    has_many :client_tasks,
        foreign_key: :user_id,
        class_name: :Task
    has_many :reviews,
        through: :artist_tasks,
        source: :reviews
    has_many :artist_task_types,
        class_name: :ArtistTaskType,
        foreign_key: :artist_id
    has_many :clients,
        through: :reviews,
        source: :user

    def password=(password)
        @password = password
        self.password_digest = BCrypt::Password.create(password)
    end

    def is_password?(password)
        BCrypt::Password.new(password_digest).is_password?(password)
    end

    def ensure_session_token
        self.session_token ||= SecureRandom.urlsafe_base64
    end

    def reset_session_token!
        self.session_token = SecureRandom.urlsafe_base64
        self.session_token
    end

    def self.find_by_credentials(email, password)
        user = User.find_by(email: email)
        if user && user.is_password?(password)
            return user
        end
        nil
    end

end
