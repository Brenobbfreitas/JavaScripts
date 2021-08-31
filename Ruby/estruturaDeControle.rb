### IF, ELSE, ELSIF, UNLESS(executa quando a condição for falsa), CASE
###
###


###elsif

day = 'Holiday' 
 
if day == 'Sunday' 
  lunch = 'special'
elsif day == 'Holiday'
  lunch = 'later'
else
  lunch = 'normal'
end
 
puts "Lunch is #{lunch} today"

### UNLESS

product_status = 'closed'
 
unless product_status == 'open' #se o resultado for false check_change = can
  check_change = 'can'
else
  check_change = 'can not'
end
 
puts "You #{check_change} change the product"


### CASE

puts 'Digite o número do mês em que você nasceu?'
 
month = gets.chomp.to_i
 
case month 
when 1..3
  puts 'Você nasceu no começo do ano'
when 9..12
  puts 'Você nasceu no final do ano'
when 4..6
  puts 'Você nasceu na primeira metade do ano'
when 7..9
  puts 'Você nasceu na segunda metade do ano!'
else 
  puts 'Não foi possível identificar'
end