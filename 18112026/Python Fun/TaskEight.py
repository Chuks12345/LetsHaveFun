

sum = 0
#even_number_counter = 0
score_counter = 0

while score_counter < 10:
    score = int(input(f"Enter a score greater than 0 but less than 100: "))
    if 0 < score < 100:
        sum+= score
        score_counter+=1
        #even_number_counter+=1
        #average = sum/even_number_counter
            
    

print("\n")
print(f"The sum of scores entered is {sum}")
#print(f"The average of even scores entered is {average}")
#print(even_number_counter)



