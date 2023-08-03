# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

require "open-uri"

    Member.destroy_all
    Trail.destroy_all
    Tag.destroy_all
    Review.destroy_all


    TAG_DICTIONARY = ['nature', 'mountain biking', 'birding', 'road biking', 'hike', 
        'mountain', 'summit', 'peak', 'marsh', 'wetland', 'challenging', 
        'views', 'falls', 'waterfalls', 'family', 'families', 'easy', 'novice', 'moderate', 'steep', 
        'loop', 'beach', 'bugs', 'muddy', 'wet', 'mud', 'bird watching', 'rocky', 'forest', 'wheelchair', 
        'walking', 'running', 'camping']
    ActiveRecord::Base.connection.reset_pk_sequence!('trails')
    ActiveRecord::Base.connection.reset_pk_sequence!('reviews')
    ActiveRecord::Base.connection.reset_pk_sequence!('tags')
    ActiveRecord::Base.connection.reset_pk_sequence!('members')

    Member.create!(
        firstname: "Demo",
        lastname: "Example",
        email: "demo@example.com",
        password: "Demopassword"
    )

    Member.create!(
        firstname: "Amin",
        lastname: "Babar",
        email: "amin@amin.com",
        password: "Demopassword"
    )

    Member.create!(
        firstname: "Peter",
        lastname: "Kim",
        email: "peter@kim.com",
        password: "Demopassword"
    )

    Member.create!(
        firstname: "Stephen",
        lastname: "Dipietro",
        email: "stephen@me.com",
        password: "Demopassword"
    )

    Member.create!(
        firstname: "Clarence",
        lastname: "Smith",
        email: "smith@clarence.com",
        password: "Demopassword"
    )

    Member.create!(
        firstname: "Kin Ka",
        lastname: "Tse",
        email: "kinkathaking@kin.com",
        password: "Demopassword"
    )

    Member.create!(
        firstname: "Kyle",
        lastname: "Ginzberg",
        email: "kyle@ginz.com",
        password: "Demopassword"
    )

    Member.create!(
        firstname: "Ayce",
        lastname: "Lecap",
        email: "ayce@ayce.com",
        password: "Demopassword"
    )

    Member.create!(
        firstname: "Spencer",
        lastname: "Iascone",
        email: "spencer@thegoat.com",
        password: "Demopassword"
    )

    Trail.create!(
        trail_id: 1,
        name: 'Prospect Park',
        location: 'Brooklyn, NY',
        length: 3.6,
        route_type: 'Loop',
        elevation_gain: 157,
        description: 'Try this 3.6-mile loop trail near New York City. This is a
         very popular area for birding, mountain biking, and road biking, so you 
         will likely encounter other people while exploring. Dogs on a leash are 
         welcome. The trail is open year-round and is beautiful to visit anytime.',
        difficulty: 'Easy',
        lat: 40.66060,
        lng: -73.97006
    )

    Trail.create!(
        trail_id: 2,
        name: 'Mill Creek Marsh Trail',
        location: 'Secaucus, NJ',
        length: 1.3,
        route_type: 'Loop',
        elevation_gain: 15,
        description: ' Mill Creek Marsh Trail is an oasis of nature in a highly 
        urbanized area providing important habitat for birds, fish, crabs, and 
        other animals. The flat trail through a tidal marsh is an easy walk and 
        is very kid-friendly.',
        difficulty: 'Easy',
        lat: 40.79497, 
        lng: -74.04632
    )

    Trail.create!(
        trail_id: 3,
        name: 'Marine Park Salt Marsh Nature Trail',
        location: 'Brooklyn, NY',
        length: 1.1,
        route_type: 'Loop',
        elevation_gain: 5,
        description: 'The Marine Park Salt Marsh Trail is a 1.1-mile loop trail 
        in Marine Park, Brooklyn, New York. The trail is considered to be easy, 
        with some flat and sandy sections. The trail passes through a salt marsh, 
        which is a wetland ecosystem that is home to a variety of plants and animals. The highlight of the hike is the opportunity to see the salt marsh at different stages of the tide, as well as the birds and other wildlife that call the marsh home. The Marine Park Salt Marsh Trail is a great place to go for a walk, birdwatch, or learn about the salt marsh ecosystem. The trail is open year-round, but it is best to visit during the spring or fall when the weather is mild.',
        difficulty: 'Easy',
        lat: 40.60362,
        lng: -73.92856
    )

    Trail.create!(
        trail_id: 4,
        name: 'Hemlock Falls',
        location: 'Maplewood, NJ',
        length: 1.7,
        route_type: 'Loop',
        elevation_gain: 301,
        description: 'The Hemlock Falls Loop is a 1.8-mile loop trail in South 
        Mountain Reservation in Maplewood, New Jersey. The trail is considered 
        to be moderately challenging, with some rocky and steep sections. The 
        trail passes through a variety of terrain, including forests, streams, 
        and waterfalls. The highlight of the hike is Hemlock Falls, a 50-foot 
        waterfall that cascades over a rocky cliff. The falls are most impressive 
        after a heavy rain, but they can be enjoyed year-round.',
        difficulty: 'Moderate',
        lat: 40.75060,
        lng: -74.28847
    )
    Trail.create!(
        trail_id: 5,
        name: 'Breakneck Ridge',
        location: 'Beacon, NY',
        length: 4.4,
        route_type: 'Out and Back',
        elevation_gain: 1000,
        description: 'Breakneck Ridge is a 4.4-mile trail in Beacon, New York. 
        The trail is known for its steep ascents and challenging rock scrambles.
         The views from the top are worth the effort, though, as you can see the 
         Hudson River and the Catskill Mountains.',
        difficulty: 'Difficult',
        lat: 41.48860,
        lng: -73.95319
    )

Trail.create!(
        trail_id: 6,
        name: 'Devils Path',
        location: 'Catskill Mountains, NY',
        length: 23,
        route_type: 'Loop',
        elevation_gain: 8000,
        description: 'The Devils Path is a 23-mile trail in the Catskill Mountains.
         It is considered by many to be one of the most difficult hikes in New York.
         It is a challenging, multi-day hike that takes you over five peaks, including 3,544-foot Slide Mountain, the highest peak in the Catskills.',
        difficulty: 'Extremely Difficult',
        lat: 42.13411, 
        lng: -74.10456
    )

Trail.create!(
        trail_id: 7,
        name: 'Mount Marcy',
        location: 'Adirondack Mountains, NY',
        length: 16.2,
        route_type: 'Out and Back',
        elevation_gain: 3500,
        description: 'Mount Marcy is a 14-mile round-trip hike to the summit of 
        the highest point in New York State. The trail is challenging, but the 
        views from the top are worth it.  This is a very popular area for backpacking,
         camping, and hiking, so you will likely encounter other people while exploring. 
         Dogs are welcome, but must be on a leash.',
        difficulty: 'Extremely Difficult',
        lat: 44.11303, 
        lng: -73.92313

    )

Trail.create!(
        trail_id: 8,
        name: 'Cascade Mountain and Porter Mountain',
        location: 'Catskill Mountains, NY',
        length: 8.4,
        route_type: 'Loop',
        elevation_gain: 2000,
        description: 'Cascade Mountain and Porter Mountain is an 8.4-mile loop hike 
        that takes you over two of the Catskills most popular peaks. The trail is 
        challenging, with some steep ascents and descents, but the views from the top are amazing. 
        The trail is open year-round and is beautiful to visit anytime. Dogs are 
        welcome, but must be on a leash.',
        difficulty: 'Difficult',
        lat: 44.21864, 
        lng: -73.86054
    )

Trail.create!(
        trail_id: 9,
        name: 'Bull Hill',
        location: 'Cold Spring, NY',
        length: 4.8,
        route_type: 'Loop',
        elevation_gain: 1000,
        description: 'Bull Hill is a 4.8-mile loop hike that is known for its 
        challenging rock scrambles and its panoramic views of the Hudson River Valley. 
        Shortly before the top of the mountain, there is a rocky outcrop (which has
         "NYC" written on it) just to the right of the trail, from which you get an 
         excellent view south along the Hudson River, including the NYC skyline. The 
         best times to visit this trail are April through October. Dogs are welcome, 
         but must be on a leash.',
        difficulty: 'Difficult',
        lat: 41.43920,
        lng: -73.95591
    )
 
    Trail.create!(
        trail_id: 10,
        name: 'Lands End Trail',
        location: 'San Francisco, CA',
        length: 3.5,
        route_type: 'Loop',
        elevation_gain: 500,
        description: 'The Lands End Trail is a 3.5-mile loop trail in the Golden 
        Gate National Recreation Area. The trail offers stunning views of the Golden
         Gate Bridge, Alcatraz Island, and the Pacific Ocean. The trail is relatively
          flat and easy to follow, making it a great option for families and novice
           hikers. The trail is open year-round and is beautiful to visit anytime. 
           Dogs are welcome and may be off-leash in some areas. This is a very
           popular area for hiking, running, and walking.',
        difficulty: 'Easy',
        lat: 37.78592,
        lng: -122.50323
    )

Trail.create!(
        trail_id: 11,
        name: 'Battery Spencer Trail',
        location: 'San Francisco, CA',
        length: 2.5,
        route_type: 'Loop',
        elevation_gain: 200,
        description: 'The Battery Spencer Trail is a 2.5-mile loop trail in the
         Golden Gate National Recreation Area. The trail offers panoramic views 
         of the Golden Gate Bridge, the Marin Headlands, and the city of San 
         Francisco. The trail is mostly flat and easy to follow, making it a great
          option for families and novice hikers.',
        difficulty: 'Easy',
        lat: 37.82797,
        lng: -122.48165
    )

Trail.create!(
        trail_id: 12,
        name: 'Golden Gate Park Loop',
        location: 'San Francisco, CA',
        length: 5.5,
        route_type: 'Loop',
        elevation_gain: 100,
        description: 'The Golden Gate Park Loop is a 5.5-mile loop trail that
         passes through some of the most popular attractions in Golden Gate Park, 
         including the Japanese Tea Garden, the California Academy of Sciences, and 
         the DeYoung Museum. The trail is mostly flat and easy to follow, making it
          a great option for families and novice hikers.',
        difficulty: 'Easy',
        lat: 37.76974,
        lng: -122.48619
    )

Trail.create!(
        trail_id: 13,
        name: 'Steep Ravine Trail',
        location: 'Mill Valley, CA',
        length: 4.4,
        route_type: 'Out and Back',
        elevation_gain: 1000,
        description: 'The Steep Ravine Trail is a 4.4-mile out-and-back trail in
         Marin County. The trail offers stunning views of the Pacific Ocean and 
         the Marin Headlands. The trail is moderately difficult, with some steep 
         sections. The water rushing through Webb Creek has created a spectacularly steep, 
         lush canyon shaded by towering redwood trees and populated with a wide variety of 
         local flora and fauna.',
        difficulty: 'Moderate',
        lat: 37.89520,
        lng: -122.61528
    )


Trail.create!(
        trail_id: 14,
        name: 'Muir Woods National Monument',
        location: 'Mill Valley, CA',
        length: 6.3,
        route_type: 'Loop',
        elevation_gain: 1151,
        description: 'Muir Woods National Monument is a 6-mile loop trail that 
        winds through a redwood forest. The trail is moderately difficult, with
         some steep sections. The redwoods are some of the tallest trees in the
          world, and the trail offers a unique opportunity to experience their 
          beauty. Popular activities include hiking, bird watching, biking, as well 
          as shuttle services, trail is wheelchair friendly.',
        difficulty: 'Moderate',
        lat: 37.89715,
        lng: -122.58101
    )

Trail.create!(
        trail_id: 15,
        name: 'Tennessee Valley Trail',
        location: 'Marin Headlands, CA',
        length: 6.7,
        route_type: 'Loop',
        elevation_gain: 1200,
        description: 'The Tennessee Valley Trail is a 6.7-mile loop trail in 
        the Marin Headlands. The trail offers stunning views of the Golden Gate 
        Bridge, Alcatraz Island, and the Pacific Ocean. The trail is moderately
         difficult, with some steep sections.',
        difficulty: 'Moderate',
        lat: 37.86092,
        lng: -122.53598
    )

    Trail.create!(
        trail_id: 16,
        name: 'Marin Headlands Hike',
        location: 'Marin Headlands, CA',
        length: 10.5,
        route_type: 'Loop',
        elevation_gain: 1800,
        description: 'The Marin Headlands Hike is a 10.5-mile loop trail in the 
        Marin Headlands. The trail offers stunning views of the Golden Gate Bridge, 
        Alcatraz Island, and the Pacific Ocean. The trail is challenging, with some 
        steep sections.  This is a very popular area for birding, hiking, and horseback
         riding, so you will likely encounter other people while exploring.',
        difficulty: 'Difficult',
        lat: 37.82729,
        lng: -122.49954
    )

Trail.create!(
        trail_id: 17,
        name: 'Mt. Tamalpais Hike',
        location: 'Mill Valley, CA',
        length: 15,
        route_type: 'Out and Back',
        elevation_gain: 4000,
        description: 'Mt. Tamalpais Hike is a 15-mile out-and-back trail in Marin 
        County. The trail offers stunning views of the San Francisco Bay Area. The 
        trail is challenging, with some steep sections. There are two significant waterfalls 
        along Webb Creek in Steep Ravine. The upper falls requires climbing up the waterfall 
        via a 10 ft. high ladder. The waterfalls on Mount Tamalpais are best seen in the 
        winter or early spring months or after there has been a lot of rain.',
        difficulty: 'Difficult',
        lat: 37.92482,
        lng: -122.59664
    )

Trail.create!(
        trail_id: 18,
        name: 'Dipsea Trail',
        location: 'Stinson Beach, CA',
        length: 7.2,
        route_type: 'Uphill',
        elevation_gain: 2600,
        description: 'The Dipsea Trail begins in the town of Stinson Beach and is a 7.2 mile hike. 
        It climbs gradually with many ocean views until you reach its junction with the Steep Ravine Trail.
        The trail offers stunning views of the Pacific Ocean. The trail is 
        challenging, with some steep sections. You will need to leave pups at home — 
        dogs are not allowed on this trail.',
        difficulty: 'Difficult',
        lat: 37.89803,
        lng: -122.63716
    )

    TAG_DICTIONARY.each do |tag|
        Tag.create!(trail_tag: tag)
    end
    trails = Trail.all
    tags = Tag.all
    trails.each do |trail|
        words = trail.description.split(' ')
        words.each do |word|
            tags.each do |tag|
                if tag.trail_tag.downcase == word.downcase && !trail.tags.include?(tag)
                    TagJoin.create!(tag_id: tag.id, trail_id: trail.trail_id)
                end
            end
        end
    end

    REVIEWS_DICTIONARY = ['Keep your map handy, various twist and turns and multiple forks used my map over a dozen times', 
        'Super beautiful hike but make sure to download the map, markings are confusing.',
         'There were a lot of bugs, but we kind of expected it after all this rain. Trails marking was unclear. you should download the map.',
          'Some areas can be crowded, lots of bugs, beautiful ponds and waterfalls. There are no open bathrooms, 2 porta potty. Different parking lots, big picnic areas.',
          'Extremely dog friendly hike. Recommend for all size dogs',
          'Beautiful well maintained trail, lots of stairs! It is very luscious and so pretty! Stairs were not as hard as some reviews had said!',
          'Very pretty trail with lots of shades and views of the ocean. Quite steep at some location but manageable hike. Would recommend bringing hiking poles',
          'Busy today with a couple of wet spots on the trail, but otherwise fabulous as always.',
          'Pretty trail with a mix of sun and shade. Not a ton of mud or bugs. Lots of stairs and pretty challenging hike.', 
          'Great hike! Watch for ticks! Found a bunch on my dog!', 
          'Amazing views and tranquility!',
           'Moderate Trail with tons of things to see as noted in the description. There is a visitor center nearby if you want to use the restroom, get any souvenirs or get snacks.',
           'This hike is beautiful in rain or shine. Gets crowded at times in the nice weather near the waterfall.',
           'Very rocky! Wear the right shoes!',
           'As others have said, the trail is quite muddy and very very poorly marked. Thank god for Smalltrails offline GPS for making sure I finished my hike',
           'Can get muddy. Very rocky. Peaceful and the waterfalls were beautiful! Since the weather was great, there was some crowds. Couple of dogs off leashes.',
           'Really incredible views and a classic summit hike, the scramble on the rocks is not  bad at all if you find the orange blazes, it is not bouldering, but the last push to the summit is better with a buddy/good weather.',
           'Good views along the way and the top is awesome! Bring lots of water for this one. Some fairly steep areas, but doable.',
           'Great to have this trail open again. Always a great workout with much satisfaction at the summit.',
           'The leaves have all fallen and it is very slippery out and treacherous at times. Rock scramble in the beginning was the best part. Tough hike!',
           'Great trail for birding; I was able to see juvenile Osprey and Clapper rails. Be sure to bring your bug spray.',
           'Nice walk through thicket. Occasional views of the marsh, but it is mostly away from the water.',
           'Pretty trail leading from the nature trail, through a grassland with wildflowers and a salt marsh',
           'Beware the way back, you will feel fine on the way up, and then it gets you.', 
           'The trail is what you should expect for any high peak after a sustained rain. I completed a sunrise hike, in worn trail runners, with two Huskies and had no issues, other than wet socks and my legs being covered in mud. It was a fantastic hike.',
           'Great trail! Lots of boulders and good terrain. Bring an extra layer for the summit.',
           'Great trail, really pretty waterfalls, almost entirely covered, not too steep. Heavy climb in the first two miles, flat or downhill later.'
    ]
    members = Member.all
    memberids = members.map { |member| member.id }
    memberids = memberids.select { |id| id != 1 }
    trails.each do |trail|
        idx_array = []
        words = trail.description.split(' ')
        words.each do |word| 
            REVIEWS_DICTIONARY.each_with_index do |review, idx|
                id = memberids.sample
                    current_ids = trail.reviews.map { | review | review.author_id }
                if review.include?(word) && !current_ids.include?(id) && !idx_array.include?(idx)
                    rating_array = [1, 2, 3, 4, 5]
                    new_rating = rating_array.sample
                    new_review = Review.create(trail_id: trail.trail_id, body: review, author_id: id, rating: new_rating)
                    idx_array.push(idx)
                end
            end
        end
    end

trails.each_with_index do |trail, idx|
    ['a', 'b', 'c', 'd', 'e'].each do |letter|
        trail.images.attach(io: URI.open("https://smalltrails-prod.s3.amazonaws.com/trail-seeds/#{(idx + 1).to_s}/#{(idx + 1).to_s}#{letter}.jpg"),
            filename: "trail_seeds_" + (idx + 1).to_s + letter + ".jpg"
        )
    end
   
end
