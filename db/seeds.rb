# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

ApplicationRecord.transaction do 
    Member.destroy_all
    Trail.destroy_all


    ActiveRecord::Base.connection.reset_pk_sequence!('trails')

    
    Member.create!(
        firstname: "Demo",
        lastname: "Example",
        email: "demo@example.com",
        password: "Demopassword"
    )

    Trail.create!(
        trail_id: 1,
        name: 'Prospect Park',
        location: 'Brooklyn, NY',
        length: 3.6,
        route_type: 'Loop',
        elevation_gain: 157,
        description: 'Try this 3.6-mile loop trail near New York City. This is a very popular area for birding, mountain biking, and road biking, so you will likely encounter other people while exploring. Dogs on a leash are welcome. The trail is open year-round and is beautiful to visit anytime.',
        difficulty: 'Easy'
    )

    Trail.create!(
        trail_id: 2,
        name: 'Mill Creek Marsh Trail',
        location: 'Secaucus, NJ',
        length: 1.3,
        route_type: 'Loop',
        elevation_gain: 15,
        description: ' Mill Creek Marsh Trail is an oasis of nature in a highly urbanized area providing important habitat for birds, fish, crabs, and other animals. The flat trail through a tidal marsh is an easy walk and is very kid-friendly.',
        difficulty: 'Easy'
    )

    Trail.create!(
        trail_id: 3,
        name: 'Marine Park Salt Marsh Nature Trail',
        location: 'Brooklyn, NY',
        length: 1.1,
        route_type: 'Loop',
        elevation_gain: 5,
        description: 'The Marine Park Salt Marsh Trail is a 1.1-mile loop trail in Marine Park, Brooklyn, New York. The trail is considered to be easy, with some flat and sandy sections. The trail passes through a salt marsh, which is a wetland ecosystem that is home to a variety of plants and animals. The highlight of the hike is the opportunity to see the salt marsh at different stages of the tide, as well as the birds and other wildlife that call the marsh home. The Marine Park Salt Marsh Trail is a great place to go for a walk, birdwatch, or learn about the salt marsh ecosystem. The trail is open year-round, but it is best to visit during the spring or fall when the weather is mild.',
        difficulty: 'Easy'
    )

    Trail.create!(
        trail_id: 4,
        name: 'Hemlock Falls',
        location: 'Maplewood, NJ',
        length: 1.7,
        route_type: 'Loop',
        elevation_gain: 301,
        description: 'The Hemlock Falls Loop is a 1.8-mile loop trail in South Mountain Reservation in Maplewood, New Jersey. The trail is considered to be moderately challenging, with some rocky and steep sections. The trail passes through a variety of terrain, including forests, streams, and waterfalls. The highlight of the hike is Hemlock Falls, a 50-foot waterfall that cascades over a rocky cliff. The falls are most impressive after a heavy rain, but they can be enjoyed year-round.',
        difficulty: 'Moderate'
    )
    Trail.create!(
        trail_id: 5,
        name: 'Breakneck Ridge',
        location: 'Beacon, NY',
        length: 4.4,
        route_type: 'Out and Back',
        elevation_gain: 1000,
        description: 'Breakneck Ridge is a 4.4-mile trail in Beacon, New York. The trail is known for its steep ascents and challenging rock scrambles. The views from the top are worth the effort, though, as you can see the Hudson River and the Catskill Mountains.',
        difficulty: 'Difficult'
    )

Trail.create!(
        trail_id: 6,
        name: 'Devils Path',
        location: 'Catskill Mountains, NY',
        length: 23,
        route_type: 'Loop',
        elevation_gain: 8000,
        description: 'The Devils Path is a 23-mile trail in the Catskill Mountains. It is considered by many to be one of the most difficult hikes in New York. It is a challenging, multi-day hike that takes you over five peaks, including 3,544-foot Slide Mountain, the highest peak in the Catskills.',
        difficulty: 'Extremely Difficult'
    )

Trail.create!(
        trail_id: 7,
        name: 'Mount Marcy',
        location: 'Adirondack Mountains, NY',
        length: 14,
        route_type: 'Out and Back',
        elevation_gain: 3500,
        description: 'Mount Marcy is a 14-mile round-trip hike to the summit of the highest point in New York State. The trail is challenging, but the views from the top are worth it.',
        difficulty: 'Extremely Difficult'
    )

Trail.create!(
        trail_id: 8,
        name: 'Cascade Mountain and Porter Mountain',
        location: 'Catskill Mountains, NY',
        length: 8.4,
        route_type: 'Loop',
        elevation_gain: 2000,
        description: 'Cascade Mountain and Porter Mountain is an 8.4-mile loop hike that takes you over two of the Catskills most popular peaks. The trail is challenging, with some steep ascents and descents, but the views from the top are amazing.',
        difficulty: 'Difficult'
    )

Trail.create!(
        trail_id: 9,
        name: 'Bull Hill',
        location: 'Cold Spring, NY',
        length: 4.8,
        route_type: 'Loop',
        elevation_gain: 1000,
        description: 'Bull Hill is a 4.8-mile loop hike that is known for its challenging rock scrambles and its panoramic views of the Hudson River Valley.',
        difficulty: 'Difficult'
    )
 
    Trail.create!(
        trail_id: 10,
        name: 'Lands End Trail',
        location: 'San Francisco, CA',
        length: 3.5,
        route_type: 'Loop',
        elevation_gain: 500,
        description: 'The Lands End Trail is a 3.5-mile loop trail in the Golden Gate National Recreation Area. The trail offers stunning views of the Golden Gate Bridge, Alcatraz Island, and the Pacific Ocean. The trail is relatively flat and easy to follow, making it a great option for families and novice hikers.',
        difficulty: 'Easy'
    )

Trail.create!(
        trail_id: 11,
        name: 'Battery Spencer Trail',
        location: 'San Francisco, CA',
        length: 2.5,
        route_type: 'Loop',
        elevation_gain: 200,
        description: 'The Battery Spencer Trail is a 2.5-mile loop trail in the Golden Gate National Recreation Area. The trail offers panoramic views of the Golden Gate Bridge, the Marin Headlands, and the city of San Francisco. The trail is mostly flat and easy to follow, making it a great option for families and novice hikers.',
        difficulty: 'Easy'
    )

Trail.create!(
        trail_id: 12,
        name: 'Golden Gate Park Loop',
        location: 'San Francisco, CA',
        length: 5.5,
        route_type: 'Loop',
        elevation_gain: 100,
        description: 'The Golden Gate Park Loop is a 5.5-mile loop trail that passes through some of the most popular attractions in Golden Gate Park, including the Japanese Tea Garden, the California Academy of Sciences, and the DeYoung Museum. The trail is mostly flat and easy to follow, making it a great option for families and novice hikers.',
        difficulty: 'Easy'
    )

Trail.create!(
        trail_id: 13,
        name: 'Steep Ravine Trail',
        location: 'Mill Valley, CA',
        length: 4.4,
        route_type: 'Out and Back',
        elevation_gain: 1000,
        description: 'The Steep Ravine Trail is a 4.4-mile out-and-back trail in Marin County. The trail offers stunning views of the Pacific Ocean and the Marin Headlands. The trail is moderately difficult, with some steep sections.',
        difficulty: 'Moderate'
    )


Trail.create!(
        trail_id: 14,
        name: 'Muir Woods National Monument',
        location: 'Mill Valley, CA',
        length: 6,
        route_type: 'Loop',
        elevation_gain: 700,
        description: 'Muir Woods National Monument is a 6-mile loop trail that winds through a redwood forest. The trail is moderately difficult, with some steep sections. The redwoods are some of the tallest trees in the world, and the trail offers a unique opportunity to experience their beauty.',
        difficulty: 'Moderate'
    )

Trail.create!(
        trail_id: 15,
        name: 'Tennessee Valley Trail',
        location: 'Marin Headlands, CA',
        length: 6.7,
        route_type: 'Loop',
        elevation_gain: 1200,
        description: 'The Tennessee Valley Trail is a 6.7-mile loop trail in the Marin Headlands. The trail offers stunning views of the Golden Gate Bridge, Alcatraz Island, and the Pacific Ocean. The trail is moderately difficult, with some steep sections.',
        difficulty: 'Moderate'
    )

    Trail.create!(
        trail_id: 16,
        name: 'Marin Headlands Hike',
        location: 'Marin Headlands, CA',
        length: 10.5,
        route_type: 'Loop',
        elevation_gain: 1800,
        description: 'The Marin Headlands Hike is a 10.5-mile loop trail in the Marin Headlands. The trail offers stunning views of the Golden Gate Bridge, Alcatraz Island, and the Pacific Ocean. The trail is challenging, with some steep sections.',
        difficulty: 'Difficult'
    )

Trail.create!(
        trail_id: 17,
        name: 'Mt. Tamalpais Hike',
        location: 'Mill Valley, CA',
        length: 15,
        route_type: 'Out and Back',
        elevation_gain: 4000,
        description: 'Mt. Tamalpais Hike is a 15-mile out-and-back trail in Marin County. The trail offers stunning views of the San Francisco Bay Area. The trail is challenging, with some steep sections.',
        difficulty: 'Difficult'
    )

Trail.create!(
        trail_id: 18,
        name: 'Dipsea Trail',
        location: 'Stinson Beach, CA',
        length: 7.2,
        route_type: 'Uphill',
        elevation_gain: 2600,
        description: 'The Dipsea Trail is a 7.2-mile uphill trail in Stinson Beach. The trail offers stunning views of the Pacific Ocean. The trail is challenging, with some steep sections.',
        difficulty: 'Difficult'
    )

end