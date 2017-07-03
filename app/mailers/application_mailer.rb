class ApplicationMailer < ActionMailer::Base
  default from: 'ayodeleamadi@gmail.com'

  def comment(user)
   mail(to: 'ayodeleamadi@gmail.com') do |format|
     format.html { render layout: 'comment_layout' }
     format.text
   end
 end

  def reservation(name, email, message, room, start, finish)
    @name = name
    @email = email
    @subject = room
    @message = message
    @start = start
    @finish = finish
   mail(to: 'ayodeleamadi@gmail.com') do |format|
     format.html { render layout: 'reservation_layout' }
     format.text
   end
end
end
