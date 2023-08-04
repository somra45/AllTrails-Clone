
SmallTrails - a clone of AllTrails
------------------------------------------------------------------------------
[SmallTrails Live](https://alltrails-clone.onrender.com/)
------------------------------------------------------------------------------
Description
------------------------------------------------------------------------------
  SmallTrails contains hiking `trails` in the New York City 
  and San Francisco Bay area that members can search for. 
------------------------------------------------------------------------------
Technology
------------------------------------------------------------------------------
React Redux
------------------------------------------------------------------------------
  SmallTrails uses `React Redux` to render the frontend components as well as 
  manage the state.
------------------------------------------------------------------------------
Ruby on Rails
------------------------------------------------------------------------------
  Smalltrails uses `Ruby on Rails` to create the database tables, and manages 
  controllers and routes that are responsible for communicating information 
  from the database to the frontend, and for persisting changes made in the 
  frontend to the backend.
------------------------------------------------------------------------------
Postgresql
------------------------------------------------------------------------------
  SmallTrails uses `Postgresql` to store the applications data as well as store
  images of each `trail` and `member` using AWS.
------------------------------------------------------------------------------
Features
------------------------------------------------------------------------------
Member Authentication
------------------------------------------------------------------------------
  Users can can sign up to be `members` of SmallTrails with password encryption.
![userauth](https://github.com/somra45/AllTrails-Clone/assets/126993987/7bf97d0d-b471-425d-a776-3b01fedeb922)
------------------------------------------------------------------------------
Trail Show Page
------------------------------------------------------------------------------
  The trail show page shows details of the trail like `length`, `route type`,
  `description`, `activities`, `difficulty`, and `elevation gain`, as well as 
  a google map box that marks the trail `location`.
![trailshow](https://github.com/somra45/AllTrails-Clone/assets/126993987/77398657-a587-40b2-8682-ec4ea6a72fdc)
------------------------------------------------------------------------------
Trail Reviews
------------------------------------------------------------------------------
  `Members` can find `trails` that contain `reviews` of other users experiences
  hiking that specific trail, write a review if logged in, edit their reviews,
  and delete them.
![reviews](https://github.com/somra45/AllTrails-Clone/assets/126993987/036f26ef-6e69-488e-8fbc-187b57d91b8d)
------------------------------------------------------------------------------
Explore Page
------------------------------------------------------------------------------
  Users can also view an `explore` page and view the `trails` on a map.
![explore](https://github.com/somra45/AllTrails-Clone/assets/126993987/fe0fc1aa-078c-493a-9838-c6cd27b9a6f0)
------------------------------------------------------------------------------
Trail Photos
------------------------------------------------------------------------------
  Users can view photos of a particular trail with a  visually appealing 
  slider UI.
![photos](https://github.com/somra45/AllTrails-Clone/assets/126993987/cdc920cf-32ac-4bbd-9dd8-6b3393019757)
------------------------------------------------------------------------------
Search
------------------------------------------------------------------------------
  Users can search for trails based on location, activities or name.
![search](https://github.com/somra45/AllTrails-Clone/assets/126993987/ee2d4cd8-ecd9-47a3-88f4-62f3f5f5fccb)
------------------------------------------------------------------------------
Code Snippets
------------------------------------------------------------------------------
Seeding
------------------------------------------------------------------------------
  Setting up seeds efficiently as well as tags that relay accurate information
  about each trail and what activities are included.
  `    members = Member.all
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

Trail.all.sort_by{ |t| t.id }.each_with_index do |trail, idx|
    ['a', 'b', 'c', 'd', 'e'].each do |letter|
        trail.images.attach(io: URI.open("https://smalltrails-prod.s3.amazonaws.com/trail-seeds/#{(idx + 1).to_s}/#{(idx + 1).to_s}#{letter}.jpg"),
            filename: "trail_seeds_" + (idx + 1).to_s + letter + ".jpg"
        )
    end
   
end

Member.all.each_with_index do |member, idx|
    if idx != 0
        member.photo.attach(io: URI.open("https://smalltrails-prod.s3.amazonaws.com/photos/#{member.firstname}.png"),
            filename: "photos_" + member.firstname + ".png" 
        )
    end
end  `
------------------------------------------------------------------------------
Rating Stars on Create and Edit Review Form
------------------------------------------------------------------------------
  Creating customized functions for each star so the hover effect will dynamically
  fill all the previous stars based on which star is being hovered over.
`                             <div className='star-div'>
                                <svg onMouseEnter={handleHover1} onMouseLeave={handleLeave1} onClick={handleClick1}  className={filled1 ? 'svg-create-filled' : 'svg-create'} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" role="presentation" 
                                    aria-hidden="true" focusable="false" data-testid="star-filled" >
                                    <path d="M11.776.454a.25.25 0 0 1 .448 0l3.303 6.692 7.384 1.073a.25.25 0 0 1 .139.426l-5.344 5.21 1.262 7.354a.25.25 0 0 1-.363.264L12 18l-6.605 3.473a.25.25 0 0 1-.363-.264l1.262-7.355L.95 8.645a.25.25 0 0 1 .139-.426l7.384-1.073L11.776.454Z"></path>
                                </svg> 
                            </div> 
                            <div className='star-div'>
                                <svg  onMouseEnter={handleHover2} onMouseLeave={handleLeave2} onClick={handleClick2}  className={filled2 ? 'svg-create-filled' : 'svg-create'} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" role="presentation" 
                                    aria-hidden="true" focusable="false" data-testid="star-filled" >
                                    <path d="M11.776.454a.25.25 0 0 1 .448 0l3.303 6.692 7.384 1.073a.25.25 0 0 1 .139.426l-5.344 5.21 1.262 7.354a.25.25 0 0 1-.363.264L12 18l-6.605 3.473a.25.25 0 0 1-.363-.264l1.262-7.355L.95 8.645a.25.25 0 0 1 .139-.426l7.384-1.073L11.776.454Z"></path>
                                </svg> 
                            </div > 
                            <div className='star-div'>
                                <svg  onMouseEnter={handleHover3} onMouseLeave={handleLeave3} onClick={handleClick3} className={filled3 ? 'svg-create-filled' : 'svg-create'} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" role="presentation" 
                                    aria-hidden="true" focusable="false" data-testid="star-filled" >
                                    <path d="M11.776.454a.25.25 0 0 1 .448 0l3.303 6.692 7.384 1.073a.25.25 0 0 1 .139.426l-5.344 5.21 1.262 7.354a.25.25 0 0 1-.363.264L12 18l-6.605 3.473a.25.25 0 0 1-.363-.264l1.262-7.355L.95 8.645a.25.25 0 0 1 .139-.426l7.384-1.073L11.776.454Z"></path>
                                </svg> 
                            </div> 
                            <div  className='star-div'>
                                <svg onMouseEnter={handleHover4} onMouseLeave={handleLeave4} onClick={handleClick4}  className={filled4 ? 'svg-create-filled' : 'svg-create'} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" role="presentation" 
                                    aria-hidden="true" focusable="false" data-testid="star-filled" >
                                    <path d="M11.776.454a.25.25 0 0 1 .448 0l3.303 6.692 7.384 1.073a.25.25 0 0 1 .139.426l-5.344 5.21 1.262 7.354a.25.25 0 0 1-.363.264L12 18l-6.605 3.473a.25.25 0 0 1-.363-.264l1.262-7.355L.95 8.645a.25.25 0 0 1 .139-.426l7.384-1.073L11.776.454Z"></path>
                                </svg> 
                            </div> 
                            <div className='star-div'>
                                <svg onMouseEnter={handleHover5} onMouseLeave={handleLeave5} onClick={handleClick5}  className={filled5 ? 'svg-create-filled' : 'svg-create'} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" role="presentation" 
                                    aria-hidden="true" focusable="false" data-testid="star-filled" >
                                    <path d="M11.776.454a.25.25 0 0 1 .448 0l3.303 6.692 7.384 1.073a.25.25 0 0 1 .139.426l-5.344 5.21 1.262 7.354a.25.25 0 0 1-.363.264L12 18l-6.605 3.473a.25.25 0 0 1-.363-.264l1.262-7.355L.95 8.645a.25.25 0 0 1 .139-.426l7.384-1.073L11.776.454Z"></path>
                                </svg> 
                            </div> `

