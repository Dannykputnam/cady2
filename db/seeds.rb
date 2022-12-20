1.times do 
  name = Faker::Creature::Cat.name
  area = Area.create(
    name: name, 
    address: Faker::Creature::Cat.breed, 
    city: Faker::Creature::Cat.registry, 
    country: Faker::Creature::Cat.breed, 
    zip: '84065', 
    mcontact: name, 
    pic: "https://home.cady.com/wp-content/uploads/2020/06/Blog-header-960x636.jpg",
  )

  5.times do 
    Asset.create(
      name: name, 
      description: Faker::Tea.variety, 
      barcode: Faker::Tea.variety, 
      price: '1000.00', 
      pdate: Faker::Date.forward(days: 23), 
      status: 'available', 
      img: "https://home.cady.com/wp-content/uploads/2020/06/Blog-header-960x636.jpg",
      area_id: area.id
    )
  end
end 


puts Area.all.count 
puts Asset.all.count