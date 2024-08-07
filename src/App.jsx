import React, { useState } from 'react';
import toast from 'react-hot-toast';

function App() {
  // Rastgele sayılar ve operatör oluşturuyoruz
  const [say1, setSay1] = useState(Math.floor(Math.random() * (10 - 1 + 1)) + 1);
  const [say2, setSay2] = useState(Math.floor(Math.random() * (say1 - 1 + 1)) + 1);
  const [selectedOperator, setSelectedOperator] = useState(["+" , "-"][Math.floor(Math.random() * 2)]);
  const [userAnswer, setUserAnswer] = useState('');
  const [isCorrect, setIsCorrect] = useState(null);
  const [rightAnswers, setRightAnswers] = useState(0);
  const [wrongAnswers, setWrongAnswers] = useState(0);
  
  // İşlemi hesaplayan fonksiyon
  const handleIslem = (say1, say2, operator) => {
    if (operator === "+") {
      return `${say1} + ${say2}`;
    } else if (operator === "-") {
      return `${say1} - ${say2}`;
    }
  };

  // Yeni bir soru oluşturma fonksiyonu
  const generateNewQuestion = () => {
    const newSay1 = Math.floor(Math.random() * (10 - 1 + 1)) + 1;
    const newSay2 = Math.floor(Math.random() * (newSay1 - 1 + 1)) + 1;
    const newOperator = ["+" , "-"][Math.floor(Math.random() * 2)];

    setSay1(newSay1);
    setSay2(newSay2);
    setSelectedOperator(newOperator);
  };

  // Sonucu kontrol eden fonksiyon
  const handleCheck = () => {
    let correctAnswer;
    if (selectedOperator === "+") {
      correctAnswer = say1 + say2;
    } else if (selectedOperator === "-") {
      correctAnswer = say1 - say2;
    }
    const isAnswerCorrect = Number(userAnswer) === correctAnswer;
    setIsCorrect(isAnswerCorrect);
    if (isAnswerCorrect) {
      toast.success("Doğru.");
      setUserAnswer('');
      setRightAnswers(rightAnswers + 1);
      generateNewQuestion();
    } else {
      toast.error("Yanlış.");
      setUserAnswer('');
      setWrongAnswers(wrongAnswers + 1);
    }
  };

  const handleNewGame = () => {
    toast.success("Doğru Sayınız: " + rightAnswers + "\nYanlış Sayınız: " + wrongAnswers + "\n Oyun Yeniden Başlatılıyor");
    generateNewQuestion();
  }


  // Stil nesneleri
  const containerStyle = {
    display: 'flex',
    justifyContent: 'center', // Yatayda ortalama
    alignItems: 'center',     // Dikeyde ortalama
    height: '100vh',           // Tam ekran yüksekliği
    textAlign: 'center', 
    position: 'fixed',
    top: '0',
    left: '0',
    right: '0',
    bottom: '0',
    backgroundColor: '#f0f0f0', // Arka plan rengini ayarladık
  };

  const inputStyle = {
    width: '80%',
    padding: '10px',
    border: '1px solid #ccc',
    marginBottom: '10px',
  };

  const contentStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    border: '1px solid #ccc',
    padding: '20px',
    borderRadius: '5px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    backgroundColor: '#fff',
  };

  return (
    <div style={containerStyle}>
      <div style={contentStyle}>
        <div>
          <h3>Sorunuz</h3>
          <h1 className='font-bold text-2xl mb-4'>
            {handleIslem(say1, say2, selectedOperator)}
          </h1>
        </div>
        <input
          type="number"
          placeholder="Sonucu Girin"
          value={userAnswer}
          onChange={(e) => setUserAnswer(e.target.value)}
          style={inputStyle}
        />
        <button onClick={handleCheck} className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline '>Kontrol Et</button>
        <button onClick={handleNewGame} className='bg-green-500 hover:bg-green-700 text-white font-bold py-4 px-4 rounded focus:outline-none focus:shadow-outline gap-2 gap-y-4'>Oyunu Sıfırla</button>
        <h4>Doğru Sayısı: {rightAnswers}</h4>
        <h4>Yanlış Sayısı: {wrongAnswers}</h4>
      </div>
    </div>
  );
}

export default App;