// Main.java
import java.util.*;

public class Main {
    public static void main(String[] args) {
        // Criando inventário e produtos
        Inventory inventory = new Inventory();
        Electronic smartphone = new Electronic("E100", "Smartphone X", 1500.00, 10, 24);
        Accessory headphones = new Accessory("A200", "Headphones Bluetooth", 150.00, 25, "Smartphones, PC");
        Appliance microwave = new Appliance("AP300", "Micro-ondas 20L", 350.00, 5, 24, 1200);

        inventory.addProduct(smartphone);
        inventory.addProduct(headphones);
        inventory.addProduct(microwave);

        System.out.println("=== Produtos iniciais ===");
        inventory.listAll();

        // Demonstração de polimorfismo / desconto
        System.out.println("\nAplicando 10% de desconto nos headphones (se suportarem desconto)...");
        Product p = inventory.findById("A200");
        if (p instanceof Discountable) {
            ((Discountable)p).applyDiscount(10.0);
        }
        inventory.listAll();

        // Criando pedido 1
        System.out.println("\n=== Criando Pedido 1 ===");
        Order order1 = new Order();
        order1.addItem(inventory.findById("E100"), 1);   // 1 smartphone
        order1.addItem(inventory.findById("A200"), 2);   // 2 headphones
        order1.printReceipt();

        // Tentativa de pedido com estoque insuficiente
        System.out.println("\n=== Criando Pedido 2 (estoque insuficiente) ===");
        Order order2 = new Order();
        order2.addItem(inventory.findById("AP300"), 10); // tenta 10 micro-ondas (só há 5)

        // Repor estoque e tentar novamente
        System.out.println("\nRestock do micro-ondas +10 pelo gerente...");
        inventory.findById("AP300").restock(10); // restock público
        inventory.listAll();

        System.out.println("\nTentando adicionar novamente ao pedido 2...");
        order2.addItem(inventory.findById("AP300"), 10); // agora deve funcionar
        order2.printReceipt();

        // Exibir estado final do inventário
        System.out.println("\n=== Inventário final ===");
        inventory.listAll();
    }
}

/* --------------- MODELO DE DOMÍNIO --------------- */

abstract class Product {
    private String id;
    private String name;
    private double price;
    private int stock;

    public Product(String id, String name, double price, int stock) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.stock = stock;
    }

    // Encapsulamento: getters públicos, setters controlados
    public String getId() { return id; }
    public String getName() { return name; }
    public double getPrice() { return price; } // leitura pública
    protected void setPrice(double newPrice) { this.price = newPrice; } // só subclasses/mesmo pacote podem ajustar
    public int getStock() { return stock; }

    // Operações seguras sobre estoque
    public synchronized void restock(int qty) {
        if (qty > 0) this.stock += qty;
    }

    public synchronized boolean reduceStock(int qty) {
        if (qty > 0 && qty <= this.stock) {
            this.stock -= qty;
            return true;
        }
        return false;
    }

    public abstract String getCategory();

    @Override
    public String toString() {
        return String.format("%s (%s) - R$%.2f - estoque: %d", name, getCategory(), price, stock);
    }
}

interface Discountable {
    void applyDiscount(double percent);
}

// Eletrônicos: classe base para produtos eletrônicos
class Electronic extends Product implements Discountable {
    private int warrantyMonths;

    public Electronic(String id, String name, double price, int stock, int warrantyMonths) {
        super(id, name, price, stock);
        this.warrantyMonths = warrantyMonths;
    }

    @Override
    public String getCategory() { return "Electronics"; }

    @Override
    public void applyDiscount(double percent) {
        if (percent > 0 && percent < 100) {
            double novo = getPrice() * (1 - percent / 100.0);
            setPrice(Math.round(novo * 100.0) / 100.0); // arredonda 2 decimais
            System.out.println("Desconto aplicado em " + getName() + ": " + percent + "%");
        }
    }

    @Override
    public String toString() {
        return super.toString() + String.format(" | %d meses garantia", warrantyMonths);
    }
}

// Appliance (ex.: micro-ondas) herda de Electronic (mostra herança em níveis)
class Appliance extends Electronic {
    private int powerWatts;

    public Appliance(String id, String name, double price, int stock, int warrantyMonths, int powerWatts) {
        super(id, name, price, stock, warrantyMonths);
        this.powerWatts = powerWatts;
    }

    @Override
    public String getCategory() { return "Appliance"; }

    @Override
    public String toString() {
        return super.toString() + String.format(" | %dW", powerWatts);
    }
}

// Acessórios: herda de Product diretamente
class Accessory extends Product implements Discountable {
    private String compatibility;

    public Accessory(String id, String name, double price, int stock, String compatibility) {
        super(id, name, price, stock);
        this.compatibility = compatibility;
    }

    @Override
    public String getCategory() { return "Accessory"; }

    @Override
    public void applyDiscount(double percent) {
        if (percent > 0 && percent < 100) {
            double novo = getPrice() * (1 - percent / 100.0);
            setPrice(Math.round(novo * 100.0) / 100.0);
            System.out.println("Desconto aplicado em " + getName() + ": " + percent + "%");
        }
    }

    @Override
    public String toString() {
        return super.toString() + " | Compatibilidade: " + compatibility;
    }
}

/* --------------- INVENTÁRIO E PEDIDOS --------------- */

class Inventory {
    private Map<String, Product> products = new LinkedHashMap<>();

    public void addProduct(Product p) {
        products.put(p.getId(), p);
    }

    public Product findById(String id) {
        return products.get(id);
    }

    public void listAll() {
        for (Product p : products.values()) {
            System.out.println(p);
        }
    }

    public List<Product> listByCategory(String category) {
        List<Product> list = new ArrayList<>();
        for (Product p : products.values()) {
            if (p.getCategory().equalsIgnoreCase(category)) list.add(p);
        }
        return list;
    }
}

class Order {
    private Map<Product, Integer> items = new LinkedHashMap<>();
    private Date createdAt = new Date();

    public boolean addItem(Product p, int qty) {
        if (p == null) {
            System.out.println("Produto inválido.");
            return false;
        }
        if (qty <= 0) {
            System.out.println("Quantidade inválida.");
            return false;
        }
        boolean ok = p.reduceStock(qty);
        if (ok) {
            items.merge(p, qty, Integer::sum);
            System.out.println("Adicionado ao pedido: " + qty + " x " + p.getName());
            return true;
        } else {
            System.out.println("Estoque insuficiente para " + p.getName() + " (pedido: " + qty + ", disponível: " + p.getStock() + ")");
            return false;
        }
    }

    public double totalPrice() {
        double total = 0.0;
        for (Map.Entry<Product, Integer> e : items.entrySet()) {
            total += e.getKey().getPrice() * e.getValue();
        }
        return Math.round(total * 100.0) / 100.0;
    }

    public void printReceipt() {
        System.out.println("\n--- RECIBO ---");
        System.out.println("Data: " + createdAt);
        for (Map.Entry<Product, Integer> e : items.entrySet()) {
            System.out.printf("%d x %s  - R$%.2f cada -> R$%.2f\n", e.getValue(), e.getKey().getName(), e.getKey().getPrice(), e.getKey().getPrice() * e.getValue());
        }
        System.out.println("Total: R$" + totalPrice());
        System.out.println("--------------\n");
    }
}
