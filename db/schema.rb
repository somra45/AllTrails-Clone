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

ActiveRecord::Schema[7.0].define(version: 2023_07_18_143119) do
  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "comments", force: :cascade do |t|
    t.string "body", null: false
    t.bigint "trail_id", null: false
    t.integer "author_id", null: false
    t.bigint "review_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["review_id"], name: "index_comments_on_review_id"
    t.index ["trail_id"], name: "index_comments_on_trail_id"
  end

  create_table "likes", force: :cascade do |t|
    t.boolean "likes"
    t.bigint "trail_id", null: false
    t.bigint "user_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["trail_id", "user_id"], name: "index_likes_on_trail_id_and_user_id", unique: true
    t.index ["trail_id"], name: "index_likes_on_trail_id"
    t.index ["user_id"], name: "index_likes_on_user_id"
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

  create_table "users", force: :cascade do |t|
    t.string "username", null: false
    t.string "email", null: false
    t.string "session_token", null: false
    t.string "password_digest", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["session_token"], name: "index_users_on_session_token", unique: true
    t.index ["username"], name: "index_users_on_username", unique: true
  end

  add_foreign_key "comments", "reviews"
  add_foreign_key "comments", "trails"
  add_foreign_key "comments", "users", column: "author_id"
  add_foreign_key "likes", "trails"
  add_foreign_key "likes", "users"
  add_foreign_key "reviews", "trails"
  add_foreign_key "reviews", "users", column: "author_id"
end
