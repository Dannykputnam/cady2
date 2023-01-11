class CreateAssets < ActiveRecord::Migration[7.0]
  def change
    create_table :assets do |t|
      t.string :name
      t.string :description
      t.string :barcode
      t.decimal :price
      t.datetime :pdate
      t.string :status
      t.string :img
      t.belongs_to :area, null: false, foreign_key: true

      t.timestamps
    end
  end
end
