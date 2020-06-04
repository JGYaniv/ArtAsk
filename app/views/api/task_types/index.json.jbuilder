@task_types.each do |task_type|
  json.set! task_type.id do
    json.extract! task_type, :id, :title, :description
  end
end