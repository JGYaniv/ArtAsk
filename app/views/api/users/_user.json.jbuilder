json.extract! user, :id, :email, :first_name, :last_name, :account_type, :about
json.task_types user.artist_task_types.map{|task| task.task_type_id}
json.photo_url (user.photo.attached? ? url_for(user.photo) : "https://avatars2.githubusercontent.com/u/16786985?s=460&u=9f2fe771bbc8bcfcc195fde83ca914b00a98da54&v=4")