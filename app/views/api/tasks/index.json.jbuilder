json.tasks do
  @tasks.each do |task|
    json.set! task.id do
      json.extract! task, :id, :title, :details, :completed, :artist_id, :user_id, :start_date, :task_type_id
    end
  end
end

json.users do
  @tasks.each do |task|
    json.set! task.user.id do
      json.partial! "api/users/user", user: task.user
    end

    json.set! task.artist.id do
      json.partial! "api/users/user", user: task.artist
    end
  end
end

json.task_types do
  @tasks.each do |task|
    json.set! task.task_type.id do
      json.extract! task.task_type, :id, :title, :description
    end
  end
end