import java.util.Scanner;

public class TaskSeven{
  public static void main(String[] args){
    Scanner input = new Scanner(System.in);
    int sum = 0;
    double average = 0;
    int evenNumberCounter = 0;
  
    for (int counter = 1; counter<=10; counter++){
      System.out.printf("Input the %dth score: ", counter);
      int score = input.nextInt();
      if (score%2 == 0 && score != 0){
        sum+= score;
        evenNumberCounter+=1;
        average = (double)sum/evenNumberCounter;
      }
      
    }
    System.out.printf("The sum of even scores entered is %d%n", sum);
    System.out.printf("The average of even scores entered is %.2f%n", average);
  
  
  }

}
