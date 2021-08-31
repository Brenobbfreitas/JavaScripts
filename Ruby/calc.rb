result = ''

loop do 
    puts "Calculadora Operadores basicos!! "
    puts "Vc deseja que tipo de operação ?? "
    puts "1 opção: Adição "
    puts "2 opção: Subtração"
    puts "3 opção: Multiplicação"
    puts "4 opção: Divisão"
    puts "0 opção: Sair"
   
    operador = gets.chomp.to_i
    poduto = 0
    
    if operador == "+"
        puts "primeiro valor a ser Somado:"
        sum1 = gets.chomp.to_i
        puts "Segundo Valor a ser Somado:"
        sum2 = gets.chomp.to_i
        produto = sum1 + sum2
    elsif operador == "-"
        puts "Primeiro valor a ser Subtraido:"
        sub1 = gets.chomp.to_i
        puts "Segundo valor a ser Subtraido:"
        sub2 = gets.chomp.to_i
        produto = sub1 - sub2
    elsif operador == "*"
        puts "Primeiro valor a ser Multiplicado:"
        mult1 = gets.chomp.to_i
        puts "Segundo valor a ser Multiplicado:"
        mult2 = gets.chomp.to_i
        produto = mult1 * mult2
    elsif operador == "/"
        puts "Primeiro valor a ser Dividido:"
        div1 = gets.chomp.to_i
        puts "Segundo valor a ser Dividido:"
        div2 = gets.chomp.to_i
        produto = div1 / div2
    elsif operador == 0 
        break if operador == 0
    else
        result = "opção invalida"
    end

    system "clear"
end

        