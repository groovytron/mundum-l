import React from "react";
import WordCard from "../components/WordCard";

const Home = () => {
  return (
    <div>
      <WordCard
        word="Bonjour"
        category="Word of the Day"
        wordType="expression"
        wordDefinition="An expression used to say hi during the day"
      />
      {/*<WordCard word="Au revoir" category="Extra challenge" wordType="expression" wordDefinition="An expression used to say good bye" />*/}
    </div>
  );
};

export default Home;
