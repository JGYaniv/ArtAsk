@artists.each do |artist|
  json.set! artist.id do
    json.partial! "api/users/user", user: artist
    json.review_ids artist.reviews.pluck(:id)
    json.photo_url (artist.photo.attached? ? url_for(artist.photo) : "https://avatars2.githubusercontent.com/u/16786985?s=460&u=9f2fe771bbc8bcfcc195fde83ca914b00a98da54&v=4")
  end
end

