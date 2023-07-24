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

ActiveRecord::Schema[7.0].define(version: 2023_07_24_123035) do
  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "favorites", force: :cascade do |t|
    t.boolean "favorites"
    t.bigint "trail_id", null: false
    t.bigint "member_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["member_id"], name: "index_favorites_on_member_id"
    t.index ["trail_id", "member_id"], name: "index_favorites_on_trail_id_and_member_id", unique: true
    t.index ["trail_id"], name: "index_favorites_on_trail_id"
  end

  create_table "members", force: :cascade do |t|
    t.string "firstname", null: false
    t.string "email", null: false
    t.string "session_token", null: false
    t.string "password_digest", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "lastname"
    t.index ["email"], name: "index_members_on_email", unique: true
    t.index ["firstname"], name: "index_members_on_firstname", unique: true
    t.index ["session_token"], name: "index_members_on_session_token", unique: true
  end

  create_table "reviews", force: :cascade do |t|
    t.string "body", null: false
    t.bigint "trail_id", null: false
    t.integer "author_id", null: false
    t.string "comment", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["trail_id"], name: "index_reviews_on_trail_id"
  end

  create_table "trails", force: :cascade do |t|
    t.integer "trail_id", null: false
    t.string "location", null: false
    t.string "length", null: false
    t.string "route_type", null: false
    t.integer "elevation_gain", null: false
    t.string "description", null: false
    t.string "difficulty", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["difficulty"], name: "index_trails_on_difficulty"
    t.index ["elevation_gain"], name: "index_trails_on_elevation_gain"
    t.index ["length"], name: "index_trails_on_length"
    t.index ["location"], name: "index_trails_on_location", unique: true
    t.index ["route_type"], name: "index_trails_on_route_type"
    t.index ["trail_id"], name: "index_trails_on_trail_id", unique: true
  end

  add_foreign_key "favorites", "members"
  add_foreign_key "favorites", "trails"
  add_foreign_key "reviews", "members", column: "author_id"
  add_foreign_key "reviews", "trails"
end
