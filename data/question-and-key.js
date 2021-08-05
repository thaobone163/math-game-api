const data = [
    {
        "question": "3 + 11",
        "A": "13",
        "B": "12",
        "C": "14",
        "D": "15",
        "key": "14"
    },
    {
        "question": "16 + 24",
        "A": "40",
        "B": "30",
        "C": "50",
        "D": "60",
        "key": "40"
    },
    {
        "question": "11 - 3",
        "A": "14",
        "B": "10",
        "C": "8",
        "D": "9",
        "key": "8"
    },
    {
        "question": "24 - 16",
        "A": "8",
        "B": "18",
        "C": "9",
        "D": "10",
        "key": "8"
    },
    {
        "question": "3 x 11",
        "A": "23",
        "B": "32",
        "C": "31",
        "D": "33",
        "key": "33"
    },
    {
        "question": "3 x 12",
        "A": "12",
        "B": "36",
        "C": "63",
        "D": "22",
        "key": "36"
    },
    {
        "question": "24 : 12",
        "A": "2",
        "B": "3",
        "C": "4",
        "D": "5",
        "key": "2"
    },
    {
        "question": "18 : 3",
        "A": "9",
        "B": "8",
        "C": "7",
        "D": "6",
        "key": "6"
    },
    {
        "question": "2 x 8 + 3 x 8",
        "A": "40",
        "B": "30",
        "C": "50",
        "D": "60",
        "key": "40"
    },
    {
        "question": "3 x 8 - 2 x 8",
        "A": "8",
        "B": "18",
        "C": "9",
        "D": "10",
        "key": "8"
    }
];

const Question = function () {
};

Question.sendQuestion = (number, result) => {
    console.log("question ", number);
    const dataCurrent = {
        "question": data[number].question,
        "A": data[number].A,
        "B": data[number].B,
        "C": data[number].C,
        "D": data[number].D
    };
    // result(data[number]);
    result(dataCurrent);
}

Question.checkKey = (number, choice, result) => {
    let check = "wrong";
    if(choice === data[number].key) {
        check = "correct";
    }
    console.log("question ", number, " is", check);
    result(check);
}

module.exports = Question;