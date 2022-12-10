class Area < ApplicationRecord
  has_many :assets, dependent: destroy
  validates :name, :address, :city, :country, :zip, :mcontact, :pic, presence: true
end
