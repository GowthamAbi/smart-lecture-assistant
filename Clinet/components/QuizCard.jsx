function QuizCard({

  question,

  options,

  selected,

  onSelect,

  index

}) {

  return (

    <div className="bg-white p-6 rounded-xl shadow">

      <h2 className="font-semibold text-lg mb-4">

        Q{index + 1}. {question}

      </h2>

      <div className="space-y-3">

        {options.map((option, i) => (

          <label

            key={i}

            className={`

            flex

            items-center

            p-3

            border

            rounded-lg

            cursor-pointer

            hover:bg-gray-50

            `}

          >

            <input

              type="radio"

              name={`question-${index}`}

              checked={selected === option}

              onChange={() => onSelect(option)}

              className="mr-3"

            />

            {option}

          </label>

        ))}

      </div>

    </div>

  );

}

export default QuizCard;