import javax.swing.JOptionPane;

public class Classe{
    public static void main(String[] args){

        int escolha = Integer.parseInt(JOptionPane.showInputDialog("o que deseja fazer? (1) - Adicionar aparelho (2) - Remover aparelho (3) - Listar aparelhos"));
        if (escolha == 1) {
            
            String novoAparelho = JOptionPane.showInputDialog("Digite o nome do novo aparelho:");
           
        } else if (escolha == 2) {
            
            String aparelhoRemover = JOptionPane.showInputDialog("Digite o nome do aparelho a ser removido:");
            
        } else if (escolha == 3) {
        
        } else {
            JOptionPane.showMessageDialog(null, "Opção inválida.");
        }
    }
}