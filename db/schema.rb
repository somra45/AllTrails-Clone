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

ActiveRecord::Schema[7.0].define(version: 2023_09_27_182710) do
  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "active_storage_attachments", force: :cascade do |t|
    t.string "name", null: false
    t.string "record_type", null: false
    t.bigint "record_id", null: false
    t.bigint "blob_id", null: false
    t.datetime "created_at", null: false
    t.index ["blob_id"], name: "index_active_storage_attachments_on_blob_id"
    t.index ["record_type", "record_id", "name", "blob_id"], name: "index_active_storage_attachments_uniqueness", unique: true
  end

  create_table "active_storage_blobs", force: :cascade do |t|
    t.string "key", null: false
    t.string "filename", null: false
    t.string "content_type"
    t.text "metadata"
    t.string "service_name", null: false
    t.bigint "byte_size", null: false
    t.string "checksum"
    t.datetime "created_at", null: false
    t.index ["key"], name: "index_active_storage_blobs_on_key", unique: true
  end

  create_table "active_storage_variant_records", force: :cascade do |t|
    t.bigint "blob_id", null: false
    t.string "variation_digest", null: false
    t.index ["blob_id", "variation_digest"], name: "index_active_storage_variant_records_uniqueness", unique: true
  end

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
    t.string "location"
    t.index ["email"], name: "index_members_on_email", unique: true
    t.index ["session_token"], name: "index_members_on_session_token", unique: true
  end

  create_table "reviews", force: :cascade do |t|
    t.string "body", null: false
    t.bigint "trail_id", null: false
    t.integer "author_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer "rating"
    t.index ["rating"], name: "index_reviews_on_rating"
    t.index ["trail_id"], name: "index_reviews_on_trail_id"
  end

  create_table "tag_joins", force: :cascade do |t|
    t.integer "trail_id", null: false
    t.integer "tag_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["tag_id"], name: "index_tag_joins_on_tag_id"
    t.index ["trail_id"], name: "index_tag_joins_on_trail_id"
  end

  create_table "tags", force: :cascade do |t|
    t.string "trail_tag", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["trail_tag"], name: "index_tags_on_trail_tag"
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
    t.string "name", null: false
    t.bigint "total_rating"
    t.bigint "average_rating"
    t.float "lat"
    t.float "lng"
    t.index ["average_rating"], name: "index_trails_on_average_rating"
    t.index ["difficulty"], name: "index_trails_on_difficulty"
    t.index ["elevation_gain"], name: "index_trails_on_elevation_gain"
    t.index ["length"], name: "index_trails_on_length"
    t.index ["location"], name: "index_trails_on_location"
    t.index ["route_type"], name: "index_trails_on_route_type"
    t.index ["total_rating"], name: "index_trails_on_total_rating"
    t.index ["trail_id"], name: "index_trails_on_trail_id", unique: true
  end

  add_foreign_key "active_storage_attachments", "active_storage_blobs", column: "blob_id"
  add_foreign_key "active_storage_variant_records", "active_storage_blobs", column: "blob_id"
  add_foreign_key "favorites", "members"
  add_foreign_key "favorites", "trails"
  add_foreign_key "reviews", "members", column: "author_id"
  add_foreign_key "reviews", "trails"
  add_foreign_key "tag_joins", "tags"
  add_foreign_key "tag_joins", "trails"
end
