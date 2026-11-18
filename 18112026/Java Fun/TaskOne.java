import java.util.Scanner;

public class TaskOne{
  public static void main(String[] args){
    Scanner input = new Scanner(System.in);
    int sum = 0;
  
    for (int counter = 1; counter<=10; counter++){
      System.out.printf("Input the %dth score: ", counter);
      int score = input.nextInt();
      sum+= score;
    }
    System.out.printf("The sum of the score entered is %d%n", sum);
  
  
  }

}
