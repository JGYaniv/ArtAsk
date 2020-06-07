class ArtistTaskType < ApplicationRecord    
    belongs_to :artist,
        foreign_key: :artist_id,
        primary_key: :id,
        class_name: :User
    
    belongs_to :task_type
end
