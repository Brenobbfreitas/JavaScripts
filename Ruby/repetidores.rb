###For ->> percorrer uma coleção de elementos 
###while ->> repete o bloco de codigo enquanto sua condição for verdadeira
###times ->> executa uma repetição por um determinado número de vezes
###Do/while ->> executa repetição até a instrução break for TRUE


#FOR estruct

fruits = ['uva', 'banana', 'morango'] #array de frutas
count = 0;

for fruit in fruits
    puts fruit
    puts count 
    count += 1;
end


##WHILE
x = 0
while x <= 10
    puts x
    x += 1
end

##Do/WHILE
y=0
loop do 
    puts y 
    if y >=10
        break
    end
    y += 1
end

##TIMES

10.times do 
    puts "Ola"
end