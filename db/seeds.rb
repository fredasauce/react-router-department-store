10.times do
  department = Department.create(
    name: Faker::Commerce.department
  )

  20.times do
    Item.create(
      name: Faker::Commerce.product_name,
      description: Faker::Lorem.sentence,
      price: Faker::Commerce.price,
      department_id: department.id
    )
  end
end

puts "10 depts with 20 items created"