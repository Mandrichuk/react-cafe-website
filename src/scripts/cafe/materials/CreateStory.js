import React from "react";

export default function CreateStory(props) {
  const {title, firstSection, secondSection} = props;

  const story = (
    <div className="about-container">
      <div className="mission-container">Наша історія</div>

        <div className="mission-article-container">
          <div className="left-section-container">
            Ласкаво просимо до нашого ресторану "Drink&Food" – місця, де    справжній гурман завжди знайде щось за смаком!

            Наш заклад – це ідеальне поєднання кафе, де можна насолодитися    ароматним кавою і свіжозавареними еспресо, і пивного бару з   величезним   вибором місцевих та імпортних сортів пива. Ми гордо  представляємо   найкращі сорти крафтового пива та традиційних видів,   щоб задовольнити   смак кожного нашого гостя.
          </div>
          <div className="right-section-container">
            Ми пропонуємо затишну атмосферу та вишуканий сервіс, щоб ви могли насолодитися  часом, проведеним в "Drink&Food". Чи це сніданок з ароматною кавою, чи вечірка   з друзями за пивом та бургерами – ми завжди готові зустріти вас з посмішкою і   догодити вашим смакам.
          </div>
        </div>
    </div>

  );

  return story;
}