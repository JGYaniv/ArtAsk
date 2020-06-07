class Task < ApplicationRecord
    has_many :reviews
    belongs_to :user
    belongs_to :artist,
        class_name: :User
end
