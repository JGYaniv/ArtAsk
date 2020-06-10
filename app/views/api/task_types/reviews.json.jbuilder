@reviews.each do |review|
  json.set! review.id do
    json.extract! review, :id, :rating, :details, :created_at, :artist_id, :task_id
  end
end