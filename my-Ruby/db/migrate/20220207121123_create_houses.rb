class CreateHouses < ActiveRecord::Migration[6.1]
  def change
    create_table :houses do |t|
      t.string :address
      t.string :img
      t.integer :numberOfPieces

      t.timestamps
    end
  end
end
