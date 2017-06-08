class CreatePages < ActiveRecord::Migration[5.0]
  def change
    create_table :pages do |t|
      t.text     "about"
      t.string   "email"
      t.string   "line_id"
      t.string   "phone"
      t.timestamps
    end
  end
end
