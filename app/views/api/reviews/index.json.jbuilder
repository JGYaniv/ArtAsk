@reviews.each do |review|
  json.set! review.id do
    json.extract! review, :id, :rating, :details, :artist_id, :task_id
    json.created_at "#{review.created_at.getMonth()}/#{review.created_at.getDate()}/#{review.created_at.getYear()}"
  end
end
