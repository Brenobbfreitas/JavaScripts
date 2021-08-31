result = ''

loop do 
    puts result
    puts "1 para descobrir idade da pessoa "
    puts "0-Sair"
    print "opção: "

    option = gets.chomp.to_i

    if option == 1
        puts "Digite o ano de nascimento"
        yearOfBirth = gets.chomp.to_i
        puts "Digite o ano atual"
        year = gets.chomp.to_i
        age = yearOfBirth - year
        result = "Quem nasceu no ano de #{yearOfBirth} tem #{age} ano em #{year}"
    elsif option == 0 
        break if option == 0
    else 
        result = "Opão invalida"
    end

    system "clear"
end