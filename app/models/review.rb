class Review < ApplicationRecord
    belongs_to :task
    has_one :artist,
        through: :task,
        source: :artist
    has_one :user,
        through: :task,
        source: :user
end
