# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
require 'open-uri'

User.destroy_all
User.connection.execute('ALTER SEQUENCE users_id_seq RESTART WITH 1')
TaskType.destroy_all
TaskType.connection.execute('ALTER SEQUENCE task_types_id_seq RESTART WITH 1')
Task.destroy_all
Task.connection.execute('ALTER SEQUENCE tasks_id_seq RESTART WITH 1')
Review.destroy_all
Review.connection.execute('ALTER SEQUENCE reviews_id_seq RESTART WITH 1')

anon_profile_animals = [
    '/Users/jonathanyaniv/Desktop/ArtAsk/app/assets/images/anon_profile_animals/cat_silhouette.png',
    '/Users/jonathanyaniv/Desktop/ArtAsk/app/assets/images/anon_profile_animals/dog_silhouette.jpg',
    '/Users/jonathanyaniv/Desktop/ArtAsk/app/assets/images/anon_profile_animals/dog_silhouette2.jpg',
    '/Users/jonathanyaniv/Desktop/ArtAsk/app/assets/images/anon_profile_animals/horse_silhouette.jpg',
    '/Users/jonathanyaniv/Desktop/ArtAsk/app/assets/images/anon_profile_animals/rhino_silhouette.jpg',
    '/Users/jonathanyaniv/Desktop/ArtAsk/app/assets/images/anon_profile_animals/unicorn_silhouette.png'
]
artist_names = %w(
    Agnes_Varda
    Andy_Goldsworthy
    Andy_Warhol
    Dave_Chapelle
    Fridah_Kahlo
    George_Carlin
    Ginger_Rogers
    Giuseppe_Arcimboldo
    Gustave_Courbet
    Kate_Moross
    Kendrick_Lamar
    Lisa_Fruchtman
    Mikhail_Baryshnikov
    Milton_Glaser
    Misty_Copeland
    Nai_Palm
    Paul_Hirsch
    Paula_Scher
    Pedro_Almodovar
    Richard_Chew
    Salvador_Dali
    Sam_Pollard
    Saul_Bass
    Spike_Lee
    Tom_Waits
    Vincent_VanGoh
)
artists = {}
artist_names.each do |artist|
    artists[artist] = User.create!({
        email: "#{artist}@artask.org",
        password: "123456",
        first_name: artist.split("_")[0],
        last_name: artist.split("_")[1],
        account_type: "artist",
        area_code: rand(10000..99999)
    })
end
clients = []
(10).times do |i|
    clients << User.create!({
        email: Faker::Internet.email,
        password: "123456",
        first_name: Faker::Name.first_name,
        last_name: Faker::Name.last_name,
        account_type: "client",
        area_code: rand(10000..99999)
    })
    # file = File.open(anon_profile_animals.sample)
    # clients[i].photo.attach(io: file, filename: "#{u.first_name.capitalize}_#{u.last_name.capitalize}")
end

bob = User.create!({
    email: "bob@tablo.co",
    password: "123456",
    first_name: "Bobby",
    last_name: "Tables",
    account_type: "client",
    area_code: rand(10000..99999)
})

file = File.open('/Users/jonathanyaniv/Desktop/ArtAsk/app/assets/images/bob_tables.png')
bob.photo.attach(io: file, filename: "bob_tables.png")

record_song = TaskType.create!({
    title: "Record Song",
    description: "Need an unaffiliated song to use for a video, event, or social media."
})

nai_song = Task.create!({
    completed: true,
    artist_id: artists["Nai_Palm"].id,
    task_type_id: record_song.id,
    user_id: clients[0].id
})

Review.create!({
    task_id: nai_song.id,
    rating: 4,
    details: "Nai wrote an awesome song! It took a little longer than expected, but totally worth it."
})

ken_song = Task.create!({
    completed: true,
    artist_id: artists["Kendrick_Lamar"].id,
    task_type_id: record_song.id,
    user_id: clients[1].id
})

Review.create!({
    task_id: ken_song.id,
    rating: 5,
    details: "I was truly humbled by the experience of workign with Ken. The song he wrote for us was fire!"
})

tom_song = Task.create!({
    completed: true,
    artist_id: artists["Tom_Waits"].id,
    task_type_id: record_song.id,
    user_id: clients[2].id
})

Review.create!({
    task_id: ken_song.id,
    rating: 4,
    details: "Tom recorded an amazing acoustic cover for us of 'We Are the Champions' for our fundraiser."
})

persuasive_writing = TaskType.create!({
    title: "Write Persuasively",
    description: "Need help writing persuasively for a donor letter, rally speach, or online mission statement."
})

paint_mural = TaskType.create!({
    title: "Paint Mural",
    description: "Need an artist to paint a mural for us."
})

film_event = TaskType.create!({
    title: "Film Event",
    description: "Need a cinematographer to capture an event for us."
})

film_interview = TaskType.create!({
    title: "Film Interview",
    description: "Need a cinematographer to record an interview."
})

edit_video = TaskType.create!({
    title: "Edit Video",
    description: "Need an editor to help us edit a short video."
})

write_script = TaskType.create!({
    title: "Write Ad Script",
    description: "Need a writer to script a video or audio advertisement."
})

design_poster = TaskType.create!({
    title: "Design Poster",
    description: "Need a visual artist to design a poster."
})

design_flyer = TaskType.create!({
    title: "Design Flyer",
    description: "Need a visual artist to design a flyer."
})

perform_music = TaskType.create!({
    title: "Perform Music",
    description: "Need musicians to perform for a live event."
})

comedy = TaskType.create!({
    title: "Perform Comedy",
    description: "Need a stand up to perform for a live event."
})

monologue = TaskType.create!({
    title: "Perform Monologue",
    description: "Need an actor or actress to perform a monologue for a live event."
})

dance = TaskType.create!({
    title: "Dance Performance",
    description: "Need a dancer to perform for a live event."
})