

sum = 0
#even_number_counter = 0
score_counter = 0


while score_counter <10:
    score = input(f"Enter a score: ")
    if score == "5" or score == "1":
        score = int(score)
        sum+= score
        score_counter+=1 
        
        #even_number_counter+=1
        #average = sum/even_number_counter 
    else:
        print("Invalid Input")
        score_counter+=1 
        
     
            
    

print("\n")
print(f"The sum of valid scores entered is {sum}")
#print(f"The average of even scores entered is {average}")
#print(even_number_counter)



