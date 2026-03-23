import headphones from "../assets/headphones technolog.png";
import gaming from "../assets/gaming setup.png";
import laptop from "../assets/laptop workspac.png";
import keyboard from "../assets/computer keyboard desk4.png";
import smartphone from "../assets/smartphone modern.png";
import smartwatch from "../assets/smartwatch.png";
import Card from "./Card";
const cards = [
  { id: 1, image: headphones, title: "Headphones", description: "Premium wireless headphones." },
  { id: 2, image: gaming, title: "Gaming Setup", description: "Professional gaming setup." },
  { id: 3, image: laptop, title: "Laptop", description: "Modern workspace laptop." },
  { id: 4, image: keyboard, title: "Keyboard", description: "Mechanical desk keyboard." },
  { id: 5, image: smartphone, title: "Smartphone", description: "Latest smartphone model." },
  { id: 6, image: smartwatch, title: "Smartwatch", description: "Smart wearable technology." },
];
function CardGrid() {
  return (
    <div style={{
      minHeight: "100vh",
      backgroundColor: "#f0f2f5",
      padding: "40px",
      display: "flex",
      flexWrap: "wrap",
      gap: "24px",
      justifyContent: "center",
      alignItems: "flex-start",
    }}>
      {cards.map((card) => (
        <Card
          key={card.id}
          image={card.image}
          title={card.title}
          description={card.description}
        />
      ))}
    </div>
  );
}

export default CardGrid;