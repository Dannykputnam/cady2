class Asset < ApplicationRecord
  belongs_to :area

  validates :name, :description, :barcode, :price, :pdate, :status, :img, presence: true
end
