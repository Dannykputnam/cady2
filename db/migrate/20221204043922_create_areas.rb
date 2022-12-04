class CreateAreas < ActiveRecord::Migration[7.0]
  def change
    create_table :areas do |t|
      t.string :name
      t.string :address
      t.string :city
      t.string :country
      t.integer :zip
      t.string :mcontact
      t.string :pic

      t.timestamps
    end
  end
end
