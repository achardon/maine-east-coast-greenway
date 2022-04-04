# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

#Places
# kitt = Place.create(name: "Kittery", location: 0, description: "Kittery is the southernmost town of Maine. It was the first incorporated town in Maine in 1647.", image: "https://maineguide.com/images/kittery.gif")
# kenn = Place.create(name: "Kennebunk", location: 37, description: "Kennebunk and its close neighbor, Kennebunkport, are filled with historic charm, fishwing wharfs, unique boutiques, and some delicious restaurants.", image: "https://downeast.com/wp-content/uploads/2020/09/2010_MFP-web-feat.jpg")
# port = Place.create(name: "Portland", location: 64, description: "Portland is the biggest town on the Maine portion of the route. It is a historic seacoast town with a funky vibe, working waterfront, hundreds of one-of-a-kind shops, and award-winning restaurants.", image: "https://i0.wp.com/embracesomeplace.com/wp-content/uploads/2021/10/Portland-Maine-09040.jpg")
# free = Place.create(name: "Freeport", location: 83, description: "Freeport is a lovely town most famous for its plentiful retail outlets and shops, but it also boasts miles of hiking trails as well as local craft breweries.", image: "https://newengland.com/wp-content/uploads/AroundtownWilbursandMainewreath.jpg")
# brun = Place.create(name: "Brunswick", location: 93, description: "Brunswick is a college town offering rich and diverse arts and cultural resources, anchored by Bowdoin College's noted museums, theater, and concert hall.", image: "https://i0.wp.com/downeast.com/wp-content/uploads/2020/01/Brunswick-Sidewalks-web.jpg")

#NEW PLACES START HERE
bide = Place.create(name: "Biddeford", location: 46, description: "Biddeford was once an important mill town. It now has a vibrant downtown and is Maine's youngest city - the median age of residents is 29.", image: "https://cdn.britannica.com/56/177256-050-B44D2237/University-of-New-England-Biddeford-Maine.jpg")
saco = Place.create(name: "Saco", location: 47, description: "Saco sits between 7 miles of sandy ocean beaches to the east and the Saco River to the west. Biddeford and Saco are twin cities", image: "https://i0.wp.com/mainstreetmaine.org/wp-content/uploads/2017/10/Run-Of-The-Mill-Saco-Brewery.jpg?ssl=1")
scar = Place.create(name: "Scarborough", location: 55, description: "Scarborough is one of the fastest growing communities in Maine and is known for its beaches. It is also home to the state's largest salt marsh.", image: "https://static.wixstatic.com/media/810273_2f7279ca867c4e63ba4968d4a59033a9~mv2_d_3883_2912_s_4_2.jpeg/v1/fill/w_3883,h_2912,al_c/810273_2f7279ca867c4e63ba4968d4a59033a9~mv2_d_3883_2912_s_4_2.jpeg")
falm = Place.create(name: "Falmouth", location: 71, description: "Falmouth is a unique town just a few minutes north of Portland. It is a mix of rocky coast and rural inlands.", image: "https://usm-feed-maine.s3.amazonaws.com/a0c9c391d6de69e3ef514cdf903e88a0-1-.jpg?1627975082")
yarm = Place.create(name: "Yarmouth", location: 77, description: "Yarmouth is on the coast of Casco Bay and includes the communities of Cousins Island and Little John Island, both accesible by bridge. It is also home to Eartha, the world's largest rotating globe.", image: "https://www.etravelmaine.com/wp-content/uploads/2011/12/station.jpg")
bath = Place.create(name: "Bath", location: 103, description: "Bath has a unique mix of shops, restaurants, and museums. The city's avenues are lined by trees and complete with 19th century brick buildings and narrow streets.", image: "https://i0.wp.com/mainstreetmaine.org/wp-content/uploads/2018/02/Bath-Maine-1-scaled.jpeg?resize=768%2C510&ssl=1")
wisc = Place.create(name: "Wiscasset", location: 116, description: "Wiscasset is fondly known as the prettiest village in Maine. It boasts some of the region's most famous architectural landmarks and was even in the running for state capital in 1820.", image: "https://i.pinimg.com/736x/d3/14/e8/d314e82ac58ec7e2f21f5fdae3db05ac--new-england-maine.jpg")
dama = Place.create(name: "Damariscotta", location: 126, description: "Damariscotta is the oyster capital of New England. It has two oyster festivals every year, both of which include an oyster-shucking competition.", image: "https://images.fineartamerica.com/images/artworkimages/mediumlarge/2/bay-at-damariscotta-maine-heeb-photos.jpg")
owls = Place.create(name: "Owl's Head", location: 168, description: "Owl's Head is a peninsula on a peninsula that's off the beaten path. It has a lighthouse that was first built in 1825 and stands atop a steep rise 100 feet above the water.", image: "https://www.owlshead.maine.gov/wp-content/uploads/2019/06/img-5274adj_orig.jpg")
camd = Place.create(name: "Camden", location: 184, description: "Camden is the self-described Jewel of the Maine Coast. What makes it unique is how the mountains meet the sea between Mount Battie and Penoboscot Bay.", image: "https://s7d2.scene7.com/is/image/TWCNews/me_gettycamden_08132021")
belf = Place.create(name: "Belfast", location: 211, description: "Belfast is a small seaside town. You can have a picnic at Moose Point State Park and check out several awesome local bookstores.", image: "https://lifelivedcuriously.com/wp-content/uploads/2021/06/Belfast_Maine-720x405.jpg.webp")
orla = Place.create(name: "Bucksport", location: 229, description: "Bucksport is known for its gorgeous views of the Penobscot River and the iconic Penobscot Narrows Bridge, which is home to the world's tallest bridge observation deck at 436 feet.", image: "https://www.bucksportmaine.gov/vertical/Sites/%7B1700581E-144E-4C5D-B026-79CCA6D1E656%7D/uploads/View-of-Bucksport-final-600x243.jpg")
# ells = Place.create(name: "Ellsworth", location: 248, description:"Ellsworth is a picturesque city that sits along the Union River. It is the gateway to Acadia National Park and has plenty of great places to get a bite to eat or a tasty beer at a local brewery.", image: "https://acadiamagic.com/1200w/ellsworth-0145.jpg")
cala = Place.create(name: "Calais", location: 352, description: "Calais is one of the smallest cities in Maine. It sits on the St. Croix River right on the border to Canada.", image: "https://www.nelsonkb.com/states/maine.jpg")

#All cities the route goes through:
# Kittery
# South Berwick
# North Berwick
# Kennebunk
# Biddeford
# Saco
# Scarborough
# Portland
# Falmouth
# Yarmouth
# Freeport
# Brunswick
# Bath
# Wiscasset
# Damariscotta
# Thomaston
# Owl's Head
# Camden
# Belfast
# Bucksport
# Orland
# Ellsworth
# ..... many more cities here
# Calais




#Accommodations
# heml = kenn.accommodations.create(name: "Hemlock Grove Campground", category: "campground", address: "1299 Portland Road, Arundel, ME 04046", distance_from_route: 2, description: "This campground sits on 32+ aces and has 75 sites, a store, rec hall, game room, laundry room, bathhouse, playground, and playhouse. Rates are between $47-$62 per night.")
# sand = kenn.accommodations.create(name: "Sandy Pines Campground", category: "campground", address: "277 Mills Road, Kennebunkport, ME 04046", distance_from_route: 6, description: "This campground offers some of the best RV campsites, highly rated glamping tents, and an array of camp cottages and unique retreats you won’t find anywhere else.")
chsp = camd.accommodations.create(name: "Camden Hills State Park", category: "campground", address: "280 Belfast Road, Camden, ME 04843", distance_from_route: 2, description: "This state park has scenic vistas high atop Mt. Battie with sweeping views of Camden, Penobscot Bay, and the surrounding islands. It has over 100 campsites and offers 30 miles of hiking trails.")


#Attractions
reds = Attraction.create(name: "Red's Eats", category: "restaurant", address: "41 Water St, Wiscasset, ME 04578", distance_from_route: "0.38 miles", description: "This popular spot was voted Maine's best lobster role in 2021.", place: wisc)

#Users
# ac = User.create(username: "Alessandra", password: "bikeforever")

#Trips

#Days
