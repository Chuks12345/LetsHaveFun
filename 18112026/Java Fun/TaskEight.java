import java.util.Scanner;

public class TaskEight{
  public static void main(String[] args){
    Scanner input = new Scanner(System.in);
    int sum = 0;
    //double average = 0;
    //int evenNumberCounter = 0;
    int scoreCounter = 0;
    int score = 0;
  
    while (scoreCounter < 10){
      System.out.printf("Enter a score greater than 0 but less than 100: ");
      score = input.nextInt();
      if (score>0 && score<100){
        sum+= score;
        scoreCounter+=1;
        //evenNumberCounter+=1;
        //average = (double)sum/evenNumberCounter;     
      }
    }
      
    System.out.printf("The sum of scores entered is %d%n", sum);
    //System.out.printf("The average of even scores entered is %.2f%n", average);
  
  
  }

}
