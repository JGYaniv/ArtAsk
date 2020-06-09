@reviews.each do |review|
  json.set! review.id do
    json.extract! review, :id, :rating, :details, :created_at, :artist_id, :task_id
    user = review.user
    json.reviewer_name review.user.first_name.capitalize + " " + review.user.last_name[0].capitalize
    json.reviewer_photo_url (user.photo.attached? ? url_for(user.photo) : "https://avatars2.githubusercontent.com/u/16786985?s=460&u=9f2fe771bbc8bcfcc195fde83ca914b00a98da54&v=4")
    json.created_at review.created_at.to_formatted_s(:long)[0..-7]
  end
end