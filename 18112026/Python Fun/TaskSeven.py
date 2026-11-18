

sum = 0
even_number_counter = 0

for counter in range(1, 11):
    score = int(input(f"Input the {counter}th score: "))
    if score%2 == 0 and score !=0:
        
        sum+= score
        even_number_counter+=1
        average = sum/even_number_counter

print("\n")
print(f"The sum of even scores entered is {sum}")
print(f"The average of even scores entered is {average}")
#print(even_number_counter)



