# README

This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:

* Ruby version

* System dependencies

* Configuration

* Database creation

* Database initialization

* How to run the test suite

* Services (job queues, cache servers, search engines, etc.)

* Deployment instructions

* ...

## messagesテーブル

|Column|Type|Options|
|------|----|-------|
|body|text|null: false|
|image|string|
|group_id|integer|foreign_key: true|
|user_id|integer|foreign_key: true|

### Association
- belongs_to :group
- belongs_to :user

## usersテーブル

|Column|Type|Options|
|------|----|-------|
|name|text|null: false|
|email|string|null: false|
|password|text|null: false|
|users_groups_id|integer|foreign_key: true|

### Association
- has_many :messages
- has_many groups, through: :users_groups

## groupsテーブル

|Column|Type|Options|
|------|----|-------|
|name|text|null: false|
|users_groups_id|integer|foreign_key: true|

### Association
- has_many :users, through: :users_groups
- has_many :messages

## users_groupsテーブル

|Column|Type|Options|
|------|----|-------|
|user_id|integer|foreign_key: true|
|group_id|integer|foreign_key: true|

### Association
- belongs_to :user
- belongs_to :group
