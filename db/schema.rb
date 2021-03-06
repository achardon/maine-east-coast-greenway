# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema[7.0].define(version: 2022_03_28_160947) do
  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "accommodations", force: :cascade do |t|
    t.string "name"
    t.string "category"
    t.string "address"
    t.integer "distance_from_route"
    t.string "description"
    t.bigint "place_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["place_id"], name: "index_accommodations_on_place_id"
  end

  create_table "attractions", force: :cascade do |t|
    t.string "name"
    t.string "category"
    t.string "address"
    t.string "distance_from_route"
    t.string "description"
    t.bigint "place_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["place_id"], name: "index_attractions_on_place_id"
  end

  create_table "days", force: :cascade do |t|
    t.bigint "trip_id", null: false
    t.datetime "day", precision: nil
    t.integer "mileage", null: false
    t.string "notes", null: false
    t.string "start_point", null: false
    t.string "end_point", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "accommodations", default: "", null: false
    t.index ["trip_id"], name: "index_days_on_trip_id"
  end

  create_table "places", force: :cascade do |t|
    t.string "name"
    t.integer "location"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "description"
    t.string "image"
  end

  create_table "trips", force: :cascade do |t|
    t.bigint "user_id", null: false
    t.string "name"
    t.datetime "start_date", precision: nil
    t.datetime "end_date", precision: nil
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["user_id"], name: "index_trips_on_user_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "username"
    t.string "password_digest"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_foreign_key "accommodations", "places"
  add_foreign_key "attractions", "places"
  add_foreign_key "days", "trips"
  add_foreign_key "trips", "users"
end
