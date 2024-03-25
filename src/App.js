import { useState } from "react";

function App() {
  const [nestedObjected, setNestedObject] = useState({
    taxi: "Ücret karşılığında yolcu taşımak için lisanslı bir araç",
    food: {
      sushi:
        "Deniz ürünleri ve sebzelerle birlikte sunulan geleneksel bir Japon yemeği",
      apple: {
        Honeycrisp:
          "MAES Bahçe Araştırma Merkezi'nde geliştirilen bir elma çeşidi",
        Fuji: "Tohoku Araştırma İstasyonu'nda yetiştiriciler tarafından geliştirilen bir elma çeşidi",
      },
    },
  });

  return (
    <div style={{ margin: "auto", width: "70%", paddingTop: 40 }}>
      <DisplayNested nestedObjected={nestedObjected} />
    </div>
  );
}

const DisplayNested = ({ nestedObjected }) => {
  return (
    <>
      <p>taxi: {nestedObjected.taxi}</p>
      <dl>
        <dt>food:</dt>
        <dd>sushi:{nestedObjected.food.sushi} </dd>

        <dd>
          apple:
          <dl>
            <dd>Honeycrisp: {nestedObjected.food.apple.Honeycrisp} </dd>
            <dd>Fuji: {nestedObjected.food.apple.Fuji}</dd>
          </dl>
        </dd>
      </dl>
    </>
  );
  // KODUNUZ BURAYA GELECEK
};

export default App;
