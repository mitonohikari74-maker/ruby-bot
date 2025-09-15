# bot.rb
require 'sinatra'
require 'json'

set :port, 4000

post '/message' do
  data = JSON.parse(request.body.read)
  sender = data["from"]
  text   = data["text"]

  reply = case text.downcase
          when "ping" then "pong!"
          when "hello" then "hello #{sender} 👋"
          else "I don't understand that command."
          end

  { reply: reply }.to_json
end
