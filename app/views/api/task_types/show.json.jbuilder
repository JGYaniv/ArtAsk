json.task_type do
    json.id @task_type.id
    json.title @task_type.title
    json.description @task_type.description
end

json.users do
  @artists.each do |artist|
    json.set! artist.id do
      json.partial! "api/users/user", user: artist
      json.review_ids artist.reviews.pluck(:id)
      json.photo_url (artist.photo.attached? ? url_for(artist.photo) : "https://avatars2.githubusercontent.com/u/16786985?s=460&u=9f2fe771bbc8bcfcc195fde83ca914b00a98da54&v=4")
    end

    artist.reviews.each do |review|
      json.set! review.user.id do
        json.partial! "api/users/user", user: review.user
        json.photo_url (artist.photo.attached? ? url_for(artist.photo) : "https://avatars2.githubusercontent.com/u/16786985?s=460&u=9f2fe771bbc8bcfcc195fde83ca914b00a98da54&v=4")
      end
    end
  end
end

json.reviews do
  @artists.each do |artist|
    artist.reviews.each do |review|
      json.set! review.id do
        json.extract! review, :id, :artist_id, :details, :rating, :task_id
        json.user_id review.user.id
      end
    end
  end
end
