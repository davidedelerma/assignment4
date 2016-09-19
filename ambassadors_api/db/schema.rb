# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20160918131513) do

  create_table "ambassadors", force: :cascade do |t|
    t.string   "name"
    t.string   "surname"
    t.string   "subject"
    t.string   "city"
    t.string   "email"
    t.string   "phone_nb"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "teacher_ambassadors", force: :cascade do |t|
    t.integer  "teacher_id"
    t.integer  "ambassador_id"
    t.date     "data"
    t.datetime "created_at",    null: false
    t.datetime "updated_at",    null: false
  end

  add_index "teacher_ambassadors", ["ambassador_id"], name: "index_teacher_ambassadors_on_ambassador_id"
  add_index "teacher_ambassadors", ["teacher_id"], name: "index_teacher_ambassadors_on_teacher_id"

  create_table "teachers", force: :cascade do |t|
    t.string   "name"
    t.string   "surname"
    t.string   "school"
    t.string   "city"
    t.string   "phone_nb"
    t.datetime "created_at",                          null: false
    t.datetime "updated_at",                          null: false
    t.string   "email",                  default: "", null: false
    t.string   "encrypted_password",     default: "", null: false
    t.string   "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.integer  "sign_in_count",          default: 0,  null: false
    t.datetime "current_sign_in_at"
    t.datetime "last_sign_in_at"
    t.string   "current_sign_in_ip"
    t.string   "last_sign_in_ip"
  end

  add_index "teachers", ["email"], name: "index_teachers_on_email", unique: true
  add_index "teachers", ["reset_password_token"], name: "index_teachers_on_reset_password_token", unique: true

end
