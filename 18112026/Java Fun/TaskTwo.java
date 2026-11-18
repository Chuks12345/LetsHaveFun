import java.util.Scanner;

public class TaskTwo{
  public static void main(String[] args){
    Scanner input = new Scanner(System.in);
    int sum = 0;
    double average = 0;
  
    for (int counter = 1; counter<=10; counter++){
      System.out.printf("Input the %dth score: ", counter);
      int score = input.nextInt();
      sum+= score;
      average = (double)sum/counter;
    }
    //System.out.printf("The sum of the average entered is %d%n", sum);
    System.out.printf("The average of the scores entered is %.2f%n", average);
  
  
  }

}
