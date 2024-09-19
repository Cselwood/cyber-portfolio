import React, { useState, useEffect } from "react";
import "../styles/Continule.css";

// Starting Words List (randomized at the start)
const startingWordsList = [
  "DIAMOND", "SUPPORT", "CAPITAL", "NETWORK", "WEATHER", "HOLIDAY",
  "PROGRAM", "FREEDOM", "LIBERTY", "TRIUMPH", "HISTORY", "COMPASS",
  "PROTECT", "BALANCE", "JOURNEY", "MYSTERY", "FANTASY", "SUNRISE",
  "VICTORY", "FORTUNE", "MESSAGE", "KITCHEN", "BALLOON", "GALLERY",
  "DANGER", "ANIMAL", "WELCOME", "SUCCESS", "MISSION", "ADVISOR"
];

// Clue Words Set 1
const clueWordsSet1 = ["TREE", "HOUSE", "GARDEN", "LIBRARY", "ELEPHANT"];
const hintsSet1 = [
  "Found in forests",                      // TREE (4 letters)
  "A place where people live",             // HOUSE (5 letters)
  "An area where plants are cultivated",   // GARDEN (6 letters)
  "A place to borrow books",               // LIBRARY (7 letters)
  "The largest land animal"                // ELEPHANT (8 letters)
];

// Clue Words Set 2
const clueWordsSet2 = ["MOON", "LIGHT", "PLANET", "NEPTUNE", "ASTEROID"];
const hintsSet2 = [
  "Earth's natural satellite",        // MOON (4 letters)
  "Opposite of dark",                 // LIGHT (5 letters)
  "A celestial body orbiting a star", // PLANET (6 letters)
  "The eighth planet from the sun",   // NEPTUNE (7 letters)
  "A small rocky body orbiting the sun" // ASTEROID (8 letters)
];

// Clue Words Set 3
const clueWordsSet3 = ["FISH", "APPLE", "ORANGE", "PENGUIN", "KANGAROO"];
const hintsSet3 = [
  "An aquatic animal",                   // FISH (4 letters)
  "A common fruit",                      // APPLE (5 letters)
  "A citrus fruit rich in vitamin C",    // ORANGE (6 letters)
  "A flightless bird in Antarctica",     // PENGUIN (7 letters)
  "An Australian marsupial that hops"    // KANGAROO (8 letters)
];

// Clue Words Set 4
const clueWordsSet4 = ["HAND", "HEART", "BUTTER", "CHEESE", "CUCUMBER"];
const hintsSet4 = [
  "At the end of your arm",             // HAND (4 letters)
  "Organ that pumps blood",             // HEART (5 letters)
  "Spread made from churned cream",     // BUTTER (6 letters)
  "Dairy product made from milk",       // CHEESE (6 letters)
  "A long green vegetable"              // CUCUMBER (8 letters)
];

// Clue Words Set 5
const clueWordsSet5 = ["SHIP", "TRAIN", "SUBWAY", "BICYCLE", "AIRPLANE"];
const hintsSet5 = [
  "A large vessel for water travel",       // SHIP (4 letters)
  "Runs on tracks and transports people",  // TRAIN (5 letters)
  "Underground urban rail system",         // SUBWAY (6 letters)
  "Two-wheeled mode of transport",         // BICYCLE (7 letters)
  "A vehicle that flies in the sky"        // AIRPLANE (8 letters)
];

// Clue Words Set 6
const clueWordsSet6 = ["DOGS", "HORSE", "DONKEY", "LEOPARD", "ELEPHANT"];
const hintsSet6 = [
  "Loyal pets that bark",                   // DOGS (4 letters)
  "Animal used for riding",                 // HORSE (5 letters)
  "A beast of burden with long ears",       // DONKEY (6 letters)
  "Big cat known for its spotted coat",     // LEOPARD (7 letters)
  "Has a trunk and large ears"              // ELEPHANT (8 letters)
];

// Clue Words Set 7
const clueWordsSet7 = ["RAIN", "CLOUD", "THUNDER", "TORNADO", "CYCLONE"];
const hintsSet7 = [
  "Water that falls from clouds",          // RAIN (4 letters)
  "Visible mass of water vapor",           // CLOUD (5 letters)
  "Sound following lightning",             // THUNDER (7 letters)
  "A violent rotating column of air",      // TORNADO (7 letters)
  "A large-scale air mass that rotates"    // CYCLONE (7 letters)
];

// Clue Words Set 8
const clueWordsSet8 = ["BOOK", "PENCIL", "NOTEPAD", "COMPUTE", "SOFTWARE"];
const hintsSet8 = [
  "Contains pages to read",             // BOOK (4 letters)
  "Tool for writing or drawing",        // PENCIL (6 letters)
  "Used for writing notes",             // NOTEPAD (7 letters)
  "To calculate or reckon",             // COMPUTE (7 letters)
  "Programs used by a computer"         // SOFTWARE (8 letters)
];

// Clue Words Set 9
const clueWordsSet9 = ["MARS", "VENUS", "SATURN", "JUPITER", "NEPTUNE"];
const hintsSet9 = [
  "Known as the Red Planet",                // MARS (4 letters)
  "Second planet from the sun",             // VENUS (5 letters)
  "Planet with prominent rings",            // SATURN (6 letters)
  "Largest planet in our solar system",     // JUPITER (7 letters)
  "The eighth planet from the sun"          // NEPTUNE (7 letters)
];

// Clue Words Set 10
const clueWordsSet10 = ["EGGS", "BREAD", "BUTTER", "AVOCADO", "CUCUMBER"];
const hintsSet10 = [
  "Often eaten for breakfast",           // EGGS (4 letters)
  "Staple food made from flour and water", // BREAD (5 letters)
  "Spread made from churned cream",      // BUTTER (6 letters)
  "A green fruit rich in healthy fats",  // AVOCADO (7 letters)
  "A long green vegetable"               // CUCUMBER (8 letters)
];

const clueWordsSets = {
  1: clueWordsSet1,
  2: clueWordsSet2,
  3: clueWordsSet3,
  4: clueWordsSet4,
  5: clueWordsSet5,
  6: clueWordsSet6,
  7: clueWordsSet7,
  8: clueWordsSet8,
  9: clueWordsSet9,
  10: clueWordsSet10,
};

const hintsSets = {
  1: hintsSet1,
  2: hintsSet2,
  3: hintsSet3,
  4: hintsSet4,
  5: hintsSet5,
  6: hintsSet6,
  7: hintsSet7,
  8: hintsSet8,
  9: hintsSet9,
  10: hintsSet10,
};

const Continule = () => {
  // Function to generate a random number and select clue words and hints
  const generateRandomClues = () => {
    const randomNumber = Math.floor(Math.random() * 10) + 1;
    return {
      selectedClueWords: clueWordsSets[randomNumber],
      selectedHints: hintsSets[randomNumber],
      randomNumber: randomNumber,
    };
  };

  // Generate initial random clues
  const initialClues = generateRandomClues();

  // State variables
  const [currentWord, setCurrentWord] = useState(
    startingWordsList[Math.floor(Math.random() * startingWordsList.length)]
  );
  const [currentInput, setCurrentInput] = useState("");
  const [currentLetterIndex, setCurrentLetterIndex] = useState(0);
  const [usedWords, setUsedWords] = useState([]);
  const [gameOver, setGameOver] = useState(false);
  const [timeLeft, setTimeLeft] = useState(8);
  const [progress, setProgress] = useState([]); // 🟩🟥🟨 progress
  const [lettersResolvedCount, setLettersResolvedCount] = useState(0); // Count of letters resolved
  const [timedOut, setTimedOut] = useState(false);
  const [foundClues, setFoundClues] = useState([]); // Clues that have been found

  // New state variables for selected clue words and hints
  const [selectedClueWords, setSelectedClueWords] = useState(
    initialClues.selectedClueWords
  );
  const [selectedHints, setSelectedHints] = useState(initialClues.selectedHints);

  // Timer functionality
  useEffect(() => {
    if (timeLeft > 0 && !gameOver) {
      const timer = setTimeout(() => {
        setTimeLeft(timeLeft - 1);
      }, 1000);
      return () => clearTimeout(timer);
    } else if (timeLeft === 0 && !timedOut) {
      // Timeout, add red block 🟥 and stop further updates
      setProgress((prevProgress) => [...prevProgress, "🟥"]);
      setTimedOut(true); // Prevent further timeouts
      setGameOver(true);
    }
  }, [timeLeft, gameOver, timedOut]);

  // Handle input changes
  const handleChange = (e) => {
    const input = e.target.value.toUpperCase();
    if (input[0]?.toUpperCase() === currentWord[currentLetterIndex].toUpperCase()) {
      setCurrentInput(input);
    }
  };

  // Handle pressing the ENTER key to submit
  useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.key === "Enter" && currentInput) {
        handleSubmit();
      }
    };
    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, [currentInput]);

  // Submit a word to resolve the current letter
  const handleSubmit = () => {
    const currentLetter = currentWord[currentLetterIndex].toUpperCase();
    const inputUpper = currentInput.toUpperCase();

    if (
      usedWords.includes(inputUpper) &&
      !selectedClueWords.map((word) => word.toUpperCase()).includes(inputUpper)
    ) {
      // Repeated word (excluding clue words)
      setProgress((prevProgress) => [...prevProgress, "🟨"]);
      setGameOver(true);
      return;
    }

    if (inputUpper[0] === currentLetter) {
      // Correct word for the current letter
      setUsedWords([...usedWords, inputUpper]);

      // Increment letters resolved count
      setLettersResolvedCount(lettersResolvedCount + 1);

      // Check if the input matches any of the clue words that haven't been found yet
      if (
        selectedClueWords.map((word) => word.toUpperCase()).includes(inputUpper) &&
        !foundClues.map((word) => word.toUpperCase()).includes(inputUpper)
      ) {
        // Clue word found
        setFoundClues((prevFoundClues) => [...prevFoundClues, inputUpper]);
      }

      // Proceed with resolving the current letter
      if (currentLetterIndex === currentWord.length - 1) {
        // Entire word resolved
        setProgress((prevProgress) => [...prevProgress, "🟩"]);

        // Next word is the last word entered
        setCurrentWord(inputUpper);
        setCurrentLetterIndex(0); // Reset letter index
      } else {
        // Move to the next letter
        setCurrentLetterIndex(currentLetterIndex + 1);
      }

      setCurrentInput(""); // Reset input
      setTimeLeft(8); // Reset timer
    }
  };

  const handleStart = () => {
    // Generate a new random number and select new clue words and hints
    const newClues = generateRandomClues();

    // Reset state
    setGameOver(false);
    setTimeLeft(8);
    setCurrentLetterIndex(0);
    setUsedWords([]);
    setCurrentWord(
      startingWordsList[Math.floor(Math.random() * startingWordsList.length)]
    );
    setProgress([]);
    setLettersResolvedCount(0);
    setTimedOut(false);
    setFoundClues([]);
    setCurrentInput("");

    // Update selected clue words and hints
    setSelectedClueWords(newClues.selectedClueWords);
    setSelectedHints(newClues.selectedHints);
  };

  // Render the current word with styling
  const renderCurrentWord = () => {
    return currentWord.split("").map((letter, index) => {
      if (index < currentLetterIndex) {
        return (
          <span key={index} className="resolved-letter">
            {letter}
          </span>
        );
      } else if (index === currentLetterIndex) {
        return (
          <span key={index} className="current-letter">
            {letter}
          </span>
        );
      } else {
        return (
          <span key={index} className="unresolved-letter">
            {letter}
          </span>
        );
      }
    });
  };

  // Function to render all hints and their statuses
  const renderHints = () => {
    return (
      <div className="hints">
        {selectedHints.map((hint, index) => {
          const clueWord = selectedClueWords[index];
          const isFound = foundClues
            .map((word) => word.toUpperCase())
            .includes(clueWord.toUpperCase());
          return (
            <p
              key={index}
              className={`hint ${isFound ? "resolved" : ""}`}
            >
              {hint}
            </p>
          );
        })}
      </div>
    );
  };

  return (
    <div className="cont-container">
      <h1 className="game-title">CONTINULE</h1>

      {!gameOver ? (
        <>
          <div className="word-display">{renderCurrentWord()}</div>
          {/* Display all hints */}
          {renderHints()}
          <p>Time left: {timeLeft} seconds</p>
          <p>Letters Resolved: {lettersResolvedCount}</p>
          <input
            type="text"
            value={currentInput}
            onChange={handleChange}
            placeholder={`Type a word starting with ${currentWord[currentLetterIndex]}`}
            autoFocus
          />
        </>
      ) : (
        <div>
          <h2>
            {progress.join("")} - {lettersResolvedCount} Letters Resolved
          </h2>
          <button onClick={handleStart}>Start Again</button>
        </div>
      )}
    </div>
  );
};

export default Continule;