# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
require 'open-uri'

Review.destroy_all
Review.connection.execute('ALTER SEQUENCE reviews_id_seq RESTART WITH 1')
Task.destroy_all
Task.connection.execute('ALTER SEQUENCE tasks_id_seq RESTART WITH 1')
ArtistTaskType.destroy_all
ArtistTaskType.connection.execute('ALTER SEQUENCE users_id_seq RESTART WITH 1')
User.destroy_all
User.connection.execute('ALTER SEQUENCE users_id_seq RESTART WITH 1')
TaskType.destroy_all
TaskType.connection.execute('ALTER SEQUENCE task_types_id_seq RESTART WITH 1')

anon_profile_animals = [
    'https://i.imgur.com/qsctQtO.jpg',
    'https://i.imgur.com/HGQLFK7.png',
    'https://i.imgur.com/rbUGjHT.jpg',
    'https://i.imgur.com/SsTFhQZ.jpg',
    'https://i.imgur.com/I89Whg9.jpg',
    'https://i.imgur.com/JciCPKS.png'
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
    Philip_Guston
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
    file = URI.open(anon_profile_animals.sample)
    clients[i].photo.attach(io: file, filename: "#{clients[i].first_name.capitalize}_#{clients[i].last_name.capitalize}")
end

############################# bios #############################

courbet_bio = "Courbet's paintings of the late 1840s and early 1850s brought him his first recognition. They challenged convention by depicting unidealized peasants and workers, often on a grand scale traditionally reserved for paintings of religious or historical subjects."
fridah_bio = "Kahlo's work as an artist remained relatively unknown until the late 1970s, when her work was rediscovered by art historians and political activists. By the early 1990s, she had become not only a recognized figure in art history, but also regarded as an icon for Chicanos, the feminism movement and the LGBTQ+ movement."
gaugin_bio = "Gauguin was an important figure in the Symbolist movement as a painter, sculptor, printmaker, ceramist, and writer. His expression of the inherent meaning of the subjects in his paintings, under the influence of the cloisonnist style, paved the way to Primitivism and the return to the pastoral."
guston_bio = "In the late 1960s Guston helped to lead a transition from abstract expressionism to neo-expressionism in painting, abandoning so-called pure abstraction in favor of more representational, simplified renderings of personal symbols and objects. His existential, lugubrious images after 1968 employed a limited palette."
nai_bio = "A two-time Grammy nominated singer, songwriter and musician from Australia, she is a composer, instrumentalist, producer, vocalist and poet who approaches all of these self-taught disciplines with an intuitive, infectious grace which sent her on a journey to sculpt songs that have been received and treasured across the world."
waits_bio = "Thomas Alan Waits (born December 7, 1949) is an American singer, songwriter, musician, composer, and actor. His lyrics often focus on the underbelly of society and are delivered in his trademark deep, gravelly voice."
kendrick_bio = "Kendrick Lamar Duckworth (born June 17, 1987) is an American rapper, songwriter, record producer. He is regarded by many critics and contemporaries as one of the most influential artists of his generation, and often cited as one of the greatest rappers of all time."

############################# photos #############################

fridah_photo = "https://i.imgur.com/hsuXdWy.jpg"
corubet_photo = "https://i.imgur.com/IWNw5xZ.jpg"
guston_photo = "https://i.imgur.com/K4hY7Ro.png"
nai_photo = "https://i.imgur.com/vqafCaA.jpg"
waits_photo = "https://i.imgur.com/f8O8CE5.jpg"
kendrick_photo = "https://i.imgur.com/yMzVa0A.jpg"

############################# attach photos & bios #############################

artists["Fridah_Kahlo"].update(about: fridah_bio)
file = URI.open(fridah_photo)
artists["Fridah_Kahlo"].photo.attach(io: file, filename: "Fridah_Kahlo")

artists["Gustave_Courbet"].update(about: courbet_bio)
file = URI.open(corubet_photo)
artists["Gustave_Courbet"].photo.attach(io: file, filename: "Gustave_Courbet.png")

artists["Philip_Guston"].update(about: guston_bio)
file = URI.open(guston_photo)
artists["Philip_Guston"].photo.attach(io: file, filename: "Philip_Guston.png")

artists["Nai_Palm"].update(about: nai_bio)
file = URI.open(nai_photo)
artists["Nai_Palm"].photo.attach(io: file, filename: "Nai_Palm.png")

artists["Tom_Waits"].update(about: waits_bio)
file = URI.open(waits_photo)
artists["Tom_Waits"].photo.attach(io: file, filename: "Tom_Waits.png")

artists["Kendrick_Lamar"].update(about: kendrick_bio)
file = URI.open(kendrick_photo)
artists["Kendrick_Lamar"].photo.attach(io: file, filename: "Kendrick_Lamar.png")

############################# BOB!!! #############################

bob = User.create!({
    email: "bob@tablo.co",
    password: "123456",
    first_name: "Bobby",
    last_name: "Tables",
    account_type: "client",
    area_code: rand(10000..99999)
})

file = URI.open('https://i.imgur.com/VhvWGfR.png')
bob.photo.attach(io: file, filename: "bob_tables.png")

############################# Record A Song #############################

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

ArtistTaskType.create!({
    task_type_id: record_song.id,
    artist_id: artists["Nai_Palm"].id
})

Review.create!({
    task_id: nai_song.id,
    rating: 4,
    artist_id: artists["Nai_Palm"].id,
    details: "Nai wrote an awesome song! It took a little longer than expected, but totally worth it."
})

ken_song = Task.create!({
    completed: true,
    artist_id: artists["Kendrick_Lamar"].id,
    task_type_id: record_song.id,
    user_id: clients[1].id
})

ArtistTaskType.create!({
    task_type_id: record_song.id,
    artist_id: artists["Kendrick_Lamar"].id
})

Review.create!({
    task_id: ken_song.id,
    rating: 5,
    artist_id: artists["Kendrick_Lamar"].id,
    details: "I was truly humbled by the experience of working with Ken. The song he wrote for us was fire!"
})

tom_song = Task.create!({
    completed: true,
    artist_id: artists["Tom_Waits"].id,
    task_type_id: record_song.id,
    user_id: clients[2].id
})

ArtistTaskType.create!({
    task_type_id: record_song.id,
    artist_id: artists["Tom_Waits"].id
})

Review.create!({
    task_id: tom_song.id,
    rating: 4,
    artist_id: artists["Tom_Waits"].id,
    details: "Tom recorded an amazing acoustic cover for us of 'We Are the Champions' for our fundraiser."
})

############################# Paint A mural #############################

############ Philip_Guston, Fridah_Kahlo, Gustave_Courbet #################

paint_mural = TaskType.create!({
    title: "Paint Mural",
    description: "Need an artist to paint a mural for us."
})

philip_mural = Task.create!({
    completed: true,
    artist_id: artists["Philip_Guston"].id,
    task_type_id: paint_mural.id,
    user_id: clients[3].id
})

ArtistTaskType.create!({
    task_type_id: paint_mural.id,
    artist_id: artists["Philip_Guston"].id
})

Review.create!({
    task_id: philip_mural.id,
    rating: 5,
    artist_id: artists["Philip_Guston"].id,
    details: "Phil's otherwordly mural was powerful and completed ahead of schedule. Would love to work together again!"
})

fridah_mural = Task.create!({
    completed: true,
    artist_id: artists["Fridah_Kahlo"].id,
    task_type_id: paint_mural.id,
    user_id: clients[4].id
})

ArtistTaskType.create!({
    task_type_id: paint_mural.id,
    artist_id: artists["Fridah_Kahlo"].id
})

Review.create!({
    task_id: fridah_mural.id,
    rating: 5,
    artist_id: artists["Fridah_Kahlo"].id,
    details: "Fridah's mural will be the highlight of our downtown public space for generations to come."
})

gus_mural = Task.create!({
    completed: true,
    artist_id: artists["Gustave_Courbet"].id,
    task_type_id: paint_mural.id,
    user_id: clients[5].id
})

ArtistTaskType.create!({
    task_type_id: paint_mural.id,
    artist_id: artists["Gustave_Courbet"].id
})

Review.create!({
    task_id: gus_mural.id,
    rating: 4,
    artist_id: artists["Gustave_Courbet"].id,
    details: "Gus is incredibly talented and delivered on time. A bit risque for our community center, but otherwise no complaints!"
})

################# Future Task Types #################

# persuasive_writing = TaskType.create!({
#     title: "Write Persuasively",
#     description: "Need help writing persuasively for a donor letter, rally speach, or online mission statement."
# })

# film_event = TaskType.create!({
#     title: "Film Event",
#     description: "Need a cinematographer to capture an event for us."
# })

# film_interview = TaskType.create!({
#     title: "Film Interview",
#     description: "Need a cinematographer to record an interview."
# })

# edit_video = TaskType.create!({
#     title: "Edit Video",
#     description: "Need an editor to help us edit a short video."
# })

# write_script = TaskType.create!({
#     title: "Write Ad Script",
#     description: "Need a writer to script a video or audio advertisement."
# })

# design_poster = TaskType.create!({
#     title: "Design Poster",
#     description: "Need a visual artist to design a poster."
# })

# design_flyer = TaskType.create!({
#     title: "Design Flyer",
#     description: "Need a visual artist to design a flyer."
# })

# perform_music = TaskType.create!({
#     title: "Perform Music",
#     description: "Need musicians to perform for a live event."
# })

# comedy = TaskType.create!({
#     title: "Perform Comedy",
#     description: "Need a stand up to perform for a live event."
# })

# monologue = TaskType.create!({
#     title: "Perform Monologue",
#     description: "Need an actor or actress to perform a monologue for a live event."
# })

# dance = TaskType.create!({
#     title: "Dance Performance",
#     description: "Need a dancer to perform for a live event."
# })