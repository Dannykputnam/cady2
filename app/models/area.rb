class Area < ApplicationRecord
  validates :name, :address, :city, :country, :zip, :mcontact, :pic, presence: true
end
