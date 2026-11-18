import java.util.Scanner;

public class TaskNine{
  public static void main(String[] args){
    Scanner input = new Scanner(System.in);
    int sum = 0;
    //double average = 0;
    //int evenNumberCounter = 0;
    int scoreCounter = 0;
    String score = " ";
  
    while (scoreCounter < 10){
      System.out.printf("Enter a score: ");
      
      if (input.hasNextInt()){
        score = input.nextInt();
          //score = (int)score;
          System.out.print(score);
          input.nextLine();
        
          sum+= score;
        //scoreCounter+=1;
        //evenNumberCounter+=1;
        //average = (double)sum/evenNumberCounter;   
          
      }
      else{
        System.out.print("Invalid");
        scoreCounter+=1;
      }
    }
      
    System.out.printf("The sum of scores entered is %d%n", sum);
    //System.out.printf("The average of even scores entered is %.2f%n", average);
  
  
  }

}
