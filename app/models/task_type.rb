class TaskType < ApplicationRecord
    validates :title, :description, presence: true, uniqueness: true
    has_many :artist_task_types
    has_many :artists,
        through: :artist_task_types,
        source: :artist
    has_many :reviews,
        through: :artists,
        source: :reviews
end
