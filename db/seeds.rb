# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
User.connection.execute('ALTER SEQUENCE users_id_seq RESTART WITH 1')
TaskType.destroy_all
TaskType.connection.execute('ALTER SEQUENCE task_types_id_seq RESTART WITH 1')

(10).times do
    User.create!({
        email: Faker::Internet.email,
        password: "123456",
        first_name: Faker::Name.first_name,
        last_name: Faker::Name.last_name,
        account_type: "client",
        area_code: rand(10000..99999)
    })
end

User.create!({
        email: "bob@tablo.co",
        password: "123456",
        first_name: "Bobby",
        last_name: "Tables",
        account_type: "client",
        area_code: rand(10000..99999)
})

record_song = TaskType.create!({
    title: "Record Song",
    description: "Need an unaffiliated song to use for a video, event, or social media."
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

