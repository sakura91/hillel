$(function () {
    var obj = {
        "John McLean": {
            "age": 34,
            "experience": 12
        },
        "Adam Luis": {
            "age": 45,
            "experience": 5
        },
        "Oleg Petrenko": {
            "age": 25,
            "experience": 7
        },
        "Natalia Ostroverh": {
            "age": 38,
            "experience": 10
        },
        "Olya Ostroverh": {
            "age": 36,
            "experience": 10
        },
        "Olya Tinkoff": {
            "age": 55,
            "experience": 21
        },
        "Anton Antonov": {
            "age": 25,
            "experience": 22
        },
        "Oleg Tynov": {
            "age": 18,
            "experience": 1
        }
    };
    var arrObjects = [];
//part 1 - 2;
    $.each(obj, function (key, value) {
        value.name = key;
        arrObjects.push(value);
        obj[key].diff = value.age - value.experience;
    });
    console.log(arrObjects);


//part 3;
    $(function () {
        function sortExp(value) {
            return value.experience >= 6;
        }

        let filtered = arrObjects.filter(sortExp);
        console.log(filtered);
    });


// part 4;
    $(function () {
        function arr_A(value) {
            return value.age < 30;
        }

        let filteredA = arrObjects.filter(arr_A);
        console.log(filteredA);

        function arr_B(value) {
            return value.age > 30 && value.age < 40;
        }

        let filteredB = arrObjects.filter(arr_B);
        console.log(filteredB);

        function arr_C(value) {
            return value.age > 40;
        }

        let filteredC = arrObjects.filter(arr_C);
        console.log(filteredC);
    });
});
