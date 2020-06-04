class TaskType < ApplicationRecord
    validates :title, :description, presence: true, uniqueness: true
    
end
