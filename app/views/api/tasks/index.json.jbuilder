json.tasks do
  @tasks.each do |task|
    json.set! task.id do
      json.extract! task, :id, :title, :details, :completed, :artist_id, :user_id, :start_date
    end
  end
end

json.users do
  @tasks.each do |task|
    json.set! task.user.id do
      json.partial! "api/users/user", user: task.user
    end
  end
end