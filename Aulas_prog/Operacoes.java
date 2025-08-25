import javax.swing.JOptionPane;

public class Operacoes{
    public static void main(String[] args) {
    
        int operacao = Integer.parseInt(JOptionPane.showInputDialog("digite o que deseja fazer (1) calcular área quadrado (2) calcular área retângulo (3) calcular área triângulo (4) realizar uma operação: (-   +   *   /   %) "));
        double resultado = 0;


        if (operacao == 1) {
            String lado = JOptionPane.showInputDialog("Digite o lado do quadrado:");
            double area = Math.pow(Double.parseDouble(lado), 2);
            JOptionPane.showMessageDialog(null, "A área do quadrado é: " + area);
        } else if (operacao == 2) {
            String base = JOptionPane.showInputDialog("Digite a base do retângulo:");
            String altura = JOptionPane.showInputDialog("Digite a altura do retângulo:");
            double area = Double.parseDouble(base) * Double.parseDouble(altura);
            JOptionPane.showMessageDialog(null, "A área do retângulo é: " + area);
        }else if (operacao == 3){
            String base = JOptionPane.showInputDialog("Digite a base do triângulo:");
            String altura = JOptionPane.showInputDialog("Digite a altura do triângulo:");
            double area = (Double.parseDouble(base) * Double.parseDouble(altura))/2;
            JOptionPane.showMessageDialog(null, "A área do triângulo é: " + area);
        }else if (operacao == 4) {
            String num1 = JOptionPane.showInputDialog("Digite o primeiro número:");
            String num2 = JOptionPane.showInputDialog("Digite o segundo número:");
            String operador = JOptionPane.showInputDialog("Digite o operador (+, -, *, /, %):");
            double n1 = Double.parseDouble(num1);
            double n2 = Double.parseDouble(num2);
            double res = 0;
            switch (operador) {
                case "+":
                    resultado = n1 + n2;
                    JOptionPane.showMessageDialog(null, "o resultado é: " + resultado);
                    break;
                case "-":
                    resultado = n1 - n2;
                    JOptionPane.showMessageDialog(null, "o resultado é: " + resultado);
                    break;
                case "*":
                    resultado = n1 * n2;
                    JOptionPane.showMessageDialog(null, "o resultado é: " + resultado);
                    break;
                case "/":
                    resultado = n1 / n2;
                    JOptionPane.showMessageDialog(null, "o resultado é: " + resultado);
                    break;
                case "%":
                    resultado = n1 % n2;
                    JOptionPane.showMessageDialog(null, "o resultado é: " + resultado);
                    break;
                default:
                    JOptionPane.showMessageDialog(null, "Operador inválido.");
                    break;
            }
        } else {
            JOptionPane.showMessageDialog(null, "Opção inválida.");
        }

    }

}