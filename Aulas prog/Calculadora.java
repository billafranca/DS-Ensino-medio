import java.util.Scanner;

public class Calculadora {
    public static void main(String[] args){
        Scanner sc = new Scanner(System.in);

        System.out.print("Input the first term: ");
        double num1 = sc.nextDouble();
        System.out.print("Input the second term: ");
        double num2 = sc.nextDouble();

        System.out.print("Input the operation (-, +, /, *): ");
        String operacao = sc.next();  

        double result;  

        switch (operacao) {
            case "-" -> {
                result = num1 - num2;
                System.out.println("The result is: " + result);
            }
            case "+" -> {
                result = num1 + num2;
                System.out.println("The result is: " + result);
            }
            case "/" -> {
                if (num2 == 0) {
                    System.out.println("Cannot divide by zero.");
                } else {
                    result = num1 / num2;
                    System.out.println("The result is: " + result);
                }
            }
            case "*" -> {
                result = num1 * num2;
                System.out.println("The result is: " + result);
            }
            default -> {
                System.out.println("Invalid operation. Please use -, +, /, or *.");
            }
        }

        sc.close();  
    }
}
