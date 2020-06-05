@tasks.each do |task|
  json.set! task.id do
    json.extract! task, :id, :title, :details, :completed, :artist_id, :user_id, :start_date, :end_date
  end
end