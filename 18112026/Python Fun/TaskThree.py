

sum = 0

for counter in range(1, 11):
    score = int(input(f"Input the {counter}th score: "))
    
    sum+= score
    average = sum/counter

print("\n")
print(f"The sum of the scores entered is {sum}")
print(f"The average of the {counter} scores entered is {average}")



