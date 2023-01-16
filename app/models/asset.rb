class Asset < ApplicationRecord
  belongs_to :area

  validates :name, :description, :barcode, :price, :pdate, :status, :img, :category presence: true
end
