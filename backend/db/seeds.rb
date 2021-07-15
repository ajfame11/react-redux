# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

puts "Seeding..."

 

Comment.destroy_all

Post.destroy_all

User.destroy_all

 

u1 = User.create(username: "super", email: "super@users.com", password: "123")

u2 = User.create(username: "user2", email: "user2@users.com", password: "123")

u3 = User.create(username: "user3", email: "user3@users.com", password: "123")

 

p1 = Post.create(title: "Full-Day Essential Seoul Tour", image: "https://youtu.be/3P1CnWI62Ik", body: "Tour the buzzing metropolis of Seoul, South Korea's capital, without any hiccups. On this full-day sightseeing tour with entrance fees included, cross the city in air-conditioned comfort with your guide. Take in top attractions including Gyeongbok Palace, Gwanghwamun Gate, and Jogye Temple, and step back in time at the historic Bukchon Hanok Village. There is also an option to add a second day to tour the DMZ (not in Seoul). [https://www.tripadvisor.com/AttractionProductReview-g294197-d11478953-Full_Day_Essential_Seoul_Tour-Seoul.html]", user_id: u1.id)

p2 = Post.create(title: "NYC City of Cities", image: "https://youtu.be/JCYJj3t9RuU", body: "New York in One Day Guided Sightseeing Tour. Combine New York City’s top attractions in a guided tour via bus and boat (April–December). With insider commentary from your guide, visit Rockefeller Center, South Street Seaport, 9/11 Memorial, and Wall Street. Take a harbor cruise via luxury boat, with views of Ellis Island, the Statue of Liberty, and Brooklyn Bridge. Back on land, hit Lincoln Center and Central Park before wrapping up this whirlwind tour.", user_id: u2.id)

p3 = Post.create(title: "Ilsan, International Flower Festival", image: "https://youtu.be/6aDFBeWqkMk", body: "Ilsan New Town refers to a planned city occupying Ilsandong-gu and Ilsanseo-gu of Goyang. Ilsan is located northwest of Seoul. Like other satellite cities in the Seoul National Capital Area such as Bundang, Ilsan was planned in order to alleviate housing shortages in the city of Seoul. Ilsan has experienced phenomenal growth in the past 15 years, usually drawing in younger generations of upper middle-class and upper-class Koreans. [https://en.wikipedia.org/wiki/Ilsan]", user_id: u3.id)

p4 = Post.create(title: "Dallas: Everything is big in Texas!!!", image: "https://youtu.be/BF55_ykAAYw", body: "Get your bags packed and your road maps ready – the State Fair of Texas® is just around the corner, bringing you an all-access pass to Texas-sized fun! A celebration of all things Texan, the State Fair encourages visitors to explore the great Lone Star State and all it has to offer. A combination of entertainment, art, agriculture, history and cuisine, the State Fair provides fairgoers with a unique way to experience every aspect of Texas culture, all in one place. With that in mind, the State Fair invites you to grab your family and friends and start planning your trip. [https://www.visitdallas.com/things-to-do/venue/view/7538/State-Fair-of-Texas.html]", user_id: u1.id)

p5 = Post.create(title: "Little Rock, Capital City of Natural State", image: "https://youtu.be/yTK16LC6WXE", body: "Little Rock, the capital of Arkansas, is a city on the Arkansas River. It’s home to the William J. Clinton Presidential Library and Museum, with exhibits including a replica of the Oval Office and presidential artifacts. In an 1800s Greek Revival building, the Old State House Museum traces Arkansas history. MacArthur Park has a pond, plus the Arkansas Arts Center, known for its large collection of drawings. ― Google", user_id: u2.id)

p6 = Post.create(title: "London, England", image: "https://youtu.be/gs-skMbz9vo", body: "London, the capital of England and the United Kingdom, is a 21st-century city with history stretching back to Roman times. At its centre stand the imposing Houses of Parliament, the iconic ‘Big Ben’ clock tower and Westminster Abbey, site of British monarch coronations. Across the Thames River, the London Eye observation wheel provides panoramic views of the South Bank cultural complex, and the entire city. ― Google", user_id: u1.id)

p7 = Post.create(title: "Edinburgh, Scotland", image: "https://youtu.be/SRNyfBRhq0A", body: "Edinburgh is Scotland's compact, hilly capital. It has a medieval Old Town and elegant Georgian New Town with gardens and neoclassical buildings. Looming over the city is Edinburgh Castle, home to Scotland’s crown jewels and the Stone of Destiny, used in the coronation of Scottish rulers. Arthur’s Seat is an imposing peak in Holyrood Park with sweeping views, and Calton Hill is topped with monuments and memorials. ― Google", user_id: u2.id)

p8 = Post.create(title: "Sydney Opera House", image: "https://youtu.be/Yc7r_bbt00M", body: "Sydney, capital of New South Wales and one of Australia's largest cities, is best known for its harbourfront Sydney Opera House, with a distinctive sail-like design. Massive Darling Harbour and the smaller Circular Quay port are hubs of waterside life, with the arched Harbour Bridge and esteemed Royal Botanic Garden nearby. Sydney Tower’s outdoor platform, the Skywalk, offers 360-degree views of the city and suburbs. ― Google", user_id: u3.id)

 

p1.comments.create(content: "I want to visit!", commenter_id: u2.id)

p2.comments.create(content: "you should!!!", commenter_id: u1.id)

p3.comments.create(content: "i live here~ lol", commenter_id: u2.id)

p4.comments.create(content: "enjoy your life there!", commenter_id: u3.id)

p5.comments.create(content: "beautiful~", commenter_id: u1.id)

p6.comments.create(content: "true~~~", commenter_id: u2.id)

p7.comments.create(content: "interesting~", commenter_id: u3.id)

p8.comments.create(content: "maybe next year~", commenter_id: u1.id)

p1.comments.create(content: "great idea~√", commenter_id: u2.id)

p2.comments.create(content: "looks peaceful", commenter_id: u3.id)

 

puts "Seeding complete!"